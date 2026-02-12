import React, { useEffect, useState } from 'react';
import { MessageCircle, Mail, Phone, BookOpen, Search, LifeBuoy, Send, X, CheckCircle, Loader2 } from 'lucide-react';
import axios from 'axios';
import api, {API_URL} from '../api';

const Support = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactOptions = [
    {
      title: "WhatsApp Support",
      desc: "Instant chat ke liye best hai.",
      info: "+91 9090920202",
      icon: <MessageCircle size={30} />,
      color: "bg-[#1CB48D]",
      link: "https://wa.me/9090920202"
    },
    {
      title: "Email Ticket",
      desc: "Detailed queries ke liye.",
      info: "support@digidonar.com",
      icon: <Mail size={30} />,
      color: "bg-[#0D66BA]",
      link: "mailto:support@digidonar.com"
    },
    {
      title: "Voice Support",
      desc: "Direct expert se baat karein.",
      info: "+91 9090920202",
      icon: <Phone size={30} />,
      color: "bg-[#44BBDB]",
      link: "tel:9090920202"
    }
  ];

  const knowledgeTopics = [
    'DLT Registration',
    'WhatsApp API Guide',
    'SMS Integration',
    'Billing & Invoices',
    'Developer Docs',
    'Sender ID Approval',
    'Campaign Scheduling',
    'Two-Factor Auth'
  ];

  // --- Form submit handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      service: "Support Request"
    };

    try {
      await api.post('/leads', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Technical issue! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-slate-950 py-28 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/2 w-64 h-64 bg-[#1CB48D]/10 rounded-full -translate-x-1/2 animate-pulse-slow"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <LifeBuoy className="mx-auto text-[#44BBDB] mb-6 animate-spin-slow" size={48} />
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            How can we <span className="text-[#1CB48D]">help you?</span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg md:text-xl">
            Search our articles, DLT help, or APIs for instant guidance.
          </p>

          <div className="relative max-w-xl mx-auto group">
            <input 
              type="text" 
              placeholder="Search for articles, DLT help, or APIs..." 
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 px-12 focus:outline-none focus:bg-white focus:text-slate-900 focus:shadow-lg transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus:text-[#0D66BA] transition-colors" size={20} />
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((item, i) => (
            <a 
              href={item.link} 
              key={i} 
              target="_blank"
              rel="noreferrer"
              className="p-8 rounded-[2.5rem] border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-500 group text-center bg-white"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
              <p className="text-[#0D66BA] font-bold">{item.info}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 shadow-inner">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="text-[#0D66BA]" size={32} />
            <h2 className="text-3xl font-black text-slate-900">Knowledge Base</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeTopics.map((topic, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl hover:bg-gradient-to-r hover:from-[#0D66BA]/10 hover:to-[#1CB48D]/10 hover:shadow-lg cursor-pointer transition-all border border-slate-200/50 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1CB48D]"></div>
                <span className="font-semibold text-slate-700 hover:text-[#0D66BA] transition-colors">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 text-center">
        <p className="text-gray-500 mb-6 font-medium text-lg">Didn't find what you were looking for?</p>
        <button 
          onClick={() => setModalOpen(true)}
          className="bg-gradient-to-r from-[#0D66BA] to-[#1CB48D] text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto"
        >
          Submit a Request Ticket <Send size={18} />
        </button>
      </section>

      {/* Modal Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setModalOpen(false)}
          ></div>

          {/* Modal Card */}
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in duration-300">
            <div className="p-8 md:p-12">
              <button 
                onClick={() => setModalOpen(false)} 
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2"
              >
                <X size={24} />
              </button>

              {submitted ? (
                <div className="py-10 text-center animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-500 text-lg">We have received your details. We will connect with you soon.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <input type="text" name="name" placeholder="Full Name" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold" />
                  </div>
                  <div className="space-y-1">
                    <input type="email" name="email" placeholder="Work Email" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold" />
                  </div>
                  <div className="space-y-1">
                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold" />
                  </div>
                  <div className="space-y-1">
                    <textarea name="message" rows="4" placeholder="Tell us about your requirements..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold"></textarea>
                  </div>

                  <button type="submit" disabled={loading} className="w-full bg-[#0D66BA] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#44BBDB] transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group">
                    {loading ? <Loader2 className="animate-spin" size={24} /> : <>Confirm & Start <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Support;
