import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Katalog from "@/components/katalog";
import Footer from "@/components/footer";
import BackToTop from "@/components/backtotop";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.rentalmobilpnk.com/#business",
    "name": "Artha Royal Group",
    "description": "Rental mobil terpercaya di Pontianak, Kalimantan Barat. Tersedia Avanza, Innova, Fortuner, Alphard, Hiace dengan atau tanpa driver.",
    "url": "https://www.rentalmobilpnk.com",
    "telephone": "+6281349988354",
    "email": "argroup.ptk@gmail.com",
    "image": "https://www.rentalmobilpnk.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Reformasi, Gg. Matematika",
      "addressLocality": "Pontianak",
      "addressRegion": "Kalimantan Barat",
      "postalCode": "78117",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -0.0236,
      "longitude": 109.3407
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "Rp 300.000 - Rp 4.000.000",
    "areaServed": { "@type": "City", "name": "Pontianak" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Armada Rental Mobil Pontianak",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewa Avanza Pontianak" }, "price": "300000", "priceCurrency": "IDR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewa Innova Pontianak" }, "price": "500000", "priceCurrency": "IDR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewa Fortuner Pontianak" }, "price": "1500000", "priceCurrency": "IDR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewa Hiace Pontianak" }, "price": "1400000", "priceCurrency": "IDR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewa Alphard Pontianak" }, "price": "4000000", "priceCurrency": "IDR" }
      ]
    },
    "sameAs": ["https://www.instagram.com/argroup.ptk/"]
  }
  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Katalog />
      <Footer />
      <BackToTop />
    </div>
  </>
)
}
