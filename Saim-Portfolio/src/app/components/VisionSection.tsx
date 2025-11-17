"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative isolate flex min-h-[92vh] items-center bg-[#0b0b10] text-white"
      aria-label="Vision"
    >
      {/* Ambient accents (very subtle, no gimmicks) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 360px at 70% 25%, rgba(125, 211, 252, 0.12), transparent 60%), radial-gradient(600px 300px at 20% 70%, rgba(99,102,241,0.10), transparent 60%)",
        }}
      />
      {/* Seamless handoff into Timeline (matches its top radial + grid) */}
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
  {/* cyan/indigo bottom glow */}
  <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_100%,rgba(56,189,248,0.14),transparent_70%)]" />
  {/* masked grid, only near the bottom arc */}
  <div
    className="absolute inset-0 opacity-40
      [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
                        linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
      [background-size:40px_40px]
      [mask-image:radial-gradient(900px_500px_at_50%_100%,#000_0%,transparent_70%)]
      [mask-repeat:no-repeat]"
  />
</div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          background:
            "linear-gradient(transparent 97%, rgba(56,189,248,0.14) 97%) 0 0/100% 28px, linear-gradient(90deg, transparent 97%, rgba(255,255,255,0.14) 97%) 0 0/28px 100%",
          maskImage:
            "radial-gradient(90% 70% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-28 md:py-36">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-5 text-s font-semibold uppercase tracking-[0.2em] text-white/60"
        >
          Vision
        </motion.div>

        {/* Big hero text */}
        <div className="max-w-[1200px]">
       <motion.h1
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.55, ease: [0.2, 1, 0.2, 1] }}
  className="leading-[0.95] font-semibold tracking-[-0.02em]"
>
  <span className="block text-[clamp(2.6rem,7vw,6.2rem)]">
    Building{" "}
    <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
      category-leading
    </span>{" "}
    service brands through
  </span>
  <span className="block text-[clamp(2.6rem,7vw,6.2rem)]">
    
    
      creative acquisition systems
   
    and{" "}
    <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
      bulletproof operations
    </span>.
  </span>
</motion.h1>


          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-white/70"
          >
            Operator first. We scale brands the hard way: real delivery, real dashboards, real client outcomes — then we let the proof do the marketing.
          </motion.p>

          {/* Actions / micro-credibility */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
           
            <a
              href="https://www.instagram.com/saimzsideo/"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium transition hover:bg-white/[0.07]"
            >
              See the Proof
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-widest text-white/60">
              80% US • CA • UK • AU • UAE
            </span>
          </motion.div>
        </div>

        {/* Scroll cue */}
       
      </div>
    </section>
  );
}

function Accent({ children }: { children: React.ReactNode }) {
  // Blue gradient accent with slight cyan glow
  return (
    <span className="relative mx-2 inline-block">
      <span className="absolute -inset-1 -z-10 rounded-lg bg-sky-400/10 blur-md" />
      <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
}
