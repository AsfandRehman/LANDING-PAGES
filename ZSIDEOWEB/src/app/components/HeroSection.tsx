'use client';

import { motion } from 'framer-motion';
import Orb from './Orb/Orb';

export default function HeroSection() {
  return (
    <section
      role="banner"
      aria-label="Hero Section with orb background"
      className="relative min-h-screen w-full flex items-center justify-center text-center bg-black overflow-hidden px-4 sm:px-8"
    >
      {/* Orb Fullscreen Background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={1}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center"
    >
      {/* Gradient Blur Accents */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-500/30 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Hero Heading */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 1,
              ease: 'easeOut',
            },
          },
        }}
        className="text-white font-extralight leading-tight tracking-tight text-[10vw] sm:text-6xl md:text-7xl lg:text-[6vw] xl:text-[5vw] drop-shadow-md"
      >
        Crafting Digital&nbsp;
        <span className="text-blue-400 font-semibold italic">Experiences</span>
        <br className="hidden sm:inline" />
        <span className="text-white font-light">for Your Success</span>
      </motion.h1>

      {/* Subtext / Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light"
      >
        We blend design, code, and motion to build unforgettable digital moments.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: 'easeOut' }}
        className="mt-10 inline-block px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-semibold text-lg sm:text-xl rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
      >
        Let&apos;s Build Together
      </motion.a>
    </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#contact" aria-label="Scroll down">
          <svg
            className="w-6 h-6 animate-bounce text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
