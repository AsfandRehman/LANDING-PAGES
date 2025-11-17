'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define the release type
type Release = {
  id: number;
  title: string;
  img: string;
  href?: string;       // optional
  lyricsHref?: string; // optional
};

const releases: Release[] = [
  { id: 1, title: 'Nocturne', img: '/covers/cover1.jpg', href: 'https://spotify.com/nocturne' },
  { id: 2, title: 'Echoes of Ash', img: '/covers/cover2.webp' },
  { id: 3, title: 'Blood Moon', img: '/covers/cover3.jpeg', lyricsHref: '/lyrics/blood-moon' },
];

export default function LatestReleases() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? releases : releases.slice(0, 3);

  return (
    <section className="relative w-full bg-[var(--background)] py-24 px-6 overflow-hidden">
      {/* Parallax Background Text */}
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[20vw] opacity-5 font-chancery italic top-[-2rem] left-1/2 -translate-x-1/2 pointer-events-none select-none text-[var(--foreground)]"
      >
        RELEASE
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-cinzel mb-16 tracking-wider text-[var(--foreground)]"
        >
          Listen to My <span className="italic text-[var(--primary)]">Latest</span> Releases
        </motion.h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((release, index) => {
            const listenHref = release.href ?? '#';
            const lyricsHref =
              release.lyricsHref ?? `/lyrics?song=${encodeURIComponent(release.title)}`;

            return (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden cursor-pointer"
              >
                <Image
                  src={release.img}
                  alt={release.title}
                  width={500}
                  height={320}
                  className="w-full h-80 object-cover group-hover:brightness-75 transition-all duration-300"
                />

                {/* Hover overlay with actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="flex gap-3">
                    <Link
                      href={listenHref}
                      target={listenHref.startsWith('http') ? '_blank' : undefined}
                      rel={listenHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={`Listen to ${release.title}`}
                      className="text-[var(--foreground)] text-sm md:text-base font-cormorant tracking-wider bg-[rgba(0,0,0,0.6)] px-5 py-2 rounded-full border border-[var(--foreground)]/20 hover:bg-[rgba(0,0,0,0.7)] transition"
                    >
                      Listen Now
                    </Link>

                    <Link
                      href={lyricsHref}
                      aria-label={`See lyrics for ${release.title}`}
                      className="text-black text-sm md:text-base font-cormorant tracking-wider bg-white/90 px-5 py-2 rounded-full border border-white/20 hover:bg-white transition"
                    >
                      See Lyrics
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 border border-[var(--foreground)] text-[var(--foreground)] font-cinzel rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
            >
              Show More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
