import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDocs = () => {
  const [file, setFile] = useState(null);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDocs = async () => {
    try {
      const res = await axios.get('https://digidonar-api.onrender.com/api/documents/all');
      setDocs(Array.isArray(res.data) ? res.data : []);
    } catch (err) { console.error("Fetch error:", err); }
  };

  useEffect(() => { fetchDocs(); }, []);

  // --- PDF Fix Logic ---
  const handleView = (url) => {
    if (!url) return;

    // 1. Agar URL 'raw' hai, toh use 'image' mein convert karo (Best for Browser View)
    let viewableUrl = url.replace('/raw/upload/', '/image/upload/');

    // 2. Browser ko force karo ki wo ise "Inline" (viewer mein) khole na ki download kare
    if (viewableUrl.includes('/upload/')) {
      viewableUrl = viewableUrl.replace('/upload/', '/upload/fl_attachment:false/');
    }

    window.open(viewableUrl, '_blank');
  };

  const handleUpload = async () => {
    if (!file) return alert("File select karo");
    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('title', file.name);

    setLoading(true);
    try {
      await axios.post('https://digidonar-api.onrender.com/api/documents/upload', formData);
      alert("Uploaded!");
      setFile(null);
      fetchDocs();
    } catch (err) {
      console.error(err);
      alert("Upload error! Server logs check karein.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete kar dein?")) {
      try {
        await axios.delete(`https://digidonar-api.onrender.com/api/documents/delete/${id}`);
        fetchDocs();
      } catch (err) { alert("Delete error!"); }
    }
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Manage Documents</h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} accept=".pdf" className="mb-4 block w-full text-sm text-slate-500" />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold disabled:bg-slate-400"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload New PDF"}
        </button>
      </div>

      <div className="grid gap-4">
        {docs.map(doc => (
          <div key={doc._id} className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center">
            <span className="font-medium text-slate-700">{doc.title || "Untitled"}</span>
            <div className="flex gap-3">
              <button
                onClick={() => handleView(doc.pdfUrl)}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold"
              >
                View PDF
              </button>
              <button onClick={() => handleDelete(doc._id)} className="text-red-500 font-bold px-2">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDocs;