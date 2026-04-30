"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star, ShieldCheck, Globe, MessageCircle } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const admin1 = "6281349988354";
  const admin2 = "6282152602121";

  return (
    <section className="relative min-h-[95vh] flex items-center bg-white overflow-hidden pt-20">
      {/* Background Decor - Minimalist Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      
      {/* Abstract Accent Shape */}
      <div className="absolute -right-[10%] top-[10%] w-[500px] h-[500px] bg-[#fe6b10]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Official Badge */}
              <div className="inline-flex items-center gap-3 mb-10 group">
                <div className="bg-gray-900 text-white p-2 rounded-lg group-hover:bg-[#fe6b10] transition-colors duration-500">
                  <ShieldCheck size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 leading-none">
                    Artha Royal Group <span className="text-[#fe6b10]">(Resmi)</span>
                  </span>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1.5 border-t border-gray-100 pt-1">
                    Biro Perjalanan, Pariwisata & Rental Mobil Pontianak
                  </p>
                </div>
              </div>

              {/* Main Headline - Optimized for Mobile & Desktop */}
              <h1 className="text-[2.8rem] leading-[1] xs:text-6xl md:text-[100px] font-black text-gray-900 md:leading-[0.85] tracking-tighter uppercase mb-10">
                The New <br />
                <span className="text-[#fe6b10] relative block sm:inline">
                  <Typewriter
                    words={["Standard.", "Luxury.", "Comfort."]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                  {/* Underline decorative - disesuaikan agar tidak lebar sebelah di mobile */}
                  <span className="absolute -bottom-2 md:-bottom-4 left-0 w-24 md:w-32 h-2 md:h-3 bg-gray-900/5 -z-10"></span>
                </span>
              </h1>

              <p className="max-w-xl text-gray-500 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                Elevasi perjalanan Anda di Kalimantan Barat bersama 
                <span className="text-gray-900 font-bold"> Artha Royal Group</span>. 
                Dedikasi penuh untuk pengalaman berkendara yang aman dan eksklusif.
              </p>

              {/* --- DUAL ADMIN BUTTONS --- */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/${admin1}?text=Halo%20Admin%201,%20Saya%20ingin%20tanya%20unit%20mobil`}
                    target="_blank"
                    className="bg-gray-900 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 group transition-all hover:bg-[#fe6b10] hover:shadow-2xl hover:shadow-[#fe6b10]/30"
                  >
                    <MessageCircle size={18} fill="currentColor" />
                    <span className="text-xs">Admin 1</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/${admin2}?text=Halo%20Admin%202,%20Saya%20ingin%20tanya%20unit%20mobil`}
                    target="_blank"
                    className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 group transition-all hover:bg-gray-900 hover:text-white"
                  >
                    <MessageCircle size={18} />
                    <span className="text-xs">Admin 2</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
                
                {/* Trust Badge */}
                <div className="flex items-center gap-4 px-2 md:border-l-2 md:border-gray-100 md:ml-4 md:pl-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-50 flex items-center justify-center">
                         <Star size={14} className="text-[#fe6b10]" fill="#fe6b10" />
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">
                    Trusted <br/> Service
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT - Vertical Text & Floating Stats */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center items-center h-[500px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[14rem] font-black leading-none text-gray-100 select-none opacity-50 rotate-90 uppercase tracking-tighter">
                  PNK
                </span>
              </div>

              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white p-8 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border-2 border-gray-100 z-20"
              >
                <div className="w-12 h-12 bg-[#fe6b10]/10 rounded-2xl flex items-center justify-center text-[#fe6b10] mb-6">
                  <Globe size={24} />
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1 tracking-tighter italic">Premium</p>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                  Fleet Selection
                </p>
                
                <div className="mt-8 flex gap-2">
                  <div className="h-1.5 w-12 bg-[#fe6b10] rounded-full" />
                  <div className="h-1.5 w-4 bg-gray-100 rounded-full" />
                  <div className="h-1.5 w-4 bg-gray-100 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute left-10 bottom-10 hidden xl:block">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
          Luxury Mobility Experience
        </p>
      </div>
    </section>
  );
};

export default Hero;