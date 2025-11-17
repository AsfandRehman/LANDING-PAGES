"use client";

import { motion } from "framer-motion";
import FloatingCtaBar from "../components/FloatingCtaBar";

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] font-cormorant min-h-screen flex flex-col justify-between overflow-hidden">
      {/* === Page Content Section === */}
      <section className="flex-1 px-6 md:px-24 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cinzel tracking-tight mb-10 text-center text-[var(--primary)]"
          >
            About Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-2xl leading-relaxed text-[var(--foreground)]/90 space-y-6"
          >
            <p>
              Victoria Rose is a 20-year-old singer-songwriter from the San Fernando Valley,
              blending moody melodies with an unapologetically expressive spirit.
              A first-generation daughter of Peruvian and Salvadorian immigrants,
              she grew up navigating the challenges of identity, mental health, and financial hardship.
              After discovering a Dodie cover on YouTube as a teen, she picked up a ukulele
              and began writing music as a way to process her emotions and experiences.
            </p>

            <p>
              Diagnosed with bipolar disorder after undergoing traumatic events in high school,
              Victoria found healing and purpose through songwriting.
              One winter evening in 2024, her friends were discussing the theory
              that wherever one has a birth mark is an indicator of how they died in a past life.
              Victoria pointed out that she has a birth mark on her neck,
              to which one of her friends exclaimed,{" "}
              <span className="italic text-[var(--accent)]">
                “Maybe you were bitten by a vampire!”
              </span>{" "}
              — and Victoria Rose, the vampire princess, was born.
            </p>

            <p>
              Not quite gothic, but not quite romantic. Not quite happy, but not quite depressed.
              The constantly polarizing nature of her personality is perfectly on display
              throughout her prim and properly dressed yet emotionally messy and melancholic persona.
              Today, her music remains a powerful outlet and guiding light —
              an honest reflection of her inner world and lived truth.
              She hopes to inspire others to live fearlessly and to find the light
              in any situation — no matter how dark it may seem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === CTA Section === */}
      <div className="px-6 md:px-24 pb-12 z-20 relative">
        <FloatingCtaBar />
      </div>
    </main>
  );
}
