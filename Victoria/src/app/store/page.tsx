'use client';

import { motion } from 'framer-motion';
import FloatingCtaBar from '../components/FloatingCtaBar';

export default function StorePage() {
  return (
    <main className="bg-gradient-to-b from-black via-[var(--background)] to-black text-[var(--foreground)] font-bold min-h-screen flex flex-col justify-between px-6 py-24">
      
      {/* === Coming Soon Hero === */}
      <section className="flex-1 flex flex-col justify-center items-center text-center gap-6">
        <motion.h1
          className="text-5xl md:text-7xl uppercase italic tracking-wider text-[var(--primary)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Store Launching Soon
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/70 font-cormorant max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          An exclusive collection of merch, lyrics, and limited drops — crafted for the unapologetically tender.
        </motion.p>
      </section>

      {/* === CTA Bar at Bottom === */}
      <div className="mt-22 ">
        <FloatingCtaBar />
      </div>
    </main>
  );
}
