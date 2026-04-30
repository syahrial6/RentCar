"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Fleet', href: '#catalog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? "top-0 py-4" : "top-0 py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex justify-between items-center px-6 py-3 rounded-2xl transition-all ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border border-gray-100" : ""}`}>
            
            {/* Logo */}
            <div className="flex items-center gap-3 z-[110]">
              <div className="relative w-8 h-8"><Image src="/images/logo.png" fill alt="Logo" className="object-contain" /></div>
              <span className="font-black text-lg tracking-tighter text-gray-900 uppercase italic">
                Artha <span className="text-[#fe6b10] not-italic">Royal</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center bg-gray-50 p-1 rounded-full border border-gray-100">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-all">{link.name}</a>
              ))}
            </div>

            {/* Mobile Toggle Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden flex flex-col gap-1.5 p-2">
              <span className="w-6 h-0.5 bg-gray-900"></span>
              <span className="w-4 h-0.5 bg-[#fe6b10]"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-white flex flex-col justify-center px-10 md:hidden"
          >
            {/* TOMBOL CLOSE (X) YANG JELAS */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-8 flex items-center gap-3 group"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 group-hover:text-gray-900 transition-colors">Close</span>
              <div className="p-3 bg-gray-900 text-white rounded-full transition-transform active:scale-90 shadow-lg">
                <X size={24} strokeWidth={3} />
              </div>
            </button>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6">
              <p className="text-[#fe6b10] font-black text-xs tracking-[0.5em] uppercase mb-4 opacity-50">Navigation</p>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black uppercase tracking-tighter text-gray-900 hover:text-[#fe6b10] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Contact Info Footer */}
            <div className="mt-20 border-t border-gray-100 pt-10">
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-6">Booking Service</p>
                <a 
                    href="https://wa.me/6281349988354"
                    className="flex items-center justify-between bg-gray-900 text-white p-6 rounded-2xl"
                >
                    <span className="font-black text-xs uppercase tracking-[0.2em]">Chat Specialist</span>
                    <MessageCircle size={20} className="text-[#fe6b10]" />
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;