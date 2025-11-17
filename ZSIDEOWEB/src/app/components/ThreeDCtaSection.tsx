'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ThreeDCTASection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] bg-[#f1f5f9] flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/3 left-[-10%] w-[400px] h-[400px] bg-blue-400 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 right-[-15%] w-[500px] h-[500px] bg-purple-400 opacity-20 blur-3xl rounded-full z-0 animate-pulse delay-1000" />

      {/* Foreground Glass Card with Calendly */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-5xl bg-white/80 border border-white/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-3xl p-8 md:p-12 text-center transform-gpu"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1128] leading-tight">
          Ready to <span className="text-blue-600 italic">Elevate</span> Your Brand?
        </h2>
        <p className="mt-4 text-lg text-gray-700 font-light">
          Let&apos;s create something visually unforgettable — with strategy, code, and storytelling.
        </p>

        {/* Calendly Inline Embed */}
        <div
          className="calendly-inline-widget mt-10 w-full rounded-xl overflow-hidden"
          data-url="https://calendly.com/d/cv9k-n8v-s84"
          style={{ minWidth: '320px', height: '700px' }}
        />

        <p className="mt-4 text-xs text-gray-500">Powered by Calendly</p>
      </motion.div>
    </section>
  );
};

export default ThreeDCTASection;
