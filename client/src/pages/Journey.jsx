import React, { useEffect, useState } from 'react';
import { Rocket, Star, Users, Award, TrendingUp, Flag } from 'lucide-react';

const timelineData = [
  { year: "2021", title: "The Humble Beginning", desc: "Digidonar ki shuruat 2 logo ki team ke saath ek chote se kamre mein hui. Humara maqsad tha communication ko democratize karna.", icon: <Rocket className="text-white" size={24} />, color: "bg-[#0D66BA]" },
  { year: "2022", title: "1,000+ Happy Clients", desc: "Sirf ek saal mein humne 1,000 se zyada small businesses ko connect kiya. Humne apna pehla official office Noida mein setup kiya.", icon: <Users className="text-white" size={24} />, color: "bg-[#1CB48D]" },
  { year: "2023", title: "WhatsApp API Launch", desc: "Market ki demand ko dekhte huye humne WhatsApp Business API solutions launch kiye, jo hamara ab tak ka sabse bada hit raha.", icon: <Star className="text-white" size={24} />, color: "bg-[#44BBDB]" },
  { year: "2024", title: "Going International", desc: "Humne global boundaries cross ki aur Southeast Asia mein apni services expand ki. Aaj hum 50+ experts ki team hain.", icon: <TrendingUp className="text-white" size={24} />, color: "bg-slate-900" },
  { year: "2026", title: "Future of AI Communication", desc: "Ab hum AI-driven automated communication par kaam kar rahe hain taaki har business 24/7 bina kisi manual effort ke grow kar sake.", icon: <Flag className="text-white" size={24} />, color: "bg-[#0D66BA]" }
];

const stats = [
  { label: "Happy Clients", value: 5000 },
  { label: "Messages Sent", value: 1200000 },
  { label: "Team Members", value: 100 },
  { label: "Cities Reached", value: 190 }
];

const Journey = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => prev.map((count, i) => {
        if (count < stats[i].value) return count + Math.ceil(stats[i].value / 100);
        return stats[i].value;
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-20 bg-slate-50 text-center px-6">
        <h1 className="text-[#0D66BA] font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Timeline</h1>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
          The Journey of <span className="text-[#1CB48D]">Digidonar</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Ek chote se idea se lekar India ke leading CPaaS platform tak ka safar. Humne har din kuch naya seekha aur apne clients ke bharose ko jeeta.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0D66BA] to-[#1CB48D] -translate-x-1/2 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {timelineData.map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-up`}>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-105 transition-transform duration-500 relative group">
                  <span className="text-4xl font-black text-slate-100 absolute top-4 right-8 transition-all group-hover:text-[#1CB48D]">{item.year}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </div>
              <div className="relative z-10 flex items-center justify-center">
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-blue-200 border-4 border-white animate-pulse`}>
                  {item.icon}
                </div>
              </div>
              <div className="w-full md:w-1/2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-4xl font-black">{counters[i].toLocaleString()}</h3>
              <p className="text-gray-300 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fade-up Animation */}
      <style>{`
        .animate-fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Journey;
