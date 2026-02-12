import React, { useEffect } from 'react';
import { Target, Eye, Users, ShieldCheck, Zap, Globe } from 'lucide-react';
import img from '../assets/meet.png';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Reliability",
      desc: "With 99.9% uptime and instant delivery, we ensure your messages are delivered every single time.",
      icon: <ShieldCheck className="text-[#0D66BA]" size={32} />
    },
    {
      title: "Innovation",
      desc: "Always using the latest tech and AI automation tools to make communication smarter.",
      icon: <Zap className="text-[#1CB48D]" size={32} />
    },
    {
      title: "Global Reach",
      desc: "Expanding beyond Uttar Pradesh, we have added over 100+ cities to our network..",
      icon: <Globe className="text-[#44BBDB]" size={32} />
    }
  ];

  const stats = [
    { title: "Messages Sent", value: "10M+" },
    { title: "Happy Clients", value: "5000+" },
    { title: "Countries Covered", value: "190+" },
  ];

  return (
    <div className="pt-24 bg-white relative overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-blue-100 opacity-20 blur-[100px] animate-float"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-green-100 opacity-20 blur-[140px] animate-float" style={{animationDelay: '2s'}}></div>

      {/* Hero / Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[#0D66BA] font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Story</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Empowering Businesses <br />
              <span className="text-[#1CB48D]">Through Seamless Communication</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
             Digidonar began with a simple mission: 
              <span className="font-semibold"> "To enable every business to connect with their customers in just a single click." </span>
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
             Today, we are one of India’s fastest-growing CPaaS platforms, delivering millions of messages daily with unmatched reliability.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0D66BA]/10 via-[#1CB48D]/10 to-[#44BBDB]/10 rounded-[3rem] rotate-6 animate-float"></div>
            <img 
              src={img} 
              alt="Team Working" 
              className="relative rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-10 rounded-[3rem] bg-[#0D66BA] text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
          <Target className="absolute top-10 right-10 opacity-10 group-hover:scale-125 transition-transform duration-700" size={120} />
          <h3 className="text-3xl font-extrabold mb-6">Our Mission</h3>
          <p className="text-blue-100 text-lg leading-relaxed relative z-10">
           To provide businesses of all sizes with the world-class tools used by MNCs. We strive to offer the perfect blend of technology and affordability."
          </p>
        </div>
        <div className="p-10 rounded-[3rem] bg-[#1CB48D] text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
          <Eye className="absolute top-10 right-10 opacity-10 group-hover:scale-125 transition-transform duration-700" size={120} />
          <h3 className="text-3xl font-extrabold mb-6">Our Vision</h3>
          <p className="text-emerald-50 text-lg leading-relaxed relative z-10">
            Empowering businesses to maximize their growth through automation and seamless communication—while we handle the rest.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">What Drives Us?</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Our values guide every decision we make to empower your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-tr from-[#0D66BA]/20 to-[#1CB48D]/20 transition-colors">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h4>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Users className="mx-auto text-[#44BBDB] mb-6" size={48} />
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Built by Experts, Trusted by Thousands</h2>
          <p className="text-gray-500 text-lg mb-10">
            Digidonar is not just a software; it is a team of 50+ experts ensuring every message is delivered securely and instantly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 hover:shadow-xl transition-all">
                <h3 className="text-3xl font-extrabold text-[#0D66BA] mb-2">{s.value}</h3>
                <p className="text-gray-500 font-semibold">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;