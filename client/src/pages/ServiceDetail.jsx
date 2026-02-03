import React, { useEffect } from 'react';
import {
  CheckCircle2, ArrowRight, Zap, Shield,
  MessageSquare, Smartphone, HardDrive, PhoneIncoming,
  Key, Layers, Globe, MousePointer2
} from 'lucide-react';

const SERVICE_DATA = {
  "bulk-sms": {
    title: "Bulk SMS Solutions",
    subtitle: "High-Volume Messaging",
    desc: "India ke sabse bharosemand gateway se lakhon SMS bhein ek click mein. Promotional aur Transactional dono ke liye best.",
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
    desc: "WhatsApp par apne customers se judiye. Automated chatbots aur official green tick verification ke saath branding badhaiye.",
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
    desc: "Professional IVR menu setup karein. Automated calls aur missed call alerts se leads capture karna asaan banayein.",
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
  }
};

const ServiceDetail = ({ serviceType }) => {
  const data = SERVICE_DATA[serviceType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  if (!data) return <div className="pt-32 text-center text-2xl font-bold">Service Not Found</div>;

  return (
    <div className="pt-28 min-h-screen bg-white">

      {/* ===== HERO (OPTIMIZED HEIGHT) ===== */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[420px] h-[420px] ${data.bg}/10 blur-[120px] rounded-full -mr-40 -mt-24`} />
        <div className={`absolute bottom-0 left-0 w-[320px] h-[320px] ${data.bg}/5 blur-[100px] rounded-full -ml-24 -mb-24`} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
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
              <button className="bg-slate-900 text-white px-9 py-4 rounded-2xl font-bold flex items-center gap-3 hover:shadow-2xl hover:scale-[1.02] transition-all">
                Get Started <ArrowRight size={18} />
              </button>
              <button
                onClick={() => window.open(docFromDB.pdfUrl, "_blank")}
                className="border border-slate-200 px-9 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
              >
                View Docs
              </button>
            </div>
          </div>

          {/* RIGHT GLASS CARD (COMPACT) */}
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[3rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.18)] transition-all">

              <div className={`${data.color} mb-8 inline-block p-4 bg-white rounded-2xl shadow-lg`}>
                {data.icon}
              </div>

              <div className="space-y-4">
                {data.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-8 h-8 rounded-full ${data.bg}/10 flex items-center justify-center ${data.color} group-hover:scale-110 transition`}>
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

      {/* ===== PROCESS (PREMIUM HOVER) ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-black text-center mb-14">
            Simple 3-Step Setup
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { i: "01", t: "Sign Up", d: "Free account banayein aur dashboard access paayein.", ic: <MousePointer2 /> },
              { i: "02", t: "Configure", d: "APIs ya templates setup karein easily.", ic: <Layers /> },
              { i: "03", t: "Go Live", d: "Turant customers ko reach karna shuru karein.", ic: <Globe /> }
            ].map((s, idx) => (
              <div key={idx} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
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
        <h3 className="text-4xl md:text-5xl font-black mb-5">
          Enterprise-grade Communication Infrastructure
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          99.99% uptime, carrier-grade routing aur SLA backed delivery.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="bg-[#1CB48D] text-slate-900 px-12 py-5 rounded-2xl font-black hover:bg-white transition-all">
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
