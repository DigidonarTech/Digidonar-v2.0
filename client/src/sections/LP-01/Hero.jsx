import React, { useState } from 'react';

const Hero = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* 2. HERO SECTION (Form on Right, Text on Left) */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side Text */}
          <div className="pt-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] text-indigo-950 mb-6">
              WhatsApp Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                API made easy
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed">
              Reach your customers on the world's most popular messaging app. 
              Automate support, drive sales, and build loyalty with Digidonar's verified API solution.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-950 text-white px-8 py-3 rounded-md font-bold hover:bg-slate-800 transition">Get Started</button>
              <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-md font-bold hover:bg-white transition">View Docs</button>
            </div>
          </div>

          {/* Right Side Form (Infobip Style) */}
          <div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-lg font-bold mb-6 text-indigo-950">Request a Consultation</h3>
            <form className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name*" className="col-span-1 p-3 border border-slate-200 rounded text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
              <input type="text" placeholder="Last Name*" className="col-span-1 p-3 border border-slate-200 rounded text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
              <input type="email" placeholder="Work Email*" className="col-span-2 p-3 border border-slate-200 rounded text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
              <input type="text" placeholder="Company*" className="col-span-2 p-3 border border-slate-200 rounded text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
              <select className="col-span-2 p-3 border border-slate-200 rounded text-sm text-slate-500 outline-none">
                <option>Select Country</option>
              </select>
              <textarea placeholder="Tell us about your needs" className="col-span-2 p-3 border border-slate-200 rounded text-sm h-24 outline-none"></textarea>
              <button className="col-span-2 bg-orange-500 text-white font-bold py-3 rounded hover:bg-orange-600 transition uppercase text-sm tracking-widest">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;