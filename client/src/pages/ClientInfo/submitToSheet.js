import { API_URL } from '../../api';

const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK;
const API_KEY = import.meta.env.VITE_API_KEY;

async function postToSheet(payload) {
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
    redirect: 'follow',
  });

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error('Non-JSON response: ' + text.slice(0, 300));
  }
}

async function uploadToCloudinary(service, fieldName, file) {
  const body = new FormData();
  body.append('file', file);
  body.append('service', service);
  body.append('fieldName', fieldName);

  const res = await fetch(`${API_URL}/onboarding/upload`, {
    method: 'POST',
    body,
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.secure_url) {
    throw new Error(json.message || 'Cloudinary upload failed');
  }

  return json.secure_url;
}

export async function submitToGoogleSheet(service, formData) {
  if (!WEBHOOK_URL || !API_KEY) {
    return { success: false, error: 'Config missing' };
  }

  const textData = {};
  const fileFields = [];

  for (const [key, value] of Object.entries(formData)) {
    if (Array.isArray(value) && value.every(item => item instanceof File)) {
      const files = value.filter(file => file.size > 0);
      if (files.length > 0) fileFields.push({ key, files });
    } else if (value instanceof File && value.size > 0) {
      fileFields.push({ key, files: [value] });
    } else if (!(value instanceof File) && !Array.isArray(value)) {
      textData[key] = value ?? '';
    }
  }

  let submissionId;
  let rowIndex;

  try {
    const json = await postToSheet({
      apiKey: API_KEY,
      action: 'submitText',
      service,
      ...textData,
    });

    if (json.status !== 'success') throw new Error(json.message || 'Unknown error');

    submissionId = json.submissionId;
    rowIndex = json.rowIndex;
  } catch (err) {
    return { success: false, error: 'Text submit failed: ' + err.message };
  }

  const uploadedFileUrls = {};

  for (const { key, files } of fileFields) {
    try {
      uploadedFileUrls[key] = [];

      for (const file of files) {
        const secureUrl = await uploadToCloudinary(service, key, file);
        uploadedFileUrls[key].push(secureUrl);
      }
    } catch (err) {
      console.error('[Cloudinary upload failed]', key, err.message);
      return {
        success: false,
        error: 'Document upload failed.\nPlease try again.',
        errorType: 'upload',
      };
    }
  }

  for (const [key, urls] of Object.entries(uploadedFileUrls)) {
    try {
      const storedValue = JSON.stringify(urls);
      const json = await postToSheet({
        apiKey: API_KEY,
        action: 'uploadFile',
        service,
        submissionId,
        rowIndex,
        fieldName: key,
        fileUrl: urls[0] || '',
        fileUrls: urls,
        fieldValue: storedValue,
        cloudinaryUrls: storedValue,
      });

      if (json.status !== 'success') throw new Error(json.message || 'Sheet update failed');
    } catch (err) {
      console.error('[Sheet document URL update failed]', key, err.message);
      return {
        success: false,
        error: 'Your documents were uploaded successfully,\nbut form submission could not be completed.\nPlease contact support.',
        errorType: 'sheetUpdate',
      };
    }
  }

  return { success: true, referenceId: submissionId };
}
