import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Gambar dengan animasi */}
          <div
            className="overflow-hidden rounded-lg shadow-lg"
          
          >
            <Image
              width={600}
              height={400}
              src="/images/10.webp"
              alt="Rental Mobil Pontianak"
              priority
              className="w-full h-54 object-cover"
              
            />
          </div>

          {/* Deskripsi dengan animasi */}
          <div
            className="text-center md:text-left"
          
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">
              CV Artha Royal Group adalah penyedia jasa rental mobil di
              Pontianak. Dengan pengalaman bertahun-tahun, kami berkomitmen
              untuk memberikan pelayanan terbaik kepada setiap pelanggan. Kami
              menawarkan beragam pilihan mobil berkualitas, mulai dari mobil
              keluarga hingga mobil mewah, dengan harga yang kompetitif. Tim
              kami yang profesional siap membantu Anda memilih mobil yang sesuai
              dengan kebutuhan dan anggaran. Nikmati perjalanan Anda dengan
              nyaman dan aman bersama CV Artha Royal Group. Dengan pengalaman
              bertahun-tahun, kami telah menjadi pilihan utama bagi wisatawan
              maupun pelaku bisnis. Kami menawarkan berbagai pilihan mobil
              berkualitas dengan harga yang bersaing. Selain itu, kami juga
              menyediakan layanan antar-jemput dan supir yang profesional.
              Kunjungi kami di pusat kota Pontianak dan nikmati perjalanan yang
              nyaman dan menyenangkan.
            </p>
         
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-30"
        
        />
        <motion.div
          className="absolute  w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl opacity-30"
         
        />
      </div>
    </section>
  );
}
