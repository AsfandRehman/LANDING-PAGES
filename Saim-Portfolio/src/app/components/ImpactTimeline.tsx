"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  media: string | [string, string];          // single image or 2-image collage
  objectPosition?: string | [string, string]; // per-item crop control (e.g., "50% 30%")
}

const ITEMS: TimelineItem[] = [
  {
    year: "2023",
    title: "First Client – $1,000 Project | ZSIDEO short-form video business launch",
    description:
      "Landed the first major client, turning a passion into a business that would grow globally.",
    media: "/images/firstclient.jpg",
  },
  {
    year: "2024",
    title: "$100k Milestone | International short-form video growth with remote team",
    description:
      "Scaled operations, built a small but powerful remote team, and began working internationally.",
    media: "/images/100k.jpg",
  },
  {
    year: "Late 2024",
    title: "$1M+ Earned | Celebrating million-dollar revenue milestone in short-form video production",
    description:
      "Crossed the $1M revenue mark by delivering results-driven short-form video content to top-tier clients.",
    media: "/images/1m.jpg",
    objectPosition: "50% 75%", // keeps the award plaque visible
  },
  {
    year: "2025",
    title: "Dubai HQ Launch | ZSIDEO Content LLC office expansion in Dubai",
    description:
      "Moved operations to Dubai, registered ZSIDEO CONTENT LLC, and expanded services.",
    media: ["/images/hq1.jpg", "/images/hq2.jpg"], // 2-image collage in same 16:9
    // objectPosition: ["50% 40%", "50% 60%"],
  },
];


export default function ImpactTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const spineFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative isolate py-28 md:py-32 text-white bg-[#0b0b10]"
    >
      {/* Ambient glow + masked grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_100%,rgba(56,189,248,0.14),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-40
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
                              linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
            [background-size:40px_40px]
            [mask-image:radial-gradient(900px_500px_at_50%_100%,#000_0%,transparent_70%)]
            [mask-repeat:no-repeat]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(56,189,248,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_50%,rgba(99,102,241,0.12),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-40
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
                              linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
            [background-size:40px_40px]
            [mask-image:radial-gradient(900px_500px_at_50%_0%,#000_0%,transparent_70%)]
            [mask-repeat:no-repeat]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Impact Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 text-white/60"
          >
            Real milestones. Real outcomes. Year over year.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-[72px_1fr] gap-8 relative">
          {/* Spine column */}
          <div className="relative hidden md:block">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] overflow-hidden rounded-full bg-white/10">
              <motion.span
                style={{ height: spineFill }}
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-sky-500 via-cyan-400 to-cyan-300"
              />
            </div>
          </div>

          {/* Entries */}
          <ol className="space-y-28">
            {ITEMS.map((item, idx) => (
              <li
                key={item.title}
                className="grid gap-10 md:gap-14 md:grid-cols-[72px_1fr_1fr]"
              >
                {/* Dot */}
                <div className="relative hidden md:block">
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-to-r from-sky-500 to-cyan-300 shadow-[0_0_0_6px_rgba(56,189,248,0.15)]" />
                </div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`${idx % 2 === 0 ? "" : "md:order-2"}`}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-2xl md:text-[28px] font-bold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Media */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 28 : -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className={`relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10 ${
                    idx % 2 === 0 ? "" : "md:order-3"
                  }`}
                >
                  <figure className="group relative">
                    <Media item={item} />
                    <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50 bg-[conic-gradient(at_20%_50%,#6366F1,#22D3EE_30%,#60A5FA_60%,#6366F1)]" />
                    <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/85">
                      <span className="rounded-full bg-black/40 px-2.5 py-1 backdrop-blur">
                        Image
                      </span>
                      <span className="rounded-full bg-black/30 px-2.5 py-1 backdrop-blur">
                        {item.year}
                      </span>
                    </figcaption>
                  </figure>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Media({ item }: { item: TimelineItem }) {
  const frame = "relative aspect-[16/12] w-full overflow-hidden bg-[#0D0F15]";
  const media = "w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-[1.03]";

  // Two-image collage (keeps EXACT same container size)
  if (Array.isArray(item.media) && item.media.length === 2) {
    const [left, right] = item.media;
    const posA = Array.isArray(item.objectPosition) ? item.objectPosition[0] : undefined;
    const posB = Array.isArray(item.objectPosition) ? item.objectPosition[1] : undefined;

    return (
      <div className={frame}>
        <div className="grid grid-cols-2 gap-[2px] w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={left}
              alt={`${item.title} - 1`}
              fill
              sizes="(min-width: 768px) 60vw, 92vw"
              className={media}
              style={posA ? ({ objectPosition: posA } as React.CSSProperties) : undefined}
              priority={false}
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src={right}
              alt={`${item.title} - 2`}
              fill
              sizes="(min-width: 768px) 60vw, 92vw"
              className={media}
              style={posB ? ({ objectPosition: posB } as React.CSSProperties) : undefined}
              priority={false}
            />
          </div>
        </div>
      </div>
    );
  }

  // Single image
  return (
    <div className={frame}>
      <Image
        src={item.media as string}
        alt={item.title}
        fill
        sizes="(min-width: 768px) 60vw, 92vw"
        className={media}
        style={
          item.objectPosition
            ? ({ objectPosition: item.objectPosition as string } as React.CSSProperties)
            : undefined
        }
        priority={false}
      />
    </div>
  );
}
