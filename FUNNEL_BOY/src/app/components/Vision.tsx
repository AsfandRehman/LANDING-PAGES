"use client";

import { motion } from "framer-motion";

export default function Vision() {
  // Split headline into lines
  const lines = [
    "DELIVERING INNOVATIVE",
    "DESIGN AND",
    "DEVELOPMENT WITH",
    "IMPACTFUL DIGITAL",
    "MARKETING",
    "CAMPAIGNS THAT",
    "CATAPULT BRANDS",
    "FORWARD.",
  ];

  // Parent container controls stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.15, staggerChildren: 0.12 },
    },
  };

  // Each line animation
  const line = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative mx-auto w-[90vw] max-w-[1400px] min-h-[70vh] overflow-hidden bg-transparent">
      <div className="relative h-full px-8 md:px-16 lg:px-24 py-8 md:py-12">
        <div className="grid grid-cols-12 gap-x-8 md:gap-x-14">
          {/* Left blurb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="col-span-12 md:col-span-4 lg:col-span-3 pt-4"
          >
            <p className="text-[23px] leading-relaxed tracking-wide text-black max-w-xs">
              WITH A DECADE OF <br />
              EXPERIENCE UNDER OUR <br />
              BELTS, BUZZWORTHY HAS <br />
              BECOME A WORLD- <br />
              RENOWNED STUDIO
            </p>
          </motion.div>

          {/* Right: animated headline */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-9"
          >
            <h1 className="text-left uppercase font-black tracking-tight text-black leading-[0.9] mt-6 ml-60 md:mt-0 text-[clamp(36px,6.6vw,68px)]">
              {lines.map((t, i) => (
                <motion.span key={i} variants={line} className="block">
                  {t}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
