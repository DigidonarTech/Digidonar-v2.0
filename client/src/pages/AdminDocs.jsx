import React, { useEffect, useState } from "react";
import api, {API_URL} from "../api";

/**
 * IMPORTANT:
 * servicekey MUST match ServiceDetail.jsx route param
 */
const SERVICES = [
  { key: "bulk-sms", label: "Bulk SMS Solutions" },
  { key: "whatsapp-api", label: "WhatsApp Business API" },
  { key: "voice-ivr", label: "Voice & IVR Services" },
  { key: "otp-service", label: "Secure OTP Service" },
  { key: "sms-gateway", label: "Robust SMS Gateway" },
  {key: "email-marketing", label: "Email Marketing Solutions"},
  {key: "rcs-messaging", label: "RCS Messaging Platform"},
  {key: "smart-api", label: "Smart API Platform"}
];

const AdminDocs = () => {
  const [docs, setDocs] = useState([]);
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(null);

  const fetchDocs = async () => {
    try {
      const res = await api.get("/documents/all");
      setDocs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const handleFileChange = (servicekey, file) => {
    setFiles((prev) => ({ ...prev, [servicekey]: file }));
  };

  const handleUpload = async (servicekey) => {
    if (!files[servicekey]) {
      alert("Please select a PDF first");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", files[servicekey]);
    formData.append("title", servicekey);   // optional
    formData.append("service", servicekey); // 🔥 MOST IMPORTANT

    try {
      setLoading(servicekey);
      await api.post("/documents/upload", formData);
      setFiles((prev) => ({ ...prev, [servicekey]: null }));
      fetchDocs();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed. Check server logs.");
    } finally {
      setLoading(null);
    }
  };

  const getServiceDoc = (servicekey) =>
    docs.find((doc) => doc.servicekey === servicekey);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">
          Service Documents (Admin)
        </h1>
        <p className="text-slate-600 mt-2">
          Upload PDFs mapped directly to service pages.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {SERVICES.map(({ key, label }) => {
          const doc = getServiceDoc(key);
          const viewUrl = doc
            ? `${API_URL.replace(/\/$/, "")}/pdf-proxy?url=${encodeURIComponent(
                doc.pdfUrl
              )}`
            : null;

          return (
            <div
              key={key}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col justify-between"
            >
              {/* Top */}
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  {label}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  service key: <code>{key}</code>
                </p>

                {/* Status */}
                <div className="mt-4">
                  {doc ? (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                      ● Document Uploaded
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                      ● No Document Uploaded
                    </span>
                  )}
                </div>

                {/* Active Doc Info */}
                {doc && (
                  <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3">
                    <p className="text-xs font-semibold text-green-700">
                      Active Document
                    </p>
                    <p className="text-sm text-slate-700 truncate">
                      {doc.publicId || "Uploaded PDF"}
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-6 space-y-4">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) =>
                    handleFileChange(key, e.target.files[0])
                  }
                  className="block w-full text-sm
                    file:mr-4 file:rounded-lg file:border-0
                    file:bg-slate-100 file:px-4 file:py-2
                    file:text-sm file:font-semibold
                    file:text-slate-700 hover:file:bg-slate-200
                    cursor-pointer"
                />

                <div className="flex gap-3">
                  <button
                    onClick={() => handleUpload(key)}
                    disabled={loading === key}
                    className="flex-1 bg-slate-900 text-white py-2 rounded-lg font-semibold hover:bg-slate-800 transition disabled:opacity-60"
                  >
                    {loading === key ? "Uploading..." : "Upload PDF"}
                  </button>

                  {doc && (
                    <a
                      href={viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-500 transition ring-2 ring-blue-200"
                    >
                      View PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDocs;
