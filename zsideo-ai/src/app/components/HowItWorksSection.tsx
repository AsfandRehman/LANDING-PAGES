'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    title: 'Upload High-Quality Photos',
    description: 'Send us clear, front-facing shots — the better the quality, the better your clone.',
  },
  {
    title: 'We Train Your AI Clone',
    description: 'Our neural engine learns your facial structure, expressions, and nuances.',
  },
  {
    title: 'Write or Upload a Script',
    description: 'Tell us what your AI twin should say — via text or voice.',
  },
  {
    title: 'Receive a Talking AI Video',
    description: 'Get a stunningly realistic AI-powered talking video with your likeness.',
  },
]

export default function HowItWorksSection() {
  const containerRef = useRef(null)

  return (
    <section
      ref={containerRef}
      className="relative z-10 py-32 px-6 max-w-7xl mx-auto text-center"
    >
      {/* 🌌 Radial fade to blend into starfield */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-black/80 rounded-[100px] shadow-[0_0_300px_100px_rgba(0,0,0,0.9)]" />
      </div>

      {/* 📢 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-light text-white mb-24"
      >
        <span className="block text-white/20 text-base tracking-widest uppercase mb-2">
          Step-by-Step
        </span>
        How It Works
        <div className="w-24 h-[2px] bg-indigo-400/50 mx-auto mt-4 animate-pulse" />
      </motion.h2>

      {/* 🧬 Timeline Spine */}
      <div className="absolute left-1/2 top-52 bottom-20 w-[1.5px] bg-gradient-to-b from-indigo-500/30 via-indigo-400/20 to-transparent blur-sm z-0 hidden lg:block" />

      {/* 🧩 Cards */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 z-10">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.025] hover:shadow-indigo-500/30 ${
                isEven ? 'lg:ml-32' : 'lg:mr-32'
              }`}
            >
              {/* 🔵 Number */}
              <div className="absolute -top-8 -left-8 lg:-left-12 bg-indigo-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold shadow-md animate-ring-glow">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* 🔠 Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-6">
                {step.title}
              </h3>

              {/* 🧾 Description */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
