"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

type Panel = {
  id: string;
  step: string; // 01, 02, ...
  sideLabel: string; // vertical label
  heading: string; // big center heading
  copy: string; // paragraph
};

const PANELS: Panel[] = [
  {
    id: "strategy",
    step: "01",
    sideLabel: "PROJECT STRATEGY",
    heading: "Strategic Foundation",
    copy: "We align business goals with user needs, define success metrics, and craft the plan that keeps design and development moving in the right direction.",
  },
  {
    id: "design",
    step: "02",
    sideLabel: "DESIGN & MOTION",
    heading: "Design & Motion",
    copy: "Clean UI, useful interactions, and tasteful motion. We design for clarity and brand personality — then prototype to feel the flow.",
  },
  {
    id: "dev",
    step: "03",
    sideLabel: "DEVELOPMENT",
    heading: "Smooth Development",
    copy: "Responsive layouts, fast load, accessible patterns. From navigation to micro-interactions, everything feels seamless on any device.",
  },
  {
    id: "marketing",
    step: "04",
    sideLabel: "POWERFUL MARKETING",
    heading: "Powerful Marketing",
    copy: "We wire analytics, SEO, and landing systems that turn attention into action. Launch pages, experiments, and iterate quickly.",
  },
  {
    id: "support",
    step: "05",
    sideLabel: "ONGOING SUPPORT",
    heading: "Ongoing Support",
    copy: "Content updates, performance checks, and security care so the site stays healthy and evolving with your business.",
  },
  {
    id: "future",
    step: "06",
    sideLabel: "FUTURE EVOLUTION",
    heading: "Future Evolution",
    copy: "Feature roadmaps, A/B tests, and continuous improvements. We keep shipping value and leveling up the experience.",
  },
];

export default function ProcessScroller() {
  // default active = "dev" (like your screenshot)
  const defaultIndex = Math.max(
    0,
    PANELS.findIndex((p) => p.id === "dev")
  );
  const [active, setActive] = useState(defaultIndex);

  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  // helpers to register refs in map order
  const setPanelRef = (el: HTMLDivElement | null, i: number) => {
    if (el) panelRefs.current[i] = el;
  };
  const setContentRef = (el: HTMLDivElement | null, i: number) => {
    if (el) contentRefs.current[i] = el;
  };

  // sizes (% of container width)
  const EXPANDED = 56; // selected panel
  const COLLAPSED = 8; // all others

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelRefs.current;
      const contents = contentRefs.current;

      // initial widths & content visibility
      panels.forEach((p, i) => {
        gsap.set(p, { width: i === active ? `${EXPANDED}%` : `${COLLAPSED}%` });
      });
      contents.forEach((c, i) => {
        gsap.set(c, {
          opacity: i === active ? 1 : 0,
          clipPath:
            i === active ? "circle(140% at 50% 50%)" : "circle(0% at 50% 50%)",
          x: i === active ? 0 : i < active ? -30 : 30,
          y: i === active ? 0 : 12,
          rotate: 0,
        });
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []); // mount only

  const activate = (index: number) => {
    if (index === active) return;

    const panels = panelRefs.current;
    const contents = contentRefs.current;

    // widths
    panels.forEach((p, i) => {
      gsap.to(p, {
        width: i === index ? `${EXPANDED}%` : `${COLLAPSED}%`,
        duration: 0.55,
        ease: "power3.out",
      });
    });

    // hide old content with circular close
    gsap.to(contents[active], {
      opacity: 0,
      clipPath: "circle(0% at 50% 50%)",
      duration: 0.35,
      ease: "power2.in",
    });

    // show new content with circular swirl
    const fromSide = index < active ? "left" : "right";
    gsap.fromTo(
      contents[index],
      {
        opacity: 0,
        clipPath: "circle(0% at 50% 50%)",
        x: fromSide === "left" ? -40 : 40,
        y: 24,
        rotate: fromSide === "left" ? -4 : 4,
      },
      {
        opacity: 1,
        clipPath: "circle(140% at 50% 50%)",
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: 0.1,
      }
    );

    setActive(index);
  };

  return (
    <section className="px-4 md:px-6 py-8 md:py-12 bg-transparent">
      <div
        ref={wrapRef}
        className="mx-auto max-w-[1200px] rounded-[18px] p-2 md:p-3 bg-white/5 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden"
      >
        {/* left/right fades to hint more panels */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0d1430] to-transparent rounded-l-[18px]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0d1430] to-transparent rounded-r-[18px]" />

        <div className="relative flex gap-4 md:gap-6 h-[520px] items-stretch">
          {PANELS.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => setPanelRef(el, i)}
              onMouseEnter={() => activate(i)}
              className="
                group relative shrink-0 overflow-hidden rounded-[16px]
                bg-white/90 text-[#101528]
                ring-1 ring-black/5
                shadow-[inset_0_0_40px_rgba(0,0,0,0.06),0_6px_18px_rgba(0,0,0,0.10)]
                will-change-[width]
                transition-[filter] duration-300
              "
              style={{ width: i === active ? `${EXPANDED}%` : `${COLLAPSED}%` }}
            >
              {/* inner soft vertical gradient for depth */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_-20%,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.02)_40%,transparent_70%)]" />

              {/* top step + red dot */}
              <div className="absolute left-5 top-4 flex items-center gap-2 text-[12px] tracking-[0.2em] text-[#0f1a3a]/60">
                <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#ff3147] shadow-[0_0_0_3px_rgba(255,49,71,0.2)]" />
                <span>{p.step}</span>
              </div>

              {/* vertical side label */}
              <div
                className="
                  absolute left-5 bottom-5 top-16 flex items-center
                  text-[#0f1a3a] font-extrabold tracking-wider
                  text-[14px] md:text-[16px]
                "
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {p.sideLabel}
              </div>

              {/* content (reveals with circular clip + swirl) */}
              <div
                ref={(el) => setContentRef(el, i)}
                className="
                  absolute inset-0 px-8 md:px-12 py-12 md:py-16
                  flex flex-col items-start justify-center
                "
              >
                <h3 className="text-[clamp(28px,6.2vw,68px)] leading-[0.9] font-extrabold tracking-tight text-[#0f1a3a]">
                  {p.heading.toUpperCase()}
                </h3>
                <p className="mt-5 max-w-[48ch] text-[15px] md:text-[17px] leading-7 text-[#0f1a3a]/80">
                  {p.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
