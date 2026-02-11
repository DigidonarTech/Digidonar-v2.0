import React, { useState } from "react";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";
import axios from "axios";
import api, { API_URL } from "../api";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(""); // Typing start hote hi error clear
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill all required fields.");
      return;
    }

    setStatus("loading");

    try {
      // Backend Integration
      const payload = {
        ...formData,
        service: "Modal Callback Request" // Identify karne ke liye source
      };

      await axios.post(`${API_URL}/api/leads`, payload);

      setStatus("success");
      
      // Auto-close modal after success message
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        onClose();
      }, 2500);

    } catch (err) {
      console.error("Modal Lead Error:", err);
      setStatus("error");
      setError("Server issues! Please try again after some time.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-28">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={status !== 'loading' ? onClose : null}></div>

      <div className="relative w-full max-w-lg bg-white rounded-[2.2rem] shadow-2xl animate-fade-in z-10 overflow-hidden">
        
        {/* Header */}
        <div className="px-8 pt-8 pb-4 text-center border-b">
          {status !== "loading" && (
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700"
            >
              <X size={22} />
            </button>
          )}

          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Talk to Sales
          </h2>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Get a custom plan for your business
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-12 animate-in fade-in zoom-in">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={44} />
              </div>
              <h3 className="text-xl font-black text-slate-900">Request Submitted</h3>
              <p className="text-gray-500 text-sm mt-1">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {error && (
                <div className="bg-red-50 text-red-600 text-xs p-3 rounded-xl font-bold border border-red-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  {error}
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[12px] font-black text-slate-600 ml-1 uppercase">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-black text-slate-600 ml-1 uppercase">
                    Work Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mail@company.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-black text-slate-600 ml-1 uppercase">
                    Phone *
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 0000..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-black text-slate-600 ml-1 uppercase">
                    Company
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Business Name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[12px] font-black text-slate-600 ml-1 uppercase">
                  Requirement
                </label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your needs..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 outline-none resize-none transition-all"
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#0D66BA] text-white py-4 rounded-xl font-black hover:bg-[#1CB48D] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>Sending... <Loader2 className="animate-spin" size={20} /></>
                ) : (
                  <>Request Callback <Send size={18} /></>
                )}
              </button>

              <p className="text-[11px] text-gray-400 text-center font-medium">
                🛡️ Your data is secure. We don't share your contact with others.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          opacity: 0;
          transform: scale(0.96);
          animation: fadeInModal 0.25s forwards cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeInModal {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;