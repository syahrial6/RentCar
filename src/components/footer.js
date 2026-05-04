"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Instagram, ArrowUpRight, MessageCircle, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const admin1 = "6283873325988";
  const admin2 = "6282152602121";
  const googleMapsUrl = "https://maps.app.goo.gl/YGRWoGsofYESRvHE9";
  const instagramUrl = "https://www.instagram.com/argroup.ptk/";

  return (
    <footer id="contact" className="relative bg-[#ffffff] pt-32 pb-10 overflow-hidden">
      {/* Dekorasi halus di background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* KOLOM 1: BRAND IDENTITY */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-4 mb-8 p-2 pr-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="relative w-14 h-14 bg-white shadow-sm rounded-xl p-2">
                <Image src="/images/logo.png" fill alt="Logo" className="object-contain "sizes="40px" />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight text-slate-900 leading-none uppercase">Artha <span className="text-[#fe6b10]">Royal</span> </h3>
                <span className="text-slate-500 text-[9px] font-black tracking-[0.4em] uppercase">Group</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              Layanan <span className="text-[#fe6b10]">Premium</span> Untuk Perjalanan Tanpa Batas.
            </h2>
            
            <div className="flex items-center gap-6">
               <a href={instagramUrl} target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#fe6b10] transition-colors group">
                <Instagram size={18} /> @argroup.ptk
              </a>
              <div className="w-1 h-1 bg-slate-300 rounded-full" />
              <a href="mailto:argroup.ptk@gmail.com" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#fe6b10] transition-colors">
                <Mail size={18} /> Email Us
              </a>
            </div>
          </div>

          {/* KOLOM 2: CONTACT CARDS (ADMIN 1 & 2) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fe6b10] mb-6">Reservasi Sekarang</p>
            
            {/* Admin 1 - Primary Action */}
            <a href={`https://wa.me/${admin1}`} className="group flex items-center justify-between p-6 bg-slate-900 rounded-[1.5rem] hover:bg-[#fe6b10] transition-all duration-500 shadow-xl shadow-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Utama</p>
                  <p className="text-white font-bold">Admin 1</p>
                </div>
              </div>
              <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
            </a>

            {/* Admin 2 - Secondary Action */}
            <a href={`https://wa.me/${admin2}`} className="group flex items-center justify-between p-6 bg-white border border-slate-200 rounded-[1.5rem] hover:border-slate-900 transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Support</p>
                  <p className="text-slate-900 font-bold">Admin 2</p>
                </div>
              </div>
              <ArrowUpRight className="text-slate-300 group-hover:text-slate-900 group-hover:rotate-45 transition-all" />
            </a>
          </div>

          {/* KOLOM 3: LOCATION INFO */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fe6b10]">Lokasi Kantor</p>
            <div className="space-y-4">
               <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-[#fe6b10]">
                    <MapPin size={16} />
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Jl. Reformasi, Gg. Matematika, Pontianak, Kalimantan Barat
                  </p>
               </div>
               <a href={googleMapsUrl} target="_blank" className="inline-flex items-center text-xs font-black uppercase tracking-tighter text-slate-900 border-b-2 border-[#fe6b10] pb-1 hover:text-[#fe6b10] transition-colors">
                 Buka di Google Maps
               </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">© {currentYear} Artha Royal</span>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Pontianak Transport</span>
          </div>

          <div className="flex items-center group">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight cursor-default">
              Designed by{" "}
              <a 
                href="https://rizkifajarsetyawan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-slate-900 group-hover:text-[#fe6b10] transition-colors ml-0.5 tracking-tighter cursor-pointer"
              >
                EUNOIA DIGITAL CREATIONS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;