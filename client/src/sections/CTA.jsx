import React, { useState } from 'react';
import { ArrowRight, MessageSquare, PhoneCall, Smartphone, ShieldCheck, Mail } from 'lucide-react';
import ContactModal from '../components/ContactModal';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const salesNumber = "https://wa.me/919090920202"; // Replace with your actual sales number

  // Emojis aur Icons ka Mix for all services
  const floatingElements = [
    { label: "WhatsApp", icon: "💬", top: "10%", left: "8%", duration: "6s", delay: "0s" },
    { label: "RCS", icon: "📱", top: "20%", left: "85%", duration: "8s", delay: "1s" },
    { label: "IVR", icon: "📞", top: "75%", left: "12%", duration: "7s", delay: "2s" },
    { label: "OTP", icon: "🔐", top: "65%", left: "88%", duration: "5s", delay: "3s" },
    { label: "SMS", icon: "📩", top: "40%", left: "5%", duration: "9s", delay: "0.5s" },
    { label: "API", icon: "⚡", top: "15%", left: "75%", duration: "4s", delay: "1.5s" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes float-cta {
            0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) translateX(10px) rotate(10deg); opacity: 0.7; }
            100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
          }
          .animate-cta-float {
            animation: float-cta infinite ease-in-out;
          }
          @keyframes glow-line {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          .btn-shine {
            position: relative;
            overflow: hidden;
          }
          .btn-shine::after {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: glow-line 3s infinite;
          }
        `}
      </style>

      <section className="relative w-full py-12 md:py-16 overflow-hidden bg-[#020617]">
        
        {/* --- DYNAMIC SERVICE ICONS BACKGROUND --- */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((item, i) => (
            <div
              key={i}
              className="absolute animate-cta-float flex flex-col items-center"
              style={{
                top: item.top,
                left: item.left,
                animationDuration: item.duration,
                animationDelay: item.delay,
              }}
            >
              <span className="text-3xl md:text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {item.icon}
              </span>
              <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="relative z-10 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] px-6 py-10 md:py-14 text-center shadow-2xl overflow-hidden">
            
            {/* Subtle Gradient Glow inside card */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full"></div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1CB48D]/10 border border-[#1CB48D]/20 text-[#1CB48D] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              🚀 Multi-Channel Communication Suite
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              One Dashboard for all <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44BBDB] via-[#1CB48D] to-[#0D66BA]">
                WhatsApp, SMS & Voice
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base mb-10 leading-relaxed">
              Don't settle for less. Get <span className="text-white font-bold italic">WhatsApp API, RCS, & Smart IVR</span> 
              integrated into your business in minutes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-shine w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#0D66BA] to-[#1CB48D] hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-900/20"
              >
                Start Free Trial <ArrowRight size={18} />
              </button>

              <a
                href={`${salesNumber}`} target='_blank'
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-2xl font-bold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                Talk to Sales
              </a>
            </div>

            {/* Quick Service Badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 opacity-60">
              {['WhatsApp API', 'RCS Messaging', 'IVR Systems', 'Bulk OTP'].map((service, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[10px] font-black text-slate-300 uppercase tracking-tighter">
                  <div className="w-1 h-1 bg-[#1CB48D] rounded-full"></div>
                  {service}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Claim Your Free Trial"
      />
    </>
  );
};

export default CTA;