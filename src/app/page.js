"use client";

import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import CatalogSection from "@/components/katalog";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { DefaultSeo } from "next-seo";

export default function Home() {

  const SEO = {
    title: "Sewa Mobil Pontianak - CV Artha Royal Group",
    description:
      "Butuh Mobil di Pontianak? CV Artha Royal Group adalah Penyewaan Mobil Resmi...",
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: "https://rentalmobilpnk.com/",
      siteName: "Rental Mobil Pontianak",
      images: [
        {
          url: "https://rentalmobilpnk.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Sewa Mobil Pontianak",
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
    },
  };
  return (
    <>
       <DefaultSeo {...SEO} />

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
