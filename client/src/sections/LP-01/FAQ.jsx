import { useState } from "react";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What is Digidonar and what services does it offer?",
        a: "Digidonar is India's most reliable business communication platform offering Bulk SMS, WhatsApp Business API, Email Marketing, RCS Messaging, Voice Calls, and Smart API integrations — all from a single unified dashboard.",
      },
      {
        q: "Is DLT registration mandatory for sending SMS?",
        a: "Yes, DLT (Distributed Ledger Technology) registration is mandatory in India for all commercial SMS communications as per TRAI regulations. Digidonar helps you complete DLT registration quickly and guides you through the entire process.",
      },
      {
        q: "How do I get started with Digidonar?",
        a: "Simply sign up for a free account, complete your KYC and DLT registration, add credits, and start sending messages within minutes. Our onboarding team is available 24/7 to assist you.",
      },
    ],
  },
  {
    category: "WhatsApp API",
    items: [
      {
        q: "Can I integrate WhatsApp API with my CRM?",
        a: "Absolutely. Digidonar provides robust REST APIs and pre-built integrations with popular CRMs like Salesforce, HubSpot, Zoho, and Freshworks. You can also use our Zapier integration for no-code automation.",
      },
      {
        q: "What types of WhatsApp messages can I send?",
        a: "You can send template messages (promotional & transactional), interactive messages with buttons and lists, product catalogues, payment collection flows, and real-time two-way conversational messages.",
      },
      {
        q: "How long does WhatsApp Business API approval take?",
        a: "Meta typically approves WhatsApp Business API accounts within 2–5 business days. As an official Meta Business Partner, Digidonar can expedite this process for most clients.",
      },
    ],
  },
  {
    category: "Delivery & Performance",
    items: [
      {
        q: "Is the SMS delivery report real-time?",
        a: "Yes. All delivery reports are updated in real-time on your dashboard. You can also configure webhook callbacks to receive delivery status updates directly in your application.",
      },
      {
        q: "What is your SMS delivery rate?",
        a: "We maintain an industry-leading delivery rate of 99.92% through our Tier-1 direct operator connections and intelligent routing engine that automatically switches to the best route for each message.",
      },
    ],
  },
  {
    category: "Billing & Support",
    items: [
      {
        q: "Is Digidonar support available 24/7?",
        a: "Yes. We offer round-the-clock support via WhatsApp, live chat, email, and phone. Enterprise customers get a dedicated account manager with a guaranteed 1-hour response SLA.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major payment methods including UPI, Net Banking, Credit/Debit Cards, and NEFT/RTGS for enterprise invoicing. All transactions are secured with 256-bit SSL encryption.",
      },
      {
        q: "Are there any hidden charges or setup fees?",
        a: "None at all. Digidonar operates on a transparent pay-as-you-go model. You only pay for what you use. There are no setup fees, monthly minimums, or hidden charges.",
      },
    ],
  },
];

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? "border-teal-200 shadow-sm shadow-teal-100"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-150"
      >
        <span
          className={`text-[14px] font-semibold leading-snug ${
            isOpen ? "text-teal-600" : "text-slate-700"
          }`}
        >
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
            isOpen ? "bg-teal-500 rotate-45" : "bg-slate-100"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 2v8M2 6h8"
              stroke={isOpen ? "white" : "#64748b"}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "300px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.25s ease",
          overflow: "hidden",
        }}
      >
        <div className="px-5 pb-5 pt-1">
          <div className="h-px bg-slate-100 mb-4" />
          <p className="text-slate-500 text-[13px] leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState("0-0");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...faqs.map((f) => f.category)];

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-slate-50 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-[11px] font-bold tracking-[0.14em] uppercase px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
            Got Questions?
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
            If you don't find the answer you're looking for, our support team is available 24/7 to help you out.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold border transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-slate-800 text-white border-slate-800"
                  : "bg-white text-slate-500 border-slate-200 hover:border-teal-300 hover:text-teal-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion groups */}
        <div className="space-y-8">
          {filtered.map((group, gi) => (
            <div key={group.category}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-4 rounded-full bg-teal-400 flex-shrink-0" />
                <span className="text-[11px] font-bold text-teal-600 uppercase tracking-widest">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              {/* Items */}
              <div className="space-y-2.5">
                {group.items.map((item, ii) => {
                  const id = `${gi}-${ii}`;
                  return (
                    <AccordionItem
                      key={id}
                      q={item.q}
                      a={item.a}
                      isOpen={openId === id}
                      onToggle={() => setOpenId(openId === id ? null : id)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-slate-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-[16px] mb-1">Still have questions?</div>
              <div className="text-slate-400 text-[13px] leading-relaxed">Our team is ready to help you 24/7 via chat, email or call.</div>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="bg-white text-slate-800 font-bold text-[13px] px-5 py-2.5 rounded-xl hover:bg-slate-100 active:scale-95 transition-all duration-150">
              Live Chat
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-[13px] px-5 py-2.5 rounded-xl shadow-lg shadow-teal-900/20 active:scale-95 transition-all duration-150">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}