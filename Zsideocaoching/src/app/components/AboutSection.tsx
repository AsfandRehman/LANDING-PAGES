// components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#0B0C10] py-28 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zsideo-gradient/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            About <span className="text-zsideo-gradient">ZSideo Coaching</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            At <span className="text-zsideo-gradient">ZSideo Content</span>, we believe
            in more than just business growth — we coach entrepreneurs to think
            strategically, act decisively, and scale sustainably.
          </p>
          <p className="mt-4 text-lg text-gray-400">
            With years of proven strategies and frameworks, we’ve helped founders,
            startups, and established businesses turn challenges into clarity and
            potential into results.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-extrabold text-zsideo-gradient">250+</h3>
              <p className="text-gray-400">Businesses coached</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-zsideo-gradient">15+</h3>
              <p className="text-gray-400">Industries served</p>
            </div>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/about.jpg"
            alt="ZSideo Coaching"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
