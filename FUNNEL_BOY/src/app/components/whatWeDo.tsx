"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Item = { label: string; href?: string };

const ITEMS: Item[] = [
  { label: "Website design" },
  { label: "Motion design" },
  { label: "Front-end development" },
  { label: "Back-end development" },
  { label: "Shopify development" },
  { label: "Website support" },
  { label: "Paid search advertising" },
  { label: "Social media advertising" },
  { label: "Email marketing" },
  { label: "SEO" },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // intro stagger
      const rows = gsap.utils.toArray<HTMLLIElement>(".svc-row");
      gsap.from(rows, {
        y: 14,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
      });

      // per-row hover timeline
      rows.forEach((row) => {
        const line = row.querySelector<HTMLElement>(".svc-line");
        const arrow = row.querySelector<HTMLElement>(".svc-arrow");

        const tl = gsap.timeline({ paused: true });
        tl.to(line, { scaleX: 0, duration: 0.25, ease: "power2.out" }, 0).to(
          arrow,
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.25,
            ease: "power2.out",
          },
          0
        );

        row.addEventListener("mouseenter", () => tl.play());
        row.addEventListener("mouseleave", () => tl.reverse());
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 text-white"
      aria-label="What we do"
    >
      <div className="grid grid-cols-12 gap-10 md:gap-16">
        {/* Left blurb */}
        <div className="col-span-12 md:col-span-5">
          <div className="mb-6 flex items-center gap-3 text-xs tracking-[0.28em] text-white/70">
            {/* tiny red ring bullet */}
            <span
              aria-hidden
              className="inline-block h-3 w-3 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, #ff3147 0%, #ff3147 35%, #6b0b18 60%, rgba(255,49,71,0.25) 100%)",
              }}
            />
            <span>WHAT WE DO</span>
          </div>

          <p className="text-lg leading-relaxed text-white/90 md:text-xl">
            At Buzzworthy, we excel in constructing website ecosystems that
            seamlessly weave brand narratives, enhance conversions, and
            cultivate trust.
          </p>
        </div>

        {/* Right list */}
        <div className="col-span-12 md:col-span-7">
          <ul className="divide-y divide-white/20">
            {ITEMS.map((it, i) => (
              <li key={i} className="svc-row relative">
                <a
                  href={it.href || "#"}
                  className="group relative flex items-center justify-between py-5 md:py-6"
                >
                  <div className="flex items-center gap-3">
                    {/* Arrow that appears on hover (animated by GSAP) */}
                    <span
                      className="svc-arrow pointer-events-none -translate-x-3 opacity-0"
                      style={{ transform: "translateX(-12px)" }}
                      aria-hidden
                    >
                      →
                    </span>
                    <span className="text-xl md:text-2xl">{it.label}</span>
                  </div>
                </a>

                {/* underline we collapse on hover (use a real element, not ::after) */}
                <span
                  className="svc-line pointer-events-none absolute inset-x-0 bottom-0 block h-px origin-left bg-white/30"
                  style={{ transform: "scaleX(1)" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
