// src/components/HeroBanner.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

type CSSVar = `--${string}`;
type CSSPropertiesWithVars = CSSProperties & Record<CSSVar, string | number>;

export default function HeroBanner() {
  const ACCENT = "#FFEB3B";
  const GLOW = "#FFEB3B";

  const words = (list: string[], startDelayMs = 0) =>
    list.map((w, i) => (
      <span
        key={`${w}-${i}`}
        className="word-in mr-2 inline-block align-middle"
        style={{ "--d": `${startDelayMs + i * 90}ms` } as CSSPropertiesWithVars}
      >
        {w}
      </span>
    ));

  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* BG image */}
      <Image
        src="/images/hero.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* bottom→top black fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* bottom glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-14%] h-[60%] -z-10 blur-2xl"
        style={{
          background: `radial-gradient(70% 55% at 50% 0%, ${GLOW}80 0%, ${GLOW}33 38%, transparent 70%),
             radial-gradient(65% 50% at 50% 5%, ${ACCENT}55 0%, transparent 65%)`,
        }}
      />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px)",
          backgroundSize: "60px 60px, 60px 60px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* widen a touch so big text breathes */}
        <div className="min-h-[100svh] grid place-items-center pt-24 md:pt-28">
          <div className="w-full text-center">
            {/* headline (BIGGER, same orientation) */}
            <h1
              className="
                mx-auto max-w-[80rem]
                text-balance
                text-white font-extrabold tracking-tight leading-[1.05]
                text-4xl sm:text-7xl md:text-8xl lg:text-8xl
              "
            >
              <span className="sr-only">
                Best Software Solution To The Drive Business Forward
              </span>
              <span aria-hidden>
                {words(["Best", "Software", "Solution", "To"], 50)}
                {/* forced line break to preserve same two-line orientation */}
                <br className="hidden sm:block" />
                {words(["The", "Drive"], 450)}
                <span
                  className="ml-2 inline-block bg-clip-text text-transparent align-middle shine-text"
                  style={{ "--accent": ACCENT } as CSSPropertiesWithVars}
                >
                  Business&nbsp;Forward
                </span>
              </span>
            </h1>

            {/* subhead (slightly larger to match hierarchy) */}
            <p className="mt-5 mx-auto max-w-3xl text-pretty text-white/70 opacity-0 animate-fade-up text-lg sm:text-xl md:text-2xl [--delay:650ms]">
              High-Performance software designed to streamline operations and
              boost productivity.
            </p>

            {/* actions */}
            <div className="mt-8 flex items-center justify-center gap-4 opacity-0 animate-fade-up [--delay:800ms]">
              <Link
                href="#contact"
                className="relative inline-flex rounded-full"
              >
                <span className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/80 px-6 py-3 text-base md:text-lg font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 backdrop-blur">
                  Book A Free Demo
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

            <div className="h-12 md:h-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
