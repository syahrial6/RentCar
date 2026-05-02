"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, X, MessageCircle, Users, ArrowRight } from "lucide-react";

const cars = [
  { name: "New BRIO RS", image: "/images/5.PNG", price: "350.000", seats: "5", type: "City Car" },
  { name: "New Avanza", image: "/images/1.webp", price: "400.000", seats: "7", type: "Family MPV" },
  { name: "Innova Reborn", image: "/images/2.webp", price: "550.000", seats: "7", type: "Executive" },
  { name: "Fortuner GR Sport", image: "/images/6.webp", price: "1.500.000", seats: "7", type: "Luxury SUV" },
  { name: "Hilux DC 4x4", image: "/images/7.webp", price: "1.500.000", seats: "5", type: "Adventure" },
  { name: "Hiace Commuter", image: "/images/8.webp", price: "1.750.000", seats: "15", type: "Group Travel" },
  { name: "Alphard Transformer", image: "/images/9.webp", price: "4.500.000", seats: "7", type: "Presidential" },
];

const Catalog = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const admin1 = "6283873325988";
  const admin2 = "6281349988354";

  return (
    <section id="catalog" className="bg-[#f8fafc] py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Modern Clean Header */}
        <div className="flex flex-col mb-20 gap-6">
          <div className="inline-flex items-center gap-2 bg-orange-50 w-fit px-4 py-1.5 rounded-full border border-orange-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe6b10] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe6b10]"></span>
            </span>
            <span className="text-[#fe6b10] text-[11px] font-bold uppercase tracking-widest">Fleet Terawat & Ready</span>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
              Pilih Unit <br />
              <span className="text-[#fe6b10]">Andalan Anda.</span>
            </h2>
            <p className="max-w-md text-slate-500 font-medium leading-relaxed">
              Daftar harga transparan dengan unit keluaran terbaru. Pilih armada yang sesuai dengan kebutuhan perjalanan Anda.
            </p>
          </div>
        </div>

        {/* --- MODERN CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 group"
            >
              {/* Image Area */}
              <div className="relative h-64 bg-slate-50 flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                   <span className="px-3 py-1 bg-white shadow-sm border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                     {car.type}
                   </span>
                </div>

                <button 
                  onClick={() => setSelectedImg(car.image)}
                  className="absolute top-6 right-6 p-2.5 bg-white shadow-sm border border-slate-100 rounded-xl text-slate-400 hover:text-[#fe6b10] hover:scale-110 transition-all z-10"
                >
                  <Maximize2 size={18} />
                </button>

                <Image 
                  fill 
                  src={car.image} 
                  alt={car.name} 
                  className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-[#fe6b10] transition-colors uppercase italic">
                    {car.name}
                  </h3>
                  <div className="flex items-center gap-1 text-slate-400 font-bold text-[11px] bg-slate-50 px-2 py-1 rounded">
                    <Users size={12} />
                    <span>{car.seats}</span>
                  </div>
                </div>

                <div className="bg-slate-50/80 rounded-2xl p-4 flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rate Per Hari</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-900 tracking-tight">Rp {car.price}</span>
                  </div>
                </div>

                {/* Dual Admin Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${admin1}?text=Halo%20Admin%201,%20Saya%20mau%20booking%20mobil%20*${car.name}*`}
                    target="_blank"
                    className="flex flex-col items-center gap-1.5 bg-[#fe6b10] text-white py-3.5 rounded-2xl font-bold text-[11px] uppercase tracking-wider shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all active:scale-95"
                  >
                    <MessageCircle size={16} />
                    <span>Admin 1</span>
                  </a>
                  
                  <a
                    href={`https://wa.me/${admin2}?text=Halo%20Admin%202,%20Saya%20mau%20booking%20mobil%20*${car.name}*`}
                    target="_blank"
                    className="flex flex-col items-center gap-1.5 border-2 border-slate-100 bg-white text-slate-600 py-3.5 rounded-2xl font-bold text-[11px] uppercase tracking-wider hover:border-slate-900 hover:text-slate-900 transition-all active:scale-95"
                  >
                    <MessageCircle size={16} />
                    <span>Admin 2</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* REFINED LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[999] bg-white/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl">
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-5xl h-[60vh]"
            >
              <Image src={selectedImg} alt="Preview" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Catalog;