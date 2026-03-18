import React, { useState } from 'react';

const Hero = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // --- LOGIC START ---
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', contact: '', service: 'Choose Services', message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL || process.env.REACT_APP_SCRIPT_URL;
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });
      alert('Thank you! Your request has been sent.');
      setFormData({ firstName: '', lastName: '', email: '', contact: '', service: 'Choose Services', message: '' });
    } catch (error) {
      console.error('Error!', error);
    }
    setLoading(false);
  };
  // --- LOGIC END ---

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

            {/* FORM UPDATED WITH ONSUBMIT AND VALUE BINDING */}
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 lg:gap-5">

              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className="col-span-1 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name*"
                className="col-span-1 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Work Email*"
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              <input
                type="text"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact*"
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm text-slate-500 outline-none"
              >
                <option disabled value="Choose Services">Choose Services</option>
                <option value="Whatsapp API">Whatsapp API</option>
                <option value="Automations">Automations</option>
                <option value="Chat Bot">Chat Bot</option>
                <option value="Voice Call">Voice Call</option>
                <option value="Bulk SMS">Bulk SMS</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="IVR">IVR</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your needs"
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm h-28 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="col-span-2 mt-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3.5 rounded-md hover:bg-orange-600 transition uppercase text-sm tracking-wide disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;