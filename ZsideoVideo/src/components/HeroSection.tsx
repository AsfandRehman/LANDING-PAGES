"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroVideoSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/herobg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
<div className="absolute inset-0 bg-white/10 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight mb-6 tracking-tight"
        >
          Professional Videographers in 
          <br />
          All 50 States
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-white/80 mb-10"
        >
          We Bring the Studio to You – Anywhere in the U.S.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <button className="relative overflow-hidden px-10 py-5 border border-white text-white text-base sm:text-lg rounded-full group shadow-lg hover:shadow-sky-300/30 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-sky-600">
                Make Yours Now →
              </span>
              <span
                className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"
                aria-hidden="true"
              />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
