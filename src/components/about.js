"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Clock, Banknote, ArrowUpRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const features = [
    { name: "Armada Terawat", icon: <ShieldCheck size={18} /> },
    { name: "Driver Handal", icon: <UserCheck size={18} /> },
    { name: "Layanan 24/7", icon: <Clock size={18} /> },
    { name: "Harga Terbaik", icon: <Banknote size={18} /> },
  ];

  return (
    // Background dibuat Pure White tanpa gradasi tambahan
    <section id="about" className="relative bg-white py-24 lg:py-40 overflow-hidden w-full">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT VISUAL --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            {/* Image Container dengan border yang lebih soft */}
            <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] group cursor-pointer bg-slate-50">
              {/* Shine Effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

              <Image
                src="/images/hero.webp" 
                alt="Luxury Fleet"
                width={800}
                height={1000}
                className="w-full h-[500px] lg:h-[650px] object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
              />
              
              <div className="absolute inset-0 rounded-[3rem] border border-slate-100 group-hover:border-[#fe6b10]/30 transition-colors duration-500 z-20" />
            </div>

            {/* Glow di belakang hanya muncul tipis saat hover */}
            <div className="absolute inset-0 bg-[#fe6b10]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            {/* Floating Glassmorphism Card - Dibuat lebih solid karena BG Putih */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 lg:-right-12 z-30 bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 max-w-[280px]"
            >
              <div className="w-12 h-12 bg-[#fe6b10] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#fe6b10]/20">
                <ArrowUpRight size={24} />
              </div>
              <h4 className="text-xl font-black text-slate-900 leading-tight">
                Mendefinisikan Ulang Standar <span className="text-[#fe6b10]">Kemewahan.</span>
              </h4>
            </motion.div>
          </motion.div>

          {/* --- RIGHT CONTENT --- */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 bg-slate-50 border border-slate-100 rounded-full"
              >
                <span className="w-2 h-2 bg-[#fe6b10] rounded-full" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
                  Artha Royal Group
                </span>
              </motion.div>

              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase">
                RENTAL MOBIL<br />
                <span className="text-[#fe6b10]">
                  <Typewriter
                    words={['Eksklusif', 'Bergengsi', 'Terpercaya']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
                <br /> DI PONTIANAK
              </h2>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6 text-slate-500 text-lg leading-relaxed"
            >
              <p className="border-l-4 border-[#fe6b10] pl-6 italic font-medium text-slate-800">
                &ldquo;Setiap detik perjalanan Anda adalah prioritas kami. Kami memastikan Anda sampai dengan martabat.&rdquo;
              </p>
              <p className="text-base">
                <span className="text-slate-900 font-bold">Artha Royal Group</span> hadir sebagai partner mobilitas strategis bagi Anda yang menghargai waktu dan privasi tinggi di Kalimantan Barat.
              </p>
            </motion.div>

            {/* Modern Feature Grid - Border lebih halus */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 shrink-0 bg-slate-50 text-slate-400 group-hover:bg-[#fe6b10] group-hover:text-white rounded-xl flex items-center justify-center transition-all">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] lg:text-xs font-black text-slate-700 uppercase tracking-wide">
                    {feature.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;