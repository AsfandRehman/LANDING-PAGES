'use client';

import { motion } from 'framer-motion';
import FloatingCtaBar from '../components/FloatingCtaBar';

export default function TourPage() {
  const shows = [
    {
      date: 'August 5, 2025',
      venue: 'The Gothic Theatre',
      location: 'Denver, CO',
      link: '#',
    },
    {
      date: 'August 12, 2025',
      venue: 'The Roxy',
      location: 'Los Angeles, CA',
      link: '#',
    },
    {
      date: 'September 3, 2025',
      venue: 'Webster Hall',
      location: 'New York, NY',
      link: '#',
    },
  ];

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] font-cormorant overflow-hidden">
      
      {/* === Hero Section === */}
      <section
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between px-6 md:px-16 lg:px-24 py-10"
        style={{ backgroundImage: "url('/images/tourbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Heading */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-cinzel text-[var(--primary)] drop-shadow-xl italic"
          >
            Manifesting
          </motion.h1>
          <p className="mt-4 text-white/60 text-lg italic">A sacred night, a sonic ritual</p>
        </div>

        {/* CTA Bar Over Video */}
        <div className="relative z-10">
          <FloatingCtaBar />
        </div>
      </section>

      {/* === Upcoming Shows === */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-16 italic font-cinzel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming <span className="text-[var(--accent)] italic">Shows</span>
        </motion.h2>

        <div className="space-y-10">
          {shows.map((show, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-plum)] border border-[var(--foreground)]/10 rounded-xl px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center shadow-md transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold font-cinzel text-[var(--foreground)]">
                  {show.date}
                </h3>
                <p className="text-sm md:text-base text-[var(--foreground)]/70 mt-1">
                  {show.venue} — {show.location}
                </p>
              </div>
              <a
                href={show.link}
                target="_blank"
                className="mt-4 md:mt-0 inline-block px-6 py-2 border border-[var(--accent)] text-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300 text-sm tracking-widest uppercase font-semibold"
              >
                Get Tickets
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Tour Map Placeholder === */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[var(--color-chestnut)]">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-12 italic font-cinzel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tour <span className="text-[var(--accent)] italic">Map</span>
        </motion.h2>

        <div className="w-full h-96 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-[var(--foreground)]/50 text-lg italic tracking-wide">
          [ Map / Calendar Integration Coming Soon ]
        </div>
      </section>
    </main>
  );
}
