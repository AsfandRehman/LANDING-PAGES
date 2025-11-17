"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StepsPills from "./StepsPills";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Volume2, VolumeX } from "lucide-react";

function buildLoomSrc(embedUrl: string, opts: { autoplay?: 0|1; muted?: 0|1; loop?: 0|1 }) {
  // normalize to /embed/<id>
  const base = embedUrl
    .replace("/share/", "/embed/")
    .replace("loom.com/share", "loom.com/embed");

  const url = new URL(base);
  url.searchParams.set("hide_owner", "true");
  url.searchParams.set("hide_share", "true");
  url.searchParams.set("autoplay", String(opts.autoplay ?? 1));
  url.searchParams.set("muted", String(opts.muted ?? 1));
  url.searchParams.set("loop", String(opts.loop ?? 0));
  return url.toString();
}

/** Inline VSL: autoplay muted, click to unmute in the same box */
function InlineVSL({
  embedUrl,          // e.g. https://www.loom.com/embed/cce0eb80-909f-4b4f-bdde-eb5d443f71a5
  posterSrc,         // optional poster behind the iframe while it loads
  posterAlt = "VSL Poster",
}: {
  embedUrl: string;
  posterSrc?: string;
  posterAlt?: string;
}) {
  const [muted, setMuted] = useState<0 | 1>(1);

  // Rebuild src when muted changes (simple, reliable unmute)
  const src = useMemo(() => buildLoomSrc(embedUrl, { autoplay: 1, muted, loop: 0 }), [embedUrl, muted]);

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 shadow-[0_10px_60px_rgba(0,0,0,0.6)] backdrop-blur-md">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[4px] md:h-[6px] w-[88%] md:w-[80%] -translate-x-1/2 bg-gradient-to-r from-[#000000] via-[#461186] to-[#000000]" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[4px] md:h-[6px] w-[88%] md:w-[80%] -translate-x-1/2 bg-gradient-to-r from-[#000000] via-[#2e075e] to-[#000000]" />

      <div className="relative aspect-video">
        {/* Optional poster behind the iframe while it paints */}
        {posterSrc && (
          <Image
            src={posterSrc}
            alt={posterAlt}
            fill
            className="object-cover opacity-70"
            priority={false}
          />
        )}

        {/* Loom embed — autoplays muted */}
        <iframe
          key={src} // force refresh when toggling mute param
          src={src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        {/* Mute/Unmute toggle */}
        <button
          onClick={() => setMuted((m) => (m ? 0 : 1))}
          className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-black shadow-lg backdrop-blur transition hover:scale-[1.03]"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
}

export default function HeroSection() {
  // IMPORTANT: must be /embed/ (NOT /share/, NOT blob:)
  const LOOM_EMBED_URL = "https://www.loom.com/embed/cce0eb80-909f-4b4f-bdde-eb5d443f71a5";

  return (
    <section
      id="hero"
      className="relative min-h-screen md:min-h-[140vh] w-full overflow-hidden bg-black text-white"
    >
      {/* BG */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image src="/images/bgtexture.jpg" alt="Full BG" fill priority className="object-cover" />
        <div
          className="
            absolute inset-0 z-10 bg-black/94
            [mask-image:radial-gradient(60%_50%_at_50%_45%,transparent_0%,transparent_55%,black_56%),
                         radial-gradient(40%_28%_at_50%_6%,transparent_0%,transparent_50%,black_51%)]
            [mask-composite:exclude] [-webkit-mask-composite:xor]
          "
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-15 z-0 hidden md:flex justify-center ">
        <Image src="/images/NEON 3.png" alt="Background" width={1920} height={800} priority className="object-contain object-bottom" />
      </div>

      <div className="pointer-events-none absolute left-1/2 -top-24 h-40 w-40 -translate-x-[80px] rounded-full bg-white/20 blur-[80px] md:h-[420px] md:w-[420px] md:-top-90 md:bg-white/35 md:blur-[180px]" />
      <div className="pointer-events-none absolute -left-10 bottom-0 hidden md:block h-[520px] w-[520px] rounded-full bg-[#3154A5]/30 blur-[220px] translate-y-[-100px]" />
      <div className="pointer-events-none absolute -right-10 bottom-0 hidden md:block h-[520px] w-[520px] rounded-full bg-[#3154A5]/30 blur-[220px] translate-y-[-100px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 pt-20 md:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-[32px] leading-[1.15] sm:text-[36px] md:text-[84px] font-bold tracking-tight"
        >
          <span className="text-[#3154A5]">From ‘Just a Tool’ to a Complete Team</span>{" "}
          <span className="text-white">I built Stratos Because You Asked for It</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="mt-4 flex items-center gap-2 text-center text-[13px] sm:text-sm text-gray-300 md:text-base px-2"
        >
          <span className="max-w-[52ch]">
            When I launched the Twin Method, I thought I solved it all. But then the messages started flooding in...
          </span>
        </motion.p>

        {/* VSL CARD — inline, autoplay muted, click to unmute */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative mt-8 md:mt-10 w-full"
        >
          <InlineVSL
            embedUrl={LOOM_EMBED_URL}
            posterSrc="/images/vslcover.jpg"
          />

          <Link href="#cta">
            <div className="flex justify-center my-10 md:my-18 px-2">
              <CTAButton />
            </div>
          </Link>

          <div className="my-8 md:my-12 px-2">
            <StepsPills
           steps={[
  { 
    id: 1, 
    label: "Content Engine", 
    title: "Done-For-You Creation", 
    icon: <Briefcase className="h-5 w-5" /> 
  },
  { 
    id: 2, 
    label: "Premium Service", 
    title: "High-Touch Execution", 
    icon: <TrendingUp className="h-5 w-5" /> 
  },
  { 
    id: 3, 
    label: "Brand Growth", 
    title: "Scale With Authority", 
    icon: <Users className="h-5 w-5" /> 
  },
]}

              iconColorFrom="from-[#3154A5]"
              iconColorTo="to-[#1f346b]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
