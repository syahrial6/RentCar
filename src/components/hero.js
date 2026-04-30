"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ChevronRight, Star } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden font-primary">
      {/* Dekorasi Latar Belakang - Garis Tipis Modern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gray-100 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Konten Kiri */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[#fe6b10]">
                  <Star size={14} fill="#fe6b10" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900">
                    Pilihan Utama di Pontianak
                  </span>
                </div>
              </div>

              {/* Headline Utama */}
              <h1 className="text-5xl md:text-[90px] font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-8">
                Premium <br />
                <span className="text-[#fe6b10]">
                  <Typewriter
                    words={["Service.", "Comfort."]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>

              <p className="max-w-xl text-gray-500 text-lg md:text-xl leading-relaxed mb-12">
                Nikmati perjalanan berkelas dengan armada terbaru dari 
                <span className="text-gray-900 font-bold"> Artha Royal Group</span>. 
                Satu-satunya jasa rental mobil di Pontianak yang mengutamakan 
                kualitas pelayanan bintang lima.
              </p>

              {/* Tombol Aksi */}
              <div className="flex flex-wrap gap-5">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/6281349988354"
                  target="_blank"
                  className="bg-[#fe6b10] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-[#fe6b10]/20 hover:bg-gray-900 transition-colors duration-300"
                >
                  <Phone size={18} />
                  Pesan Sekarang
                </motion.a>
                
                <a
                  href="#about"
                  className="group flex items-center gap-3 px-10 py-5 rounded-full border-2 border-gray-100 font-black uppercase tracking-widest text-gray-900 hover:bg-gray-50 transition-all"
                >
                  Lihat Detail
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Konten Kanan - Tipografi Melayang */}
          <div className="lg:col-span-4 hidden lg:flex justify-end relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="flex flex-col items-end">
                <span className="text-[12rem] font-black leading-none text-gray-50 select-none">
                  PNK
                </span>
                <div className="bg-[#fe6b10] text-white p-10 rounded-2xl -mt-20 mr-10 shadow-2xl">
                  <p className="text-5xl font-black mb-1">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">
                    Trusted & Official
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Aksen Oranye Tipis di Bawah */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#fe6b10] to-transparent opacity-20" />
    </section>
  );
};

export default Hero;