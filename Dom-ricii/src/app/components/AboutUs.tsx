// components/AboutUsSection.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import WhatIDo from "./WhatIDo";

const BRAND = "#3354A5";
const DARK = "#231F20";

/* --- Typed variants to avoid “variants” tag errors --- */
const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function AboutUsSection() {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden isolate"
      style={{
        background:
          "linear-gradient(180deg, rgba(51,84,165,0.06) 0%, rgba(51,84,165,0.02) 100%)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
        {/* Heading */}
        <motion.header
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.05, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2
            className="font-extrabold tracking-tight leading-[0.98] text-[clamp(28px,6vw,56px)]"
            style={{ color: DARK }}
          >
            About{" "}
            <span className="shimmer-text" style={{ color: BRAND }}>
              Us
            </span>
          </h2>
          <p className="mt-3 italic" style={{ color: "rgba(35,31,32,0.72)" }}>
            The done-for-you content engine behind modern creators
          </p>
        </motion.header>

        {/* Body copy (staggered) */}
        <motion.div
          className="mx-auto text-center space-y-5 md:space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={listVariants}
        >
          <FadeInP>
            <strong style={{ color: DARK }}>Stratos</strong> provides content
            strategy, cloning, scripting, and video editing. We handle the
            entire pipeline so you don’t have to — from ideas to scripts, to
            edits — so you don’t have to stress about staying consistent.
          </FadeInP>

          <FadeInP>
            Before building Stratos, we believed the “record once, repurpose
            forever” dream would solve everything. It helped — but creators kept
            saying they didn’t want to think about <em>any</em> of it:
            scripting, editing, thumbnails, or captions.
          </FadeInP>

          <QuoteBlock>
            “I love the idea — but I don’t want to think about scripting or
            editing… can’t your team just do it for me?”
          </QuoteBlock>

          <FadeInP>
            That’s when it clicked: the real bottleneck wasn’t just being on
            camera — it was the entire content process. So we opened up our own
            internal content team to a handful of creators and ran the exact
            system that powers our brands.
          </FadeInP>

          <FadeInP>
            The results were predictable: more reach, stronger authority, and
            more money-making content — without the creator lifting a finger.
            That’s what Stratos is: a complete, done-for-you content engine,
            available to a limited number of creators who want outcomes without
            the operational drag.
          </FadeInP>

          {/* Policy / ownership note */}
          <motion.div
            className="mx-auto max-w-3xl rounded-xl border px-5 py-4"
            style={{ borderColor: "rgba(35,31,32,0.08)" }}
            variants={itemVariant}
          >
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "rgba(35,31,32,0.7)" }}
            >
              <span className="font-semibold" style={{ color: DARK }}>
                Important:
              </span>{" "}
              We guarantee delivery of the agreed content, but specific results
              (audience growth, engagement, revenue) are not guaranteed. All
              creative materials are owned by the client. Refunds are not
              offered once content production has begun.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Hand-off into What I Do --- */}
        <motion.div
          className="mx-auto mt-10 sm:mt-14 md:mt-16 max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 160, damping: 22 }}
        >
          {/* subtle divider */}
          <div
            className="mx-auto mb-8 h-px w-24"
            style={{ background: "rgba(35,31,32,0.1)" }}
          />
          <WhatIDo />
        </motion.div>
      </div>

      {/* Scoped shimmer styles (identical to Work Showcase) */}
      <style jsx>{`
        @keyframes shimmer-scan {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .shimmer-text {
          color: transparent !important;
          background-image: linear-gradient(
            110deg,
            ${BRAND} 0%,
            ${BRAND} 35%,
            #ffffff 50%,
            ${BRAND} 65%,
            ${BRAND} 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer-scan 2.4s linear infinite;
          text-shadow: 0 0 0.25px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </motion.section>
  );
}

/* ---- Bits ---- */
function FadeInP({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      className="mx-auto max-w-3xl text-[clamp(14px,2.4vw,17px)] leading-[1.8] text-pretty"
      style={{ color: "rgba(35,31,32,0.8)" }}
      variants={itemVariant}
    >
      {children}
    </motion.p>
  );
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <motion.blockquote
      className="mx-auto max-w-3xl"
      variants={itemVariant}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <div
        className="inline-block rounded-xl px-5 py-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(51,84,165,0.07), rgba(51,84,165,0.04))",
          boxShadow: "0 14px 32px -16px rgba(0,0,0,0.18)",
          border: "1px solid rgba(35,31,32,0.06)",
        }}
      >
        <p
          className="text-[clamp(14px,2.4vw,16px)] leading-relaxed text-center"
          style={{ color: DARK }}
        >
          {children}
        </p>
      </div>
    </motion.blockquote>
  );
}
