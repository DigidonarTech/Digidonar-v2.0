import React, { useState } from "react";
import { Check, X, Send, Loader2, CheckCircle } from "lucide-react";
import api, { API_URL } from "../api";

const plans = [
  {
    name: "Starter",
    price: "₹1,999",
    description: "Perfect for small businesses starting their journey.",
    features: ["5,000 SMS Credits", "Basic API Access", "Email Support", "Standard Delivery"],
    popular: false
  },
  {
    name: "Business",
    price: "₹4,999",
    description: "Advanced features for growing enterprises.",
    features: ["15,000 SMS Credits", "WhatsApp API Integration", "24/7 Priority Support", "Real-time Analytics", "Custom Sender ID"],
    popular: true
  },
  {
    name: "Professional",
    price: "₹9,999",
    description: "Full power for large scale operations.",
    features: ["50,000 SMS Credits", "Full IVR Solutions", "Dedicated Manager", "White-label Support", "High-throughput API"],
    popular: false
  }
];

const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      plan: selectedPlan.name,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      volume: e.target.volume.value,
      message: e.target.message.value,
    };

    try {
      // Replace with your API endpoint
      await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
      }, 3000);
    } catch (err) {
      alert("Technical issue! Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#1CB48D] font-bold tracking-widest uppercase text-sm mb-3">Simple Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Plans that grow <span className="text-[#0D66BA]">with your business</span>
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            No hidden fees. Choose the plan that works best for your communication needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-[2.5rem] bg-white border ${
                plan.popular ? "border-[#0D66BA] shadow-2xl scale-105 z-10" : "border-gray-100"
              } transition-all duration-500 hover:scale-105 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1CB48D] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1CB48D]/10 flex items-center justify-center transition-colors group-hover:bg-[#0D66BA]/20">
                      <Check size={12} className="text-[#1CB48D]" strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleChoosePlan(plan)}
                className={`w-full py-4 rounded-2xl font-extrabold transition-all duration-300 border-2 ${
                  plan.popular ? "bg-[#0D66BA] text-white hover:bg-[#44BBDB]" : "border-[#0D66BA] text-[#0D66BA] hover:bg-[#0D66BA] hover:text-white"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Quote Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">
            Need a custom volume?{" "}
            <button onClick={() => handleChoosePlan({ name: "Custom Plan" })} className="text-[#0D66BA] font-bold border-b-2 border-[#0D66BA]/20 hover:border-[#0D66BA]">
              Contact Sales
            </button>
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          ></div>

          {/* Modal Card */}
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in duration-300">
            <div className="p-8 md:p-12">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2"
              >
                <X size={24} />
              </button>

              {submitted ? (
                <div className="py-10 text-center animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-500 text-lg">We received your request. We'll contact you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
                      {selectedPlan.name} Plan
                    </h3>
                    <p className="text-slate-500 font-medium italic">
                      Fill in details to get started.
                    </p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                      <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        name="email"
                        type="email"
                        placeholder="Work Email"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <select
                        name="volume"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all"
                      >
                        <option value="">Expected Monthly Volume</option>
                        <option value="10k - 50k SMS">10k - 50k SMS</option>
                        <option value="50k - 200k SMS">50k - 200k SMS</option>
                        <option value="200k+ SMS">200k+ SMS</option>
                        <option value="WhatsApp API Only">WhatsApp API Only</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <textarea
                        name="message"
                        rows="3"
                        placeholder="Any specific requirements?"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all"
                      ></textarea>
                    </div>

                    <button
                      disabled={loading}
                      className="w-full bg-[#0D66BA] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#44BBDB] transition-all shadow-xl shadow-blue-100 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {loading ? <Loader2 className="animate-spin" size={24} /> : <>Submit <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
