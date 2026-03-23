import React, { useState, useEffect } from 'react';

// --- ANIMATED HEADING COMPONENT ---
const services = [
  { static: 'Bulk SMS',          animated: 'Solutions'      },
  { static: 'WhatsApp Business', animated: 'API made easy'  },
  { static: 'Voice & IVR',       animated: 'Services'       },
];

const AnimatedHeading = () => {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState([]);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const text = services[index].animated;

    if (phase === 'typing') {
      if (chars.length < text.length) {
        const t = setTimeout(() => setChars(text.slice(0, chars.length + 1).split('')), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('erasing'), 1800);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'erasing') {
      if (chars.length > 0) {
        const t = setTimeout(() => setChars(chars.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setIndex(i => (i + 1) % services.length);
        setPhase('typing');
      }
    }
  }, [chars, phase, index]);

  return (
    <>
      <style>{`
        @keyframes charIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        .grad-char {
          display: inline-block;
          background: linear-gradient(90deg, #06b6d4, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: charIn 0.15s ease forwards;
        }
        .cursor {
          display: inline-block;
          border-right: 3px solid #06b6d4;
          margin-left: 2px;
          animation: blink 0.7s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      {services[index].static}
      <br />
      <span>
        {chars.map((ch, i) => (
          <span key={`${index}-${i}`} className="grad-char">
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
        <span className="cursor">&nbsp;</span>
      </span>
    </>
  );
};
// --- END ANIMATED HEADING COMPONENT ---

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    service: 'Choose Services',
    message: '',
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
      setFormData({
        firstName: '', lastName: '', email: '', contact: '',
        service: 'Choose Services', message: '',
      });
    } catch (error) {
      console.error('Error!', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100">

      {/* VIDEO MODAL */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition"
            >
              ✕
            </button>

            {/* iframe */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/a4dPkuv7PLw?autoplay=1"
                title="Digidonar Demo"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 lg:pt-28 lg:pb-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side Text */}
          <div className="pt-6 lg:pt-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-indigo-950 mb-6 lg:mb-8">
              <AnimatedHeading />
            </h1>

            <p className="text-base lg:text-lg text-slate-600 max-w-xl mb-8 lg:mb-10 leading-relaxed">
              Reach your customers on the world's most popular messaging app.
              Automate support, drive sales, and build loyalty with Digidonar's verified API solution.
            </p>

            <div className="flex flex-wrap gap-4">
            
               <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 bg-indigo-950 text-white px-7 lg:px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition"
              >
                {/* Play icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
                Watch Demo
              </button>

              <a  href="https://drive.google.com/file/d/17Mhj5fWWS6AvisIDtEBC-aBLGPlgt0hl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-300 text-slate-700 px-7 lg:px-8 py-3 rounded-md font-semibold hover:bg-white transition inline-block"
              >
                View Docs
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg shadow-slate-200/60 border border-slate-100">
            <h3 className="text-lg font-semibold mb-6 text-indigo-950">
              Request a Consultation
            </h3>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 lg:gap-5">

              <input
                type="text" name="firstName" required
                value={formData.firstName} onChange={handleChange}
                placeholder="First Name*"
                className="col-span-1 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />
              <input
                type="text" name="lastName" required
                value={formData.lastName} onChange={handleChange}
                placeholder="Last Name*"
                className="col-span-1 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />
              <input
                type="email" name="email" required
                value={formData.email} onChange={handleChange}
                placeholder="Work Email*"
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />
              <input
                type="tel" name="contact" required
                value={formData.contact} onChange={handleChange}
                placeholder="Contact*"
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
              />

              {/* ✅ Fixed: all options now have unique, correct values */}
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="col-span-2 p-3.5 border border-slate-200 rounded-md text-sm text-slate-500 outline-none"
              >
                <option disabled value="Choose Services">Choose Services</option>
                <option value="Bulk SMS">Bulk SMS</option>
                <option value="OTP SMS">OTP SMS</option>
                <option value="RCS SMS">RCS SMS</option>
                <option value="Toll Free Number">Toll Free Number</option>
                <option value="IVR Number">IVR Number</option>
                <option value="WhatsApp API & ChatBot">WhatsApp API & ChatBot</option>
                <option value="Automations">Automations</option>
                <option value="Auto Dialer">Auto Dialer</option>
                <option value="Missed Call">Missed Call</option>
                <option value="Voice Call">Voice Call</option>
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
                className="col-span-2 mt-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3.5 rounded-md transition uppercase text-sm tracking-wide disabled:opacity-50"
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