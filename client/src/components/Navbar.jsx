import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/digi.png';
import ContactModal from './ContactModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openDemoModal = () => {
        setIsModalOpen(true);
        setIsOpen(false);
    };

    return (
        <>
            <nav className="fixed w-full z-[100] top-0 
                bg-white/90 backdrop-blur-xl 
                border-b border-gray-200/60 
                shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 md:h-20 items-center">

                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                            <div className="relative">
                                <img
                                    src={Logo}
                                    alt="Digidonar Logo"
                                    className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#44BBDB]/30 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <Link to="/" className="relative text-sm font-semibold text-gray-700 hover:text-[#0D66BA] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#44BBDB] after:transition-all after:duration-300 hover:after:w-full">
                                Home
                            </Link>

                            <a href="#services" className="relative text-sm font-semibold text-gray-700 hover:text-[#0D66BA] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#44BBDB] after:transition-all after:duration-300 hover:after:w-full">
                                Services
                            </a>

                            <Link to="/journey" className="relative text-sm font-semibold text-gray-700 hover:text-[#0D66BA] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#44BBDB] after:transition-all after:duration-300 hover:after:w-full">
                                Our Journey
                            </Link>

                            <Link to="/pricing" className="relative text-sm font-semibold text-gray-700 hover:text-[#0D66BA] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#44BBDB] after:transition-all after:duration-300 hover:after:w-full">
                                Pricing
                            </Link>

                            {/* CTA */}
                            <div className="flex items-center gap-3 ml-4">
                                <button 
                                    onClick={openDemoModal}
                                    className="bg-gradient-to-r from-[#1CB48D] to-[#44BBDB] 
                                    text-white px-8 py-2.5 rounded-full text-sm font-bold 
                                    hover:from-[#0D66BA] hover:to-[#1CB48D] 
                                    hover:shadow-xl hover:shadow-cyan-100 
                                    transition-all duration-300 shadow-lg"
                                >
                                    Free Demo
                                </button>
                            </div>
                        </div>

                        {/* Mobile Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg text-[#0D66BA] hover:bg-gray-100 transition"
                            >
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white 
                        border border-gray-200 
                        absolute w-[94%] left-1/2 -translate-x-1/2 mt-2 
                        p-6 space-y-4 rounded-2xl 
                        shadow-[0_20px_50px_rgba(0,0,0,0.12)] 
                        animate-in fade-in slide-in-from-top-5">
                        
                        <Link to="/" onClick={() => setIsOpen(false)} 
                            className="block text-base font-semibold text-gray-800 rounded-xl px-4 py-3 bg-gray-50 hover:bg-[#44BBDB]/10 transition-all border border-gray-200">
                            Home
                        </Link>

                        <a href="#services" onClick={() => setIsOpen(false)} 
                            className="block text-base font-semibold text-gray-800 rounded-xl px-4 py-3 bg-gray-50 hover:bg-[#44BBDB]/10 transition-all border border-gray-200">
                            Services
                        </a>

                        <Link to="/journey" onClick={() => setIsOpen(false)} 
                            className="block text-base font-semibold text-gray-800 rounded-xl px-4 py-3 bg-gray-50 hover:bg-[#44BBDB]/10 transition-all border border-gray-200">
                            Our Journey
                        </Link>

                        <Link to="/pricing" onClick={() => setIsOpen(false)} 
                            className="block text-base font-semibold text-gray-800 rounded-xl px-4 py-3 bg-gray-50 hover:bg-[#44BBDB]/10 transition-all border border-gray-200">
                            Pricing
                        </Link>

                        <div className="pt-2">
                            <button 
                                onClick={openDemoModal}
                                className="w-full bg-gradient-to-r from-[#1CB48D] to-[#44BBDB] 
                                text-white py-4 rounded-2xl font-bold text-lg 
                                shadow-xl hover:shadow-2xl transition-all"
                            >
                                Claim Free Demo
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="Get Your Free Demo"
            />
        </>
    );
};

export default Navbar;
