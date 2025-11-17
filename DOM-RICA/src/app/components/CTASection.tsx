// components/CTASection.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32 text-white bg-[#0B0B12]"
      aria-label="Call to action"
    >
      {/* Background: brand glows + faint grid */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(51,84,165,0.35),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(164,120,255,0.25),transparent_50%)]
        "
      />
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-[0.18]
          bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:44px_44px]
          mask-image:[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
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
              [background-image:linear-gradient(100deg,#3354A5,rgba(164,120,255,0.9))]
            "
          >
            Business Playbook
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 text-base md:text-xl text-white/80"
        >
          Partner with{" "}
          <span className="font-semibold text-white">Stratos</span>
          
        </motion.p>

        {/* CTA Button */}
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
              shadow-[0_10px_40px_rgba(51,84,165,0.45)]
              transition-transform duration-200 hover:scale-[1.03] active:scale-100
              bg-[linear-gradient(90deg,#3354A5,#6C8BFF)]
              hover:[background-image:linear-gradient(90deg,#4262B0,#7C9BFF)]
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20
            "
            aria-label="Book your coaching session"
          >
            Book Your Call With Me
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-6 text-sm text-white/60"
        >
          Trusted by entrepreneurs and businesses across industries.
        </motion.p>
      </div>

      {/* Foreground soft vignette for depth */}
      <div
        className="
          pointer-events-none absolute inset-0
          [mask-image:radial-gradient(90%_60%_at_50%_40%,black,transparent)]
          bg-[radial-gradient(800px_300px_at_50%_120%,rgba(0,0,0,0.45),transparent)]
        "
        style={{} as React.CSSProperties}
      />
    </section>
  );
}
