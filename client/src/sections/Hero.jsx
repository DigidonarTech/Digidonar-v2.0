import React, { useState } from 'react';
import ContactModal from '../components/ContactModal';

const Hero = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const videoId = "a4dPkuv7PLw?si=EQUq5VdDWYyH93gI";
    
    return (
       <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white">


            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-[#44BBDB]/15 blur-[140px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1CB48D]/15 blur-[140px] rounded-full"></div>
                <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-[#0D66BA]/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur border border-gray-200 px-4 py-2 rounded-full shadow-md mb-10">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1CB48D] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1CB48D]"></span>
                        </span>
                        <span className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Trusted by 10,000+ Businesses
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-7xl xl:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8">
                        Everything you need for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D66BA] via-[#44BBDB] to-[#1CB48D]">
                            Seamless Communication
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="max-w-2xl text-gray-600 text-lg md:text-xl mb-12 leading-relaxed">
                        Empower your business with India's most reliable Bulk SMS, WhatsApp API, and Cloud Telephony platform. High delivery rates, real-time analytics.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="bg-gradient-to-r from-[#0D66BA] to-[#44BBDB] 
                            text-white px-10 py-4 rounded-2xl text-lg font-bold 
                            hover:from-[#0a559c] hover:to-[#1CB48D] 
                            transition-all duration-300 shadow-xl shadow-blue-200 
                            flex items-center justify-center gap-2"
                        >
                            Get Started Free
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="bg-white/90 backdrop-blur text-slate-800 
                            border border-gray-200 px-10 py-4 rounded-2xl 
                            text-lg font-bold hover:bg-white hover:shadow-lg 
                            transition-all flex items-center justify-center gap-3"
                        >
                            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </span>
                            Watch Demo
                        </button>
                    </div>

                    {/* ================= PREMIUM DASHBOARD PREVIEW ================= */}
                    <div className="mt-16 md:mt-20 relative w-full max-w-5xl mx-auto group perspective-[1200px]">

                        {/* Outer Glow */}
                        <div className="absolute -inset-2 
        bg-gradient-to-r from-[#44BBDB] via-[#1CB48D] to-[#0D66BA] 
        rounded-3xl blur-xl opacity-25 
        group-hover:opacity-40 transition duration-1000"></div>

                        {/* 3D Tilt Wrapper */}
                        <div className="relative transform-gpu 
        md:rotate-[0.5deg] md:-skew-y-[0.5deg] 
        transition-transform duration-700 
        group-hover:rotate-0 group-hover:skew-y-0">

                            {/* Browser Frame */}
                            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">

                                {/* Fake Browser Bar */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                                    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                    <div className="ml-4 text-xs text-gray-400 font-medium truncate">
                                        app.digidonar.com/dashboard
                                    </div>
                                </div>

                                {/* Dashboard Image */}
                                <div className="p-3">
                                    <img
                                        src="./dashboard_image.jpg"
                                        alt="Digidonar Dashboard"
                                        className="rounded-2xl w-full h-auto shadow-sm scale-[0.98] md:scale-100"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Feature Callouts */}
                        <div className="hidden md:block absolute -top-5 left-10 
        bg-white/95 backdrop-blur px-4 py-2 
        rounded-full shadow-lg border border-gray-200 
        text-sm font-bold text-[#0D66BA]">
                            📊 Live Analytics
                        </div>

                        <div className="hidden md:block absolute top-20 -right-6 
        bg-white/95 backdrop-blur px-4 py-2 
        rounded-full shadow-lg border border-gray-200 
        text-sm font-bold text-[#1CB48D]">
                            ⚡ Instant Delivery
                        </div>

                        <div className="hidden md:block absolute -bottom-7 left-16 
        bg-white/95 backdrop-blur px-4 py-2 
        rounded-full shadow-lg border border-gray-200 
        text-sm font-bold text-slate-900">
                            🔒 99.99% Uptime
                        </div>
                    </div>
                    {/* ================= END DASHBOARD PREVIEW ================= */}

                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                title="Start Your Free Trial"
            />

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setIsVideoOpen(false)}></div>

                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
