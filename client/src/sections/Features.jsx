import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: "Messages Sent", value: 500, suffix: "M+", color: "#0D66BA" },
  { label: "Active Clients", value: 10, suffix: "K+", color: "#1CB48D" },
  { label: "Delivery Rate", value: 99.9, suffix: "%", color: "#44BBDB", decimals: 1 },
  { label: "Support", value: 24, suffix: "/7", color: "#0D66BA" },
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Stats Grid - Cleaner Premium Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group p-7 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity"
                style={{ backgroundColor: stat.color }}
              />

              <h3
                className="relative text-4xl md:text-5xl font-black mb-2 tracking-tight"
                style={{ color: stat.color }}
              >
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.2}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
                ) : "0"}
              </h3>

              <p className="relative text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Why leading enterprises <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D66BA] to-[#1CB48D]">
                choose Digidonar?
              </span>
            </h3>

            <div className="space-y-5">
              {[
                { t: "Tier-1 Connectivity", d: "Direct integration with major operators for lightning-fast delivery.", c: "#0D66BA" },
                { t: "Scalable Infrastructure", d: "Hamara platform lakhon requests ek saath handle kar sakta hai.", c: "#1CB48D" },
                { t: "Developer Friendly APIs", d: "Simple REST APIs jo 5 minute mein integrate ho jati hain.", c: "#44BBDB" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-slate-50 transition-all"
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: item.c }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-sm md:text-base">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Animated Live SaaS Dashboard */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#0D66BA]/20 to-[#1CB48D]/20 rounded-[3rem] blur-2xl"></div>

            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 max-w-md mx-auto animate-[float_6s_ease-in-out_infinite]">

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-bold text-slate-900">Live Delivery Overview</h4>
                <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#1CB48D]/10 text-[#1CB48D] font-bold">
                  <span className="w-2 h-2 bg-[#1CB48D] rounded-full animate-ping"></span>
                  Live
                </span>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border relative overflow-hidden">
                  <p className="text-xs text-gray-500 font-semibold">Today Sent</p>
                  <p className="text-xl font-black text-slate-900">1.2M</p>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#0D66BA] to-[#44BBDB] animate-[load_3s_linear_infinite]"></div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border relative overflow-hidden">
                  <p className="text-xs text-gray-500 font-semibold">Success Rate</p>
                  <p className="text-xl font-black text-[#1CB48D]">99.92%</p>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#1CB48D] to-[#44BBDB] animate-[load_4s_linear_infinite]"></div>
                </div>
              </div>

              {/* Animated Bars (Fake Live Traffic) */}
              <div className="h-36 rounded-2xl bg-gradient-to-r from-[#0D66BA]/10 to-[#44BBDB]/10 border border-dashed border-[#0D66BA]/30 p-4 flex items-end gap-2">
                {[40, 70, 55, 85, 60, 90, 65].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-lg bg-gradient-to-t from-[#0D66BA] to-[#44BBDB] animate-[bar_2s_ease-in-out_infinite]"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Live Progress */}
              <div className="mt-5">
                <p className="text-xs text-gray-500 font-semibold mb-2">Message Queue Processing</p>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-[#1CB48D] to-[#44BBDB] animate-pulse"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
