"use client";

import { NextSeo, LogoJsonLd } from "next-seo";
import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import CatalogSection from "@/components/katalog";
import Navbar from "@/components/navbar";
import Image from "next/image";
import SeoDefault from "@/components/SeoDefault";

export default function Home() {
  return (
    <>
       <SeoDefault />

      <div>
        <Navbar />
        <Hero />
        <About />
        <CatalogSection />
        <Footer />
        <div className="fixed bottom-5 right-5 z-50">
          <a
            href="https://wa.me/6281349988354?text=Halo%20CV%20Artha%20Royal%20Group,%20Saya%20Ingin%20Menyewa%20Mobil%20Dari%20Website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-white text-white rounded-full shadow-lg hover:bg-white hover:scale-110"
          >
            <Image src="/call.svg" width={50} height={50} alt="Whatsapp" />
          </a>
        </div>
      </div>
    </>
  );
}
