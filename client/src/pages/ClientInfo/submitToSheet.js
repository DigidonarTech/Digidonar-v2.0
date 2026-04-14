// ─── submitToSheet.js ─────────────────────────────────────────────────────────
// Google Sheets webhook utility
// .env mein add karo: VITE_GOOGLE_SHEET_WEBHOOK=your_webhook_url

const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK;

/**
 * formData object ko Google Sheet mein bhejta hai
 * @param {string} service  - 'whatsapp' | 'rcs' | 'dlt'
 * @param {object} formData - saare fields ka data
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function submitToGoogleSheet(service, formData) {
  if (!WEBHOOK_URL) {
    console.error('[submitToSheet] VITE_GOOGLE_SHEET_WEBHOOK .env mein nahi mila!');
    return { success: false, error: 'Webhook URL missing in .env' };
  }

  // File fields ko skip karo — Google Sheet mein file nahi jaayegi
  const filteredData = {};
  for (const [key, value] of Object.entries(formData)) {
    if (value instanceof File) {
      filteredData[key] = `[File: ${value.name}]`;
    } else {
      filteredData[key] = value ?? '';
    }
  }

  const payload = {
    service,                                              // service type
    submittedAt: new Date().toLocaleString('en-IN'),      // IST timestamp
    ...filteredData,
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      // Google Apps Script ke liye text/plain — CORS issue avoid hota hai
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return { success: true };
  } catch (err) {
    console.error('[submitToSheet] Error:', err.message);
    return { success: false, error: err.message };
  }
}