'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CTABookingSection() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-light text-white">
          Ready to <span className="text-indigo-400 font-semibold">Get Cloned?</span>
        </h2>
        <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
          Book a free call and we’ll show you exactly how your AI clone will speak, move, and scale your brand.
        </p>
      </motion.div>

      {/* Calendly Widget */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 shadow-xl p-6"
      >
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/d/cv9k-n8v-s84"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </motion.div>
    </section>
  )
}
