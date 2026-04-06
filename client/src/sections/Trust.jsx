import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Award, Users, CheckCircle } from 'lucide-react';
import awardBanner from '../assets/82156.gif';
import rajeshAvatar from '../assets/client 2.jpg';
import anjaliAvatar from '../assets/client1_profile.jpg';
import vikramAvatar from '../assets/profile 3.png';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, RetailHub',
    content: 'Digidonar ki Bulk SMS service se hamari sales 40% badh gayi hai. Delivery instant hai aur dashboard bahut user-friendly hai.',
    avatar: rajeshAvatar,
  },
  {
    name: 'Anjali Sharma',
    role: 'Marketing Head, EduTech',
    content: 'WhatsApp API integration ne hamara customer support automate kar diya. Best service in the market!',
    avatar: anjaliAvatar,
  },
  {
    name: 'Vikram Singh',
    role: 'CTO, TechWave',
    content: 'Voice & IVR integration se humari customer experience bahut smooth ho gayi. Highly recommend Digidonar!',
    avatar: vikramAvatar,
  },
];

// --- BRAND LOGO DATA WITH SVG ICONS ---
const brandLogos = [
  {
    name: 'Zomato',
    color: '#E23215',
    bg: '#fff0ee',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#E23215">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14H7.5l4.5-8 4.5 8z"/>
      </svg>
    ),
  },
  {
    name: 'Swiggy',
    color: '#FC8201',
    bg: '#fff8ee',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#FC8201">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V15h-2v1.93A8 8 0 0 1 4.07 9H6v2h2V9h2v4h2V9h2v2h2V9h1.93A8 8 0 0 1 13 16.93z"/>
      </svg>
    ),
  },
  {
    name: 'Flipkart',
    color: '#2874F0',
    bg: '#eef3fe',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#2874F0">
        <path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-9 9l-4-4h3V8h2v2h3l-4 4z"/>
      </svg>
    ),
  },
  {
    name: 'Paytm',
    color: '#00BAF2',
    bg: '#e6f9fe',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#00BAF2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
    ),
  },
  {
    name: 'PhonePe',
    color: '#5F259F',
    bg: '#f3eefb',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#5F259F">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
      </svg>
    ),
  },
  {
    name: 'HDFC Bank',
    color: '#004C8F',
    bg: '#e6eef7',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#004C8F">
        <path d="M4 10h3v7H4zm6.5-6h-1C8.6 4 8 4.6 8 5.5v1C8 7.4 8.6 8 9.5 8h1c.9 0 1.5-.6 1.5-1.5v-1C12 4.6 11.4 4 10.5 4zM4 4h3v4H4zm13 6h-3v7h3v-3h2v-2h-2z"/>
      </svg>
    ),
  },
  {
    name: 'ICICI Bank',
    color: '#F36F21',
    bg: '#fff4ee',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#F36F21">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    ),
  },
  {
    name: 'Nykaa',
    color: '#FC2779',
    bg: '#feeaf3',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#FC2779">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/>
      </svg>
    ),
  },
  {
    name: 'MakeMyTrip',
    color: '#E81328',
    bg: '#fdeef0',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#E81328">
        <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
      </svg>
    ),
  },
  {
    name: 'Meesho',
    color: '#9B2D8E',
    bg: '#f8eef7',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#9B2D8E">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
      </svg>
    ),
  },
  {
    name: 'PolicyBazaar',
    color: '#00A450',
    bg: '#e6f7ee',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#00A450">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
  },
  {
    name: 'Lenskart',
    color: '#00B5AD',
    bg: '#e6f8f7',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#00B5AD">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    ),
  },
  {
    name: 'Urban Company',
    color: '#1B2A4A',
    bg: '#eceef2',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#1B2A4A">
        <path d="M14.5 2.5c0 1.5-1.5 7-1.5 7h-2S9 4 9 2.5a2.5 2.5 0 0 1 5 0zM12 11.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM5 8l-2 6h4l1-3-3-3zm14 0l-3 3 1 3h4l-2-6z"/>
      </svg>
    ),
  },
  {
    name: 'Cars24',
    color: '#FF6C00',
    bg: '#fff4ee',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#FF6C00">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
  },
  {
    name: 'Vedantu',
    color: '#4B2DB5',
    bg: '#eeeafb',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#4B2DB5">
        <path d="M12 3L1 9l4 2.18V15l7 4 7-4v-3.82L23 9 12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-2.85l5 2.72 5-2.72v2.85z"/>
      </svg>
    ),
  },
  {
    name: 'Cult.fit',
    color: '#FF385C',
    bg: '#feeaed',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#FF385C">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
      </svg>
    ),
  },
];

// Split into 3 rows
const row1 = brandLogos.slice(0, 6);
const row2 = brandLogos.slice(5, 11);
const row3 = brandLogos.slice(10, 16);

// Logo Card Component
const LogoCard = ({ brand }) => (
  <div
    className="flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm mx-2"
    style={{ minWidth: '160px' }}
  >
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ background: brand.bg }}
    >
      {brand.svg}
    </div>
    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{brand.name}</span>
  </div>
);

// Marquee Row Component
const MarqueeRow = ({ brands, direction = 'left', speed = 40 }) => {
  const duration = brands.length * speed;
  const repeated = [...brands, ...brands, ...brands];

  return (
    <div className="overflow-hidden w-full mb-3">
      <div
        className="flex"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          width: 'max-content',
        }}
      >
        {repeated.map((brand, i) => (
          <LogoCard key={i} brand={brand} />
        ))}
      </div>
    </div>
  );
};

const TrustSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-16 pb-24 md:pt-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <div className="relative text-center mb-12 md:mb-16">
        <p className="text-xs font-bold tracking-widest text-cyan-600 uppercase mb-3">Trusted by Teams At</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pb-4">
          Trusted by <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Leading Brands</span>
        </h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
          Powering high-velocity messaging & intelligent automation for thousands of growing businesses.
        </p>
      </div>

      {/* 3-Row Marquee */}
      <div className="relative mb-16 md:mb-20">
        <MarqueeRow brands={row1} direction="right" speed={5} />
        <MarqueeRow brands={row2} direction="left"  speed={5} />
        <MarqueeRow brands={row3} direction="right" speed={5} />
      </div>

      {/* Stats + Testimonials + Award */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 blur-[80px] rounded-full animate-pulse"></div>

          {/* Google Rating */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[2rem] shadow-xl flex flex-col items-center justify-center text-center group transition-all"
          >
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-4 group-hover:rotate-12 transition-transform">
              <svg width="32" height="32" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.82 2.43 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.5 24c0-1.57-.14-3.09-.41-4.57H24v9.02h12.7c-.55 2.97-2.21 5.49-4.7 7.18l7.98 6.19C43.89 38.02 46.5 31.56 46.5 24z"/>
                <path fill="#FBBC05" d="M10.54 28.41c-.48-1.45-.76-2.99-.76-4.41s.27-2.96.76-4.41l-7.98-6.19C.92 16.06 0 19.96 0 24c0 4.04.92 7.94 2.56 11.22l7.98-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.98-6.19c-2.21 1.49-5.03 2.37-7.93 2.37-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
            <h4 className="text-5xl font-black text-slate-900 mb-1">4.9</h4>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FBBF24" color="#FBBF24" />)}
            </div>
            <p className="text-slate-600 font-semibold text-sm">1,500+ Happy Reviews</p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6 p-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle size={24} /></div>
              <div><p className="font-bold text-slate-900">Verified Partner</p><p className="text-sm text-slate-500">Official WhatsApp API</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Users size={24} /></div>
              <div><p className="font-bold text-slate-900">10k+ Clients</p><p className="text-sm text-slate-500">Growing Every Month</p></div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <div className="md:col-span-2 relative mt-4 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
              >
                <span className="absolute top-6 right-10 text-slate-100 font-serif text-8xl pointer-events-none">"</span>
                <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed relative z-10 mb-8">
                  {testimonials[active].content}
                </p>
                <div className="flex items-center gap-4">
                  <img src={testimonials[active].avatar} className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 p-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">{testimonials[active].name}</p>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2 mt-6 justify-center">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setActive(idx)} className={`h-1.5 rounded-full transition-all ${idx === active ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Award */}
        <motion.div
          className="lg:col-span-5 relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-slate-900 rounded-[3rem] p-2 overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)]">
            <motion.div
              animate={{ x: [-500, 500] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-40 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />
            <div className="bg-slate-800 rounded-[2.8rem] p-6 md:p-10 flex flex-col items-center text-center border border-white/5">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-20 animate-pulse"></div>
                <Award className="relative text-amber-400" size={64} />
              </div>
              <h5 className="text-white text-2xl font-bold mb-2">User's Choice 2021</h5>
              <p className="text-slate-400 text-sm mb-8 uppercase tracking-widest font-semibold">Digidonar Teleservices</p>
              <img src={awardBanner} alt="Award" className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" />
              <div className="mt-8 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-amber-200 font-medium">
                Recognized by Justdial
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-emerald-500 text-white p-6 rounded-3xl shadow-xl font-black text-center leading-tight rotate-12"
          >
            <span className="text-2xl">#1</span><br /><span className="text-[10px] uppercase">India</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustSection;