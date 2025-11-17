'use client'

import { motion } from 'framer-motion'

const videoPath = '/videos/aivideo.mp4'
const posterPath = '/videos/poster.png'

export default function CloneDemoSection() {
  return (
    <section className="relative z-10 px-4 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* ✅ No background image — your 3D stars stay visible underneath */}
      {/* ✅ Minimal, subtle glow only behind content */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-indigo-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* 🎥 Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-[320px] sm:max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-indigo-500/20 transition-all duration-500"
        >
<video
  src={videoPath}
  poster={posterPath}
  controls
  playsInline
  preload="metadata"
  className="w-full h-full object-cover"
/>



        </motion.div>

        {/* 📢 Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6 max-w-xl mx-auto lg:mx-0">
            <span className="block">See Your</span>
            <span className="text-indigo-400 font-semibold drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              AI Clone
            </span>{' '}
            <span className="block">Come to Life</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-6">
            It’s not just a video — it’s your presence, replicated perfectly.
            High fidelity. Emotionally expressive. Professionally powerful.
          </p>
          <motion.a
            href="#create"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 hover:from-indigo-300 hover:to-blue-300 text-black font-semibold text-base shadow-md hover:shadow-xl transition-all"
          >
            Create My Clone
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
