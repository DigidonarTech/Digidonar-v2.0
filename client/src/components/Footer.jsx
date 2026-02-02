import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/digi.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { Icon: Facebook, link: 'https://www.facebook.com/digidonar' },
    { Icon: Twitter, link: 'https://x.com/digidonar' },
    { Icon: Instagram, link: 'https://www.instagram.com/digidonar/' },
    { Icon: Linkedin, link: 'https://www.linkedin.com/company/35708863/' },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">

      {/* Gradient Top Divider */}
      <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#44BBDB]/60 to-transparent mb-8" />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={Logo}
                alt="Digidonar Logo"
                className="h-9 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              India’s trusted cloud communication platform for Bulk SMS, WhatsApp API & IVR solutions.
            </p>

            <div className="flex gap-3">
              {socials.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-white/30 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-blue-900/40"
                >
                  <Icon size={16} className="text-slate-400 hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Bulk SMS', 'WhatsApp API', 'Voice & IVR', 'OTP Service', 'SMS Gateway'].map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/ & | /g, '-')}`}
                    className="relative group inline-block hover:text-gradient transition-colors duration-300"
                  >
                    {service}
                    {/* Animated underline */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#0D66BA] to-[#44BBDB] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Contact Sales', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms', path: '/terms' },
                { name: 'Support', path: '/support' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-gradient transition-all duration-300 flex items-center group"
                  >
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-[#1CB48D]">›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base">Stay Updated</h4>
            <p className="text-xs text-slate-400">Get product updates & insights.</p>

            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-sm focus:outline-none focus:border-[#44BBDB] focus:ring-1 focus:ring-[#44BBDB] transition"
              />
              <button className="absolute right-1.5 top-1.5 bg-gradient-to-r from-[#0D66BA] to-[#44BBDB] p-2 rounded-lg hover:scale-110 transition-transform duration-300 shadow-md">
                <Send size={14} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {currentYear} Digidonar Teleservices. All rights reserved.</p>
          <div className="flex gap-4 uppercase tracking-widest font-semibold">
            <span>Security</span>
            <span>Uptime 99.9%</span>
          </div>
        </div>

      </div>

      {/* Decorative Background Blur Orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-tr from-blue-500/20 to-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-bl from-[#0D66BA]/20 to-[#1CB48D]/20 rounded-full blur-[100px] pointer-events-none" />

    </footer>
  );
};

export default Footer;