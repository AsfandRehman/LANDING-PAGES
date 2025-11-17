// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import StepsPills from "./StepsPills";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Clock , Briefcase , TrendingUp , Users } from "lucide-react";

export default function HeroSection() {
  return (
  <section
  id="hero"
  className="relative min-h-[140vh] w-full overflow-hidden bg-black text-white"
>
  {/* Full-screen texture ABOVE section bg, BELOW other layers */}
  <div className="pointer-events-none absolute inset-0 z-0">
    <Image
      src="/images/bgtexture.jpg"
      alt="Full BG"
      fill
      priority
      className="object-cover"
    />
    {/* Darkness overlay with two radial windows */}
   {/* Black overlay with holes (z-10) */}
<div
  className="
    absolute inset-0 z-10 bg-black/94
    [mask-image:radial-gradient(60%_50%_at_50%_45%,transparent 0%,transparent 55%,black 56%),
                 radial-gradient(40%_28%_at_50%_6%,transparent 0%,transparent 50%,black 51%)]
    [mask-composite:exclude] [-webkit-mask-composite:xor]
  "
/>
  </div>
      {/* === BG IMAGE: anchored to bottom, keep intrinsic size === */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center">
        <Image
          src="/images/custombg.png"            // your file
          alt="Background"
          width={1920}                           // use your real intrinsic width
          height={800}                           // use your real intrinsic height
          priority
          className="object-contain object-bottom"   // never upscale beyond intrinsic width
        />
      </div>

      {/* === 3 GRADIENT GLOWS === */}
      <div className="pointer-events-none absolute left-1/2 -top-90 h-[420px] w-[420px] -translate-x-[100px] rounded-full bg-white/35 blur-[180px]" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-[520px] w-[520px] rounded-full bg-[#790BFF]/30 blur-[220px] translate-y-[-100px]" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-[520px] w-[520px] rounded-full bg-[#790BFF]/30 blur-[220px] translate-y-[-100px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 md:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-[36px] leading-[1.1] md:text-[84px] font-bold tracking-tight"
        >
          <span className="text-[#790BFF]">Business</span>{" "}
          <span className="text-white">Growth Is a Choice.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="mt-4 flex items-center gap-2 text-center text-sm text-gray-300 md:text-base"
        >
          <Clock className="h-4 w-4 opacity-80" />
          <span>
            The market never sleeps, competitors never stop, and the only difference is how prepared you are.
          </span>
        </motion.p>

        {/* VSL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative mt-10 w-full"
        >
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_10px_60px_rgba(0,0,0,0.6)] backdrop-blur-md">
            {/* TOP & BOTTOM centered glow bars (60% width) */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[6px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-[#000000] via-[#461186] to-[#000000]" />
            <div className="pointer-events-none absolute left-1/2 bottom-0 h-[6px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-[#000000] via-[#2e075e] to-[#000000]" />

            {/* VSL area */}
            <div className="relative aspect-video">
              <Image
                src="/images/vslcover.jpg"
                alt="VSL Poster"
                fill
                className="object-cover opacity-90"
              />
              <button
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-xl transition hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

          </div>

          <Link
            href="#cta"
          >
            <div className="flex justify-center my-18">
              <CTAButton />
            </div>
          </Link>

            <div className="my-12">
      <StepsPills
        steps={[
          {
            id: 1,
            label: "WORLD-CLASS",
            title: "Strategy",
            icon: <Briefcase className="h-5 w-5" />,
          },
          {
            id: 2,
            label: "SCALE PREDICTABLY",
            title: "To $10k/Mo",
            icon: <TrendingUp className="h-5 w-5" />,
          },
          {
            id: 3,
            label: "1-ON-1 COACHING",
            title: "From Experts",
            icon: <Users className="h-5 w-5" />,
          },
        ]}
        // keep white text on black and purple brand icon badge
        iconColorFrom="from-[#790BFF]"
        iconColorTo="to-[#3b0e7e]"
      />
    </div>

        </motion.div>
      </div>
    </section>
  );
}
