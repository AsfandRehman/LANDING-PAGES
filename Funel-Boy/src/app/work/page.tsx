// src/components/OurWorkHero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import OurWorkSection from "../Components/WorkShowcase";
import LogoMarquee from "../Components/LogoMarquee";
import ContactSection from "../Components/ContactNewsletter";

type CSSVar = `--${string}`;
type CSSPropertiesWithVars = CSSProperties & Record<CSSVar, string | number>;

export default function OurWorkHero() {
  const ACCENT = "#FFEB3B";
  const GLOW = "#FFEB3B";

  const words = (list: string[], startDelayMs = 0) =>
    list.map((w, i) => (
      <span
        key={`${w}-${i}`}
        className="word-in mr-2 inline-block align-middle"
        style={{ "--d": `${startDelayMs + i * 85}ms` } as CSSPropertiesWithVars}
      >
        {w}
      </span>
    ));

  return (
    <>
      {/* ================= HERO (own background + bottom→top dark overlay) ================ */}
      <section id="work" className="relative isolate overflow-hidden">
        {/* HERO background image */}
        <Image
          src="/images/work-bg2.jpg"
          alt="Selected case studies background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px)",
            backgroundSize: "60px 60px, 60px 60px",
          }}
        />

        {/* Bottom glow */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[55%] -z-10 blur-2xl"
          style={{
            background: `radial-gradient(70% 55% at 50% 0%, ${GLOW}66 0%, ${GLOW}33 40%, transparent 72%),
               radial-gradient(60% 45% at 50% 8%, ${ACCENT}40 0%, transparent 62%)`,
          }}
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="min-h-[80svh] grid place-items-center pt-24 md:pt-28">
            <div className="w-full text-center">
              {/* 👇 Increased headline sizes */}
              <h1
                className="
                  mx-auto mt-8 max-w-[85rem]
                  text-balance text-white font-extrabold tracking-tight leading-[1.05]
                  text-4xl sm:text-6xl md:text-7xl lg:text-8xl
                "
              >
                <span className="sr-only">
                  Our Work: Real Results, Real Impact
                </span>
                <span aria-hidden>
                  {words(["From", "Prototype"], 80)}{" "}
                  {words(["To", "Production"], 380)}
                  <br className="hidden sm:block" />
                  <span
                    className="inline-block bg-clip-text text-transparent align-middle shine-text"
                    style={{ "--accent": ACCENT } as CSSPropertiesWithVars}
                  >
                    Builds&nbsp;That&nbsp;Made&nbsp;it
                  </span>
                </span>
              </h1>

              {/* 👇 Bumped tagline size */}
              <p className="mt-5 mx-auto max-w-3xl text-pretty text-white/75 opacity-0 animate-fade-up text-lg sm:text-xl md:text-2xl [--delay:600ms]">
                Showcasing ideas transformed into real-world products that
                perform, scale, and deliver results.
              </p>

              <div className="mt-8 flex items-center justify-center gap-4 opacity-0 animate-fade-up [--delay:800ms]">
                <Link
                  href="/#contact"
                  className="relative inline-flex rounded-full"
                >
                  <span className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/80 px-6 py-3 text-base md:text-lg font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 backdrop-blur">
                    Contact us
                    <span
                      className="grid size-9 place-items-center rounded-full ring-1 ring-black/10 transition-transform group-hover:translate-x-0.5"
                      style={{ background: ACCENT, color: "#000" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </span>
                  <span
                    className="pointer-events-none absolute inset-0 -z-10 rounded-full"
                    style={{ border: `1px solid rgba(255,235,59,.45)` }}
                  />
                </Link>
              </div>

              <div className="mx-auto mt-10 flex w-full max-w-3xl flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up [--delay:950ms]">
                {[
                  { k: "Avg. TTFB", v: "< 100ms" },
                  { k: "Uptime", v: "99.9%" },
                  { k: "SEO Wins", v: "Core Web Vitals" },
                ].map((it) => (
                  <div
                    key={it.k}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm md:text-base text-white/80"
                  >
                    <span className="text-white">{it.v}</span>{" "}
                    <span className="text-white/60">· {it.k}</span>
                  </div>
                ))}
              </div>

              <div className="h-12 md:h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORK BODY ============ */}
      <section
        id="cases"
        className="relative isolate overflow-hidden min-h-screen"
      >
        <Image
          src="/images/work-body-bg.jpg"
          alt="Work body background"
          fill
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 min-h-screen">
          <LogoMarquee />
          <OurWorkSection />
        </div>
        <ContactSection />
      </section>
    </>
  );
}
