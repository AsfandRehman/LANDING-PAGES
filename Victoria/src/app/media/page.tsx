"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingCtaBar from "../components/FloatingCtaBar";

export default function MusicPage() {
  return (
    <main className="w-full overflow-hidden bg-[var(--background)] text-[var(--foreground)] font-cormorant">

      
      {/* === Streaming Platforms === */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[var(--background)] border-t border-white/5">
        <motion.h2
          className="text-4xl md:text-5xl font-cormorant text-center mb-16 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Streaming <span className="text-[var(--accent)]">Platforms</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Spotify */}
          <iframe
            src="https://open.spotify.com/embed/artist/5NwB5227uSQpnLXBz59de8"
            className="w-full h-[180px] rounded-lg shadow-md border border-white/10"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          {/* Apple Music */}
          <iframe
            src="https://embed.music.apple.com/us/artist/victoria-rose/1553948077"
            className="w-full h-[180px] rounded-lg shadow-md border border-white/10"
            allow="autoplay *; encrypted-media *;"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            frameBorder="0"
          ></iframe>

          {/* SoundCloud */}
          <iframe
            width="100%"
            height="180"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/victoriarosales"
            className="rounded-lg shadow-md border border-white/10"
          ></iframe>
        </div>
      </section>

      {/* === Lyrics CTA Section === */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[var(--color-plum)] text-[var(--foreground)] text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-cormorant italic mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Song <span className="text-[var(--accent)]">Lyrics</span>
        </motion.h2>

        <motion.p
          className="text-[var(--foreground)]/70 max-w-2xl mx-auto text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Read the lyrics behind Victoria Rose’s most personal songs — an intimate look into the verses that speak her soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="/lyrics"
            className="inline-block px-8 py-3 border border-[var(--foreground)] rounded-full uppercase text-sm tracking-widest font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
          >
            View All Lyrics
          </Link>
        </motion.div>
      </section>

    
    </main>
  );
}
