"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, X, MessageCircle, Users } from "lucide-react";

const cars = [
  { name: "New BRIO RS", image: "/images/5.png", price: "350.000", seats: "5", type: "City Car" },
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
    <section id="catalog" className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16 gap-4">
          <span className="text-[#fe6b10] text-xs font-black uppercase tracking-[0.3em] block">Premium Fleet</span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Pilih Unit <br />
            <span className="text-[#fe6b10]">Andalan.</span>
          </h2>
          <div className="w-16 h-1 bg-slate-100 mt-4" />
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              {/* Image Card */}
              <div className="relative aspect-[4/3] w-full bg-[#f8f9fa] rounded-[2rem] overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-xl">
                
                {/* Type Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur shadow-sm rounded-lg text-[9px] font-black text-slate-900 uppercase tracking-widest">
                    {car.type}
                  </span>
                </div>

                {/* Quick View - Hidden on Small Mobile for better UI */}
                <button
                  onClick={() => setSelectedImg(car.image)}
                  className="absolute top-5 right-5 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-slate-400 hover:text-[#fe6b10] transition-colors lg:opacity-0 lg:group-hover:opacity-100"
                >
                  <Maximize2 size={16} />
                </button>

                <div className="relative w-full h-full p-8 lg:p-12">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain transition-transform duration-700 lg:group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Info & Action Section - Mobile Always Visible */}
              <div className="mt-6 space-y-5 px-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
                      {car.name}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users size={14} />
                      <span className="text-[11px] font-bold uppercase tracking-widest">{car.seats} Seats</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-[#fe6b10] uppercase tracking-widest leading-none mb-1">Mulai Dari</p>
                    <p className="text-xl font-black text-slate-900 tracking-tight leading-none italic">Rp {car.price}</p>
                  </div>
                </div>

                {/* Booking Buttons - Optimized for Touch */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-50">
                  <a
                    href={`https://wa.me/${admin1}?text=Halo Admin 1, Saya mau booking mobil ${car.name}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#fe6b10] transition-all active:scale-95"
                  >
                    <MessageCircle size={14} />
                    Admin 1
                  </a>
                  <a
                    href={`https://wa.me/${admin2}?text=Halo Admin 2, Saya mau booking mobil ${car.name}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:border-slate-900 transition-all active:scale-95"
                  >
                    <MessageCircle size={14} />
                    Admin 2
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
      // Menutup saat area kosong di klik
      onClick={() => setSelectedImg(null)} 
      className="fixed inset-0 z-[999] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
    >
      {/* Tombol Close dengan fungsi onClick */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Mencegah bubbling ke div induk
          setSelectedImg(null);
        }}
        className="absolute top-8 right-8 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#fe6b10] transition-colors z-[1000] cursor-pointer"
      >
        <X size={24} />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        // Mencegah klik pada gambar ikut menutup (opsional)
        onClick={(e) => e.stopPropagation()} 
        className="relative w-full h-full max-w-5xl cursor-default"
      >
        <Image 
          src={selectedImg} 
          alt="Preview" 
          fill 
          className="object-contain drop-shadow-2xl" 
          priority
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Catalog;