"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Fleet', href: '/#catalog' },
  { name: 'Gallery', href: '/gallery' }, 
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? "top-0 py-3" : "top-0 py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`flex justify-between items-center px-8 py-4 rounded-2xl transition-all duration-500 ${
            scrolled || pathname !== '/' ? "bg-white/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100" : "bg-transparent"
          }`}>
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 z-[110] group">
              <div className="relative w-9 h-9 transition-transform group-hover:scale-110">
                <Image src="/images/logo.png" fill alt="Logo" className="object-contain" />
              </div>
              <div className="flex flex-col border-l border-gray-200 pl-4">
                <span className="font-black text-base tracking-tight text-gray-900 uppercase leading-none">
                  Artha <span className="text-[#fe6b10]">Royal</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.4em] text-gray-400 uppercase mt-1">Group</span>
              </div>
            </Link>

            {/* Desktop Navigation - Clean & Simple */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="relative px-5 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-gray-500 hover:text-[#fe6b10] transition-colors group"
                >
                  {link.name}
                  {/* Underline hanya muncul saat Hover */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#fe6b10] rounded-full transition-all duration-300 group-hover:w-1 group-hover:opacity-100 opacity-0"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(true)} 
              className="md:hidden flex flex-col items-end gap-1.5 p-2 group"
            >
              <span className="w-6 h-[2px] bg-gray-900 group-hover:bg-[#fe6b10] transition-colors"></span>
              <span className="w-4 h-[2px] bg-[#fe6b10]"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col p-10 md:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8"><Image src="/images/logo.png" fill alt="Logo" className="object-contain" /></div>
                <span className="font-black text-sm tracking-tighter text-gray-900 uppercase">Artha <span className="text-[#fe6b10]">Royal</span></span>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, index) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link href={link.href} onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase tracking-tighter text-gray-900 group">
                    <span className="group-hover:text-[#fe6b10] transition-colors">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Footer Mobile tetap sama */}
            <div className="mt-auto border-t border-gray-100 pt-8 flex justify-between items-end">
              <div>
                <p className="text-gray-400 font-bold uppercase text-[9px] tracking-widest mb-2">Social Connection</p>
                <a href="#" className="text-sm font-black uppercase tracking-widest text-gray-900 hover:text-[#fe6b10]">Instagram</a>
              </div>
              <a href="https://wa.me/6281349988354" className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-[#fe6b10]">
                <MessageCircle size={24} fill="currentColor" className="stroke-gray-900" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;