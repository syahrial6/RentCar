import React from 'react'
import {motion} from "motion/react"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center text-center py-20 md:py-32">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Selamat Datang di{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Sewa Mobil Pontianak
            </span>
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            className="mt-6 text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
           Layanan Sewa Mobil Terlengkap Di Pontianak ( Support By Artha Royal Group )
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
                href="https://wa.me/6281349988354?text=Halo%20CV%20Artha%20Royal%20Group,%20Saya%20Ingin%20Menyewa%20Mobil%20Dari%20Website"
                target="_blank"
              className="bg-green-400 text-white hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium shadow-lg transition transform hover:scale-105"
            >
              Chat Admin
            </a>
            
          </motion.div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-10 -left-10 w-80 h-80 bg-pink-400 rounded-full filter blur-3xl opacity-40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </section>
  )
}

export default Hero
