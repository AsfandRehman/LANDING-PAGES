'use client';

import { motion } from 'framer-motion';
import { FaSpotify, FaApple, FaSoundcloud, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { icon: FaSpotify, href: 'https://open.spotify.com/artist/5NwB5227uSQpnLXBz59de8', label: 'Spotify' },
  { icon: FaApple, href: 'https://music.apple.com/us/artist/victoria-rose/1553948077', label: 'Apple Music' },
  { icon: FaSoundcloud, href: 'https://soundcloud.com/victoriarosales', label: 'SoundCloud' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@victoriaroserecords', label: 'TikTok' },
  { icon: FaInstagram, href: 'https://www.instagram.com/victoriarosemusic_/', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@victoriarose9348', label: 'YouTube' },
];

export default function ConnectSection() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[var(--background)] text-[var(--foreground)] text-center border-t border-white/10">
      <motion.h2
        className="text-4xl md:text-5xl font-cormorant italic mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Connect with <span className="text-[var(--accent)]">Victoria Rose</span>
      </motion.h2>

      <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
        Join a growing community drawn to ethereal sounds and heartfelt storytelling. Follow along and experience the journey.
      </p>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        {socialLinks.map(({ icon: Icon, href, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--accent)] transition-all duration-300"
            aria-label={label}
          >
            <Icon className="text-white text-xl group-hover:text-[var(--accent)] transition-colors duration-300" />
            {/* Optional Label Tooltip */}
            <span className="absolute bottom-[-1.5rem] text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
