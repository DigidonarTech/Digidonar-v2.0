import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Award, Users, CheckCircle } from 'lucide-react';

import logo1 from '../assets/bazaz.jpg';
import logo2 from '../assets/kia.png';
import logo3 from '../assets/ola.png';
import logo4 from '../assets/zomato2708.jpg';
import logo5 from '../assets/rejency.webp';
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
    name: 'Sony',
    color: '#000000',
    bg: '#f5f5f5',
    svg: (
      <svg viewBox="0 0 60 20" width="48" height="16" fill="#000">
        <text x="0" y="16" fontSize="16" fontWeight="bold" fontFamily="Arial">SONY</text>
      </svg>
    ),
  },
  {
    name: 'Google',
    color: '#4285F4',
    bg: '#e8f0fe',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
  },
  {
    name: 'Amazon',
    color: '#FF9900',
    bg: '#fff8ee',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#FF9900">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.768-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.58l-3.061-.333c-.259-.056-.548-.266-.472-.66.704-3.716 4.06-4.838 7.066-4.838 1.537 0 3.547.41 4.758 1.574 1.538 1.436 1.392 3.352 1.392 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.248.63-.01.839l-2.43 2.099z"/>
      </svg>
    ),
  },
  {
    name: '3M',
    color: '#FF0000',
    bg: '#fff0f0',
    svg: (
      <svg viewBox="0 0 40 20" width="36" height="20">
        <text x="0" y="17" fontSize="18" fontWeight="900" fontFamily="Arial" fill="#FF0000">3M</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    color: '#737373',
    bg: '#f3f3f3',
    svg: (
      <svg viewBox="0 0 21 21" width="22" height="22">
        <rect x="0" y="0" width="10" height="10" fill="#F25022"/>
        <rect x="11" y="0" width="10" height="10" fill="#7FBA00"/>
        <rect x="0" y="11" width="10" height="10" fill="#00A4EF"/>
        <rect x="11" y="11" width="10" height="10" fill="#FFB900"/>
      </svg>
    ),
  },
  {
    name: 'IBM',
    color: '#006699',
    bg: '#e6f0f7',
    svg: (
      <svg viewBox="0 0 60 20" width="44" height="16">
        <text x="0" y="16" fontSize="16" fontWeight="900" fontFamily="Arial" fill="#006699" letterSpacing="2">IBM</text>
      </svg>
    ),
  },
  {
    name: 'Wipro',
    color: '#341762',
    bg: '#f0ecf8',
    svg: (
      <svg viewBox="0 0 60 20" width="48" height="16">
        <text x="0" y="15" fontSize="13" fontWeight="bold" fontFamily="Arial" fill="#341762">WIPRO</text>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    color: '#00A1E0',
    bg: '#e6f6fc',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#00A1E0">
        <path d="M10.058 4.293c.862-.878 2.058-1.424 3.383-1.424 1.761 0 3.299.977 4.116 2.426a5.65 5.65 0 0 1 2.186-.437c3.128 0 5.663 2.557 5.663 5.714s-2.535 5.714-5.663 5.714c-.378 0-.747-.04-1.1-.113a3.99 3.99 0 0 1-3.476 2.034 3.97 3.97 0 0 1-1.748-.403A4.993 4.993 0 0 1 9 20.286c-1.84 0-3.438-.998-4.296-2.48a4.696 4.696 0 0 1-.827.074C1.737 17.88 0 16.133 0 13.98c0-1.449.769-2.72 1.924-3.43a5.033 5.033 0 0 1-.162-1.272c0-2.76 2.22-4.999 4.96-4.999a4.93 4.93 0 0 1 3.336 1.014z"/>
      </svg>
    ),
  },
  {
    name: 'Oracle',
    color: '#C74634',
    bg: '#fdf0ee',
    svg: (
      <svg viewBox="0 0 70 20" width="54" height="16">
        <text x="0" y="15" fontSize="13" fontWeight="bold" fontFamily="Arial" fill="#C74634">ORACLE</text>
      </svg>
    ),
  },
  {
    name: 'Adobe',
    color: '#FF0000',
    bg: '#fff0f0',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#FF0000">
        <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm6.23 0H24v21.248z"/>
      </svg>
    ),
  },
  {
    name: 'Nvidia',
    color: '#76B900',
    bg: '#f2f9e6',
    svg: (
      <svg viewBox="0 0 70 20" width="56" height="16">
        <text x="0" y="15" fontSize="13" fontWeight="bold" fontFamily="Arial" fill="#76B900">NVIDIA</text>
      </svg>
    ),
  },
  {
    name: 'Genpact',
    color: '#E11B22',
    bg: '#fff0f0',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <circle cx="12" cy="12" r="10" fill="#E11B22"/>
        <text x="12" y="16" fontSize="9" fontWeight="bold" fontFamily="Arial" fill="white" textAnchor="middle">GEN</text>
      </svg>
    ),
  },
  {
    name: 'Fractal',
    color: '#E85D26',
    bg: '#fff3ee',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#E85D26"/>
        <text x="12" y="16" fontSize="8" fontWeight="bold" fontFamily="Arial" fill="white" textAnchor="middle">FRAC</text>
      </svg>
    ),
  },
  {
    name: 'Sprinklr',
    color: '#6B3FA0',
    bg: '#f3eefb',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <circle cx="12" cy="12" r="10" fill="#6B3FA0"/>
        <text x="12" y="16" fontSize="7" fontWeight="bold" fontFamily="Arial" fill="white" textAnchor="middle">SPNKLR</text>
      </svg>
    ),
  },
  {
    name: 'Capgemini',
    color: '#0070AD",',
    bg: '#e6f3fb',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <circle cx="12" cy="12" r="10" fill="#0070AD"/>
        <text x="12" y="16" fontSize="8" fontWeight="bold" fontFamily="Arial" fill="white" textAnchor="middle">CAP</text>
      </svg>
    ),
  },
  {
    name: 'Tech Mahindra',
    color: '#BA0C2F',
    bg: '#fdeef1',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#BA0C2F"/>
        <text x="12" y="15" fontSize="6" fontWeight="bold" fontFamily="Arial" fill="white" textAnchor="middle">TECH M</text>
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