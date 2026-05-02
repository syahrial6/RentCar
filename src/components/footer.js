"use client";

import React from 'react';
import Image from 'next/image';
import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const admin1 = "6283873325988";
  const admin2 = "6281349988354";

  return (
    <footer id="contact" className="bg-white pb-10 pt-4 font-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* MAIN COMPACT BOX */}
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 overflow-hidden relative border-b-8 border-[#fe6b10]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Column 1: Branding (4 Cols) */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 bg-white rounded-xl p-2">
                  <Image src="/images/logo.png" fill alt="Logo" className="object-contain p-1.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl tracking-tighter text-white uppercase leading-none">
                    Artha <span className="text-[#fe6b10] not-italic">Royal</span>
                  </span>
                  <span className="text-[8px] font-black tracking-[0.4em] text-gray-500 uppercase mt-1">Group</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Solusi perjalanan berkelas di Pontianak. Kami memastikan setiap unit armada dalam kondisi prima untuk kenyamanan eksklusif Anda.
              </p>
            </div>

            {/* Column 2: Our Contact (7 Cols) */}
            <div className="lg:col-span-7">
              <h4 className="text-[#fe6b10] font-black uppercase text-[10px] tracking-[0.3em] mb-8">Our Contact</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {/* Email & Instagram */}
                <div className="space-y-4">
                  <a href="mailto:argroup.ptk@gmail.com" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#fe6b10] group-hover:bg-[#fe6b10] group-hover:text-white transition-all">
                      <Mail size={14} />
                    </div>
                    <span className="text-gray-300 text-xs font-bold transition-colors group-hover:text-white">argroup.ptk@gmail.com</span>
                  </a>
                  <a href="https://www.instagram.com/argroup.ptk/" target="_blank" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#fe6b10] group-hover:bg-[#fe6b10] group-hover:text-white transition-all">
                      <Instagram size={14} />
                    </div>
                    <span className="text-gray-300 text-xs font-bold transition-colors group-hover:text-white">@argroup.ptk</span>
                  </a>
                  <div className="flex items-start gap-3 pt-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#fe6b10]">
                      <MapPin size={14} />
                    </div>
                    <span className="text-gray-400 text-[11px] font-bold leading-relaxed">
                      Jl. Reformasi, Gg. Matematika <br /> Kota Pontianak, Kalimantan Barat
                    </span>
                  </div>
                </div>

                {/* Admins */}
                <div className="space-y-4">
                  <a href={`https://wa.me/${admin1}`} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#fe6b10]/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#fe6b10]/20 flex items-center justify-center text-[#fe6b10]">
                        <Phone size={12} />
                      </div>
                      <span className="text-white text-xs font-black uppercase tracking-widest">Admin 1</span>
                    </div>
                    <MessageCircle size={14} className="text-gray-500 group-hover:text-[#fe6b10]" />
                  </a>

                  <a href={`https://wa.me/${admin2}`} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#fe6b10]/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#fe6b10]/20 flex items-center justify-center text-[#fe6b10]">
                        <Phone size={12} />
                      </div>
                      <span className="text-white text-xs font-black uppercase tracking-widest">Admin 2</span>
                    </div>
                    <MessageCircle size={14} className="text-gray-500 group-hover:text-[#fe6b10]" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR - CLEAN */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 px-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
            © {currentYear} Artha Royal Group. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">
            <span>Designed by</span>
            <span className="text-gray-900 border-b border-gray-900">Eunoia Digital Creations</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;