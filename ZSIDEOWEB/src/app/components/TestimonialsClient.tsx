'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Ridgeback Built',
    comment:
      'Absolutely blown away by the website! It’s clean, fast, and exactly what we envisioned. Couldn’t be happier!',
    image: '/images/ridge.png',
  },
  {
    name: 'Odyssey',
    comment:
      'This landing page boosted my conversion rate overnight. It’s modern, responsive and super on-brand. Amazing work!',
    image: '/images/odyssey.png',
  },
  {
    name: 'Servehzah',
    comment:
      'The animations, the polish, the attention to detail — you nailed our aesthetic. It feels like a $50K site!',
    image: '/images/serve.png',
  },
  {
    name: 'ACGI Media ',
    comment:
      'I’m getting leads every day now. The website you built has totally changed the game for my brand.',
    image: '/images/acg.png',
  },
  {
    name: 'The Mayne Brothers',
    comment:
      'You delivered EXACTLY what I dreamed of. My clients are obsessed with how modern it looks.',
    image: '/images/bro.png',
  },
  {
    name: 'Marleny Martinez',
    comment:
      'A futuristic, bold website that screams innovation. Can’t wait to work again!',
    image: '/images/marli.png',
  },
];

export default function TestimonialsClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main className="bg-white text-black">
      {/* Hero with Depth Animation */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-40 bg-white overflow-hidden">
        <motion.div
          style={{ y, scale }}
          className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-blue-50 via-white to-blue-200 scale-[1.3] blur-3xl opacity-60"
        />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-7xl font-light text-[#0A1128] leading-tight tracking-tight">
            Stories That <span className="text-blue-600 italic">Convert</span><br />
            Experiences That <span className="text-blue-600 italic">Last</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto text-gray-700 font-light">
            Discover how we’ve helped creators and businesses stand out — with stunning, functional, high-performing web experiences.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10"
          >
            <Link
              href="#testimonials"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-sm"
            >
              See Client Results
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Reveal Section */}
      <section className="bg-white py-24 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-light text-[#0A1128]">
            Design, Speed & Soul
          </h2>
          <p className="mt-6 text-gray-600 text-lg sm:text-xl font-light">
            These aren’t just websites — they’re platforms for growth, attention and authority. Each crafted from scratch to blend performance and aesthetics.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Grid with animated entrances */}
      <section id="testimonials" className="bg-gray-50 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: (i % 3 === 0 ? -80 : i % 3 === 1 ? 80 : 0), y: (i % 3 === 2 ? 60 : 0) }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <Image
                  src={t.image}
                  alt={`Screenshot of ${t.name}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-[#0A1128]">{t.name}</h3>
                <p className="mt-3 text-gray-600 text-base font-light">{t.comment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl font-light text-[#0A1128]">
            Trusted By Startups, Studios & Solo Brands
          </h3>
          <p className="mt-4 text-gray-600 font-light text-lg">
            From TikTok creators to SaaS founders — our solutions are as diverse as our clients.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
    
    </main>
  );
}
