import React, { useEffect, useState } from 'react';
import { Users, Phone, Mail, CheckCircle, Loader2, RefreshCw, LogOut } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Data Fetch karne ka function
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://digidonar-api.onrender.com/api/leads');
      setLeads(response.data);
    } catch (err) {
      console.error("Leads fetch nahi ho payi:", err);
    } finally {
      setLoading(false);
    }
  };

  // Auth check aur browser back handling
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login', { replace: true });
    } else {
      fetchLeads();
    }

    // Security for browser back button
    window.onpopstate = () => {
      if (!localStorage.getItem('adminToken')) {
        navigate('/admin-login', { replace: true });
      }
    };
  }, [navigate]);

  const exportToCSV = () => {
    if (leads.length === 0) {
      alert("Bhai, export karne ke liye koi lead hi nahi hai!");
      return;
    }
    const headers = ["Name,Email,Phone,Service,Status,Date\n"];
    const rows = leads.map(lead => {
      return `${lead.name},${lead.email},${lead.phone},${lead.service || 'N/A'},${lead.status},${new Date(lead.createdAt).toLocaleDateString()}`;
    }).join("\n");

    const csvContent = headers + rows;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `DigiDonar_Leads_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteLead = async (id) => {
    if (window.confirm("Bhai, kya aap sach mein delete karna chahte ho?")) {
      try {
        await axios.delete(`https://digidonar-api.onrender.com/api/leads/${id}`);
        setLeads(leads.filter(lead => lead._id !== id));
      } catch (err) {
        alert("Delete fail ho gaya!");
      }
    }
  };

  const updateStatus = async (id) => {
    try {
      const response = await axios.put(`https://digidonar-api.onrender.com/api/leads/${id}`, {
        status: 'Contacted'
      });
      if (response.status === 200) {
        setLeads(leads.map(lead =>
          lead._id === id ? { ...lead, status: 'Contacted' } : lead
        ));
      }
    } catch (err) {
      alert("Status update fail!");
    }
  };

  const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('pdf', file);
  formData.append('title', 'Project Docs');

  try {
    const response = await axios.post('https://digidonar-api.onrender.com/api/upload-pdf', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    alert("PDF Uploaded Successfully!");
  } catch (err) {
    console.error(err);
  }
};

// Input field in JSX
<input type="file" onChange={handleFileUpload} accept="application/pdf" />

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 italic leading-none">Admin Dashboard</h1>
            <p className="text-slate-500 font-medium mt-2 tracking-tight">
              Manage your <span className="text-[#0D66BA] font-bold">{leads.length}</span> incoming leads
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button
              onClick={fetchLeads}
              className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm group"
              title="Refresh Data"
            >
              <RefreshCw size={20} className={`${loading ? 'animate-spin' : ''} text-slate-600 group-hover:text-[#0D66BA]`} />
            </button>

            <button
              onClick={exportToCSV}
              className="flex-1 lg:flex-none bg-[#0D66BA] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
            >
              Export Leads (CSV)
            </button>

            <button
              onClick={() => {
                if(window.confirm("Bhai, Log out karun?")) {
                    localStorage.removeItem('adminToken');
                    navigate('/admin-login', { replace: true });
                }
              }}
              className="flex-1 lg:flex-none bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 border border-red-100"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <Users className="text-[#0D66BA] mb-2" size={32} />
            <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Total Leads</p>
            <h2 className="text-3xl font-black text-slate-900">{leads.length}</h2>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
            <CheckCircle className="text-emerald-500 mb-2" size={32} />
            <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Converted</p>
            <h2 className="text-3xl font-black text-slate-900">
              {leads.filter(l => l.status === 'Contacted').length}
            </h2>
          </div>
        </div>

        {/* Leads Table Container */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-[400px] text-slate-400 gap-3">
              <Loader2 className="animate-spin" size={40} />
              <p className="font-bold tracking-widest uppercase text-xs">Syncing Database...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px] text-slate-400">
              <p className="text-xl font-bold text-slate-900">No leads found yet!</p>
              <p className="font-medium">Form submissions will appear here automatically.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-6 text-xs font-black uppercase tracking-widest">Lead Info</th>
                    <th className="p-6 text-xs font-black uppercase tracking-widest">Service</th>
                    <th className="p-6 text-xs font-black uppercase tracking-widest">Status</th>
                    <th className="p-6 text-xs font-black uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="p-6">
                        <div className="font-black text-slate-900 text-lg">{lead.name}</div>
                        <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mt-1 font-medium">
                          <span className="flex items-center gap-1.5"><Mail size={14} /> {lead.email}</span>
                          <span className="flex items-center gap-1.5"><Phone size={14} /> {lead.phone}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="bg-blue-50 text-[#0D66BA] px-4 py-1.5 rounded-full text-[10px] font-black uppercase">
                          {lead.service || "Standard"}
                        </span>
                      </td>
                      <td className="p-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${
                          lead.status === 'New' ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-6 text-right flex gap-2 justify-end">
                        <button
                          onClick={() => deleteLead(lead._id)}
                          className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-600 hover:text-white transition-all"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => updateStatus(lead._id)}
                          disabled={lead.status === 'Contacted'}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            lead.status === 'Contacted'
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white shadow-sm'
                          }`}
                        >
                          {lead.status === 'Contacted' ? 'Contacted' : 'Mark Done'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;