// components/CTA.tsx
"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 py-24">
      {/* subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Turn Your Raw Clips Into
          <br className="hidden sm:block" />{" "}
          <span className="underline decoration-white/30 decoration-4 underline-offset-4">
            Scroll-Stopping Videos
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-red-100 sm:text-lg">
          Don’t let your content get ignored. Let’s craft edits that hook
          audiences in <strong>3 seconds</strong> and turn views into results.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="https://calendly.com/marcusedits/meeting"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-red-600 shadow-lg transition hover:bg-red-50 hover:shadow-xl"
          >
            Get Your Video Edited
          </Link>
          <Link
            href="#heroshowcase"
            className="rounded-full border border-white/40 px-6 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            See My Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
