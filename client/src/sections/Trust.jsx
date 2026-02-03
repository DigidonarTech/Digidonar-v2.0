import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

import logo1 from '../assets/bazaz.jpg';
import logo2 from '../assets/kia.png';
import logo3 from '../assets/ola.png';
import logo4 from '../assets/zomato2708.jpg';
import logo5 from '../assets/rejency.webp';
import awardBanner from '../../public/82156.gif';
import rajeshAvatar from '../assets/client 2.jpg';
import anjaliAvatar from '../assets/client1_profile.jpg';
import vikramAvatar from '../assets/profile 3.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, RetailHub',
    content:
      'Digidonar ki Bulk SMS service se hamari sales 40% badh gayi hai. Delivery instant hai aur dashboard bahut user-friendly hai.',
    avatar: rajeshAvatar,
  },
  {
    name: 'Anjali Sharma',
    role: 'Marketing Head, EduTech',
    content:
      'WhatsApp API integration ne hamara customer support automate kar diya. Best service in the market!',
    avatar: anjaliAvatar,
  },
  {
    name: 'Vikram Singh',
    role: 'CTO, TechWave',
    content:
      'Voice & IVR integration se humari customer experience bahut smooth ho gayi. Highly recommend Digidonar!',
    avatar: vikramAvatar,
  },
];

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
      {/* Subtle background accent blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <div className="relative text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pb-4">
          Trusted by <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Leading Brands</span>
        </h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
          Powering high-velocity messaging & intelligent automation for thousands of growing businesses.
        </p>
      </div>

      {/* Brand Marquee */}
      <div className="relative mb-16 md:mb-20 overflow-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap gap-20 md:gap-28 hover:pause-marquee">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="flex-shrink-0 group relative">
              <img
                src={logo}
                className="h-14 md:h-16 object-contain grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                alt="Trusted brand logo"
              />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

        {/* LEFT COLUMN - now using items-stretch + same height children */}
        <div className="flex flex-col gap-6 md:gap-8">

          {/* Google Rating Card - compact & same proportion */}
          <div className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden text-center flex-1 min-h-[180px] md:min-h-[220px] flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-3">
                <svg width="28" height="28" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.82 2.43 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.5 24c0-1.57-.14-3.09-.41-4.57H24v9.02h12.7c-.55 2.97-2.21 5.49-4.7 7.18l7.98 6.19C43.89 38.02 46.5 31.56 46.5 24z" />
                  <path fill="#FBBC05" d="M10.54 28.41c-.48-1.45-.76-2.99-.76-4.41s.27-2.96.76-4.41l-7.98-6.19C.92 16.06 0 19.96 0 24c0 4.04.92 7.94 2.56 11.22l7.98-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.98-6.19c-2.21 1.49-5.03 2.37-7.93 2.37-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                <p className="text-4xl md:text-5xl font-extrabold text-slate-900">4.9</p>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <p className="text-sm md:text-base text-slate-600 font-medium">
                1,500+ Google Reviews
              </p>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/8 to-emerald-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </div>

          {/* Testimonials Carousel - main height taker */}
          <div className="relative flex-1 min-h-[300px] md:min-h-[380px] perspective-1000">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-out transform-gpu
            ${i === active
                    ? 'opacity-100 rotate-x-0 rotate-y-0 scale-100 z-20'
                    : 'opacity-0 -translate-x-8 rotate-y-6 scale-95 z-10'}`}
              >
                <div className="h-full bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] p-7 md:p-9 transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.18)] group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <p className="text-lg md:text-xl leading-relaxed text-slate-800 font-medium italic mb-6 md:mb-8 relative z-10">
                    “{t.content}”
                  </p>

                  <div className="flex items-center gap-4 relative z-10">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                    <div>
                      <p className="font-bold text-lg md:text-xl text-slate-900">{t.name}</p>
                      <p className="text-xs md:text-sm font-semibold text-emerald-600 tracking-wide uppercase mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-400 shadow-sm
              ${idx === active
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-500 scale-125'
                      : 'bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Award Card (reference height) */}
        <div className="relative group flex flex-col min-h-[480px] md:min-h-[600px]">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_50px_120px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 transform hover:-translate-y-4 overflow-hidden flex-1 flex flex-col">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-6 md:p-8">
              <img
                src={awardBanner}
                alt="Justdial User's Choice 2021 - Digidonar Teleservices"
                className="w-full max-h-[85%] object-contain rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Hover shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default TrustSection;