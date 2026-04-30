"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, X, Users, MessageCircle } from "lucide-react";

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

  const admin1 = "6281349988354";
  const admin2 = "6282152602121"; 

  return (
    <section id="catalog" className="bg-white py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[3px] bg-[#fe6b10]"></span>
              <span className="text-[#fe6b10] font-black uppercase tracking-[0.4em] text-[10px]">Premium Fleet</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter uppercase">
              The <br />
              <span className="text-gray-200">Catalog.</span>
            </h2>
          </div>
          <div className="md:text-right border-l-[6px] md:border-l-0 md:border-r-[6px] border-[#fe6b10] pl-6 md:pr-6">
            <p className="text-gray-500 font-bold max-w-xs md:ml-auto uppercase text-[11px] tracking-widest leading-loose">
              Standar kenyamanan tertinggi dengan unit terbaru yang siap menemani perjalanan Anda.
            </p>
          </div>
        </div>

        {/* --- DYNAMIC FLEX GRID --- */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              /* 
                 border-2: Untuk mempertegas garis
                 hover:shadow-[...]: Shadow berlapis agar terasa hidup (soft & deep)
              */
              className="group relative bg-white p-10 flex flex-col w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] border-2 border-gray-100 rounded-[3rem] transition-all duration-500 hover:border-[#fe6b10]/20 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_10px_20px_-10px_rgba(254,107,16,0.15)]"
            >
              {/* Index Number Overlay */}
              <span className="absolute top-10 right-10 text-7xl font-black text-gray-50 pointer-events-none group-hover:text-[#fe6b10]/5 transition-colors duration-500">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              {/* Category & Zoom */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] bg-gray-900 px-4 py-1.5 rounded-full group-hover:bg-[#fe6b10] transition-colors">
                  {car.type}
                </span>
                <button 
                  onClick={() => setSelectedImg(car.image)}
                  className="p-2.5 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-900 hover:text-white transition-all shadow-sm"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Car Image - Enhanced Hover */}
              <div 
                className="relative h-48 mb-12 cursor-pointer transition-transform duration-700 ease-[scale(1.1,1.1,1,1)] group-hover:scale-110"
                onClick={() => setSelectedImg(car.image)}
              >
                <Image fill src={car.image} alt={car.name} className="object-contain" />
              </div>

              {/* Info Section */}
              <div className="mb-10 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fe6b10] animate-pulse" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{car.seats} Passenger Seats</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4 italic leading-none group-hover:text-[#fe6b10] transition-colors">
                  {car.name}
                </h3>
                <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-[#fe6b10] group-hover:bg-orange-50/50 transition-colors">
                  <span className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-black block mb-1">Official Rate</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-gray-900 tracking-tighter">Rp {car.price}</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase">/ Day</span>
                  </div>
                </div>
              </div>

              {/* Dual Admin Buttons - Thicker and Stronger */}
              <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
                <a
                  href={`https://wa.me/${admin1}?text=Halo%20Admin%201,%20Saya%20mau%20booking%20mobil%20*${car.name}*`}
                  target="_blank"
                  className="flex flex-col items-center justify-center gap-1 bg-gray-900 text-white py-4 rounded-[1.5rem] hover:bg-[#fe6b10] transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-[#fe6b10]/30"
                >
                  <MessageCircle size={16} />
                  <span className="font-black text-[9px] uppercase tracking-widest">Admin 1</span>
                </a>
                
                <a
                  href={`https://wa.me/${admin2}?text=Halo%20Admin%202,%20Saya%20mau%20booking%20mobil%20*${car.name}*`}
                  target="_blank"
                  className="flex flex-col items-center justify-center gap-1 border-2 border-gray-900 text-gray-900 py-4 rounded-[1.5rem] hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <MessageCircle size={16} />
                  <span className="font-black text-[9px] uppercase tracking-widest">Admin 2</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[999] bg-white/98 backdrop-blur-2xl flex items-center justify-center p-6 cursor-zoom-out"
          >
             <button className="absolute top-10 right-10 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-90 hover:bg-[#fe6b10]"><X size={32} /></button>
             <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-full max-w-6xl h-[70vh]">
                <Image src={selectedImg} alt="Preview" fill className="object-contain" quality={100} />
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Catalog;