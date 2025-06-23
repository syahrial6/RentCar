import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden font-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative z-10 flex flex-col items-center text-center py-20 md:py-32"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Selamat Datang di{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f5ce42] to-[#f5ce42]">
              <Typewriter
                words={["Sewa Mobil Pontianak"]}
                cursorStyle={"|"}
                typeSpeed={150}
                cursor={true}
              />
            </span>
          </motion.h1>

          {/* Animated Subheading */}
          <h2 className="mt-6 text-lg md:text-xl max-w-3xl">
            Layanan Rental Mobil PNK Terlengkap ( Support By Artha Royal Group )
          </h2>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex space-x-4"
          >
            <a
              href="https://wa.me/6281349988354?text=Halo%20CV%20Artha%20Royal%20Group,%20Saya%20Ingin%20Menyewa%20Mobil%20Dari%20Website"
              target="_blank"
              className="bg-green-400 text-white hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium shadow-lg transition transform hover:scale-105"
            >
              Chat Admin 1
            </a>
          </motion.div>
          
        </motion.div>
      </div>

      {/* Background Animation */}
    </motion.section>
  );
};

export default Hero;
