import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

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

  // Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-slate-900 font-extrabold text-4xl md:text-5xl tracking-tight mb-3">
          Trusted by <span className="text-gradient bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Top Brands</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
          Thousands of businesses rely on Digidonar for high-speed messaging & automation.
        </p>
      </div>

      {/* Brand Marquee */}
      <div className="overflow-hidden mb-20">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="h-12 md:h-14 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              alt="brand logo"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left: Testimonials Carousel */}
        <div className="relative min-h-[300px] md:min-h-[400px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out
                ${i === active ? 'opacity-100 translate-x-0 z-20 scale-100' : 'opacity-0 -translate-x-10 z-10 scale-95'}`}
            >
              <div className="bg-gradient-to-tr from-white/80 to-white/60 p-10 md:p-12 rounded-3xl shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group relative overflow-hidden backdrop-blur-sm border border-white/20">
                <p className="text-lg md:text-xl text-slate-900 italic mb-8">
                  “{t.content}”
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-4 mt-6">
                  <div className="w-14 h-14 bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-900">{t.name}</p>
                    <p className="text-sm text-emerald-600 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === active ? 'bg-emerald-600' : 'bg-slate-300'
                }`}
                onClick={() => setActive(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right: Google Rating Card */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <svg width="28" height="28" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.82 2.43 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.5 24c0-1.57-.14-3.09-.41-4.57H24v9.02h12.7c-.55 2.97-2.21 5.49-4.7 7.18l7.98 6.19C43.89 38.02 46.5 31.56 46.5 24z" />
                <path fill="#FBBC05" d="M10.54 28.41c-.48-1.45-.76-2.99-.76-4.41s.27-2.96.76-4.41l-7.98-6.19C.92 16.06 0 19.96 0 24c0 4.04.92 7.94 2.56 11.22l7.98-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.98-6.19c-2.21 1.49-5.03 2.37-7.93 2.37-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <p className="font-bold text-lg text-slate-900">4.8 / 5</p>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#FFC107" color="#FFC107" />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Rated on Google Reviews
            </p>
            {/* Hover Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-30 transition-opacity blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
