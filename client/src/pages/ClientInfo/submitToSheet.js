
const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK;
const API_KEY = import.meta.env.VITE_API_KEY;

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]); // Strip data: prefix
    reader.onerror = reject;
  });

export async function submitToGoogleSheet(service, formData) {
  if (!WEBHOOK_URL || !API_KEY) return { success: false, error: 'Config missing' };

  // ── Separate text fields from file fields ──
  const textData = {};
  const fileEntries = [];

  for (const [key, value] of Object.entries(formData)) {
    if (value instanceof File && value.size > 0) {
      fileEntries.push({ key, file: value });
    } else if (!(value instanceof File)) {
      textData[key] = value ?? '';
    }
  }

  // ── Convert all files to base64 BEFORE sending ──
  const filesPayload = [];
  for (const { key, file } of fileEntries) {
    try {
      const base64 = await toBase64(file);
      filesPayload.push({
        fieldName: key,
        fileName: file.name,
        mimeType: file.type || 'application/octet-stream',
        base64,
      });
    } catch (err) {
      console.error(`Failed to read file ${key}:`, err.message);
    }
  }

  // ── Single POST: text + all files together ──
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        apiKey: API_KEY,
        action: 'submitAll',   // New unified action
        service,
        ...textData,
        files: filesPayload,   // Array of { fieldName, fileName, mimeType, base64 }
      }),
    });

    const json = await res.json();
    if (json.status !== 'success') throw new Error(json.message || 'Unknown error');
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}