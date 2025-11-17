// app/components/ServicesShowcase.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const BG_IMAGE = "/images/7.jpg";

type Item = { title: string; body: string; href?: string };
const services: Item[] = [
  {
    title: "Low Credit Score Hindering Loans",
    body: "Struggling with poor credit scores that prevent you from accessing the credit you need for major purchases.",
    href: "/services/credit-score",
  },
  {
    title: "High Interest Rates",
    body: "Paying exorbitant interest on existing debt, robbing you of financial growth and freedom.",
    href: "/services/interest",
  },
  {
    title: "Lack of Funding for Business",
    body: "Entrepreneurs’ dreams stalled due to lack of business capital or unfavorable lending terms.",
    href: "/services/funding",
  },
  {
    title: "Expert Credit Repair Strategies",
    body: "Our skilled team will analyze your credit report and work strategically to improve your credit score.",
    href: "/services/repair",
  },
  {
    title: "Access to Smart Funding",
    body: "Connect with resources for business funding, personal loans, and real estate investment.",
    href: "/services/smart-funding",
  },
  {
    title: "Personalized Financial Guidance",
    body: "Receive one-on-one financial coaching tailored to your goals and circumstances.",
    href: "/services/guidance",
  },
];

// Variants
const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ServicesShowcase() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* BG image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Pure black (top) → transparent (bottom) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black to-transparent" />

      {/* Colored mesh */}
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(44% 34% at 16% 25%, rgba(0,199,190,.28) 0%, rgba(0,0,0,0) 62%)," +
            "radial-gradient(40% 36% at 84% 70%, rgba(255,140,0,.28) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/* Subtle grid */}
      {/* 
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      */}

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#00C7BE] via-[#53E0CF] to-[#FF8C00] bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
            Practical solutions for credit building, smarter approvals, and
            sustainable financial growth.
          </p>
        </div>

        {/* asymmetrical staggered grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {services.map((s, i) => {
            const warm = i % 2 === 0;
            const from = warm ? "from-[#FF8C00]" : "from-[#00C7BE]";
            const to = warm ? "to-[#C96A17]" : "to-[#22B8A7]";

            return (
              <motion.article
                key={s.title}
                variants={cardVariants}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-hidden"
              >
                {/* diagonal ribbon */}
                <div
                  className={`pointer-events-none absolute -left-8 -top-10 h-40 w-[140%] -rotate-6 bg-gradient-to-r ${from} ${to} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
                {/* ambient glow */}
                <div
                  className={`pointer-events-none absolute -inset-12 blur-3xl opacity-20 bg-gradient-to-br ${from} ${to} group-hover:opacity-35 transition-opacity`}
                />

                {/* heading with SHINE INSIDE the text fill */}
                <h3 className="text-2xl font-semibold leading-tight">
                  <span className="shine-inside block">{s.title}</span>
                </h3>

                <p className="mt-3 text-sm text-zinc-300/95">{s.body}</p>

                <div className="mt-6">
                  <Link
                    href={s.href || "#"}
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm border border-white/15 bg-white/5 hover:bg-white/10 transition"
                  >
                    Know More
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      {/* CSS: shine constrained INSIDE the glyphs */}
      <style>{`
        .shine-inside {
          background-image:
            linear-gradient(
              90deg,
              #f3b665 0%,
              #e1d77a 25%,
              #45e2c1 50%,
              #e1d77a 75%,
              #f3b665 100%
            ),
            linear-gradient(
              115deg,
              transparent 0%,
              rgba(255, 255, 255, 0.65) 50%,
              transparent 60%
            );
          background-size: 200% 100%, 300% 100%;
          background-position: 0% 50%, -200% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shineBase 5s linear infinite, shineSweep 2.8s ease-in-out infinite;
        }
        @keyframes shineBase {
          0% { background-position: 0% 50%, -200% 50%; }
          100% { background-position: 200% 50%, 200% 50%; }
        }
        @keyframes shineSweep {
          0%, 8% { background-position: 200% 50%, -200% 50%; opacity: 1; }
          40% { background-position: 200% 50%, 0% 50%; }
          100% { background-position: 200% 50%, 200% 50%; }
        }
      `}</style>
    </section>
  );
}
