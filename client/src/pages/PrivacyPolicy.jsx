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
      content: "Hum sirf wahi details collect karte hain jo aap humein service ke liye dete hain, jaise Name, Business Email, Phone Number aur DLT registration details. Hum aapke contacts ya messages ka data kisi teesre paksh (third party) ko nahi dete."
    },
    {
      title: "2. How We Use Your Data",
      icon: <Eye className="text-white" size={24} />,
      content: "Aapka data sirf transactional aur promotional alerts bhejne, account manage karne aur technical support dene ke liye use kiya jata hai. Hum spamming ke sakht khilaaf hain."
    },
    {
      title: "3. Data Security",
      icon: <Lock className="text-white" size={24} />,
      content: "Digidonar enterprise-grade encryption use karta hai. Aapka har message aur API request SSL-secured hoti hai taaki koi unauthorized access na ho sake."
    },
    {
      title: "4. Cookies & Tracking",
      icon: <Activity className="text-white" size={24} />,
      content: "Hum site performance aur analytics ke liye cookies aur similar technologies ka use karte hain. Ye aapke browsing experience ko enhance karte hain aur service ko improve karne me help karte hain."
    },
    {
      title: "5. Third-Party Services",
      icon: <ServerCog className="text-white" size={24} />,
      content: "Humare platform par kuch services third-party providers ke through operate hoti hain, jaise payment gateways aur email services. Ye providers aapke data ko sirf contractual purposes ke liye access karte hain."
    },
    {
      title: "6. User Rights",
      icon: <UserCheck className="text-white" size={24} />,
      content: "Aapko apne personal data ko access, correct, delete ya restrict karne ka adhikar hai. Aap ye rights humse contact karke exercise kar sakte hain."
    },
    {
      title: "7. Data Retention",
      icon: <Clock className="text-white" size={24} />,
      content: "Hum aapka data tab tak store karte hain jab tak service provide kar rahe hote hain, aur regulatory requirements ke mutabiq. Purane aur unnecessary data ko securely delete kar diya jata hai."
    },
    {
      title: "8. Children’s Privacy",
      icon: <Globe className="text-white" size={24} />,
      content: "Hum 13 saal se kam ke bachon se jaan bhoojh kar data collect nahi karte. Agar aapko lagta hai ki humne galti se bachon ka data collect kiya hai, hume turant inform karein."
    },
    {
      title: "9. Policy Updates",
      icon: <ShieldCheck className="text-white" size={24} />,
      content: "Ye Privacy Policy time-to-time update ki ja sakti hai. Latest version hamari website par hamesha available rahegi, aur important updates ke liye email ke through inform kiya ja sakta hai."
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
            Digidonar Teleservices mein hum aapki privacy ki dil se izzat karte hain. Ye document batata hai ki hum kaise aapka data handle karte hain aur aapke rights kya hain.
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
              <p className="text-white/80 mb-2">Agar aapko apne data se juda koi sawal hai, toh humein niche di gayi email par likhein.</p>
            </div>
            <a href="mailto:privacy@digidonar.com" className="text-white font-bold border-b-2 border-white hover:border-[#1CB48D] hover:text-[#1CB48D] transition-all py-2 px-4 rounded-lg shadow-md">
              privacy@digidonar.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
