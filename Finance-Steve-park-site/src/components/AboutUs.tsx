// app/components/AboutUs.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const BG_IMAGE = "/images/bg.png"; // same bg family as hero
const ABOUT_A = "/images/a.jpg"; // add your finance/education photos
const ABOUT_B = "/images/b.jpg";
const ABOUT_C = "/images/c.jpg";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Pure black top -> transparent bottom overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-black/70 to-transparent" />

      {/* colored gradient mesh */}
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(40% 35% at 18% 25%, rgba(0,199,190,.30) 0%, rgba(0,0,0,0) 60%)," +
            "radial-gradient(36% 36% at 82% 70%, rgba(255,140,0,.28) 0%, rgba(0,0,0,0) 62%)",
        }}
      />

      {/* soft grid lines */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#00C7BE] via-[#53E0CF] to-[#FF8C00] bg-clip-text text-transparent">
                About CreditWise
              </span>
            </h2>

            <p className="mt-4 text-zinc-300/95 max-w-2xl">
              We help individuals and founders build strong credit, access smart
              funding, and make confident financial decisions. Our approach
              blends expert guidance, transparent strategies, and education—so
              you grow responsibly and sustainably.
            </p>

            {/* mini stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
              {[
                ["50M+", "Funding facilitated"],
                ["4.8★", "Average rating"],
                ["0% Fees", "Hidden costs"],
              ].map(([title, sub]) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-xs text-zinc-300">{sub}</p>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center rounded-2xl bg-[#FF8C00] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/10 transition hover:translate-y-[-1px] hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 focus-visible:ring-offset-black"
              >
                Book a Free Consultation
                <svg
                  className="ml-2 h-4 w-4 transition group-hover:translate-x-[2px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30 focus-visible:ring-offset-black"
              >
                Learn About CreditWise
              </Link>
            </div>
          </motion.div>

          {/* Image collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative h-[520px] sm:h-[560px]"
            >
              {/* glow */}
              <div className="pointer-events-none absolute -inset-10 blur-3xl opacity-30 bg-gradient-to-br from-[#00C7BE] to-[#FF8C00]" />
              {/* cards */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute left-0 top-8 w-[62%] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <Image
                  src={ABOUT_A}
                  alt="Financial planning"
                  width={900}
                  height={900}
                  className="h-64 w-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute right-2 top-[42%] w-[58%] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <Image
                  src={ABOUT_B}
                  alt="Credit education"
                  width={900}
                  height={900}
                  className="h-56 w-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute left-[22%] bottom-2 w-[56%] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <Image
                  src={ABOUT_C}
                  alt="Funding support"
                  width={900}
                  height={900}
                  className="h-48 w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
