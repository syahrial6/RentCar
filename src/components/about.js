"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Clock, Car, Award } from "lucide-react";

const About = () => {
  const features = [
    { icon: <ShieldCheck className="text-[#fe6b10]" />, title: "Resmi & Aman", desc: "Berizin resmi & asuransi lengkap" },
    { icon: <Clock className="text-[#fe6b10]" />, title: "Layanan 24/7", desc: "Siap melayani perjalanan mendadak" },
    { icon: <Car className="text-[#fe6b10]" />, title: "Armada Terbaru", desc: "Unit prima, bersih, dan wangi" },
    { icon: <Award className="text-[#fe6b10]" />, title: "Supir Handal", desc: "Driver ramah & berpengalaman" },
  ];

  return (
    <section id="about" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Dekorasi Background Halus */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <span className="absolute top-10 -left-20 text-[15rem] font-black text-gray-50 opacity-50 select-none">
          ARTHA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* KIRI: Visual & Branding */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <Image
                width={500}
                height={700}
                src="/images/10.webp"
                alt="Luxury Car Artha Royal"
                className="w-full h-[500px] lg:h-[650px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <p className="text-white text-sm font-medium leading-relaxed">
                  &quot;Kenyamanan perjalanan Anda adalah prioritas utama kami di setiap kilometer.&quot;
                </p>
              </div>
            </motion.div>

            {/* Aksen Dot Pattern */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(#fe6b10_2px,transparent_2px)] [background-size:20px_20px] opacity-20 -z-10" />
          </div>

          {/* KANAN: Content & Detail */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#fe6b10]/5 border border-[#fe6b10]/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#fe6b10] animate-pulse" />
                <span className="text-[#fe6b10] text-[10px] font-bold uppercase tracking-[0.3em]">Tentang Kami</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8 uppercase">
                Eksklusivitas Dalam <br />
                <span className="text-[#fe6b10]">Setiap Perjalanan</span>
              </h2>

              <div className="space-y-6 text-gray-600 text-lg mb-12 max-w-2xl">
                <p>
                  <strong className="text-gray-900 font-bold">Artha Royal Group</strong> hadir di Pontianak untuk mengubah cara Anda memandang jasa transportasi. Kami bukan sekadar persewaan, kami adalah standar kenyamanan royal.
                </p>
                <p>
                  Dengan dedikasi bertahun-tahun, kami mengurasi setiap unit armada kami untuk memastikan Anda mendapatkan performa terbaik dengan harga yang kompetitif tanpa kompromi pada kualitas.
                </p>
              </div>

              {/* Grid Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;