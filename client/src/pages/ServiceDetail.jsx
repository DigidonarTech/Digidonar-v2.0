import React, { useEffect, useState } from 'react';
import api,{API_URL} from '../api';
import {
  CheckCircle2, ArrowRight, Zap, Shield,
  MessageSquare, Smartphone, HardDrive, PhoneIncoming,
  Key, Layers, Globe, MousePointer2, Mail
} from 'lucide-react';
// 1. Modal Import Karein
import ContactModal from '../components/ContactModal';

const SERVICE_DATA = {
  "bulk-sms": {
    title: "Bulk SMS Solutions",
    subtitle: "High-Volume Messaging",
    desc: "Send millions of SMS in a single click through India's most trusted gateway. Best for both Promotional and Transactional messages.",
    features: ["DLT Template Support", "Smart Scheduling", "Regional Language Support", "Unicode Messaging"],
    icon: <MessageSquare size={56} strokeWidth={1.5} />,
    color: "text-[#0D66BA]",
    bg: "bg-[#0D66BA]",
    accent: "from-[#0D66BA] to-[#44BBDB]",
    stats: { delivery: "99.8%", speed: "2s", users: "5k+" }
  },
  "whatsapp-api": {
    title: "WhatsApp Business API",
    subtitle: "Modern Engagement",
    desc: "Connect with your customers on WhatsApp. Enhance your branding with automated chatbots and official green tick verification.",
    features: ["Chatbot Integration", "Shared Team Inbox", "Rich Media Support", "Automated Notifications"],
    icon: <Smartphone size={56} strokeWidth={1.5} />,
    color: "text-[#1CB48D]",
    bg: "bg-[#1CB48D]",
    accent: "from-[#1CB48D] to-[#34d399]",
    stats: { delivery: "100%", speed: "Instant", users: "2k+" }
  },
  "voice-ivr": {
    title: "Voice & IVR Services",
    subtitle: "Cloud Telephony",
    desc: "Set up a professional IVR menu. Make lead capture easy with automated calls and missed call alerts.",
    features: ["Multi-level IVR", "Call Recording", "Virtual Numbers", "Real-time Call Logs"],
    icon: <PhoneIncoming size={56} strokeWidth={1.5} />,
    color: "text-[#44BBDB]",
    bg: "bg-[#44BBDB]",
    accent: "from-[#44BBDB] to-[#0D66BA]",
    stats: { channels: "Unlimited", uptime: "99.9%", users: "1.5k" }
  },
  "otp-service": {
    title: "Secure OTP Service",
    subtitle: "Instant Authentication",
    desc: "99.9% delivery rate aur sub-2 second speed ke saath user authentication ko secure banayein. Banking grade security.",
    features: ["Sub-2 Sec Delivery", "Global Coverage", "Failover Routing", "Direct Operator Pipe"],
    icon: <Key size={56} strokeWidth={1.5} />,
    color: "text-[#0D66BA]",
    bg: "bg-[#0D66BA]",
    accent: "from-[#0D66BA] to-[#1CB48D]",
    stats: { delivery: "99.99%", speed: "1.5s", users: "3k+" }
  },
  "sms-gateway": {
    title: "Robust SMS Gateway",
    subtitle: "Developer First API",
    desc: "Hamari powerful HTTP/SMPP APIs ko apne software mein integrate karein. Developers ke liye bani sabse asaan documentation.",
    features: ["HTTP/SMPP APIs", "JSON/XML Support", "Unlimited Throughput", "Webhook Integration"],
    icon: <HardDrive size={56} strokeWidth={1.5} />,
    color: "text-[#0A4D8C]",
    bg: "bg-[#0A4D8C]",
    accent: "from-[#0A4D8C] to-[#44BBDB]",
    stats: { uptime: "99.95%", latency: "<50ms", users: "800+" }
  },
  "email-marketing": {
    title: "Email Marketing",
    subtitle: "In-Inbox Delivery",
    desc: "Design and blast beautiful email campaigns that land straight in the inbox, not spam. AI-driven optimization se open rates badhaiye.",
    features: ["Drag & Drop Builder", "List Segmentation", "Automated A/B Testing", "Real-time Analytics"],
    icon: <Mail size={56} strokeWidth={1.5} />,
    color: "text-[#EA4335]",
    bg: "bg-[#EA4335]",
    accent: "from-[#EA4335] to-[#FBBC05]",
    stats: { delivery: "98.5%", opens: "25% Avg", users: "1.2k" }
  },
  "rcs-messaging": {
    title: "RCS Messaging",
    subtitle: "Next-Gen SMS",
    desc: "Upgrade your SMS to rich, interactive experiences with branding, buttons, and carousels. App jaisa experience bina kisi download ke.",
    features: ["Interactive Buttons", "Rich Media Carousels", "Verified Sender ID", "Read Receipts"],
    icon: <MessageSquare size={56} strokeWidth={1.5} />,
    color: "text-[#4285F4]",
    bg: "bg-[#4285F4]",
    accent: "from-[#4285F4] to-[#0D66BA]",
    stats: { engagement: "40%", reach: "Global", users: "500+" }
  },
  "smart-api": {
    title: "Smart API Integration",
    subtitle: "Developer First",
    desc: "Powerful SDKs and REST APIs to integrate communication into your own apps in minutes. Multi-language support aur lightning fast latency.",
    features: ["Multi-SDK Support", "High Throughput", "Webhook Notifications", "Sandboxed Testing"],
    icon: <HardDrive size={56} strokeWidth={1.5} />,
    color: "text-[#0F172A]",
    bg: "bg-[#0F172A]",
    accent: "from-[#0F172A] to-[#44BBDB]",
    stats: { latency: "<30ms", uptime: "99.99%", users: "2k+" }
  }
};

const ServiceDetail = ({ serviceType }) => {
  const data = SERVICE_DATA[serviceType];
  const [docUrl, setDocUrl] = useState(null);
  const [loadingDoc, setLoadingDoc] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchServiceDoc = async () => {
      try {
        const res = await api.get(`/documents/by-service/${serviceType}`);
        if (res.data?.pdfUrl) {
          // 🔥 PROXY URL (INLINE VIEW)
          const proxyUrl =
            `${API_URL}/pdf-proxy?url=${encodeURIComponent(
              res.data.pdfUrl
            )}`;
          setDocUrl(proxyUrl);
        } else {
          setDocUrl(null);
        }
      } catch {
        setDocUrl(null);
      } finally {
        setLoadingDoc(false);
      }
    };

    fetchServiceDoc();
  }, [serviceType]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  if (!data) {
    return (
      <div className="pt-32 text-center text-2xl font-bold">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-white">

      {/* 3. Contact Modal Component Integration */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Inquiry for ${data.title}`}
      />

      {/* ===== HERO ===== */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[420px] h-[420px] ${data.bg}/10 blur-[120px] rounded-full -mr-40 -mt-24`} />
        <div className={`absolute bottom-0 left-0 w-[320px] h-[320px] ${data.bg}/5 blur-[100px] rounded-full -ml-24 -mb-24`} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${data.bg}/10 ${data.color} font-bold text-xs uppercase tracking-[0.2em] mb-5`}>
              <Zap size={14} /> {data.subtitle}
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {data.title.split(' ')[0]} <br />
              <span className={`bg-gradient-to-r ${data.accent} bg-clip-text text-transparent`}>
                {data.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="text-slate-500 text-lg mb-8 max-w-xl">
              {data.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-slate-900 text-white px-9 py-4 rounded-2xl font-bold flex items-center gap-3 hover:shadow-2xl transition-all"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started <ArrowRight size={18} />
              </button>

              {/* ===== VIEW DOCS (FINAL) ===== */}
              {loadingDoc ? (
                <button
                  disabled
                  className="border border-slate-200 px-9 py-4 rounded-2xl font-bold text-slate-400"
                >
                  Checking Docs…
                </button>
              ) : docUrl ? (
                <a
                  href={docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-200 px-9 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all text-center"
                >
                  View Docs
                </a>
              ) : (
                <button
                  disabled
                  className="border border-slate-200 px-9 py-4 rounded-2xl font-bold text-slate-400"
                >
                  No Docs Available
                </button>
              )}
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[3rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]">
              <div className={`${data.color} mb-8 inline-block p-4 bg-white rounded-2xl shadow-lg`}>
                {data.icon}
              </div>
              <div className="space-y-4">
                {data.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-8 h-8 rounded-full ${data.bg}/10 flex items-center justify-center ${data.color}`}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-semibold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4">
                {Object.entries(data.stats).map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{k}</p>
                    <p className={`text-lg font-black ${data.color}`}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-14">Simple 3-Step Setup</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { i: "01", t: "Sign Up", d: "Free account banayein aur dashboard access paayein.", ic: <MousePointer2 /> },
              { i: "02", t: "Configure", d: "APIs ya templates setup karein easily.", ic: <Layers /> },
              { i: "03", t: "Go Live", d: "Turant customers ko reach karna shuru karein.", ic: <Globe /> }
            ].map((s, idx) => (
              <div key={idx} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 text-left hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                <div className="text-5xl font-black text-slate-100 mb-6">{s.i}</div>
                <div className={`w-14 h-14 rounded-2xl ${data.bg}/10 ${data.color} flex items-center justify-center mb-5`}>
                  {s.ic}
                </div>
                <h4 className="text-xl font-black mb-3">{s.t}</h4>
                <p className="text-slate-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENTERPRISE CTA ===== */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <Shield size={48} className="mx-auto text-[#1CB48D] mb-6" />
        <h3 className="text-4xl md:text-5xl font-black mb-5">Enterprise-grade Communication Infrastructure</h3>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">99.99% uptime, carrier-grade routing aur SLA backed delivery.</p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* Talk to Sales Trigger */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#1CB48D] text-slate-900 px-12 py-5 rounded-2xl font-black hover:bg-white transition-all"
          >
            Talk to Sales
          </button>
          <button className="border border-white/20 px-12 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all">
            Architecture Review
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;