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

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle background accent blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <div className="relative text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          Trusted by <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Leading Brands</span>
        </h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
          Powering high-velocity messaging & intelligent automation for thousands of growing businesses.
        </p>
      </div>

      {/* Brand Marquee – kept exactly as premium version */}
      <div className="relative mb-20 md:mb-28 overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left: Client Testimonials Carousel */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-medium italic mb-10 relative z-10">
                  “{t.content}”
                </p>

                <div className="flex items-center gap-5 relative z-10">
                  {/* 
              AVATAR PLACEHOLDER
              Yahan real profile photo daal dena
              Example:
              import rajeshAvatar from '../assets/testimonials/rajesh.jpg';
              <img 
                src={rajeshAvatar} 
                alt={t.name} 
                className="w-16 h-16 rounded-2xl object-cover shadow-lg group-hover:scale-110 transition-transform duration-500" 
              />
            */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {t.name[0]} {/* Yeh temporary hai – remove after adding image */}
                  </div>
                  <div>
                    <p className="font-bold text-xl text-slate-900">{t.name}</p>
                    <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

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

        {/* Right: Justdial User's Choice Award Card */}
        <div className="relative group">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_50px_120px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 transform hover:-translate-y-4 overflow-hidden">
            {/* Dark glass overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10">
              {/* 
          AWARD BANNER PLACEHOLDER
          Yahan full award banner image daal dena (jo tune screenshot bheja tha)
          Example:
          import awardBanner from '../assets/awards/justdial-users-choice-2021.jpg';
          
          <img 
            src={awardBanner} 
            alt="Justdial User's Choice 2021 - Digidonar Teleservices" 
            className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700" 
          />
          
          Agar image daal dega to neeche ka saara content (badge, text, stars) hata sakta hai ya overlay kar sakta hai
        */}

              {/* Agar image nahi daalna chahta abhi, to yeh fallback design rahega */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-4">
                  <div className="w-28 h-32 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-xl rotate-12 shadow-2xl flex items-center justify-center text-center p-4">
                    <div className="transform -rotate-12">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-900">Justdial</p>
                      <p className="text-lg font-black text-white">USER'S CHOICE</p>
                      <p className="text-sm font-bold text-slate-900">2021</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200">
                  We Are Already A
                </h3>
                <p className="text-xl font-bold mt-1 text-amber-200">USER'S CHOICE</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-2xl font-bold">Digidonar Teleservices</p>
                <p className="text-lg text-amber-100/90 mt-1">Indira Nagar, Lucknow</p>
              </div>

              <div className="flex justify-center gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={32}
                    fill="#FBBF24"
                    color="#FBBF24"
                    className="drop-shadow-md"
                  />
                ))}
              </div>

              <p className="text-center text-lg md:text-xl font-medium text-amber-100/90 italic">
                Time To Make Your Choice Right – We Are Already Trusted!
              </p>
            </div>

            {/* Hover shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>

      </div>

      {/* Marquee animation CSS (add to globals or tailwind config if not already) */}
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