// app/components/ProcessSection.tsx
"use client";

import Image from "next/image";
import * as React from "react";
import { motion, useScroll } from "framer-motion";

type Step = {
  title: string;
  blurb: string;
  bullets?: string[];
  images: string[];
};

const BRAND = "#6E4BFF";
const STEPS: Step[] = [
  {
    title: "Pre-Production",
    blurb:
      "This phase involves everything prior to filming. We start by listening — to your wants, needs, ideas, problems, and everything in between.",
    bullets: [
      "Concept Development",
      "Scriptwriting",
      "Storyboarding & Animatics",
      "Plan, Plan, Plan",
    ],
    images: ["/images/process/pre-1.jpg"],
  },
  {
    title: "Production",
    blurb:
      "This is where the most fun happens. Press record and watch everything we planned come to life.",
    bullets: ["Cinematography", "Sound Recording"],
    images: ["/images/process/prod-1.jpg"],
  },
  {
    title: "Post-Production",
    blurb:
      "Everything takes its final form here. After hard work, we get to celebrate the fruits of our labour.",
    bullets: [
      "Editing",
      "Colour Grading",
      "3D Animation & CG",
      "Sound Design & Music",
    ],
    images: ["/images/process/post-1.jpg"],
  },
];

export default function ProcessSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 80%"],
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#0B0B12] text-white">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_0%,rgba(120,80,255,0.25),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(120,80,255,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_40%,black,transparent)] bg-[radial-gradient(800px_300px_at_50%_120%,rgba(0,0,0,0.5),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Process
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
            From concept to final cut, we follow a clear and creative process
            that turns your vision into a compelling story — crafted to connect,
            inspire, and stand out.
          </p>
        </div>

        {/* timeline */}
        <div ref={containerRef} className="relative mt-12 sm:mt-16">
          {/* base spine (behind everything) */}
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px z-0"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,.22), transparent)",
            }}
          />
          {/* progress spine (animated) */}
          <motion.div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[3px] origin-top rounded-full z-0"
            style={{
              height: "100%",
              scaleY: scrollYProgress,
              background:
                "linear-gradient(180deg, rgba(110,75,255,0) 0%, rgba(110,75,255,.65) 40%, rgba(110,75,255,.65) 100%)",
              boxShadow: "0 0 18px rgba(110,75,255,.35)",
            }}
          />

          <div className="space-y-14 sm:space-y-20 md:space-y-24">
            {STEPS.map((step, i) => {
              const imageOnLeft = i % 2 === 0;

              // side paddings to create visible gap from spine on both sides
              const imgSidePad = imageOnLeft ? "md:pr-12" : "md:pl-12";
              const textSidePad = imageOnLeft ? "md:pl-12" : "md:pr-12";

              return (
                <div key={i} className="relative">
                  {/* ERASE the spine behind the node + give the node solid color */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 sm:-top-3 z-10">
                    {/* big eraser disc so no black bar shows through */}
                    <div
                      className="absolute -inset-3 rounded-full bg-[#0B0B12]"
                      aria-hidden
                    />
                    {/* solid brand node with white number */}
                    <div
                      className="relative grid place-items-center h-10 w-10 sm:h-12 sm:w-12 rounded-full text-sm sm:text-base font-bold text-white ring-1 ring-white/20 shadow-[0_6px_28px_rgba(110,75,255,.45)]"
                      style={{ background: BRAND }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                    {/* images */}
                    <div
                      className={`${
                        imageOnLeft
                          ? "order-1 md:order-1"
                          : "order-1 md:order-2"
                      } ${imgSidePad}`}
                    >
                      <ImagesBlock images={step.images} />
                    </div>

                    {/* text */}
                    <div
                      className={`${
                        imageOnLeft
                          ? "order-2 md:order-2"
                          : "order-2 md:order-1"
                      } ${textSidePad}`}
                    >
                      <h3 className="text-2xl sm:text-3xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-white/80 leading-relaxed">
                        {step.blurb}
                      </p>

                      {step.bullets?.length ? (
                        <ul className="mt-4 space-y-2">
                          {step.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span
                                className="mt-2 h-2 w-2 shrink-0 rounded-full"
                                style={{ backgroundColor: BRAND }}
                              />
                              <span className="text-white/85">{b}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagesBlock({ images }: { images: string[] }) {
  if (!images?.length) return null;
  if (images.length === 1) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <Image
          src={images[0]}
          alt=""
          width={800}
          height={600}
          className="w-full h-64 sm:h-72 md:h-80 object-cover"
        />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
        >
          <Image
            src={src}
            alt=""
            width={600}
            height={400}
            className="w-full h-36 sm:h-40 md:h-44 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
