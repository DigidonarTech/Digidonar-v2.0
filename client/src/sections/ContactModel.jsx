// ContactModal.jsx
import React, { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill all required fields.");
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-28">
      <div className="relative w-full max-w-lg bg-white rounded-[2.2rem] shadow-2xl animate-fade-in">

        {/* Header */}
        <div className="px-8 pt-8 pb-4 text-center border-b">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700"
          >
            <X size={22} />
          </button>

          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Talk to Sales
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Get a custom plan for your business
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {success ? (
            <div className="text-center py-12">
              <CheckCircle size={56} className="mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-black">Request Submitted</h3>
              <p className="text-gray-500 text-sm mt-1">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl font-semibold">
                  {error}
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">
                    Work Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">
                    Phone *
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">
                    Company
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 block">
                  Requirement
                </label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:bg-white focus:border-[#0D66BA] outline-none resize-none"
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="w-full bg-[#0D66BA] text-white py-4 rounded-xl font-black hover:bg-[#1CB48D] transition-all shadow-lg"
              >
                Request Callback
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. No spam.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          opacity: 0;
          transform: scale(0.96);
          animation: fadeInModal 0.25s forwards;
        }
        @keyframes fadeInModal {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
