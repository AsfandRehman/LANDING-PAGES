'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTABookingSection() {
  return (
    <section  id='#letstalk'  className="relative bg-white text-black py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120%] h-full pointer-events-none opacity-10 blur-3xl bg-gradient-to-br from-rose-400 via-purple-400 to-blue-400 z-0" />

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-600">Shoot</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-600">
          Reserve your shoot and elevate your brand with cinematic short-form content.
        </p>

        <Link
          href="https://calendly.com/your-link-here"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-black text-white px-8 py-4 text-lg sm:text-xl font-semibold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Let’s Shoot
        </Link>

        <p className="mt-3 text-sm text-neutral-400">Powered by Calendly</p>
      </motion.div>
    </section>
  );
}
