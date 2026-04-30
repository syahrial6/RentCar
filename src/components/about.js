"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Sparkles, Car, Award, ChevronRight } from "lucide-react";

const About = () => {
  const features = [
    { 
      icon: <ShieldCheck size={20} />, 
      title: "Resmi & Legal", 
      desc: "Izin operasional lengkap untuk keamanan perjalanan Anda." 
    },
    { 
      icon: <Sparkles size={20} />, 
      title: "24 Jam Melayani", 
      desc: "Komitmen penuh melayani kebutuhan reservasi Anda kapan pun." 
    },
    { 
      icon: <Car size={20} />, 
      title: "Luxury Fleet", 
      desc: "Unit terbaru dengan standar kebersihan hotel berbintang." 
    },
    { 
      icon: <Award size={20} />, 
      title: "Profesional", 
      desc: "Driver terlatih dengan etika pelayanan kelas VIP." 
    },
  ];

  return (
    <section id="about" className="relative bg-white py-24 lg:py-40 overflow-hidden">
      {/* Decorative Watermark - Vertical */}
      <div className="absolute right-0 top-0 h-full hidden lg:block select-none pointer-events-none">
        <span className="text-[20rem] font-black text-gray-50 leading-none uppercase [writing-mode:vertical-lr] opacity-80">
          Royal
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* VISUAL STACK (LEFT) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-[12px] border-white"
              >
                <Image
                  width={600}
                  height={800}
                  src="/images/10.webp"
                  alt="Luxury Car Artha Royal"
                  className="w-full h-[550px] lg:h-[700px] object-cover hover:scale-105 transition-transform duration-[2s]"
                />
                
                {/* Updated Float Card: Kualitas & Dedikasi */}
                <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#fe6b10]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Dedikasi</span>
                  </div>
                  <p className="text-gray-900 text-sm font-bold leading-relaxed">
                    Mengutamakan Kualitas Armada & Layanan Personal
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Back Decorative Card */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-gray-50 rounded-[2.5rem] -z-10 border border-gray-100" />
            
            {/* Orange Accent Line */}
            <div className="absolute top-1/2 -left-6 w-12 h-1 bg-[#fe6b10] z-30" />
          </div>

          {/* TEXT CONTENT (RIGHT) */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[2px] bg-[#fe6b10]" />
                <span className="text-[#fe6b10] text-xs font-black uppercase tracking-[0.4em]">
                  Premium Experience
                </span>
              </div>

              <h2 className="text-[2.2rem] leading-[1.1] xs:text-[2.5rem] sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight md:tracking-tighter uppercase mb-10">
                Beyond <br />
                <span className="text-[#fe6b10]">Transportation.</span>
              </h2>

              <div className="space-y-8 text-gray-500 text-lg leading-relaxed mb-16 border-l-4 border-gray-100 pl-8">
                <p>
                  <strong className="text-gray-900 font-bold">Artha Royal Group</strong> hadir sebagai jawaban atas kebutuhan transportasi eksklusif di Pontianak. Kami mengintegrasikan legalitas resmi dengan kenyamanan tanpa kompromi.
                </p>
                <p>
                  Kami memastikan setiap aspek perjalanan Anda, mulai dari kebersihan unit hingga profesionalisme pengemudi, dikelola dengan standar yang ketat untuk memberikan rasa aman dan prestise.
                </p>
              </div>

              {/* Icon Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                {features.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-3 text-gray-900 group-hover:text-[#fe6b10] transition-colors">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[#fe6b10]/10 transition-colors">
                        {item.icon}
                      </div>
                      <h4 className="font-black text-xs uppercase tracking-widest leading-none">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed pl-12">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="mt-16">
                <a href="#catalog" className="inline-flex items-center gap-3 text-gray-900 font-black text-xs uppercase tracking-[0.3em] group">
                  Eksplorasi Armada 
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#fe6b10] group-hover:border-[#fe6b10] group-hover:text-white transition-all">
                    <ChevronRight size={16} />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;