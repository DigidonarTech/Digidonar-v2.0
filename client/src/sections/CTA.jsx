import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import ContactModal from '../components/ContactModal';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const salesNumber = "+919214122123";

  return (
    <>
      <section className="relative w-full py-16 md:py-20 overflow-hidden bg-slate-950">

        {/* Floating Background Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px] animate-float opacity-60"></div>
        <div className="absolute -bottom-28 -right-36 w-96 h-96 rounded-full bg-emerald-400/20 blur-[120px] animate-float opacity-60" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.2rem] px-6 md:px-14 py-10 text-center shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)]
                          transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_-20px_rgba(0,0,0,0.5)]">

            {/* Icon */}
            <div className="mx-auto w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#44BBDB] to-[#1CB48D] flex items-center justify-center animate-pulse">
              <Zap size={22} className="text-slate-900" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-snug tracking-tight mb-4">
              Upgrade your business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44BBDB] to-[#1CB48D] animate-gradientShift">
                communication experience
              </span>
            </h2>

            {/* Subheading */}
            <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              Trusted by <span className="text-white font-semibold">10,000+</span> businesses for
              Bulk SMS, WhatsApp API & Voice solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              {/* Modal Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white
                           bg-gradient-to-r from-[#0D66BA] to-[#1CB48D] bg-[length:200%_200%] animate-gradientShift
                           hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-900/30"
              >
                Start Free Trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Call Button */}
              <a
                href={`tel:${salesNumber}`}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20
                           bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>

            {/* Trust Line */}
            <div className="mt-5 flex items-center justify-center gap-2 text-slate-500 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1CB48D]" />
              No credit card required • Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Claim Your Free Trial"
      />
    </>
  );
};

export default CTA;
