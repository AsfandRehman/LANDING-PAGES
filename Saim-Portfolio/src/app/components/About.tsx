"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ShieldCheck, ArrowRight, Globe2, Building2, Sparkles } from "lucide-react";
// put near imports
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fade = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 0.55, ease: EASE, delay },
});

// ✅ Motion-safe tag wrappers
const MotionH2 = motion("h2");
const MotionP = motion("p");
const MotionDiv = motion("div");



export default function AboutSection() {
  return (
    <section id="story" className="relative isolate bg-[#0b0b10] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <MotionH2
            {...fade(0)}
            className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-white bg-clip-text text-transparent">
              About Saim Ali Ahmad
            </span>
          </MotionH2>

          <MotionP {...fade(0.05)} className="mt-4 text-white/70">
            Operator. Strategist. Founder of ZSIDEO CONTENT LLC.
          </MotionP>
        </div>

        {/* Main */}
        <div className="mt-12 grid items-center gap-10 md:gap-14 lg:grid-cols-[1.05fr_1fr]">
          {/* Portrait card */}
          <MotionDiv {...fade(0.08)} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
              {/* neon rim */}
              <div className="pointer-events-none absolute -inset-0.5 rounded-[28px] bg-[conic-gradient(at_20%_50%,#6366F1,#22D3EE_30%,#60A5FA_60%,#6366F1)] opacity-60 blur-md" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0E0E10]">
                <Image
                  src="/images/saimabout.jpg"
                  alt="Saim Ali Ahmad portrait"
                  fill
                  sizes="(min-width:1024px) 42vw, 92vw"
                  className="object-cover will-change-transform"
                  priority
                />
                {/* sweep shimmer */}
                <motion.div
                  aria-hidden
                  initial={{ x: "-120%" }}
                  whileInView={{ x: "120%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-[140%] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />
                {/* caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-sm font-medium">Saim Ali Ahmad</div>
                  <div className="text-xs text-white/70">
                    Founder & CEO 
                  </div>
                </div>
              </div>

              {/* proof badges */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <ProofBadge
                  icon={<ShieldCheck className="h-4 w-4" />}
                  title="Verified Results"
                  text="Payments, dashboards, client testimonials"
                />
                <ProofBadge
                  icon={<Globe2 className="h-4 w-4" />}
                  title="Global Client Base"
                  text="USA (80%), CA, UK, AU, Dubai"
                />
              </div>
            </div>
          </MotionDiv>

          {/* Copy + stats + CTAs */}
          <MotionDiv {...fade(0.12)}>
            <div className="space-y-6 text-white/80 leading-relaxed text-center lg:text-left">
              <p>
                Saim Ali Ahmad is a self-made young millionaire who earned over $1M by
                19. Now 20, he is the founder and CEO of ZSIDEO CONTENT LLC, a Dubai-based
                content agency delivering high-quality short-form video editing for
                businesses, entrepreneurs, and creators. With clients primarily in the
                United States and across Canada, the UK, Australia, and Dubai, Saim has
                built a reputation for exceptional results and creative execution.
              </p>
              <p>
                His journey was not easy. A college dropout under pressure to pursue
                engineering, he faced criticism and even had his laptop confiscated.
                Refusing to quit, he kept learning and hustling. A first $1,000 client
                became the foundation to scale.
              </p>
              <p>
                Beyond ZSIDEO CONTENT, Saim operates multiple service-based businesses in
                AI solutions, website development, and digital marketing. He earns from
                operating agencies and services—not selling courses—and shares verifiable
                proof of outcomes.
              </p>
              <p>
                Dubai-based and legally registered, Saim is an operator and strategist who
                actively runs and scales ventures, publishing frameworks he uses to build
                profitable service companies.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <Stat label="Earned by 19" value="$1M+" />
              <Stat label="Primary Market" value="USA (80%)" />
              <Stat label="Registered In" value="Dubai, UK, US" />
              <Stat label="Focus" value="Service Ops" />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                href = "https://www.instagram.com/saimzsideo/"
               
                className="relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white
                  transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              >
                <span className="absolute -inset-[1px] rounded-full bg-[conic-gradient(at_20%_50%,#6366F1,#22D3EE_30%,#60A5FA_60%,#6366F1)] opacity-50 blur-[8px]" />
         
           
          
            
                <span className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 shadow-lg shadow-sky-900/40">
                  <ShieldCheck className="h-4 w-4" />
                  View Proof
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link> 

              <Link
                href="https://www.youtube.com/@saimzsideo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-medium transition hover:bg-white/[0.1]"
              >
                <Play className="h-4 w-4" />
                Watch on YouTube
              </Link>

            
            </div>

            {/* signature */}
            <div className="mt-8 flex items-center justify-center gap-3 text-white/60 lg:justify-start">
              <Sparkles className="h-4 w-4" />
              <p className="text-sm">
                Built on operator mindset: process, proof, and client outcomes.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
      <div className="text-[11px] uppercase tracking-widest text-white/50">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function ProofBadge({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-white/60">{text}</div>
      </div>
    </div>
  );
}
