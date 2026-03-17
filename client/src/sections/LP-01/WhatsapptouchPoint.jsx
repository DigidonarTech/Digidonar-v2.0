import { useState } from "react";
import imgPromotional from '../../assets/LP01/promotional_1.png';
import imgTransactional from '../../assets/LP01/paymentconfimations.png';
import imgAppointment from '../../assets/LP01/appointment.png';
import imgOtps from '../../assets/LP01/OTP.png';
import imgOrder from '../../assets/LP01/order_confirmations.png';
import imgSurvey from '../../assets/LP01/survey.png';

const tabs = [
  {
    id: "promotional",
    label: "Promotional Messages",
    title: "Promotional Messages",
    description:
      "Drive sales and engagement with personalized promotional campaigns. Send offers, discounts, and product launches directly to your customers on WhatsApp.",
    image: imgPromotional,
    accent: "from-orange-50 to-amber-50",
    dot: "bg-orange-400",
  },
  {
    id: "transactional",
    label: "Transactional Messages",
    title: "Transactional Messages",
    description:
      "Keep customers informed at every step with automated transactional messages — order confirmations, shipping updates, and payment receipts delivered instantly.",
    image: imgTransactional,
    accent: "from-teal-50 to-emerald-50",
    dot: "bg-teal-400",
  },
  {
    id: "appointment",
    label: "Appointment Booking",
    title: "Appointment Booking",
    description:
      "Let customers book, reschedule, or cancel appointments directly on WhatsApp — no forms, no calls, no friction. Reduce no-shows with automated reminders.",
    image: imgAppointment,
    accent: "from-blue-50 to-indigo-50",
    dot: "bg-blue-400",
  },
  {
    id: "otps",
    label: "OTPs",
    title: "OTPs",
    description:
      "Deliver one-time passwords instantly via WhatsApp for secure logins, transactions, and verifications — with higher open rates than SMS.",
    image: imgOtps,
    accent: "from-purple-50 to-violet-50",
    dot: "bg-purple-400",
  },
  {
    id: "orders",
    label: "Orders",
    title: "Orders",
    description:
      "Let customers browse products, place orders, and track them in real time — all within a WhatsApp conversation. No app download required.",
    image: imgOrder,
    accent: "from-cyan-50 to-sky-50",
    dot: "bg-cyan-400",
  },
  {
    id: "surveys",
    label: "Surveys",
    title: "Surveys",
    description:
      "Gather valuable feedback from customers with simple and effective surveys via WhatsApp.",
    image: imgSurvey,
    accent: "from-rose-50 to-pink-50",
    dot: "bg-rose-400",
  },
];

export default function WhatsAppTouchpoint() {
  const [active, setActive] = useState("promotional");
  const current = tabs.find((t) => t.id === active);

  return (
    <section className="py-20 px-6 bg-slate-50 font-sans overflow-hidden">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl font-extrabold text-slate-800 leading-tight mb-4 tracking-tight">
          WhatsApp for every{" "}
          <span className="text-teal-600">touchpoint</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Explore how WhatsApp is powering engagement, support, and conversions across the customer journey
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-1 bg-white rounded-full px-2 py-1.5 shadow-sm flex-wrap justify-center border border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onMouseEnter={() => setActive(tab.id)}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 whitespace-nowrap ${
                active === tab.id
                  ? "bg-slate-800 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[460px]">

          {/* Left: text */}
          <div key={current.id + "_text"} className="animate-fadeIn px-4">

            {/* Pill tag */}
            <div className="flex items-center gap-2 mb-5">
              <div className={`w-2 h-2 rounded-full ${current.dot}`} />
              <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                WhatsApp Feature
              </span>
            </div>

            <h3 className="text-5xl font-extrabold text-slate-800 leading-tight mb-6 tracking-tight">
              {current.title}
            </h3>
            <p className="text-slate-500 text-[16px] leading-relaxed mb-8 max-w-md">
              {current.description}
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold text-[14px] hover:gap-3 transition-all duration-150 group"
            >
              Learn more
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
                viewBox="0 0 16 16" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* Right: floating PNG on gradient blob */}
          <div key={current.id + "_img"} className="animate-fadeIn flex items-center justify-center relative">

            {/* Gradient background blob */}
            <div
              className={`absolute inset-0 mx-auto my-auto w-[380px] h-[380px] rounded-full bg-gradient-to-br ${current.accent} blur-2xl opacity-80`}
            />

            {/* Floating transparent PNG */}
            <img
              src={current.image}
              alt={current.title}
              className="relative z-10 w-full max-w-[420px] h-auto max-h-[380px] object-contain"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))" }}
            />
          </div>

        </div>
      </div>

      {/* Tab indicator dots */}
      <div className="flex justify-center gap-2 mt-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full transition-all duration-300 ${
              active === tab.id
                ? `w-6 h-2 ${tab.dot}`
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out both;
        }
      `}</style>
    </section>
  );
}