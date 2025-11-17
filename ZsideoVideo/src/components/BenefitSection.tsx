"use client"

import { motion } from "framer-motion"

export default function ReelBenefits() {
  const benefits = [
    {
      title: "Shot Right at Your Place",
      description: "We come to your home, studio, or office — making the shoot super easy and convenient for you.",
      stat: "100%",
      statLabel: "on-location shoots"
    },
    {
      title: "Tailored for Social Media",
      description: "We create short-form content that’s not just trendy — it’s optimized to actually perform.",
      stat: "3.7x",
      statLabel: "better reach vs DIY"
    }
  ]

  return (
    <section className="w-full bg-white py-32 px-4 relative z-0 overflow-x-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-blue-50/30 to-transparent -skew-y-6" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-28 px-4 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-blue-600 block">Short-Form Videos</span>
            <span className="block">Made For You</span>
          </h2>
          <div className="h-1 w-24 bg-blue-600 mb-8 mx-auto md:mx-0" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto md:mx-0">
            We handle everything — shooting, editing, and optimizing content that helps you grow online.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-200 relative shadow-sm"
            >
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                {benefit.stat}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 pr-16">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {benefit.description}
              </p>
              <div className="text-blue-600 font-medium">
                {benefit.statLabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md">
            Book a Shoot
          </button>
        </motion.div>
      </div>
    </section>
  )
}
