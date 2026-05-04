"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tombol muncul setelah scroll 400px
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-6 md:right-10 z-[90] 
        w-14 h-14 flex items-center justify-center
        rounded-2xl border border-white/20 shadow-2xl
        bg-gray-900/90 text-white transition-all duration-500 ease-out
        ${showButton 
          ? "opacity-100 translate-y-0 scale-100 visible" 
          : "opacity-0 translate-y-10 scale-50 invisible pointer-events-none"
        }
        hover:bg-[#fe6b10] hover:shadow-[0_0_30px_rgba(254,107,16,0.3)] group
      `}
      style={{ willChange: "transform, opacity" }}
    >
      <ChevronUp 
        size={28} 
        className="transition-transform duration-300 group-hover:-translate-y-1" 
      />
      
      {/* Efek kilatan cahaya saat muncul */}
      <span className="absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </span>
    </button>
  );
}

export default BackToTop;