import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Katalog from "@/components/katalog";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Hero />

      <About />

      <Katalog />
      
      <Footer />
    </div>
  );
}
