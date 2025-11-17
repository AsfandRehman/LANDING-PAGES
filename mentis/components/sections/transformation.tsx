'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Transformation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: '1:1 Elite Coaching',
      short: 'Tailored mentorship to accelerate your growth.',
    },
    {
      title: 'Live Market Analysis',
      short: 'Real-time insights during major sessions.',
    },
    {
      title: 'Strategy Frameworks',
      short: 'Proven systems to structure your trades.',
    },
    {
      title: 'Emergency Support',
      short: 'Help when it matters most.',
    },
    {
      title: 'Risk Management',
      short: 'Capital protection is rule #1.',
    },
    {
      title: 'Performance Tracking',
      short: 'See what’s working. Fix what’s not.',
    },
  ];

  return (
    <section
      id="transformation"
      ref={containerRef}
      className="relative py-24 bg-[#f9fafb] overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anton text-mentis-slate-900 mb-6">
          Your <span className="gradient-stroke shiny-text">Transformation Engine</span>
        </h2>
        <p className="text-xl font-montserrat text-black max-w-3xl mx-auto leading-relaxed">
          Comprehensive coaching system designed to turn struggling traders into consistent profit machines.
        </p>
      </motion.div>

      {/* Progress Journey */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-24 max-w-5xl mx-auto"
      >
        <div className="relative bg-[#1e1b45] p-10 rounded-2xl shadow-2xl border border-white/10 text-white">
          <h3 className="text-2xl font-anton mb-8 text-center">
            Your Journey to Consistent Profits
          </h3>

          <div className="relative">
            {/* Progress Bar */}
            <div className="w-full h-2 bg-white rounded-full">
              <div className="h-full bg-gradient-to-r from-mentis-green to-mentis-blue-600 rounded-full transition-all duration-700 ease-in-out" />
            </div>

            {/* Steps */}
            <div className="flex justify-between mt-6 px-2">
              {['Assessment', 'Strategy', 'Implementation', 'Optimization', 'Mastery'].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-4 h-4 bg-mentis-green rounded-full mb-2" />
                  <span className="text-sm font-montserrat text-white">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative bg-[#1e1b45] border border-white/10 rounded-xl shadow-xl p-6 hover:bg-[#2c285d] transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-anton text-white mb-2">{service.title}</h3>
            <p className="text-sm font-montserrat text-slate-300 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {service.short}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-mentis-blue-600 to-mentis-blue-500 hover:brightness-110 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 shadow-lg"
        >
          Start Your Transformation Today
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Transformation;
