"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, MessageCircle, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const admin1 = "6283873325988";
  const admin2 = "6281349988354";
  const googleMapsUrl = "https://maps.app.goo.gl/YGRWoGsofYESRvHE9";

  return (
    <footer id="contact" className="bg-[#fcfdfe] pb-8 pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* TOP DECORATION */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="px-6 py-2 rounded-full border border-slate-100 bg-white shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fe6b10]">Connect With Us</span>
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="relative group">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100/40 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

          <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-1 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-white/50 relative z-10 overflow-hidden">
            <div className="bg-white rounded-[2.8rem] p-8 md:p-14 lg:p-16 border border-slate-50">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* BRANDING SECTION */}
                <div className="lg:col-span-5 space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="relative w-14 h-14 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-2.5 border border-slate-100 shadow-inner">
                        <Image src="/images/logo.png" fill alt="Logo" className="object-contain p-2" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-black text-3xl tracking-tight text-slate-900 leading-none">
                          ARTHA <span className="text-[#fe6b10]">ROYAL</span>
                        </h3>
                        <span className="text-[11px] font-bold tracking-[0.5em] text-slate-400 uppercase mt-1">Group</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-sm">
                      &quot;Menghadirkan standar <span className="text-slate-900 font-bold">kenyamanan tertinggi</span> untuk setiap perjalanan Anda di Kalimantan Barat.&quot;
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100/50">
                      <ShieldCheck size={16} className="text-[#fe6b10]" />
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Verified Service</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-xl border border-green-100/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Available 24/7</span>
                    </div>
                  </div>
                </div>

                {/* CONTACT SECTION */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
                  
                  {/* CONTACT INFO */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-slate-900 font-black uppercase text-[11px] tracking-[0.2em] mb-6 flex items-center gap-3">
                        <span className="w-6 h-[2px] bg-[#fe6b10]"></span>
                        Quick Contact
                      </h4>
                      <div className="space-y-5">
                        <a href="mailto:argroup.ptk@gmail.com" className="group block">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-[#fe6b10] transition-colors">Email Office</p>
                          <div className="flex items-center gap-2 text-slate-900 font-bold transition-all hover:text-[#fe6b10]">
                            argroup.ptk@gmail.com <ArrowUpRight size={14} className="text-slate-300 group-hover:text-[#fe6b10]" />
                          </div>
                        </a>
                        <a href="https://www.instagram.com/argroup.ptk/" target="_blank" rel="noopener noreferrer" className="group block">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-[#fe6b10] transition-colors">Instagram</p>
                          <div className="flex items-center gap-2 text-slate-900 font-bold transition-all hover:text-[#fe6b10]">
                            @argroup.ptk <ArrowUpRight size={14} className="text-slate-300 group-hover:text-[#fe6b10]" />
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* MAP PIN SECTION */}
                    <div className="pt-4 border-t border-slate-50">
                      <a 
                        href={googleMapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex gap-4 group cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-orange-50 group-hover:border-[#fe6b10]/20 transition-all">
                          <MapPin size={18} className="text-[#fe6b10]" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                            Jl. Reformasi, Gg. Matematika <br /> 
                            <span className="text-slate-900 font-bold">Kota Pontianak, Kalimantan Barat</span>
                          </p>
                          <span className="text-[9px] font-bold text-[#fe6b10] uppercase tracking-tighter mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                            Buka di Google Maps <ArrowUpRight size={10} />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* ACTION CARDS */}
                  <div className="space-y-4">
                    <h4 className="text-slate-900 font-black uppercase text-[11px] tracking-[0.2em] mb-6">Booking Support</h4>
                    
                    <a href={`https://wa.me/${admin1}`} 
                       className="group relative flex items-center justify-between p-6 rounded-3xl bg-slate-900 text-white overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-200">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#fe6b10] flex items-center justify-center shadow-lg shadow-[#fe6b10]/20">
                          <MessageCircle size={22} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Primary Support</span>
                          <span className="text-base font-black">ADMIN 1</span>
                        </div>
                      </div>
                      <ArrowUpRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                    </a>

                    <a href={`https://wa.me/${admin2}`} 
                       className="group flex items-center justify-between p-6 rounded-3xl bg-white border-2 border-slate-100 text-slate-900 transition-all hover:border-[#fe6b10] hover:shadow-lg hover:shadow-orange-50 active:scale-95">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#fe6b10] group-hover:bg-orange-50 transition-colors">
                          <Phone size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Secondary Support</span>
                          <span className="text-base font-black uppercase">Admin 2</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-[#fe6b10]/30 transition-all">
                        <ArrowUpRight size={16} className="text-slate-300 group-hover:text-[#fe6b10]" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 text-center md:text-left">
              © {currentYear} <span className="text-slate-900">Artha Royal Group</span>. 
              <span className="hidden md:inline mx-2">•</span> 
              <span className="block md:inline mt-1 md:mt-0 font-medium opacity-70">All rights reserved.</span>
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300">Designed by</span>
              <div className="group flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-[#fe6b10]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fe6b10]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Eunoia Digital Creations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;