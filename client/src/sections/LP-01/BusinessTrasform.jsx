export default function TransformBusiness() {
  const steps = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Omnichannel Setup",
      sub: "WhatsApp, SMS & Email",
      size: "sm",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Expert Onboarding",
      sub: "Dedicated success team",
      size: "lg",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: "Live Analytics",
      sub: "Real-time dashboards",
      size: "sm",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: "99.9% Uptime SLA",
      sub: "Enterprise-grade reliability",
      size: "sm",
    },
  ];

  const includes = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
        </svg>
      ),
      text: "Free API integration support",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      text: "Unlimited campaign analytics",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      text: "Priority message delivery",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      text: "Dedicated account manager",
    },
  ];

  const stats = [
    { val: "4.9★", label: "Average Rating" },
    { val: "50K+", label: "Happy Businesses" },
    { val: "200+", label: "Enterprise Clients" },
    { val: "99.92%", label: "Delivery Rate" },
  ];

  return (
    <section className="py-24 px-6 bg-white font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-[11px] font-bold tracking-[0.14em] uppercase px-5 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
            Transform Your Business Today
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight tracking-tight">
            Ready to Level Up{" "}
            <span className="text-teal-600">Your Business?</span>
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-center text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          Join thousands of businesses powering their customer communication with Digidonar. Gain delivery reliability and step into high-performance messaging today.
        </p>

        {/* Steps journey */}
        <div className="flex items-end justify-center mb-16 px-4 overflow-x-auto gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className={`flex flex-col items-center ${step.size === "lg" ? "-mt-8" : ""}`}>
                {/* Circle */}
                <div
                  className={`rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-3 transition-transform duration-200 hover:scale-110 ${
                    step.size === "lg"
                      ? "w-[72px] h-[72px] shadow-xl shadow-teal-200"
                      : "w-14 h-14 shadow-lg shadow-teal-100"
                  }`}
                >
                  {step.icon}
                </div>
                <div className="text-center max-w-[90px]">
                  <div className={`font-bold text-slate-700 leading-tight ${step.size === "lg" ? "text-[13px]" : "text-[11px]"}`}>
                    {step.title}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{step.sub}</div>
                </div>
              </div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="flex items-center mx-2 mb-10">
                  <svg width="64" height="20" viewBox="0 0 64 20" fill="none">
                    <path
                      d="M2 10 Q16 3 32 10 Q48 17 62 10"
                      stroke="#0d9488"
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                      fill="none"
                      opacity="0.35"
                    />
                    <circle cx="62" cy="10" r="2.5" fill="#0d9488" opacity="0.4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main card: includes + CTA */}
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 mb-10 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* Left dark panel */}
            <div className="md:col-span-2 bg-slate-800 p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-5 rounded-full bg-teal-400" />
                <h3 className="text-white font-bold text-lg tracking-tight">Platform Includes</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includes.map((item) => (
                  <div key={item.text} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center flex-shrink-0 text-teal-400 group-hover:bg-teal-500/25 transition-colors duration-150">
                      {item.icon}
                    </div>
                    <span className="text-slate-300 text-[13px] leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right CTA panel */}
            <div className="bg-teal-600 p-8 flex flex-col items-center justify-center text-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight mb-1">Start for free</div>
                <div className="text-teal-100 text-[12px] leading-relaxed">No credit card required. Go live in minutes.</div>
              </div>
              <button className="w-full bg-white text-teal-700 hover:bg-teal-50 active:scale-95 transition-all duration-150 font-bold text-[14px] px-6 py-3 rounded-xl shadow-lg">
                Get in Touch
              </button>
              <a href="#" className="text-teal-100 hover:text-white text-[12px] font-medium underline underline-offset-2 transition-colors duration-150">
                View pricing →
              </a>
            </div>

          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center py-8 px-4 relative ${
                i < stats.length - 1 ? "after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-slate-100" : ""
              }`}
            >
              <span className="text-3xl font-extrabold text-teal-600 tracking-tight mb-1">{s.val}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}