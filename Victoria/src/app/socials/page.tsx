"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingCtaBar from "../components/FloatingCtaBar";

export default function MusicPage() {
  return (
    <main className="w-full overflow-hidden bg-[var(--background)] text-[var(--foreground)] font-cormorant">

      {/* === Social Feed Hero Section === */}
      <section className=" min-h-screen relative pt-32 pb-20 px-6 md:px-16 lg:px-24 border-b border-white/10 bg-[var(--background)]">
        <motion.h2
          className="text-4xl md:text-5xl font-cormorant italic text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Social <span className="text-[var(--accent)]">Feed</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* TikTok */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden bg-[var(--color-chestnut)] shadow-md border border-white/10 hover:shadow-xl transition-all"
          >
            <blockquote
              className="tiktok-embed w-full h-[360px]"
              cite="https://www.tiktok.com/@victoriaroserecords"
              data-unique-id="victoriaroserecords"
              data-embed-type="creator"
              style={{ width: "100%" }}
            >
              <section>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@victoriaroserecords?refer=creator_embed"
                >
                  @victoriaroserecords
                </a>
              </section>
            </blockquote>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="rounded-xl overflow-hidden bg-[var(--color-chestnut)] shadow-md border border-white/10 hover:shadow-xl transition-all"
          >
            <iframe
              src="https://www.instagram.com/victoriarosemusic_/embed"
              title="Instagram Feed"
              className="w-full h-[360px]"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            ></iframe>
          </motion.div>

          {/* YouTube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden bg-[var(--color-chestnut)] shadow-md border border-white/10 hover:shadow-xl transition-all"
          >
            <iframe
              className="w-full h-[360px]"
              src="https://www.youtube.com/embed?listType=user_uploads&list=VictoriaRoseMusic"
              title="YouTube Feed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* Floating CTA Below Hero */}
        <div className="mt-70">
          <FloatingCtaBar />
        </div>
      </section>

    

   

      {/* TikTok Script */}
      <script async src="https://www.tiktok.com/embed.js" />
    </main>
  );
}
