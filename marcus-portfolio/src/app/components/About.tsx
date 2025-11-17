// components/About.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left: Profile Image */}
        <div className="relative mx-auto h-80 w-80 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 md:h-[420px] md:w-[420px]">
          <Image
            src="/images/marcus.jpg" // replace with real photo
            alt="Marcus — Video Editor"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            About <span className="text-red-600">Me</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Hey, I’m <span className="font-semibold text-neutral-900">Marcus</span>,
            a freelance <span className="text-red-600 font-medium">short-form video editor </span>
            helping creators & brands craft scroll-stopping content.
            With 3+ years of editing experience, I specialize in TikTok, Instagram Reels,
            and YouTube Shorts — delivering edits that hook viewers in seconds and keep them watching.
          </p>

          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            My philosophy is simple: <em>fast pacing, sharp cuts, bold captions,
              and storytelling that sells</em>. Whether you’re a solo creator or a startup brand,
            I shape raw footage into videos that perform.
          </p>

          {/* Quick Stats */}
          <dl className="mt-8 grid grid-cols-2 gap-6 text-center md:max-w-md">
            <div className="rounded-xl bg-red-50 p-4 shadow-sm">
              <dt className="text-2xl font-extrabold text-red-600">120+</dt>
              <dd className="mt-1 text-sm text-neutral-600">Projects Edited</dd>
            </div>
            <div className="rounded-xl bg-red-50 p-4 shadow-sm">
              <dt className="text-2xl font-extrabold text-red-600">3yrs+</dt>
              <dd className="mt-1 text-sm text-neutral-600">Experience</dd>
            </div>
          </dl>

          {/* CTA */}
          <div className="mt-8 flex gap-3">
            <Link
              href="#heroshowcase"
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-red-700"
            >
              See My Work
            </Link>
            <Link
              href="https://calendly.com/marcusedits/meeting"
              className="rounded-full border border-red-600 px-5 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
            >
              Let&apos;s Collaborate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
