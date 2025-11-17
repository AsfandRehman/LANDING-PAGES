'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Target, Zap, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Method = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const methods = [
    {
      icon: Brain,
      title: 'Mindset Mastery',
      description:
        'Rewire your psychology to eliminate fear, greed, and revenge trading. Operate with clarity and emotional control.',
      color: 'text-emerald-400',
      step: '01'
    },
    {
      icon: Target,
      title: 'Strategic Structure',
      description:
        'Design bulletproof systems with clear entry, exit, and risk protocols. No more guesswork — just proven structure.',
      color: 'text-indigo-400',
      step: '02'
    },
    {
      icon: Zap,
      title: 'Precision Execution',
      description:
        'Execute trades with mechanical discipline. Remove hesitation and build consistency with every position.',
      color: 'text-yellow-400',
      step: '03'
    },
    {
      icon: TrendingUp,
      title: 'Profitable Scaling',
      description:
        'Grow your account systematically while preserving risk integrity. Scale like a professional, not a gambler.',
      color: 'text-green-400',
      step: '04'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.method-card', {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out'
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, {
            opacity: 0,
            y: 40,
            rotateX: 4
          }),
        start: 'top 85%',
        end: 'bottom 20%',
        once: false
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="method"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-[#0e0c2d] via-[#15124b] to-[#1b155f] overflow-hidden text-white"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 px-4"
      >
        <h2 className="text-5xl sm:text-6xl font-anton text-white mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
          The <span className="shiny-text text-indigo-300">Mentis Method</span>
        </h2>
        <p className="text-xl text-gray-300 font-montserrat max-w-3xl mx-auto leading-relaxed">
          Our systematic framework transforms traders from chaotic decision-makers into consistent, confident professionals.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-14 relative z-10">
        {methods.map((method, index) => (
          <motion.div
            key={index}
            className={`method-card opacity-0 transform translate-y-10 rotate-x-3 perspective-800 ${
              index % 2 === 0 ? 'sm:-translate-y-6' : 'sm:translate-y-6'
            }`}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative group">
              {/* Hover Background Glow */}
              <div className="absolute inset-0 rounded-2xl z-[-1] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-emerald-400 to-indigo-500 blur-md" />

              {/* Card Content */}
              <div className="relative p-8 bg-[#14122e]/80 backdrop-blur-xl text-white rounded-2xl shadow-lg border border-white/10 group-hover:shadow-2xl transition-all duration-300">
                {/* Step Circle */}
                <div className="absolute -top-5 left-6 bg-white text-[#0B1F3A] w-12 h-12 rounded-full flex items-center justify-center font-bold font-anton text-md border border-gray-300 shadow">
                  {method.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6 mt-6">
                  <method.icon className={`${method.color} w-8 h-8`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-anton text-white mb-3">{method.title}</h3>
                <p className="text-gray-300 font-montserrat leading-relaxed text-base">
                  {method.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-xl bg-[#0B1F3A] text-white text-lg font-semibold font-montserrat shadow-xl hover:bg-[#122A4F] transition-all duration-300"
        >
          Start Your Mentis Journey
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Method;
