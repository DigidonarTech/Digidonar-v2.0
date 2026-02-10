import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- BACKEND LOGIC STATES ---
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Form se data nikalna
        const formData = {
            name: e.target.fullName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            volume: e.target.volume.value,
            message: e.target.message.value,
            service: "Sales Inquiry Page" // Source identify karne ke liye
        };

        try {
            // Aapki Render API call
            await axios.post('https://digidonar-api.onrender.com/api/leads', formData);
            
            setSubmitted(true);
            e.target.reset(); // Form clear kar dega
            
            // 5 second baad success message hata kar form wapas layega
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error("Submission Error:", err);
            alert("Technical issue! Please try again later or contact us via phone.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-24 bg-white relative overflow-hidden">
            {/* Floating Background Gradients */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#0D66BA]/20 blur-[100px] animate-float"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-[#1CB48D]/20 blur-[140px] animate-float" style={{animationDelay: '2s'}}></div>

            {/* Header Section */}
            <section className="py-20 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-[#0D66BA] font-bold tracking-widest uppercase text-sm mb-4">Contact Sales</h1>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        Let's talk about your <span className="text-[#1CB48D]">growth</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Hamari team aapki communication problems ko solve karne ke liye taiyar hai. Niche diye gaye form ko bharein aur hum 2 ghante ke andar aapse sampark karenge.
                    </p>
                </div>
            </section>

            {/* Main Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Form Card */}
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 hover:shadow-[#44BBDB]/20 transition-shadow duration-500">
                        
                        {submitted ? (
                            // SUCCESS STATE VIEW
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-10 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900">Message Received!</h3>
                                <p className="text-slate-500 max-w-sm">Aapki details humare dashboard mein save ho gayi hain. Hum jaldi hi aapse connect karenge.</p>
                                <button onClick={() => setSubmitted(false)} className="text-[#0D66BA] font-bold hover:underline">Send another message</button>
                            </div>
                        ) : (
                            // ACTIVE FORM
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                        <input name="fullName" required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-2 focus:ring-[#0D66BA]/20 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                                        <input name="email" required type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-2 focus:ring-[#0D66BA]/20 transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                        <input name="phone" required type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#1CB48D] focus:ring-2 focus:ring-[#1CB48D]/20 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Expected Monthly Volume</label>
                                        <select name="volume" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#1CB48D] focus:ring-2 focus:ring-[#1CB48D]/20 transition-all">
                                            <option value="">Select Volume</option>
                                            <option value="10k-50k">10k - 50k SMS</option>
                                            <option value="50k-200k">50k - 200k SMS</option>
                                            <option value="200k+">200k+ SMS</option>
                                            <option value="whatsapp-api">WhatsApp API Only</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                                    <textarea name="message" required rows="4" placeholder="Tell us about your requirements..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#44BBDB] focus:ring-2 focus:ring-[#44BBDB]/20 transition-all"></textarea>
                                </div>

                                <button 
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-[#0D66BA] to-[#1CB48D] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>Sending... <Loader2 className="animate-spin" /></>
                                    ) : (
                                        <>Send Message <Send size={20} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info Card */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div className="p-8 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 hover:shadow-[#44BBDB]/20 transition-shadow duration-500">
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-8">Direct Contact</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0D66BA] flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Email Us</h4>
                                        <p className="text-gray-500 font-medium">sales@digidonar.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#1CB48D] flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Call Support</h4>
                                        <p className="text-gray-500 font-medium">+91 9214122123</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-[#44BBDB] flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Headquarters</h4>
                                        <p className="text-gray-500 font-medium">123, Tech Tower, Sector 62, Noida, UP, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="p-8 bg-gradient-to-r from-[#0D66BA]/80 to-[#1CB48D]/80 rounded-[2.5rem] text-white shadow-2xl hover:shadow-[#44BBDB]/40 transition-shadow duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Response Time</span>
                            </div>
                            <h4 className="text-xl font-bold mb-2">Average Response: 15 Mins</h4>
                            <p className="text-white/80 text-sm font-medium">Working Hours: Mon - Sat (9:00 AM - 7:00 PM)</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Map Section */}
            {/* [Note: Iframe is kept as per original but ensured better mobile layout] */}
            <section className="h-[450px] w-full bg-slate-100 relative z-0 overflow-hidden border-t border-slate-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4332832565434!2d77.3639439150825!3d28.616788582424574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce563456789%3A0x1234567890abcdef!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(0.5) contrast(1.2) opacity(0.85)" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Digidonar Office Location"
                    className="hover:opacity-100 transition-opacity duration-500"
                ></iframe>

                <div className="absolute top-10 left-10 hidden md:block bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 pointer-events-none">
                    <h4 className="font-black text-slate-900 mb-1">Visit Our Office</h4>
                    <p className="text-sm text-slate-600">Sector 62, Noida, UP, India</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;