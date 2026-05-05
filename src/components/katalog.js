"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Maximize2, 
  X, 
  MessageCircle, 
  Users, 
  CheckCircle2, 
  Fuel, 
  Settings2, 
  Zap 
} from "lucide-react";

const cars = [
  { name: "Avanza Facelift", image: "/images/avanza_facelift.webp", price: "300.000", seats: "7", type: "Family MPV", transmission: "MT", fuel: "Bensin" },
  { name: "New BRIO RS", image: "/images/brio.webp", price: "350.000", seats: "5", type: "City Car", transmission: "AT", fuel: "Bensin" },
  { name: "New Avanza", image: "/images/avanza.webp", price: "350.000", seats: "7", type: "Family MPV", transmission: "AT/MT", fuel: "Bensin" },
  { name: "Innova Reborn", image: "/images/innova.webp", price: "500.000", seats: "7", type: "Executive", transmission: "AT/MT", fuel: "Diesel" },
  { name: "Innova Zenix HEV", image: "/images/zenix_hybrid.webp", price: "700.000", seats: "7", type: "Modern MPV", transmission: "AT", fuel: "Bensin", isHybrid: true }, 
  { name: "Innova Zenix", image: "/images/zenix.webp", price: "600.000", seats: "7", type: "Modern MPV", transmission: "AT", fuel: "Bensin" }, 
  { name: "Fortuner GR Sport", image: "/images/fortuner.webp", price: "1.500.000", seats: "7", type: "Luxury SUV", transmission: "AT", fuel: "Diesel" },
  { name: "Hilux DC 4x4", image: "/images/hilux.webp", price: "1.500.000", seats: "5", type: "Adventure", transmission: "MT", fuel: "Diesel" },
  { name: "Hiace Commuter", image: "/images/hiace.webp", price: "1.400.000", seats: "15", type: "Group Travel", transmission: "MT", fuel: "Diesel", includeDriver: true },
  { name: "Alphard Transformer", image: "/images/alphard.webp", price: "4.000.000", seats: "7", type: "Presidential", transmission: "AT", fuel: "Bensin" },
];

const Catalog = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const admin1 = "6281349988354";
  const admin2 = "6282152602121";

  return (
    <section id="catalog" className="bg-slate-50 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-24 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#fe6b10] text-sm font-black uppercase tracking-[0.4em] block mb-4"
          >
            Premium Fleet
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8"
          >
            Pilih Unit <br />
            <span className="text-[#fe6b10]">Andalan.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 md:gap-6"
          >
            <div className="w-12 h-[2px] bg-slate-300 hidden md:block" />
            <p className="text-slate-500 max-w-xl text-lg md:text-xl font-medium leading-relaxed italic uppercase tracking-tight">
              &ldquo;Kendaraan yang Anda pilih, menentukan kenyamanan berkendara Anda.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-[2.5rem] p-5 lg:p-7 border transition-all duration-500 group relative flex flex-col ${
                car.isHybrid ? 'border-blue-100 shadow-lg shadow-blue-50' : 'border-slate-100 hover:shadow-2xl hover:shadow-slate-200'
              }`}
            >
              {/* Card Header: Type & Expand */}
              <div className="flex justify-between items-center mb-6">
                <span className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-slate-200">
                  {car.type}
                </span>
                <button
                  onClick={() => setSelectedImg(car.image)}
                  className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-[#fe6b10] hover:bg-white hover:shadow-md transition-all"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Image Section */}
              <div className="relative aspect-[16/10] mb-8">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Info Section */}
              <div className="flex-grow flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic leading-none mb-3">
                    {car.name}
                  </h3>
                  
                  <div className="flex items-center">
                    <span className="text-2xl font-black text-[#fe6b10] tracking-tighter leading-none">
                      Rp {car.price}
                    </span>
                    <span className="text-slate-400 text-[11px] font-black uppercase tracking-[0.1em] ml-1 mt-1">
                      / Hari
                    </span>
                  
                  </div>
                
                </div>

                {/* Specification Grid */}
                <div className="grid grid-cols-3 gap-2 py-6 border-y border-slate-100 mb-6">
                  <div className="flex flex-col items-center gap-2 text-center border-r border-slate-100">
                    <Users size={20} className="text-[#fe6b10]" />
                    <span className="text-[10px] font-black uppercase tracking-tighter text-slate-900">{car.seats} Kursi</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center border-r border-slate-100">
                    <Settings2 size={20} className="text-[#fe6b10]" />
                    <span className="text-[10px] font-black uppercase tracking-tighter text-slate-900">{car.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Fuel size={20} className="text-[#fe6b10]" />
                    <span className="text-[10px] font-black uppercase tracking-tighter text-slate-900">{car.fuel}</span>
                  </div>
                </div>

                {/* Badges Container - Diubah jadi full width */}
                <div className="flex flex-col gap-2 mb-3">
                  {car.isHybrid && (
                    <div className="flex items-center justify-center gap-3 bg-blue-50 text-blue-600 w-full py-2.5 rounded-xl border border-blue-100">
                      <Zap size={14} className="fill-blue-600" />
                      <span className="text-[10px] font-black uppercase tracking-[0.15em]">
                        Hybrid Technology
                      </span>
                    </div>
                  )}
                  
                  {car.includeDriver && (
                    <div className="flex items-center justify-center gap-3 bg-emerald-50 text-emerald-700 w-full py-2.5 rounded-xl border border-emerald-100">
                      <CheckCircle2 size={14} />
                      <span className="text-[10px] font-black uppercase tracking-[0.15em]">
                        Sudah Termasuk Driver
                      </span>
                    </div>
                  )}

                  {/* Placeholder jika tidak ada badge khusus agar tinggi kartu tetap konsisten */}
                  {!car.isHybrid && !car.includeDriver && (
                    <div className="py-2.5 opacity-0 invisible">
                      <span className="text-[10px]">&nbsp;</span>
                    </div>
                  )}
                </div>

                {/* Booking Buttons */}
                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${admin1}?text=Halo Admin 1, Saya mau booking mobil ${car.name}`}
                    target="_blank"
                    className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-[#fe6b10] hover:shadow-[0_10px_20px_rgba(254,107,16,0.2)] active:scale-95"
                  >
                    <MessageCircle size={18} />
                    Chat Admin 1
                  </a>
                  <a
                    href={`https://wa.me/${admin2}?text=Halo Admin 2, Saya mau booking mobil ${car.name}`}
                    target="_blank"
                    className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-900 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] transition-all hover:border-[#fe6b10] hover:text-[#fe6b10] active:scale-95"
                  >
                    <MessageCircle size={18} />
                    Chat Admin 2
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white/98 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              className="absolute top-6 right-6 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 z-[1010]"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full h-[70vh] max-w-5xl pointer-events-none"
            >
              <Image src={selectedImg} alt="Preview" fill className="object-contain" priority />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Catalog;