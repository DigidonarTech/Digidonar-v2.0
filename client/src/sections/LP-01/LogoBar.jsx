export default function TrustedBy() {
  const logos = [
    {
      name: "3M",
      svg: (
        <svg width="52" height="32" viewBox="0 0 52 32" fill="none">
          <rect width="52" height="32" rx="6" fill="#FF000018" />
          <text x="26" y="22" textAnchor="middle" fontSize="18" fontWeight="900" fill="#CC0000" fontFamily="Arial">3M</text>
        </svg>
      ),
    },
    {
      name: "Capgemini",
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="18" fill="#0070ad18" />
          <text x="18" y="23" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0070ad" fontFamily="Arial">CAP</text>
        </svg>
      ),
    },
    {
      name: "Sony",
      svg: (
        <svg width="60" height="28" viewBox="0 0 60 28">
          <rect width="60" height="28" rx="4" fill="#1a1a2e10" />
          <text x="30" y="20" textAnchor="middle" fontSize="14" fontWeight="900" fill="#1a1a2e" fontFamily="Arial" letterSpacing="3">SONY</text>
        </svg>
      ),
    },
    {
      name: "Genpact",
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="18" fill="#e8772218" />
          <text x="18" y="23" textAnchor="middle" fontSize="11" fontWeight="800" fill="#e87722" fontFamily="Arial">GEN</text>
        </svg>
      ),
    },
    {
      name: "Tech Mahindra",
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <rect width="36" height="36" rx="7" fill="#E2231A15" />
          <text x="18" y="23" textAnchor="middle" fontSize="9" fontWeight="800" fill="#E2231A" fontFamily="Arial">TECH M</text>
        </svg>
      ),
    },
    {
      name: "Sprinklr",
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="18" fill="#FF6B2B18" />
          <text x="18" y="23" textAnchor="middle" fontSize="9" fontWeight="800" fill="#FF6B2B" fontFamily="Arial">SPNKLR</text>
        </svg>
      ),
    },
    {
      name: "Google",
      svg: (
        <svg width="38" height="38" viewBox="0 0 38 38">
          <text x="2" y="34" fontSize="34" fontFamily="Georgia, serif" fontWeight="700">
            <tspan fill="#4285F4">G</tspan>
          </text>
        </svg>
      ),
    },
    {
      name: "Amazon",
      svg: (
        <svg width="44" height="36" viewBox="0 0 44 36">
          <text x="4" y="26" fontSize="24" fontFamily="Arial" fontWeight="700" fill="#FF9900">a</text>
          <path d="M3 30 Q22 38 41 30" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Fractal",
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <rect width="36" height="36" rx="7" fill="#F15A2215" />
          <text x="18" y="23" textAnchor="middle" fontSize="10" fontWeight="800" fill="#F15A22" fontFamily="Arial">FRAC</text>
        </svg>
      ),
    },
    {
      name: "Microsoft",
      svg: (
        <svg width="34" height="34" viewBox="0 0 34 34">
          <rect x="0" y="0" width="15" height="15" fill="#F25022dd" />
          <rect x="19" y="0" width="15" height="15" fill="#7FBA00dd" />
          <rect x="0" y="19" width="15" height="15" fill="#00A4EFdd" />
          <rect x="19" y="19" width="15" height="15" fill="#FFB900dd" />
        </svg>
      ),
    },
    {
      name: "IBM",
      svg: (
        <svg width="56" height="30" viewBox="0 0 56 30">
          <text x="28" y="22" textAnchor="middle" fontSize="20" fontWeight="900" fill="#006699" fontFamily="Arial" letterSpacing="2">IBM</text>
        </svg>
      ),
    },
    {
      name: "Salesforce",
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <ellipse cx="18" cy="22" rx="16" ry="10" fill="#00A1E018" />
          <ellipse cx="13" cy="14" rx="9" ry="9" fill="#00A1E025" />
          <text x="18" y="25" textAnchor="middle" fontSize="8" fontWeight="800" fill="#00A1E0" fontFamily="Arial">SFORCE</text>
        </svg>
      ),
    },
    {
      name: "Oracle",
      svg: (
        <svg width="60" height="30" viewBox="0 0 60 30">
          <text x="30" y="22" textAnchor="middle" fontSize="16" fontWeight="900" fill="#C74634" fontFamily="Arial">ORACLE</text>
        </svg>
      ),
    },
    {
      name: "Adobe",
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <rect width="36" height="36" rx="6" fill="#FF000020" />
          <path d="M18 8 L28 28 H22 L18 18 L14 28 H8 Z" fill="#FF0000cc" />
        </svg>
      ),
    },
    {
      name: "Nvidia",
      svg: (
        <svg width="56" height="28" viewBox="0 0 56 28">
          <rect width="56" height="28" rx="5" fill="#76B90018" />
          <text x="28" y="20" textAnchor="middle" fontSize="13" fontWeight="900" fill="#76B900" fontFamily="Arial">NVIDIA</text>
        </svg>
      ),
    },
    {
      name: "Wipro",
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="18" fill="#55106518" />
          <text x="18" y="23" textAnchor="middle" fontSize="10" fontWeight="800" fill="#551065" fontFamily="Arial">WIPRO</text>
        </svg>
      ),
    },
  ];

  const row1 = [logos[0], logos[1], logos[2], logos[3], logos[4], logos[5], logos[6], logos[7]];
  const row2 = [logos[8], logos[9], logos[10], logos[11], logos[12], logos[13], logos[14], logos[15]];
  const row3 = [logos[4], logos[7], logos[10], logos[13], logos[1], logos[6], logos[11], logos[14]];

  function LogoCard({ logo }) {
    return (
      <div
        className="
          group/card
          flex items-center gap-3
          whitespace-nowrap cursor-default
          px-4 py-2.5
          rounded-xl
          bg-white
          border border-slate-200
          shadow-sm
          transition-all duration-200 ease-out
          hover:scale-[1.06]
          hover:border-cyan-300
          hover:shadow-md hover:shadow-cyan-100
        "
      >
        <span className="flex-shrink-0 transition-transform duration-200 ease-out group-hover/card:scale-[1.05]">
          {logo.svg}
        </span>
        <span className="text-[16px] font-bold text-slate-700 tracking-tight select-none">
          {logo.name}
        </span>
      </div>
    );
  }

  function MarqueeTrack({ items, direction, duration }) {
    const many = [...items, ...items, ...items, ...items, ...items, ...items];
    const anim =
      direction === "rtl"
        ? `marqueeRTL ${duration}s linear infinite`
        : `marqueeLTR ${duration}s linear infinite`;

    return (
      <div style={{ overflow: "hidden", width: "100%" }} className="group">
        <div
          style={{
            display: "flex",
            gap: "16px",
            width: "max-content",
            alignItems: "center",
            animation: anim,
          }}
          className="group-hover:[animation-play-state:paused]"
        >
          {many.map((logo, i) => (
            <LogoCard key={i} logo={logo} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-14 bg-slate-100 overflow-hidden select-none">
      <div className="relative">

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10 bg-gradient-to-l from-slate-50 to-transparent" />

        <p className="text-center text-[11px] font-bold tracking-[0.18em] text-cyan-600 uppercase mb-10">
          Trusted by teams at
        </p>

        <div className="flex flex-col gap-5">
          <MarqueeTrack items={row1} direction="rtl" duration={40} />
          <MarqueeTrack items={row2} direction="ltr" duration={48} />
          <MarqueeTrack items={row3} direction="rtl" duration={36} />
        </div>
      </div>

      <style>{`
        @keyframes marqueeLTR {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marqueeRTL {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}