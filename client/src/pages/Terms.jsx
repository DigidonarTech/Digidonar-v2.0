import React, { useEffect } from 'react';
import { Scale, CheckCircle, AlertTriangle, HelpCircle, Eye, ShieldCheck, Lock, FileText } from 'lucide-react';


const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const points = [
    {
      title: "1. Service Usage",
      icon: <CheckCircle className="text-[#1CB48D]" size={24} />,
      content: "Digidonar services are for legal business communication only. Any form of spam, fraud, or illegal content is strictly prohibited. Violation of these terms will result in immediate account suspension without notice."
    },
    {
      title: "2. Payment & Refunds",
      icon: <Scale className="text-[#0D66BA]" size={24} />,
      content: "All payments must be made in advance. The validity of SMS/WhatsApp credits depends on your selected plan. Once credits are used, no refunds will be provided. Additional charges may apply to international messages."
    },
    {
      title: "3. DLT Compliance",
      icon: <AlertTriangle className="text-orange-500" size={24} />,
      content: "Users must follow TRAI rules and DLT platform guidelines. While we provide complete assistance, getting Headers and Templates approved is the user's responsibility."
    },
    {
      title: "4. Account Responsibility",
      icon: <ShieldCheck className="text-[#44BBDB]" size={24} />,
      content: "Users are responsible for their login credentials. The user will be held accountable for any unauthorized activity. In case of a password compromise, please inform us immediately."
    },
    {
      title: "5. Service Availability & Limitations",
      icon: <Lock className="text-[#1CB48D]" size={24} />,
      content: "We provide services on a best-effort basis. We are not liable for scheduled maintenance or unforeseen technical issues. Network outages and SMS/WhatsApp provider failures are beyond our control and cannot be covered."
    },
    {
      title: "6. Intellectual Property",
      icon: <FileText className="text-[#0D66BA]" size={24} />,
      content: "All content, software, and APIs of Digidonar are our exclusive property. Users are granted a limited, non-transferable license solely for the purpose of using the service."
    },
    {
      title: "7. Privacy & Data Use",
      icon: <Eye className="text-[#1CB48D]" size={24} />,
      content: "User data is used exclusively for transactional and operational purposes. We share data with third parties only under legal and contractual obligations."
    },
    {
      title: "8. Termination",
      icon: <AlertTriangle className="text-orange-500" size={24} />,
      content: "We reserve the right to suspend or terminate your account without notice if you violate these terms. Even after termination, any pending dues will remain applicable."
    },
    {
      title: "9. Governing Law",
      icon: <Scale className="text-[#0D66BA]" size={24} />,
      content: "These terms are governed by the laws of India. Any dispute resolution will be under the jurisdiction of local courts in Noida."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">

      {/* Floating Gradient Backgrounds */}
      <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-[#0D66BA]/20 blur-[120px] animate-float"></div>
      <div className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#1CB48D]/20 blur-[140px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-[#0D66BA] to-[#1CB48D] rounded-2xl mb-6 shadow-xl">
            <Scale className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 font-medium">Agreement between Digidonar and the User</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-10">

          {/* Sections */}
          <div className="space-y-8">
            {points.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 group bg-slate-50">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-tr from-[#0D66BA] to-[#1CB48D] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#0D66BA]/80 to-[#1CB48D]/80 rounded-3xl text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Need Help Understanding Terms?</h3>
              <p className="text-white/80 mb-2">If you do not understand the meaning of any term, please write to us at the email address provided below.</p>
            </div>
            <a href="mailto:info@digidonar.com" className="text-white font-bold border-b-2 border-white hover:border-[#1CB48D] hover:text-[#1CB48D] transition-all py-2 px-4 rounded-lg shadow-md">
              info@digidonar.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
