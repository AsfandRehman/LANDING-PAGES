"use client";

import React from "react";

const BRAND = "#3354A5";
const BG = "#0B0B12";

export default function AboutSimpleSection() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-12 py-14 sm:py-20 lg:py-28"
      style={{
        backgroundColor: BG,
        color: "white",
        ["--brand" as string]: BRAND,
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND}, #7C9BFF)`,
            }}
          >
            The Stratos Story
          </span>
        </h2>

        {/* Narrative */}
        <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 text-left sm:text-center">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/85">
            Before I built <strong>Stratos</strong>, I thought the{" "}
            <span className="font-semibold">Twin Method</span> was it. Record
            once, generate unlimited content without ever being on camera —
            game-changing, right?
          </p>

          <blockquote className="relative pl-4 sm:pl-0 text-lg sm:text-xl md:text-2xl font-medium italic text-white/90">
            <span className="absolute left-0 top-0 h-full w-1 bg-[var(--brand)] hidden sm:block"></span>
            “Dom, I love the Twin Method, but I don’t even want to think about
            scripting, editing, or posting… can’t your team just do it for me?”
          </blockquote>

          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/85">
            That’s when it clicked. The real bottleneck wasn’t just{" "}
            <em>being on camera</em> — it was the{" "}
            <span className="font-semibold">entire content process</span>.
            Strategy, scripts, edits, posting… all of it eats up time.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/85">
            So I gave my personal content team access to a handful of creators.
            The results? <strong>Insane.</strong> More reach. More authority.
            More money-making content — without them lifting a finger.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/90 font-semibold">
            That’s what Stratos is:{" "}
            <span className="underline underline-offset-4 decoration-white/40">
              my shortcut for you
            </span>
            . The very same system that powers my own brands, now available to a
            limited number of creators who want a complete, done-for-you content
            engine.
          </p>
        </div>
      </div>
    </section>
  );
}
