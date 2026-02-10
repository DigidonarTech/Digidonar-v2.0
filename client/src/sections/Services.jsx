import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Bulk SMS Solutions",
    path: "/services/bulk-sms", // Matches SERVICE_DATA key
    description: "Send transactional and promotional SMS instantly with 99.9% delivery assurance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    color: "#0D66BA",
    lightColor: "bg-blue-50"
  },
  {
    title: "WhatsApp Business API",
    path: "/services/whatsapp-api", // Matches SERVICE_DATA key
    description: "Engage customers on their favorite messaging app with automated chatbots and alerts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    color: "#1CB48D",
    lightColor: "bg-emerald-50"
  },
  {
    title: "Voice & IVR Services",
    path: "/services/voice-ivr", // Matches SERVICE_DATA key
    description: "Automate your business calls with smart IVR systems and virtual mobile numbers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "#44BBDB",
    lightColor: "bg-cyan-50"
  },
  {
    title: "Email Marketing",
    path: "/services/email-marketing", // Matches SERVICE_DATA key
    description: "Design and blast beautiful email campaigns that land straight in the inbox, not spam.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#EA4335", // Updated to match Email Brand
    lightColor: "bg-red-50"
  },
  {
    title: "RCS Messaging",
    path: "/services/rcs-messaging", // Matches SERVICE_DATA key
    description: "Upgrade your SMS to rich, interactive experiences with branding, buttons, and carousels.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "#4285F4", // Updated to match RCS/Google Brand
    lightColor: "bg-blue-50"
  },
  {
    title: "Smart API Integration",
    path: "/services/smart-api", // Changed from api-integration to smart-api
    description: "Powerful SDKs and REST APIs to integrate communication into your own apps in minutes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "#0F172A",
    lightColor: "bg-slate-100"
  }
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="pt-20 pb-20 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0D66BA] font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-5"
          >
            Powerful Tools for <span className="text-[#1CB48D]">Modern Teams</span>
          </motion.h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to communicate effectively with your customers, all in one integrated dashboard.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={service.path}
                className="group relative h-full p-9 bg-white 
                rounded-3xl border border-gray-200 
                hover:border-transparent 
                hover:shadow-2xl hover:shadow-gray-300/40 
                transition-all duration-500 block overflow-hidden"
              >
                {/* Top Accent Border */}
                <div 
                  className="absolute top-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: service.color }}
                />

                {/* Icon */}
                <div 
                  className={`w-16 h-16 ${service.lightColor} 
                  rounded-2xl flex items-center justify-center mb-7 
                  group-hover:scale-110 group-hover:rotate-3 
                  transition-transform duration-500`}
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>

                <h4 className="text-xl font-extrabold text-slate-900 mb-3">
                  {service.title}
                </h4>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div 
                  className="flex items-center gap-2 text-sm font-black mt-auto uppercase tracking-wider"
                  style={{ color: service.color }}
                >
                  Learn More 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;