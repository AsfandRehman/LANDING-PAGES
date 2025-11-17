// components/CTASection.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

export default function CTASection() {
  return (
    <section
      id="cta"
      aria-label="Call to action"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32 text-white bg-black"
      style={
        {
          backgroundImage: "url('/images/ctabg.jpg')",
          backgroundSize: "cover", // corrected from 'full'
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        } as React.CSSProperties
      }
    >
      {/* --- DARK OVERLAY (new stronger one) --- */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* --- Depth & Color System (behind content) --- */}

      {/* Top red light peeking down */}
      <div
        className="
          pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 z-[1]
          h-[420px] w-[1400px]
          blur-2xl opacity-90
          [background:radial-gradient(60%_80%_at_50%_0%,rgba(255,56,86,0.85),rgba(255,64,64,0.5)_40%,rgba(255,64,64,0.25)_58%,transparent_72%)]
          mix-blend-screen
        "
      />

      {/* Wide red ceiling wash */}
      <div
        className="
          pointer-events-none absolute inset-x-0 -top-10 z-[1] h-44
          [background:linear-gradient(180deg,rgba(255,52,86,0.45),rgba(255,52,86,0.20)_56%,transparent)]
          mix-blend-screen
        "
      />

      {/* Animated aurora blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.25, y: -20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        {/* left glow */}
        <motion.div
          initial={{ x: -120, y: -40, scale: 1 }}
          animate={{ x: -60, y: 0, scale: 1.08 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="
            absolute top-4 left-[-10%] h-[420px] w-[420px]
            blur-3xl opacity-60
            [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,84,112,0.55),rgba(255,35,60,0.35)_48%,transparent_70%)]
            mix-blend-screen
          "
        />
        {/* right glow */}
        <motion.div
          initial={{ x: 120, y: -10, scale: 1 }}
          animate={{ x: 60, y: 10, scale: 1.06 }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="
            absolute top-8 right-[-8%] h-[360px] w-[360px]
            blur-3xl opacity-55
            [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,94,94,0.5),rgba(255,58,58,0.32)_48%,transparent_70%)]
            mix-blend-screen
          "
        />
      </motion.div>

      {/* Diagonal red sweep */}
      <div
        className="
          pointer-events-none absolute z-[1]
          left-1/2 top-[32%] h-[220px] w-[120%] -translate-x-1/2 rotate-[352deg]
          blur-2xl opacity-35
          [background:linear-gradient(90deg,transparent,rgba(255,72,94,0.38)_30%,rgba(255,62,86,0.5)_50%,rgba(255,72,94,0.38)_70%,transparent)]
          mix-blend-screen
        "
      />

      {/* Subtle grid texture */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.18]
          bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:44px_44px]
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
        "
      />

      {/* Soft vignette edges */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1]
          [background:radial-gradient(120%_70%_at_50%_35%,transparent_0%,transparent_58%,rgba(0,0,0,0.35)_80%,rgba(0,0,0,0.8)_100%)]
        "
      />

      {/* --- Content --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Let’s Build Your{" "}
          <span
            className="
              bg-clip-text text-transparent
              [background-image:linear-gradient(100deg,#FF2D55,rgba(255,90,90,0.95))]
              drop-shadow-[0_4px_24px_rgba(255,45,85,0.35)]
            "
          >
            Business Playbook
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 text-base md:text-xl text-white/90"
        >
          Partner with{" "}
          <span className="font-semibold text-white">Rav-Fuel</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="/join"
            className="
              inline-flex items-center justify-center gap-2 rounded-xl
              px-10 py-4 text-base md:text-lg font-bold
              shadow-[0_10px_40px_rgba(255,45,85,0.45)]
              transition-transform duration-200 hover:scale-[1.03] active:scale-100
              bg-[linear-gradient(90deg,#FF2D55,#FF5A5A)]
              hover:[background-image:linear-gradient(90deg,#FF3A63,#FF6E6E)]
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20
            "
            aria-label="Book your coaching session"
          >
            Book Your Call With Me
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-6 text-sm text-white/70"
        >
          Trusted by entrepreneurs and businesses across industries.
        </motion.p>
      </div>

      {/* Foreground vignette */}
      <div
        className="
          pointer-events-none absolute inset-0
          [mask-image:radial-gradient(92%_64%_at_50%_40%,black,transparent)]
          bg-[radial-gradient(800px_300px_at_50%_120%,rgba(0,0,0,0.45),transparent)]
        "
      />
    </section>
  );
}
