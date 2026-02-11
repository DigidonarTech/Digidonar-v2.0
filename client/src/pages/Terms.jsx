import React, { useEffect } from 'react';
import { Scale, CheckCircle, AlertTriangle, HelpCircle, Eye , ShieldCheck, Lock , FileText } from 'lucide-react';


const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const points = [
    {
      title: "1. Service Usage",
      icon: <CheckCircle className="text-[#1CB48D]" size={24} />,
      content: "Digidonar ki services sirf legal business communication ke liye hain. Kisi bhi tarah ka spam, fraud ya illegal content bhejna sakht mana hai. Aisa karne par account bina notice ke block kiya ja sakta hai."
    },
    {
      title: "2. Payment & Refunds",
      icon: <Scale className="text-[#0D66BA]" size={24} />,
      content: "Sari payments advance mein honi chahiye. SMS/WhatsApp credits ki validity aapke plan par depend karti hai. Ek baar credits use hone par refund nahi kiya jayega. Additional charges applicable ho sakte hain international messages par."
    },
    {
      title: "3. DLT Compliance",
      icon: <AlertTriangle className="text-orange-500" size={24} />,
      content: "User ko TRAI ke rules aur DLT platform ki guidelines follow karni hongi. Header aur Template approve karwana user ki zimmedari hai, halaki hum isme poori help karte hain."
    },
    {
      title: "4. Account Responsibility",
      icon: <ShieldCheck className="text-[#44BBDB]" size={24} />,
      content: "User apne login credentials ka responsible hai. Kisi bhi unauthorized activity ke liye user zimmedar hoga. Password compromise hone par turant hume inform karein."
    },
    {
      title: "5. Service Availability & Limitations",
      icon: <Lock className="text-[#1CB48D]" size={24} />,
      content: "Hum best-effort basis par service provide karte hain. Scheduled maintenance aur unforeseen technical issues ke liye hum liable nahi hain. Network outages, SMS/WhatsApp provider failures ko cover nahi kiya ja sakta."
    },
    {
      title: "6. Intellectual Property",
      icon: <FileText className="text-[#0D66BA]" size={24} />,
      content: "Digidonar ki saari content, software aur APIs ki ownership humare paas hai. User ko service use karne ke liye limited, non-transferable license diya jata hai."
    },
    {
      title: "7. Privacy & Data Use",
      icon: <Eye className="text-[#1CB48D]" size={24} />,
      content: "User ke data ka use sirf transactional aur operational purposes ke liye hota hai. Hum data ko third-party ke saath share karte hain sirf legal aur contractual obligations ke under."
    },
    {
      title: "8. Termination",
      icon: <AlertTriangle className="text-orange-500" size={24} />,
      content: "Hum bina notice ke account suspend ya terminate kar sakte hain agar user terms violate karta hai. Termination ke baad bhi pending dues applicable rahenge."
    },
    {
      title: "9. Governing Law",
      icon: <Scale className="text-[#0D66BA]" size={24} />,
      content: "Ye terms India ke laws ke under governed hai. Kisi bhi dispute ka resolution local courts, Noida jurisdiction ke under hoga."
    }
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
              <p className="text-white/80 mb-2">Agar aapko kisi term ka matlab samajh nahi aa raha, toh humein niche di gayi email par likhein.</p>
            </div>
            <a href="mailto:legal@digidonar.com" className="text-white font-bold border-b-2 border-white hover:border-[#1CB48D] hover:text-[#1CB48D] transition-all py-2 px-4 rounded-lg shadow-md">
              legal@digidonar.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
