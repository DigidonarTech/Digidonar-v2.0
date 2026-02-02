import React, { useState } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const ContactModal = ({ isOpen, onClose, title }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      service: title || "General Inquiry",
    };

    try {
      await axios.post('https://digidonar-api.onrender.com/api/leads', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Technical issue! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl relative z-10 overflow-hidden scale-100 opacity-100 transition-all">
        <div className="p-8 md:p-12">
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900">
            <X size={24} />
          </button>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-500 text-lg">Hume aapki details mil gayi hain. Hum jaldi hi connect karenge.</p>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-black text-slate-900 mb-2">{title || "Get a Free Demo"}</h3>
              <p className="text-slate-500 italic mb-6">Enter details to unlock premium access.</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {["Full Name", "Work Email", "Phone Number"].map((placeholder, idx) => (
                  <input
                    key={idx}
                    type={placeholder === "Work Email" ? "email" : "text"}
                    placeholder={placeholder}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-2 focus:ring-[#0D66BA]/20 transition-all"
                  />
                ))}

                <button
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#0D66BA] to-[#1CB48D] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
                >
                  {loading ? <Loader2 className="animate-spin" size={24} /> : <>Confirm & Start <Send size={20} /></>}
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-[#1CB48D] bg-emerald-50 py-2 rounded-full">
                <CheckCircle size={14} /> <span>Instant Activation • No CC Required</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
