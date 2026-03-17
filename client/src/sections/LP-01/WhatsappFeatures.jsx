import { useState } from "react";
import imgPayment from '../../assets/LP01/paymentconfimations.png';
import imgAutomations from '../../assets/LP01/automations.png';
import imgVoice from '../../assets/LP01/voice_call.png';
import imgMgsTemplate from '../../assets/LP01/promotional_1.png';
import imgProduct from '../../assets/LP01/marketing.png';
import imgMultiProduct from '../../assets/LP01/multi_product.png';

const tabs = [
  {
    id: "payments",
    label: "Payments",
    title: "Payment collection",
    description:
      "Offer seamless in-thread payments on WhatsApp to create an end-to-end purchase journey. Available in India and Brazil.",
    image: imgPayment,
    accent: "from-teal-50 to-emerald-50",
    dot: "bg-teal-400",
  },
  {
    id: "flows",
    label: "Flows",
    title: "Automated flows",
    description:
      "Build rich, interactive journeys inside WhatsApp. Guide users through multi-step experiences without ever leaving the chat.",
    image: imgAutomations,
    accent: "from-blue-50 to-indigo-50",
    dot: "bg-blue-400",
  },
  {
    id: "voice",
    label: "Voice calls",
    title: "Voice calls",
    description:
      "Enable high-quality voice calls directly within WhatsApp to provide real-time support and boost customer satisfaction.",
    image: imgVoice,
    accent: "from-purple-50 to-pink-50",
    dot: "bg-purple-400",
  },
  {
    id: "templates",
    label: "Message templates",
    title: "Message templates",
    description:
      "Send pre-approved, personalised messages at scale — from order confirmations to promotional alerts — with rich media support.",
    image: imgMgsTemplate,
    accent: "from-orange-50 to-amber-50",
    dot: "bg-orange-400",
  },
  {
    id: "product",
    label: "Product messages",
    title: "Product messages",
    description:
      "Showcase individual products with images, descriptions, and prices directly inside a WhatsApp conversation for a frictionless shopping experience.",
    image: imgProduct,
    accent: "from-rose-50 to-pink-50",
    dot: "bg-rose-400",
  },
  {
    id: "multiproduct",
    label: "Multi-product messages",
    title: "Multi-product messages",
    description:
      "Send curated product catalogues in a single message. Let customers browse, select, and add multiple items to cart without leaving WhatsApp.",
    image: imgMultiProduct,
    accent: "from-cyan-50 to-teal-50",
    dot: "bg-cyan-400",
  },
  {
    id: "encryption",
    label: "End-to-end encryption",
    title: "End-to-end encryption",
    description:
      "Every message, file, and transaction is secured with end-to-end encryption — ensuring your customers' data stays private and protected.",
    image: imgPayment,
    accent: "from-green-50 to-teal-50",
    dot: "bg-green-400",
  },
];

export default function WhatsAppFeatures() {
  const [active, setActive] = useState("payments");
  const current = tabs.find((t) => t.id === active);

  return (
    <section className="py-20 px-6 bg-white font-sans overflow-hidden">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl font-extrabold text-slate-800 leading-tight mb-4 tracking-tight">
          Reach 2 Billion Users on Their{" "}
          <span className="text-teal-600">Preferred Channel</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Delight your customers with dynamic WhatsApp messaging features to elevate your interactions
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-1 bg-slate-100 rounded-full px-2 py-1.5 flex-wrap justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onMouseEnter={() => setActive(tab.id)}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 whitespace-nowrap ${
                active === tab.id
                  ? "bg-slate-800 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-700 hover:bg-white"
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

            {/* Floating PNG — no card frame, just the image */}
            <img
              src={current.image}
              alt={current.title}
              className="relative z-10 w-full max-w-[420px] h-auto max-h-[380px] object-contain drop-shadow-2xl"
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
                : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
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