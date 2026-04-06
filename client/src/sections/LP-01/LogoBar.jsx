export default function TrustedBy() {
 const logos = [
  {
    name: "Zomato",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#E23215">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14H7.5l4.5-8 4.5 8z"/>
      </svg>
    ),
  },
  {
    name: "Swiggy",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#FC8201">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V15h-2v1.93A8 8 0 0 1 4.07 9H6v2h2V9h2v4h2V9h2v2h2V9h1.93A8 8 0 0 1 13 16.93z"/>
      </svg>
    ),
  },
  {
    name: "Flipkart",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#2874F0">
        <path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-9 9l-4-4h3V8h2v2h3l-4 4z"/>
      </svg>
    ),
  },
  {
    name: "Paytm",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#00BAF2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
    ),
  },
  {
    name: "HDFC Bank",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#004080">
        <path d="M4 10h3v7H4zm6.5-6h-1C8.6 4 8 4.6 8 5.5v1C8 7.4 8.6 8 9.5 8h1c.9 0 1.5-.6 1.5-1.5v-1C12 4.6 11.4 4 10.5 4zM4 4h3v4H4zm13 6h-3v7h3v-3h2v-2h-2z"/>
      </svg>
    ),
  },
  {
    name: "ICICI Bank",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#F36F21">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    ),
  },
  {
    name: "Nykaa",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#FC2779">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/>
      </svg>
    ),
  },
  {
    name: "MakeMyTrip",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#E81328">
        <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
      </svg>
    ),
  },
  {
    name: "PhonePe",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#5F259F">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
      </svg>
    ),
  },
  {
    name: "PolicyBazaar",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#00A450">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
  },
  {
    name: "Meesho",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#9B2D8E">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
    ),
  },
  {
    name: "Lenskart",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#00B5AD">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    ),
  },
  {
    name: "Urban Company",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#1B2A4A">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
  },
  {
    name: "Cult.fit",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#FF385C">
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
      </svg>
    ),
  },
  {
    name: "Vedantu",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#4B2DB5">
        <path d="M12 3L1 9l4 2.18V15l7 4 7-4v-3.82L23 9 12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-2.85l5 2.72 5-2.72v2.85z"/>
      </svg>
    ),
  },
  {
    name: "Cars24",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#FF6C00">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
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