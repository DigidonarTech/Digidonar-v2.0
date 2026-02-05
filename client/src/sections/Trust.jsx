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


      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* LEFT COLUMN - Social Proof Mesh (Takes 7 Cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">

          {/* Animated Decorative Background Item */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 blur-[80px] rounded-full animate-pulse"></div>

          {/* Google Rating - Floating Glass Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[2rem] shadow-xl flex flex-col items-center justify-center text-center group transition-all"
          >
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-4 group-hover:rotate-12 transition-transform">
              <svg width="32" height="32" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.82 2.43 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.5 24c0-1.57-.14-3.09-.41-4.57H24v9.02h12.7c-.55 2.97-2.21 5.49-4.7 7.18l7.98 6.19C43.89 38.02 46.5 31.56 46.5 24z" />
                <path fill="#FBBC05" d="M10.54 28.41c-.48-1.45-.76-2.99-.76-4.41s.27-2.96.76-4.41l-7.98-6.19C.92 16.06 0 19.96 0 24c0 4.04.92 7.94 2.56 11.22l7.98-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.98-6.19c-2.21 1.49-5.03 2.37-7.93 2.37-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
            </div>
            <h4 className="text-5xl font-black text-slate-900 mb-1">4.9</h4>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FBBF24" color="#FBBF24" />)}
            </div>
            <p className="text-slate-600 font-semibold text-sm">1,500+ Happy Reviews</p>
          </motion.div>

          {/* Quick Stats - Simple Text Mesh */}
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

          {/* Testimonials Carousel - Spans full width of left mesh */}
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
                {/* Quote Icon */}
                <span className="absolute top-6 right-10 text-slate-100 font-serif text-8xl pointer-events-none">“</span>

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

            {/* Dots for navigation */}
            <div className="flex gap-2 mt-6 justify-center">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setActive(idx)} className={`h-1.5 rounded-full transition-all ${idx === active ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - The Award Showcase (Takes 5 Cols) */}
        <motion.div
          className="lg:col-span-5 relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Award Card with "Trophy" feel */}
          <div className="relative bg-slate-900 rounded-[3rem] p-2 overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)]">

            {/* Animated Shine Effect */}
            <motion.div
              animate={{ x: [-500, 500] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-40 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />

            <div className="bg-slate-800 rounded-[2.8rem] p-6 md:p-10 flex flex-col items-center text-center border border-white/5">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-20 animate-pulse"></div>
                <Award className="relative text-amber-400" size={64} />
              </div>

              <h5 className="text-white text-2xl font-bold mb-2">User's Choice 2021</h5>
              <p className="text-slate-400 text-sm mb-8 uppercase tracking-widest font-semibold">Digidonar Teleservices</p>

              <img
                src={awardBanner}
                alt="Award"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />

              <div className="mt-8 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-amber-200 font-medium">
                Recognized by Justdial
              </div>
            </div>
          </div>

          {/* Floating Badge on Award */}
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