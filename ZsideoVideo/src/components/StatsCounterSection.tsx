"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"

const stats = [
  { value: 120, label: "Successful Shoots" },
  { value: 35, label: "Happy Clients" },
  { value: 6, label: "Team Members" },
  { value: 4, label: "Cities Served" }
]

export default function StatsCounterSection() {
  return (
    <>
      {/* Background Ribbon (positioned outside the section) */}
      <div className="relative w-full h-0">
        <div className="absolute top-1/3 left-0 w-full h-1/2 bg-gradient-to-r from-blue-50/30 to-transparent -skew-y-6 z-[-1]" />
      </div>

      {/* Main Stats Section */}
      <section className="relative w-full py-32 px-4 bg-gradient-to-b from-white via-gray-100 to-white z-0">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-12">
              Numbers That Back It Up
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-20 max-w-xl mx-auto">
              Real results from real people — these numbers tell our story.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-5xl font-bold text-blue-600">
                  <CountUp end={stat.value} duration={2} />
                  {stat.label.includes("%") ? "%" : ""}
                </div>
                <p className="text-gray-700 text-lg mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
