"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const galleryData = [
  { id: 1, src: "/document/documentation-1.jpg", size: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/document/documentation-2.jpg", size: "md:col-span-1" },
  { id: 3, src: "/document/documentation-3.jpg", size: "md:col-span-1" },
  { id: 4, src: "/document/documentation-4.jpg", size: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "/document/documentation-5.jpg", size: "md:col-span-1" },
  { id: 6, src: "/document/documentation-6.jpg", size: "md:col-span-2" },
  { id: 7, src: "/document/documentation-7.jpg", size: "md:col-span-1" },
  { id: 8, src: "/document/documentation-8.jpg", size: "md:col-span-1" },
  { id: 9, src: "/document/documentation-9.jpg", size: "md:col-span-2 md:row-span-2" },
  { id: 10, src: "/document/documentation-10.jpg", size: "md:col-span-1" },
  { id: 11, src: "/document/documentation-11.jpg", size: "md:col-span-1" },
  { id: 12, src: "/document/documentation-12.jpg", size: "md:col-span-1" },
  { id: 13, src: "/document/documentation-13.jpg", size: "md:col-span-1" },
  { id: 14, src: "/document/documentation-14.jpg", size: "md:col-span-2" },
  { id: 15, src: "/document/documentation-15.jpg", size: "md:col-span-1" },
];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Fungsi Navigasi
  const showNext = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % galleryData.length);
  }, []);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  }, []);

  // Keyboard Support (Panah Kiri/Kanan & ESC)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        setIsVisible(window.scrollY < lastScrollY || window.scrollY < 100);
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const selectedImg = selectedIndex !== null ? galleryData[selectedIndex] : null;

  return (
    <main className="min-h-screen bg-white pb-32">
      
      {/* NAVIGATION - Minimalist Glass */}
      <nav className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}>
        <Link href="/" className="flex items-center gap-4 p-2 pr-6 rounded-2xl bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl group">
          <div className="w-10 h-10 rounded-xl bg-[#fe6b10] text-white flex items-center justify-center transition-transform group-hover:-translate-x-1">
            <ArrowLeft size={18} strokeWidth={3} />
          </div>
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Back to Home</span>
        </Link>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#fe6b10]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Documentation</span>
          </div>
          <h1 className="text-7xl md:text-[120px] font-black text-gray-900 uppercase leading-[0.8] tracking-tighter italic mb-8">
            OUR <span className="text-[#fe6b10] not-italic">MOMENTS.</span>
          </h1>
          <p className="max-w-xl text-gray-400 text-xs font-medium uppercase tracking-widest leading-loose">
            Kumpulan jejak perjalanan yang kami abadikan khusus untuk Anda.
          </p>
        </motion.div>
      </section>

      {/* BENTO GRID */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className={`relative group cursor-pointer overflow-hidden rounded-[2rem] bg-gray-100 transition-all duration-500 hover:ring-4 hover:ring-[#fe6b10]/20 ${item.size}`}
            >
              <Image 
                src={item.src} 
                fill 
                alt="Documentation" 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Camera size={20} className="text-[#fe6b10]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX WITH NAVIGATION */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button className="absolute top-8 right-8 w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center hover:bg-[#fe6b10] hover:text-white transition-all z-[1010]">
              <X size={20} />
            </button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-[1010]">
              <button 
                onClick={showPrev}
                className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-xl border border-gray-100 rounded-full flex items-center justify-center pointer-events-auto hover:bg-[#fe6b10] hover:text-white transition-all group"
              >
                <ChevronLeft size={24} className="group-active:scale-90" />
              </button>
              <button 
                onClick={showNext}
                className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-xl border border-gray-100 rounded-full flex items-center justify-center pointer-events-auto hover:bg-[#fe6b10] hover:text-white transition-all group"
              >
                <ChevronRight size={24} className="group-active:scale-90" />
              </button>
            </div>
            
            {/* Content Preview */}
            <motion.div 
              key={selectedImg.id} // Kunci agar Framer Motion tahu gambar berubah
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="relative w-full h-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImg.src} 
                fill 
                alt="Full Preview" 
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Counter Visual */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400">
              {selectedIndex + 1} / {galleryData.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default GalleryPage;