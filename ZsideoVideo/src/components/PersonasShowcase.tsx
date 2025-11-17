'use client'

import { motion } from 'framer-motion'
import {
  User,
  Building,
  Mic,
  Camera,
  Briefcase,
  UploadCloud
} from 'lucide-react'

const personas = [
  {
    icon: User,
    label: 'Creators',
    description:
      'Content that keeps your audience watching — filmed in your own space.'
  },
  {
    icon: Mic,
    label: 'Coaches',
    description:
      'Position yourself as the expert — we’ll handle the visuals.'
  },
  {
    icon: Camera,
    label: 'Influencers',
    description:
      'Binge-worthy videos made fast — just show up & shoot.'
  },
  {
    icon: Building,
    label: 'Brands',
    description:
      'DTC, SaaS, or services — scroll-stopping promos that convert.'
  },
  {
    icon: Briefcase,
    label: 'Realtors',
    description:
      'Walkthroughs, intros, and market updates — filmed on site.'
  },
   {
    icon: UploadCloud,
    label: 'Businesses',
    description:
      'Corporate videos that tell your story — from testimonials to team highlights.'
  }
]

export default function PersonasShowcase() {
  return (
    <section className="relative w-full py-32 px-4 bg-gradient-to-tr from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-black leading-tight mb-4">
            <span className="text-blue-600">Who</span> We Film For
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We don’t just shoot for everyone. We shoot for movers — the ones building a brand.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {personas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group p-6 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl transition-all hover:border-blue-600 hover:shadow-blue-200"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-100 group-hover:scale-110 transition-transform flex items-center justify-center shadow-md">
                <p.icon className="w-7 h-7 text-blue-600" />
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.label}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
