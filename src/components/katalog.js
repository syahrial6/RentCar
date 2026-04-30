"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Maximize2, X, ArrowUpRight, Info } from "lucide-react";

const cars = [
  { name: "New BRIO RS", image: "/images/5.PNG", price: "350.000", seats: "5", type: "City Car" },
  { name: "New Avanza", image: "/images/1.webp", price: "400.000", seats: "7", type: "Family MPV" },
  { name: "Innova Reborn", image: "/images/2.webp", price: "550.000", seats: "7", type: "Executive" },
  { name: "Fortuner GR Sport", image: "/images/6.webp", price: "1.500.000", seats: "7", type: "Luxury SUV" },
  { name: "Hilux DC 4x4", image: "/images/7.webp", price: "1.500.000", seats: "5", type: "Adventure" },
  { name: "Hiace Commuter", image: "/images/8.webp", price: "1.500.000", seats: "15", type: "Group Travel" },
  { name: "Alphard Transformer", image: "/images/9.webp", price: "4.500.000", seats: "7", type: "Presidential" },
];

const Catalog = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="catalog" className="bg-white py-24 lg:py-32 font-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header: Split Layout Modern */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#fe6b10] font-black uppercase tracking-[0.4em] text-xs mb-4"
            >
              Exclusive Selection
            </motion.p>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.8] tracking-tighter uppercase italic">
              Our <span className="text-[#fe6b10] not-italic">Fleet.</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-400 text-lg max-w-sm ml-auto">
              Standar kenyamanan tertinggi dengan unit terbaru yang siap menemani perjalanan Anda.
            </p>
          </div>
        </div>

        {/* Grid: Clean Borders & Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border-r border-b border-gray-100 p-8 hover:bg-gray-50 transition-colors duration-500"
            >
              {/* Type Label */}
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-1">
                  {car.type}
                </span>
                <button 
                  onClick={() => setSelectedImg(car.image)}
                  className="p-2 rounded-full bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#fe6b10]"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Image Center */}
              <div 
                className="relative h-48 mb-12 cursor-pointer group-hover:scale-110 transition-transform duration-700 ease-out"
                onClick={() => setSelectedImg(car.image)}
              >
                <Image
                  fill
                  src={car.image}
                  alt={car.name}
                  className="object-contain"
                />
              </div>

              {/* Info Bottom */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-2 italic leading-none">
                  {car.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Start From</span>
                  <span className="text-xl font-black text-[#fe6b10]">Rp {car.price}</span>
                </div>

                {/* Modern Link Button */}
                <a
                  href={`https://wa.me/6281349988354?text=Halo%20Artha%20Royal,%20Saya%20tertarik%20pesan%20*${car.name}*`}
                  target="_blank"
                  className="inline-flex items-center gap-4 group/btn"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white group-hover/btn:bg-[#fe6b10] transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-gray-900">Book Unit</span>
                </a>
              </div>

              {/* Decorative Number */}
              <span className="absolute bottom-6 right-8 text-5xl font-black text-gray-50 z-0 group-hover:text-gray-100 transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="mt-20 border-2 border-gray-900 p-10 flex flex-col md:flex-row items-center justify-between rounded-[2rem] bg-white group hover:bg-gray-900 transition-colors duration-500">
           <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="p-4 bg-[#fe6b10] rounded-2xl text-white">
                <Info size={24} />
              </div>
              <p className="text-gray-900 group-hover:text-white font-bold text-lg md:max-w-md transition-colors">
                Butuh layanan lepas kunci atau plus driver? Hubungi admin kami.
              </p>
           </div>
           <a 
             href="https://wa.me/6281349988354"
             className="bg-[#fe6b10] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg shadow-[#fe6b10]/20"
           >
             Chat Konsultasi
           </a>
        </div>
      </div>

      {/* LIGHTBOX / POP-UP */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[999] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative max-w-6xl w-full h-[70vh] flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-16 right-0 p-4 bg-gray-900 text-white rounded-full hover:bg-[#fe6b10] transition-colors shadow-xl"
              >
                <X size={24} />
              </button>
              <div className="relative w-full h-full">
                <Image src={selectedImg} alt="Detail" fill className="object-contain" quality={100} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Catalog;