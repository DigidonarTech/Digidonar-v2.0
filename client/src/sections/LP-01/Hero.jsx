import React, { useState } from 'react';

const Hero = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 lg:pt-28 lg:pb-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side Text */}
          <div className="pt-6 lg:pt-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-indigo-950 mb-6 lg:mb-8">
              WhatsApp Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                API made easy
              </span>
            </h1>

            <p className="text-base lg:text-lg text-slate-600 max-w-xl mb-8 lg:mb-10 leading-relaxed">
              Reach your customers on the world's most popular messaging app. 
              Automate support, drive sales, and build loyalty with Digidonar's verified API solution.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-950 text-white px-7 lg:px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition">
                Get Started
              </button>
              <button className="border border-slate-300 text-slate-700 px-7 lg:px-8 py-3 rounded-md font-semibold hover:bg-white transition">
                View Docs
              </button>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg shadow-slate-200/60 border border-slate-100">
            
            <h3 className="text-lg font-semibold mb-6 text-indigo-950">
              Request a Consultation
            </h3>

            <form className="grid grid-cols-2 gap-4 lg:gap-5">
              
              <input
                type="text"
                placeholder="First Name*"
                className="col-span-1 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              <input
                type="text"
                placeholder="Last Name*"
                className="col-span-1 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              <input
                type="email"
                placeholder="Work Email*"
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              <input
                type="text"
                placeholder="Contact*"
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              <select className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm text-slate-500 outline-none">
                <option>Choose Services</option>
                <option>Whatsapp API</option>
                <option>Automations</option>
                <option>Chat Bot</option>
                <option>Voice Call</option>
                <option>Bulk SMS</option>
                <option>Email Marketing</option>
                <option>IVR</option>
              </select>

              <textarea
                placeholder="Tell us about your needs"
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm h-28 outline-none"
              />

              <button className="col-span-2 mt-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3.5 rounded-md hover:bg-orange-600 transition uppercase text-sm tracking-wide">
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