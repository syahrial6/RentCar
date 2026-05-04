"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ArrowLeft } from "lucide-react";

const galleryData = [
  { id: 1, src: "https://picsum.photos/id/10/800/1000", title: "Airport VIP Transfer", location: "Supadio", height: "h-[450px]" },
  { id: 2, src: "https://picsum.photos/id/12/800/600", title: "Luxury Wedding", location: "Pontianak", height: "h-[300px]" },
  { id: 3, src: "https://picsum.photos/id/15/800/900", title: "Corporate Trip", location: "Singkawang", height: "h-[400px]" },
  { id: 4, src: "https://picsum.photos/id/20/800/800", title: "Daily Rental", location: "Artha Garage", height: "h-[350px]" },
  { id: 5, src: "https://picsum.photos/id/26/800/1100", title: "Executive Escort", location: "Governor Office", height: "h-[500px]" },
  { id: 6, src: "https://picsum.photos/id/28/800/700", title: "Fleet Maintenance", location: "Workshop", height: "h-[320px]" },
];

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Logika Pendeteksi Arah Scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          // Jika scroll ke bawah, sembunyikan
          setIsVisible(false);
        } else { 
          // Jika scroll ke atas, munculkan
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <main className="min-h-screen bg-white pb-24">
      
      {/* --- HIGH-PERFORMANCE SMOKED GLASS BUTTON --- */}
      <nav 
        className={`fixed bottom-10 left-6 md:left-10 z-[80] transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <Link 
          href="/" 
          className="relative flex items-center gap-4 p-2 pr-8 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group"
        >
          {/* BACKGROUND LAYER: Ini kunci agar tidak delay. 
              Kita pakai div terpisah dengan opasitas lebih tinggi agar blur tidak berat dihitungnya */}
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md -z-10" />

          {/* Ikon Box - Solid & Bold */}
          <div className="w-12 h-12 rounded-xl bg-[#fe6b10] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <ArrowLeft size={20} />
          </div>
          
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 leading-none mb-1">Return to</span>
            <span className="text-sm font-black uppercase tracking-[0.05em] text-white leading-none">Main Page</span>
          </div>

          {/* Indikator - Simple & Static (Kurangi Animasi Berat) */}
          <div className="ml-4 flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe6b10]"></span>
          </div>
        </Link>
      </nav>

      {/* HEADER SECTION */}
      <section className="pt-48 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#fe6b10]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Artha Royal Documentation</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 uppercase leading-[0.85] tracking-tighter italic">
                Our <span className="text-[#fe6b10] not-italic">Journey.</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative group cursor-zoom-in break-inside-avoid"
                onClick={() => setSelectedImg(item)}
              >
                <div className={`relative w-full ${item.height} rounded-[2.5rem] overflow-hidden border-2 border-gray-100 transition-all duration-500 hover:border-[#fe6b10]/50`}>
                  <Image 
                    src={item.src} 
                    fill 
                    alt={item.title} 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">{item.title}</h3>
                    <p className="text-[9px] font-bold text-[#fe6b10] uppercase tracking-[0.2em] mt-2">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
          >
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-10 right-10 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-[#fe6b10] transition-colors"
            >
              <X size={20} />
            </button>
            <div className="relative w-full max-w-5xl h-[65vh] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image src={selectedImg.src} fill alt={selectedImg.title} className="object-cover" unoptimized />
            </div>
            <div className="mt-8 text-center">
               <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic">{selectedImg.title}</h2>
               <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">{selectedImg.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default GalleryPage;