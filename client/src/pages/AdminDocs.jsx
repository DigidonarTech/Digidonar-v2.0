import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDocs = () => {
  const [file, setFile] = useState(null);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDocs = async () => {
    try {
      const res = await axios.get('https://digidonar-api.onrender.com/api/documents/all');
      // Check taaki error na aaye agar data list na ho
      setDocs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => { fetchDocs(); }, []);

  // --- YE HAI WO JADU JO PDF FIX KAREGA ---
  const handleView = (url) => {
    if (!url) return;
    // Cloudinary 'raw' files ko browser viewer block karta hai, 
    // isliye hum use 'image' delivery route se force karenge.
    const viewableUrl = url.replace('/raw/upload/', '/image/upload/');
    window.open(viewableUrl, '_blank');
  };

  const handleUpload = async () => {
    if (!file) return alert("File select karo");
    const formData = new FormData();
    formData.append('pdf', file);
    // Title bhi bhej dete hain taaki 'Untitled' na dikhe
    formData.append('title', file.name);

    setLoading(true);
    try {
      await axios.post('https://digidonar-api.onrender.com/api/documents/upload', formData);
      alert("Uploaded successfully!");
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
      <h1 className="text-2xl font-bold mb-6">Manage Documents</h1>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
          accept=".pdf" 
          className="block mb-4 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold disabled:bg-slate-400"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload New PDF"}
        </button>
      </div>

      {/* List Section */}
      <div className="grid gap-4">
        {docs.length > 0 ? (
          docs.map(doc => (
            <div key={doc._id} className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center shadow-sm">
              <span className="font-medium text-slate-700">{doc.title || "Untitled File"}</span>
              <div className="flex gap-3">
                {/* View PDF Button with handleView */}
                <button
                  onClick={() => handleView(doc.pdfUrl)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  View PDF
                </button>
                <button 
                  onClick={() => handleDelete(doc._id)} 
                  className="text-red-500 font-bold text-sm px-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-500 text-center py-10">No documents found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDocs;