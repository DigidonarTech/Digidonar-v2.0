const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK;
const API_KEY     = import.meta.env.VITE_API_KEY;

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload  = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
  });

async function postToSheet(payload) {
  const res  = await fetch(WEBHOOK_URL, {
    method:   'POST',
    headers:  { 'Content-Type': 'text/plain' },
    body:     JSON.stringify(payload),
    redirect: 'follow',
  });
  const text = await res.text();
  try   { return JSON.parse(text); }
  catch { throw new Error('Non-JSON response: ' + text.slice(0, 300)); }
}

export async function submitToGoogleSheet(service, formData) {
  if (!WEBHOOK_URL || !API_KEY) {
    return { success: false, error: 'Config missing' };
  }

  // ── Separate text vs file fields ─────────────────────────────────────────
  const textData   = {};
  const fileFields = [];

  for (const [key, value] of Object.entries(formData)) {
    if (value instanceof File && value.size > 0) {
      fileFields.push({ key, file: value });
    } else if (!(value instanceof File)) {
      textData[key] = value ?? '';
    }
  }

  // ── STEP 1: Submit text row ──────────────────────────────────────────────
  let submissionId, rowIndex;
  try {
    const json = await postToSheet({
      apiKey: API_KEY,
      action: 'submitText',
      service,
      ...textData,
    });

    if (json.status !== 'success') throw new Error(json.message || 'Unknown error');

    submissionId = json.submissionId;
    rowIndex     = json.rowIndex;     // ✅ Apps Script returns exact row number

    console.log('[Step 1] OK — submissionId:', submissionId, 'rowIndex:', rowIndex);
  } catch (err) {
    console.error('[Step 1] FAILED:', err.message);
    return { success: false, error: 'Text submit failed: ' + err.message };
  }

  // ── STEP 2: Upload each file, passing rowIndex directly ──────────────────
  for (const { key, file } of fileFields) {
    try {
      console.log('[Step 2] Uploading', key, '—', file.name, '(', file.size, 'bytes)');
      const base64 = await toBase64(file);

      const json = await postToSheet({
        apiKey: API_KEY,
        action: 'uploadFile',
        service,
        submissionId,
        rowIndex,           // ✅ pass rowIndex — no search needed in Apps Script
        fieldName: key,
        fileName:  file.name,
        mimeType:  file.type || 'application/octet-stream',
        base64,
      });

      if (json.status === 'success') {
        console.log('[Step 2] ✅', key, '→', json.fileUrl);
      } else {
        console.warn('[Step 2] ❌', key, '—', json.message);
      }
    } catch (err) {
      console.error('[Step 2] Exception for', key, ':', err.message);
    }
  }

  return { success: true };
}