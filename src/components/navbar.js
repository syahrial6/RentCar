"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, X, Menu } from 'lucide-react';
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
  const [hoveredPath, setHoveredPath] = useState(null);
  const [activeSection, setActiveSection] = useState('Home');
  const pathname = usePathname();

  // 1. Handle Scroll Background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // 3. Logic Deteksi Section Aktif
  useEffect(() => {
    // Jika bukan di homepage, biarkan logic pathname yang bekerja
    if (pathname !== '/') {
      const currentLink = navLinks.find(l => l.href === pathname);
      if (currentLink) setActiveSection(currentLink.name);
      return;
    }

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        // Jika section masuk ke area pantauan (sekitar 40% dari atas layar)
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const matchedLink = navLinks.find(l => l.href.includes(`#${sectionId}`));
          if (matchedLink) {
            setActiveSection(matchedLink.name);
          }
        }
      });
    };

    // Deteksi khusus jika user kembali ke paling atas
    const handleScrollTop = () => {
      if (window.scrollY < 100) setActiveSection('Home');
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-20% 0px -60% 0px', // Area deteksi fokus di tengah-atas
      threshold: 0.1,
    });

    // Observe semua section yang ada di navLinks
    navLinks.forEach((link) => {
      if (link.href.startsWith('/#')) {
        const id = link.href.split('#')[1];
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    });

    window.addEventListener('scroll', handleScrollTop);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, [pathname]);

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? "top-4" : "top-0"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-700 ${
            scrolled || pathname !== '/' 
              ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-100" 
              : "bg-white/50 backdrop-blur-sm border border-white/10"
          }`}>
            
            {/* Logo */}
            <Link href="/" onClick={() => setActiveSection('Home')} className="flex items-center gap-3 z-[110] group">
              <div className="relative w-10 h-10 bg-white rounded-xl p-1.5 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                <Image src="/images/logo.png" fill alt="Logo" className="object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm tracking-tight uppercase leading-none text-slate-900 text-shadow-sm">
                  Artha <span className="text-[#fe6b10]">Royal</span>
                </span>
                <span className="text-[8px] font-black tracking-[0.5em] text-slate-500 uppercase mt-1">Group</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-slate-200/40 p-1 rounded-xl border border-slate-200/20 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;

                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setActiveSection(link.name)}
                    onMouseEnter={() => setHoveredPath(link.name)}
                    onMouseLeave={() => setHoveredPath(null)}
                    className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 z-10 ${
                      isActive || hoveredPath === link.name ? "text-[#fe6b10]" : "text-slate-600"
                    }`}
                  >
                    {link.name}
                    
                    {/* Logika Kapsul: Aktif jika di-hover ATAU jika memang section aktif (saat tidak ada hover lain) */}
                    {(hoveredPath === link.name || (isActive && hoveredPath === null)) && (
                      <motion.span
                        layoutId="nav-pill-active"
                        className="absolute inset-0 bg-white rounded-lg shadow-sm z-[-1] border border-slate-100"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <button 
              onClick={() => setIsOpen(true)} 
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 text-white"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-8 border-b border-slate-50">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8"><Image src="/images/logo.png" fill alt="Logo" className="object-contain" /></div>
                <span className="font-black text-sm tracking-tighter text-slate-900 uppercase italic">Artha <span className="text-[#fe6b10]">Royal</span></span>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-900 rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col px-8 py-12 space-y-8 overflow-y-auto">
              {navLinks.map((link, index) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link 
                    href={link.href} 
                    onClick={() => {
                        setIsOpen(false);
                        setActiveSection(link.name);
                    }} 
                    className="flex items-center justify-between group"
                  >
                    <span className="text-5xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-[#fe6b10] transition-colors">
                        {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto p-8 bg-slate-50 flex items-center justify-between">
              <div>
                <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.3em] mb-1">Butuh Bantuan?</p>
                <p className="text-slate-900 font-black uppercase tracking-tight">Hubungi Admin</p>
              </div>
              <a href="https://wa.me/6281349988354" className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-[#fe6b10]">
                <MessageCircle size={24} fill="currentColor" className="stroke-slate-900" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;