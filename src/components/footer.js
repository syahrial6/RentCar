"use client";

import React from 'react';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-24 pb-12 font-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Section: Branding & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12">
                <Image src="/images/logo.png" fill alt="Logo" className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl tracking-tighter uppercase italic">
                  Artha <span className="text-[#fe6b10] not-italic">Royal</span>
                </span>
                <span className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase">Group</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none mb-8">
              SOLUSI PERJALANAN <br />
              <span className="text-[#fe6b10] not-italic">BERKELAS & NYAMAN.</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Penyedia layanan sewa mobil premium di Pontianak dengan armada terbaru dan pelayanan profesional untuk kebutuhan personal maupun bisnis.
            </p>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:max-w-xl">
              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-[#fe6b10] font-black uppercase text-xs tracking-[0.3em]">Quick Contact</h4>
                <div className="space-y-4">
                  <a href="https://wa.me/6281349988354" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                    <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-[#fe6b10]/20 transition-colors">
                      <Phone size={18} className="text-[#fe6b10]" />
                    </div>
                    <span className="text-sm font-bold">+62 813-4998-8354</span>
                  </a>
                  <a href="mailto:argroup.ptk@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                    <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-[#fe6b10]/20 transition-colors">
                      <Mail size={18} className="text-[#fe6b10]" />
                    </div>
                    <span className="text-sm font-bold">argroup.ptk@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Location Info */}
              <div className="space-y-6">
                <h4 className="text-[#fe6b10] font-black uppercase text-xs tracking-[0.3em]">Our Office</h4>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="p-2.5 bg-white/5 rounded-xl shrink-0">
                    <MapPin size={18} className="text-[#fe6b10]" />
                  </div>
                  <span className="text-sm font-bold leading-relaxed">
                    Jalan Harapan Jaya Kota Baru, <br />
                    Pontianak, Kalimantan Barat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links & Socials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-12 items-center">
          <div className="lg:col-span-1">
             <ul className="flex flex-wrap gap-x-8 gap-y-4">
                {['Home', 'About', 'Fleet', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-[#fe6b10] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          <div className="md:flex md:justify-end lg:col-span-3 gap-8 items-center">
            <div className="flex gap-4 mb-6 md:mb-0">
              <a href="https://www.instagram.com/argroup.ptk/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#fe6b10] transition-all group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/6281349988354" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#fe6b10] transition-all group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <a 
              href="https://wa.me/6281349988354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl group hover:bg-[#fe6b10] hover:text-white transition-all duration-300"
            >
              <span className="font-black text-[11px] uppercase tracking-[0.2em]">Book Now</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
            © {currentYear} Artha Royal Group. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group">
            <span>Design by</span>
            <span className="text-gray-300 group-hover:text-[#fe6b10] transition-colors duration-300">
              Eunoia Digital Creations
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;