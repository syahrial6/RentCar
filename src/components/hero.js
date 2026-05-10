"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  MessageCircle, 
  ArrowUpRight, 
  Sparkles, 
  Car, 
  UserCircle2 
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const admin1 = "6281349988354";
  const admin2 = "6282152602121";

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20 w-full">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] right-[-2%] w-[400px] h-[400px] bg-[#fe6b10]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-2%] w-[300px] h-[300px] bg-slate-50 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT: CONTENT --- */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8 p-1 pr-4 bg-slate-50 rounded-full border border-slate-100 mx-auto lg:mx-0">
                <div className="bg-slate-900 text-white p-1.5 rounded-full shadow-sm">
                  <Sparkles size={12} className="text-[#fe6b10]" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                  Artha Royal <span className="text-slate-900">Group</span>
                </span>
              </div>

              {/* Headline */}
             <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 tracking-tighter uppercase mb-6 leading-[1.1]">
  Rental Mobil Pontianak <br />
  <span className="text-[#fe6b10]">
    <Typewriter
      words={["Terpercaya.", "Premium.", "24 Jam."]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </span>
</h1>

              <p className="max-w-xl text-slate-500 text-base md:text-lg lg:text-xl leading-relaxed mb-10 font-medium mx-auto lg:mx-0">
                Solusi mobilitas premium di Pontianak. Kami menyediakan armada terbaik untuk menunjang perjalanan bisnis maupun personal Anda.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${admin1}`}
                  target="_blank"
                  className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg shadow-slate-200 hover:bg-[#fe6b10]"
                >
                  <MessageCircle size={18} fill="currentColor" />
                  <span className="text-[10px]">Chat Admin 1</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${admin2}`}
                  target="_blank"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-slate-200 hover:border-slate-900 transition-all"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Chat Admin 2</span>
                  <ArrowUpRight size={16} className="text-slate-400" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: INFO CARDS (With Icons) --- */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Armada Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-all group"
            >
              <div className="w-10 h-10 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#fe6b10] group-hover:text-white transition-colors duration-500">
                <Car size={20} />
              </div>
              <p className="text-lg font-black text-slate-900 leading-tight uppercase tracking-tighter">Armada Prima</p>
              <p className="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider leading-relaxed">
                Unit selalu dalam kondisi bersih, wangi, dan mesin yang rutin diservis.
              </p>
            </motion.div>

            {/* Driver Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-white text-slate-900 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                <UserCircle2 size={20} />
              </div>
              <p className="text-lg font-black text-slate-900 leading-tight uppercase tracking-tighter">Layanan Profesional</p>
              <p className="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider leading-relaxed">
                Driver berpengalaman yang mengutamakan etika berkendara dan ketepatan waktu.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;