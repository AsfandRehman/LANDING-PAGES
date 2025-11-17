// components/ExpertiseSection.tsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LIME = "#FFEB3B"; // accent

export default function ExpertiseSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B0B0B] py-16 sm:py-20">
      {/* background soft glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.15),transparent_60%)] blur-2xl" />
        <div className="absolute right-[10%] bottom-[5%] h-60 w-60 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.12),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        {/* Left: circular visual */}
        <div className="relative mx-auto w-full max-w-[520px]">
          {/* Big circle container */}
          <div className="relative mx-auto aspect-square w-[82%] overflow-hidden rounded-full border border-white/10 bg-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            {/* Background show image — replace with your image */}
            <Image
              src="/images/cuttingedge.webp" // <- put your background image here
              alt=""
              fill
              className="object-cover"
              priority
            />
            {/* Lime overlay gradient from bottom→top */}
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(163,230,53,0.25)_0%,rgba(163,230,53,0.10)_35%,transparent_70%)]" />
          </div>

          {/* Foreground phone/hero — replace with your transparent PNG if you have one */}
        </div>

        {/* Right: content */}
        <div className="text-center lg:text-left">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Deep Expertise In Cutting Edge{" "}
            <span style={{ color: LIME }}>Software Solutions</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/70">
            With years of hands-on experience and a passion for innovation, we
            deliver advanced, production-ready software—designed for speed,
            reliability, and scale.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
            <Stat label="UI/UX Design" value={96} />
            <Stat label="Software Develop" value={96} />
            <Stat label="IT Solution" value={96} />
          </div>

          {/* CTA */}
          <a
            href="/work
            "
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/80 px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 transition"
          >
            See How We Work
            <span
              className="grid size-8 place-items-center rounded-full ring-1 ring-black/10 transition-transform group-hover:translate-x-0.5"
              style={{ background: LIME, color: "#0b0b0b" }}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- subcomponents ---------- */

function Stat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pct, setPct] = useState(0);

  // simple count-up when in view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        let start: number | null = null;
        const dur = 900; // ms
        const animate = (t: number) => {
          if (start === null) start = t;
          const prog = Math.min((t - start) / dur, 1);
          setPct(Math.round(value * easeOutCubic(prog)));
          if (prog < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        io.disconnect();
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="relative mx-auto grid size-20 place-items-center sm:size-24">
        {/* progress ring using conic-gradient */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${LIME} ${
              pct * 3.6
            }deg, rgba(255,255,255,0.08) 0deg)`,
            mask: "radial-gradient(circle at center, transparent 62%, black 63%)",
            WebkitMask:
              "radial-gradient(circle at center, transparent 62%, black 63%)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        />
        {/* inner dot & number */}
        <div className="relative grid size-14 place-items-center rounded-full bg-neutral-900 text-white shadow-[0_6px_24px_rgba(0,0,0,0.35)] sm:size-16">
          <span className="text-base font-bold">{pct}%</span>
        </div>
      </div>
      <p className="mt-2 text-[13px] font-medium text-white/80 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}
