'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About Me', href: '/about' },
  { name: 'Music and Videos', href: '/media' },
  { name: 'Tour', href: '/tour' },
  { name: 'Store', href: '/store' },
  { name: 'Community', href: '/community' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="w-full bg-black text-white font-cormorant border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        {/* Brand Name (bigger, responsive) */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-widest  font-light">
          Victoria Rose
        </h2>

        {/* Quote (bigger, comfy line-height, mobile padding) */}
        <p className="italic text-white/70 text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl text-center px-4">
          “<span className="text-[var(--accent)]">Find the light</span>, dear.” 
        </p>

        {/* Navigation (larger labels, still uppercase) */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base md:text-lg uppercase tracking-wide text-white/70 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Decorative Border */}
        <div className="w-full h-px bg-white/10 mt-10" />

        {/* Copyright (larger, readable) */}
        <p className="text-sm md:text-base text-white/50 tracking-wide mt-4">
          &copy; {new Date().getFullYear()} Victoria Rose. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
