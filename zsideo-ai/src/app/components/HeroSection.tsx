'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-black">
      {/* 🔮 Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/10 to-transparent" />
        <div
          className="absolute -top-60 -left-60 w-[700px] h-[700px] blur-[150px] opacity-30 animate-glow-slow"
          style={{ background: 'radial-gradient(circle, #8a2be2, transparent)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[130px] opacity-40 animate-glow-medium"
          style={{ background: 'radial-gradient(circle, #00ffff, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] translate-x-[-50%] translate-y-[-50%] blur-[160px] opacity-50 animate-glow-fast animate-float"
          style={{ background: 'radial-gradient(circle, #ff00ff, transparent)' }}
        />
      </div>

      {/* 🧠 Modern Headline */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="text-white font-light leading-tight max-w-5xl text-4xl md:text-6xl lg:text-7xl tracking-tight"
      >
        {['Clone', 'Your', 'Presence', 'Into'].map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 70, damping: 14 }
              }
            }}
            className="block"
          >
            {word}
          </motion.span>
        ))}

        {/* Highlight word: AI Twin */}
        <motion.span
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', stiffness: 90, damping: 10 }
            }
          }}
          className="block mt-2 text-indigo-400 font-semibold relative"
        >
          <span className="drop-shadow-[0_0_18px_rgba(99,102,241,0.8)]">Your AI Twin</span>
          <motion.div
            layoutId="underline"
            className="absolute left-0 right-0 -bottom-2 h-[2px] bg-indigo-400/50"
          />
        </motion.span>
      </motion.h1>

      {/* 🌐 Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-white/70 mt-6 max-w-2xl text-lg md:text-xl font-extralight"
      >
        AI-generated videos, speech & presence. Your clone is just a click away.
      </motion.p>

      {/* 🚀 CTA */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-10"
      >
        <Link
          href="#create"
          className="inline-block px-8 py-4 rounded-full text-lg font-semibold text-black bg-gradient-to-r from-indigo-400 to-blue-400 hover:from-indigo-300 hover:to-blue-300 transition-all shadow-lg hover:shadow-xl"
        >
          Create My AI Clone
        </Link>
      </motion.div>
    </section>
  )
}
