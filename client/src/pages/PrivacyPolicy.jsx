import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText, ServerCog, Globe, UserCheck, Clock, Activity } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Information We Collect",
      icon: <FileText className="text-white" size={24} />,
      content: "We only collect the details you provide for the service, such as Name, Business Email, Phone Number, and DLT registration details. We do not share your contacts or message data with any third party."
    },
    {
      title: "2. How We Use Your Data",
      icon: <Eye className="text-white" size={24} />,
      content: "Your data is used solely for sending transactional and promotional alerts, managing your account, and providing technical support. We are strictly against spamming."
    },
    {
      title: "3. Data Security",
      icon: <Lock className="text-white" size={24} />,
      content: "Digidonar utilizes enterprise-grade encryption. Every message and API request is SSL-secured to prevent any unauthorized access."
    },
    {
      title: "4. Cookies & Tracking",
      icon: <Activity className="text-white" size={24} />,
      content: "We use cookies and similar technologies for site performance and analytics. These enhance your browsing experience and help us improve our services."
    },
    {
      title: "5. Third-Party Services",
      icon: <ServerCog className="text-white" size={24} />,
      content: "Some services on our platform are operated through third-party providers, such as payment gateways and email services. These providers access your data solely for contractual purposes."
    },
    {
      title: "6. User Rights",
      icon: <UserCheck className="text-white" size={24} />,
      content: "You have the right to access, correct, delete, or restrict your personal data. You can exercise these rights by contacting us."
    },
    {
      title: "7. Data Retention",
      icon: <Clock className="text-white" size={24} />,
      content: "We store your data as long as we are providing the service, and in accordance with regulatory requirements. Old and unnecessary data is securely deleted."
    },
    {
      title: "8. Children’s Privacy",
      icon: <Globe className="text-white" size={24} />,
      content: "We do not knowingly collect data from children under the age of 13. If you believe we have inadvertently collected a child's data, please inform us immediately."
    },
    {
      title: "9. Policy Updates",
      icon: <ShieldCheck className="text-white" size={24} />,
      content: "This Privacy Policy may be updated from time to time. The latest version will always be available on our website, and we may inform you of important updates via email."
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">

      {/* Floating Gradient Backgrounds */}
      <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-[#0D66BA]/20 blur-[120px] animate-float"></div>
      <div className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#1CB48D]/20 blur-[140px] animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-[#0D66BA] to-[#1CB48D] rounded-2xl mb-6 shadow-xl">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: February 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-10">

          <p className="text-slate-600 mb-10 leading-relaxed text-lg italic border-l-4 border-[#1CB48D] pl-6">
           At Digidonar Teleservices, we sincerely value your privacy. This document outlines how we handle your data and explains your rights.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 group bg-slate-50">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-tr from-[#0D66BA] to-[#1CB48D] group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{section.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#0D66BA]/80 to-[#1CB48D]/80 rounded-3xl text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Questions about Privacy?</h3>
              <p className="text-white/80 mb-2">If you have any questions about your data, please write to us at the email address below.</p>
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

export default PrivacyPolicy;
