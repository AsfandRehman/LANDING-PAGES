// app/components/PainSolutions.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Item = { title: string; body: string; ctaHref?: string };

const BG_IMAGE = "/images/bg.png"; // put your image in /public/images

const painPoints: Item[] = [
  {
    title: "Low Credit Score Hindering Loans",
    body: "Struggling with poor credit scores that prevent you from accessing the credit you need for major purchases.",
  },
  {
    title: "High Interest Rates",
    body: "Paying exorbitant interest on existing debt, robbing you of financial growth and freedom.",
  },
  {
    title: "Lack of Funding for Business",
    body: "Entrepreneurs’ dreams stalled due to lack of business capital or unfavorable lending terms.",
  },
];

const solutions: Item[] = [
  {
    title: "Expert Credit Repair Strategies",
    body: "Our skilled team will analyze your credit report and work strategically to improve your credit score.",
  },
  {
    title: "Access to Smart Funding",
    body: "Connect with resources for business funding, personal loans, and real estate investment.",
  },
  {
    title: "Personalized Financial Guidance",
    body: "Receive one-on-one financial coaching tailored to your goals and circumstances.",
  },
];

// Variants (typed + renamed to avoid confusion with the <Card/> component)
const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function Card({ item }: { item: Item }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex min-h-[220px] flex-col justify-between
                 p-6 border border-zinc-800/80
                 bg-[#0B0B0B] text-white
                 transition-colors duration-300
                 hover:bg-gradient-to-br hover:from-[#E58B2B] hover:to-[#C27129]"
    >
      <div>
        <h3 className="text-xl md:text-2xl font-medium leading-snug tracking-wide text-white">
          {item.title}
        </h3>
        <p className="mt-3 text-sm text-zinc-300/90 max-w-prose group-hover:text-white/90 transition-colors">
          {item.body}
        </p>
      </div>

      <div className="mt-6">
        <Link
          href={item.ctaHref || "#"}
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm
                     border border-zinc-700/80 text-zinc-100
                     group-hover:border-white/70 group-hover:text-white
                     group-hover:bg-white/10 transition-colors"
        >
          Know More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function PainSolutions() {
  return (
    <section className="relative bg-black text-zinc-100 overflow-hidden">
      {/* BG image */}
      <div
        className="absolute inset-0 -z-30 bg-center bg-cover"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/85 via-black/78 to-black/90" />
      {/* Colored gradient mesh on top of image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70 [filter:saturate(115%)]"
        style={{
          background:
            "radial-gradient(42% 36% at 15% 25%, rgba(0,199,190,0.30) 0%, rgba(0,0,0,0) 60%)," +
            "radial-gradient(38% 40% at 85% 70%, rgba(255,140,0,0.28) 0%, rgba(0,0,0,0) 62%)," +
            "radial-gradient(30% 28% at 65% 10%, rgba(69,226,193,0.22) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/* Heading */}
      <div className="mx-auto max-w-5xl px-6 pt-14 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          <span className="shine-fill">Live the Credit-Smart Life.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-zinc-300">
          Real solutions to real roadblocks. From score repair to strategic
          funding and tailored guidance — step into financial momentum.
        </p>
      </div>

      {/* Grid with staggered load-in */}
      <div className="mx-auto mt-10 max-w-7xl px-4 pb-16">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-zinc-800/80"
        >
          {painPoints.map((p, i) => (
            <Card key={`pain-${i}`} item={p} />
          ))}
          {/* animated divider still gets a variant */}
          <motion.div
            variants={itemVariants}
            className="hidden xl:block col-span-3 h-px bg-zinc-800/80"
          />
          {solutions.map((s, i) => (
            <Card key={`solution-${i}`} item={s} />
          ))}
        </motion.div>
      </div>

      {/* local CSS */}
      <style jsx>{`
        /* animated gradient fill + specular sweep INSIDE the text */
        .shine-fill {
          background-image: linear-gradient(
            90deg,
            #f3b665 0%,
            #e1d77a 25%,
            #45e2c1 50%,
            #e1d77a 75%,
            #f3b665 100%
          );
          background-size: 200% 100%;
          background-position: 0% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine-move 5s linear infinite;
          position: relative;
        }
        .shine-fill::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            transparent 0%,
            rgba(255, 255, 255, 0.35) 45%,
            rgba(255, 255, 255, 0) 55%,
            transparent 100%
          );
          mix-blend-mode: screen;
          background-size: 300% 100%;
          animation: sweep 2.8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes shine-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        @keyframes sweep {
          0%,
          8% {
            background-position: -200% 0;
            opacity: 0;
          }
          20% {
            opacity: 0.9;
          }
          40% {
            background-position: 0% 0;
          }
          70% {
            opacity: 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}
