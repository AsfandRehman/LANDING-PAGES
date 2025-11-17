'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Camera, UploadCloud } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book Your Shoot',
    description:
      'Pick a time and location — home, studio, or office. We travel to you.'
  },
  {
    icon: Camera,
    title: 'We Film On-Site',
    description:
      'We bring our pro gear and film vertical Reels/TikToks in 4K.'
  },
  {
    icon: UploadCloud,
    title: 'Get Raw Files',
    description:
      'Delivered same day or next morning — ready to post or edit.'
  }
]

export default function HowItWorks() {
  return (
    <section
      className="relative w-full py-32 bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/whatbg.jpg')" // Replace with your actual image
      }}
    >
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-blue-500">Our 3-Step</span> Shoot Process
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto">
            No editing. No delays. Just expert footage delivered fast.
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.25 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="bg-blue-600/80 rounded-full p-4 mb-6">
                <step.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">
                Step {i + 1}: {step.title}
              </h3>
              <p className=" text-black leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <button className="px-8 py-3 rounded-xl text-lg font-medium bg-blue-600 hover:bg-blue-700 transition-colors">
            Book Your Shoot
          </button>
        </motion.div>
      </div>
    </section>
  )
}
