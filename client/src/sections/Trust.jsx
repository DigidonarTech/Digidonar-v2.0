import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import '../../src/index.css'; // Ensure global styles are imported

import logo1 from '../assets/bazaz.jpg';
import logo2 from '../assets/kia.png';
import logo3 from '../assets/ola.png';
import logo4 from '../assets/zomato2708.jpg';
import logo5 from '../assets/rejency.webp';

const logos = [logo1, logo2, logo3, logo4, logo5];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, RetailHub',
    content:
      'Digidonar ki Bulk SMS service se hamari sales 40% badh gayi hai. Delivery instant hai aur dashboard bahut user-friendly hai.',
  },
  {
    name: 'Anjali Sharma',
    role: 'Marketing Head, EduTech',
    content:
      'WhatsApp API integration ne hamara customer support automate kar diya. Best service in the market!',
  },
  {
    name: 'Vikram Singh',
    role: 'CTO, TechWave',
    content:
      'Voice & IVR integration se humari customer experience bahut smooth ho gayi. Highly recommend Digidonar!',
  },
];

const TrustSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000); // थोड़ा slow & premium feel के लिए
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle background accent blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Heading - more premium typography */}
      <div className="relative text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          Trusted by <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Leading Brands</span>
        </h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
          Powering high-velocity messaging & intelligent automation for thousands of growing businesses.
        </p>
      </div>

      {/* Premium Marquee – slower, pause on hover, better spacing */}
      <div className="relative mb-20 md:mb-28 overflow-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap gap-20 md:gap-28 hover:pause-marquee">
          {logos.concat(logos).map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 group relative"
            >
              <img
                src={logo}
                className="h-14 md:h-16 object-contain grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                alt="Trusted brand logo"
              />
              {/* subtle shine underline on hover */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left: Testimonials – glassmorphism + depth */}
        <div className="relative min-h-[380px] md:min-h-[420px] perspective-1000">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ease-out transform-gpu
                ${i === active 
                  ? 'opacity-100 rotate-x-0 rotate-y-0 scale-100 z-20' 
                  : 'opacity-0 -translate-x-8 rotate-y-6 scale-95 z-10'}
              `}
            >
              <div className="h-full bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] p-8 md:p-10 lg:p-12 transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.18)] group relative overflow-hidden">
                {/* subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-medium italic mb-10 relative z-10">
                  “{t.content}”
                </p>

                <div className="flex items-center gap-5 relative z-10">
                  {/* Avatar placeholder – you can add real images later */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-xl text-slate-900">{t.name}</p>
                    <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Modern dots – bigger & nicer */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-sm
                  ${idx === active 
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-500 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Right: Premium Google Rating Card */}
        <div className="relative group">
          <div className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-3xl p-10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 transform hover:-translate-y-3">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Google logo */}
                <svg width="36" height="36" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.82 2.43 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.5 24c0-1.57-.14-3.09-.41-4.57H24v9.02h12.7c-.55 2.97-2.21 5.49-4.7 7.18l7.98 6.19C43.89 38.02 46.5 31.56 46.5 24z" />
                  <path fill="#FBBC05" d="M10.54 28.41c-.48-1.45-.76-2.99-.76-4.41s.27-2.96.76-4.41l-7.98-6.19C.92 16.06 0 19.96 0 24c0 4.04.92 7.94 2.56 11.22l7.98-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.98-6.19c-2.21 1.49-5.03 2.37-7.93 2.37-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                <div>
                  <p className="text-4xl font-extrabold text-slate-900 tracking-tight">4.8</p>
                  <p className="text-sm text-slate-500 font-medium">out of 5</p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={28}
                    fill="#FBBF24"
                    color="#FBBF24"
                    className="drop-shadow-sm"
                  />
                ))}
              </div>
            </div>

            <p className="text-slate-600 text-lg font-medium">
              Based on 1,200+ verified Google Reviews
            </p>

            {/* Shine / gradient hover effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or tailwind.config (for marquee) */}
      {/*
        @keyframes marquee-slow {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 35s linear infinite;
        }
        .pause-marquee:hover .animate-marquee-slow {
          animation-play-state: paused;
        }
      */}
    </section>
  );
};

export default TrustSection;