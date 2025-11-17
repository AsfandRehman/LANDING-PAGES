'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToMethod = () => {
    const element = document.getElementById('method');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-white text-[#0A1F44] pt-32 pb-24 px-4 flex flex-col items-center"
    >
      {/* Hero Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl w-full"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-anton mb-6 leading-tight drop-shadow-md">
          Trading Alone Isn’t the Problem.{' '}
          <span className="text-[#3B82F6] shiny-text">Trading Blind Is.</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl font-semibold font-montserrat text-[#1e2a50] mb-12 max-w-3xl mx-auto leading-relaxed">
          <span className="italic">Mentis</span> turns blown accounts into consistent profit with
          <span className="text-[#2563EB] font-semibold"> proven strategy</span> + 
          <span className="text-[#2563EB] font-semibold"> trader psychology</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <motion.button
            onClick={scrollToMethod}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0A1F44] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#1e3a8a] transition"
          >
            Start Becoming Profitable
          </motion.button>

          <motion.button
            onClick={scrollToMethod}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="border border-[#0A1F44] text-[#0A1F44] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0A1F44] hover:text-white transition"
          >
            Learn the Method
          </motion.button>
        </div>
      </motion.div>

      {/* 🔥 Video Section with Glow */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-400 relative"
        style={{
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)', // blue glow
        }}
      >
        <video
          className="w-full h-auto object-cover rounded-3xl"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src="../videos/yourvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 flex flex-col items-center"
      >
        <p className="text-sm text-[#0A1F44] mb-2 font-montserrat bg-white px-3 py-1 rounded-full border border-[#cbd5e1]">
          Scroll to discover
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-[#e2e8f0] p-2 rounded-full"
        >
          <ChevronDown className="text-[#0A1F44]" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
