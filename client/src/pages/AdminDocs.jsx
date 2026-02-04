import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDocs = () => {
  const [file, setFile] = useState(null);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDocs = async () => {
    const res = await axios.get('https://digidonar-api.onrender.com/api/documents/all');
    setDocs(res.data);
  };

  useEffect(() => { fetchDocs(); }, []);

  const handleUpload = async () => {
    if (!file) return alert("File select karo");
    const formData = new FormData();
    formData.append('pdf', file);

    setLoading(true);
    try {
      await axios.post('https://digidonar-api.onrender.com/api/documents/upload', formData);
      alert("Uploaded!");
      setFile(null);
      fetchDocs();
    } catch (err) { alert("Upload error!"); }
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
      <h1 className="text-2xl font-bold mb-6">Manage Documents</h1>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} accept=".pdf" />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg ml-4 font-bold"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload New PDF"}
        </button>
      </div>

      {/* List Section */}
      <div className="grid gap-4">
        {docs.map(doc => (
          <div key={doc._id} className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center">
            <span className="font-medium text-slate-700">{doc.title}</span>
            <div className="flex gap-3">
              <a
                href={doc.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-xl"
              >
                View PDF
              </a>
              <button onClick={() => handleDelete(doc._id)} className="text-red-500 font-bold">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDocs;