"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export default function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cta"
      aria-label="Book a call"
      className="relative bg-[#0B0B10] text-white"
    >
      {/* soft vignette matching hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 360px at 50% -10%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(900px 360px at 50% 110%, rgba(99,102,241,0.10), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Card */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 14 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.2, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0E1117]/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur"
        >
          {/* Accent top border (cyan/indigo) */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500" />

          <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            {/* Left: Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                Let’s build something that performs
              </p>
              <h2 className="mt-2 text-3xl leading-tight font-semibold tracking-[-0.02em] text-white md:text-5xl md:leading-[1.05]">
               Connect With Me
                <br />
                Leave with a clear plan.
              </h2>
              <p className="mt-4 max-w-xl text-white/70 md:text-lg">
                Zero fluff. We will review your current content engine, identify
                the shortest path to measurable outcomes, and map the next steps.
              </p>

              {/* Proof micro‑row */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-lg">
                <ProofPill
                  icon={<ShieldCheck className="h-4 w-4" />}
                  title="Operator led"
                  text="Direct access to Saim for strategy"
                />
               
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/saimzsideo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  <CalendarDays className="h-5 w-5" />
                Join the journey
                  <ArrowRight className="h-4 w-4" />
                </a>

            
              </div>

          
            
            </div>

            {/* Right: Highlights panel */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 10 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Rapid audit of current content and funnel
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Performance playbook tailored to your niche
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Clear scope, timelines, and deliverables
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Optional ongoing operations support
                </li>
              </ul>

              {/* Mini stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Stat label="Primary market" value="United States" />
                <Stat label="Avg response" value="Under 24h" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer note */}
        <div className="mx-auto mt-6 max-w-3xl text-center text-xs text-white/55">
          No pressure. If we are not a fit, you will still leave with a useful action plan.
        </div>
      </div>
    </section>
  );
}

function ProofPill({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="mt-0.5 text-cyan-300">{icon}</div>
      <div>
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="text-[12px] text-white/60">{text}</div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
      <div className="text-[11px] uppercase tracking-widest text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
