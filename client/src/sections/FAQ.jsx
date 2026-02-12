import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    q: "What is DLT Registration and is it mandatory?",
    a: "As per TRAI guidelines, DLT registration is compulsory for Bulk SMS services in India. Our team will guide you through the entire registration process."
  },
  {
    q: "Can I integrate WhatsApp API with my CRM?",
    a: "Absolutely! Our APIs are developer-friendly. You can integrate them with Zoho, Salesforce, or any custom CRM in just 5 minutes."
  },
  {
    q: "Is the SMS delivery report real-time?",
    a: "Yes, as soon as an SMS is delivered, you get an instant status update (Delivered/Failed) on your dashboard."
  },
  {
    q: "Is Digidonar support available 24/7?",
    a: "Yes, our support team is available 24/7 for all Business and Professional plan users."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#1CB48D] font-bold text-sm uppercase tracking-widest mb-4">Your Questions, Our Answers</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-500 max-w-xl mx-auto">If your question isn't listed here, please contact our sales team.</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-3xl transition-all duration-500 
                ${openIndex === i ? 'border-gradient shadow-lg bg-blue-50/40' : 'border-slate-100 hover:border-slate-300 hover:shadow-sm bg-slate-50'}`}
              style={{
                background: openIndex === i 
                  ? 'linear-gradient(135deg, #0D66BA 0%, #1CB48D 100%)' 
                  : ''
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left group"
              >
                <span className={`font-bold text-slate-900 md:text-lg transition-colors duration-300 ${openIndex === i ? 'text-white' : ''}`}>
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="text-white flex-shrink-0 transition-transform duration-300 group-hover:rotate-180" size={20} />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0 transition-transform duration-300 group-hover:rotate-45" size={20} />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-700 md:text-lg leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
