// src/components/ServicesSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Layout, Search, TrendingUp } from "lucide-react";
import { CSSProperties, useEffect, useRef, useState } from "react";

const YELLOW = "#FFEB3B";

type Service = {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
};

/** --- Type-safe CSS custom props --- */
type CSSVars = { [K in `--${string}`]?: string | number };
type StyleWithVars = CSSProperties & CSSVars;

/** Helper to inject animation delay without using `any` */
const withDelay = (ms: number): CSSVars =>
  ({ ["--delay"]: `${ms}ms` } as const);

type CardProps = Service & { className?: string; style?: StyleWithVars };

const LEFT: Service[] = [
  {
    title: "Web Development",
    desc: "Custom websites & web apps built for speed, SEO, and conversions.",
    href: "/services/web-development",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "SEO",
    desc: "Technical, on-page, and content SEO that grows qualified traffic.",
    href: "/services/seo",
    icon: <Search className="h-5 w-5" />,
  },
];

const RIGHT: Service[] = [
  {
    title: "Landing Pages",
    desc: "High-converting pages with clear offer, proof, and CTAs.",
    href: "/services/landing-pages",
    icon: <Layout className="h-5 w-5" />,
  },
  {
    title: "Business Growth",
    desc: "Funnels, automations, and analytics to scale revenue.",
    href: "/services/business-growth",
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      {/* BG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/services-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,226,65,0.28),transparent_60%)] blur-2xl" />
          <div className="absolute bottom-0 left-12 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,226,65,0.18),transparent_60%)] blur-2xl" />
          <div className="absolute right-12 top-24 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,226,65,0.18),transparent_60%)] blur-2xl" />
        </div>
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <h2
          className={`text-center text-3xl font-bold tracking-tight text-white sm:text-4xl ${
            seen ? "animate-srv-fade-up" : "opacity-0"
          }`}
          style={withDelay(60)}
        >
          Smart Services For{" "}
          <span style={{ color: YELLOW }}>Digital Growth</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Left column */}
          <div className="grid content-center gap-8">
            {LEFT.map((s, i) => (
              <ServiceCard
                key={s.title}
                {...s}
                className={seen ? "animate-srv-slide-left" : "opacity-0"}
                style={withDelay(160 + i * 140)}
              />
            ))}
          </div>

          {/* Center showcase card */}
          <div
            className={`relative mx-auto w-full max-w-xs sm:max-w-sm ${
              seen ? "animate-srv-pop" : "opacity-0"
            }`}
            style={withDelay(300)}
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900/50 p-2 shadow-2xl backdrop-blur">
              <div
                className={`relative overflow-hidden rounded-[24px] ${
                  seen ? "animate-image-reveal" : ""
                }`}
                style={withDelay(320)}
              >
                <Image
                  src="/images/ssss.jpg"
                  alt="Showcase"
                  width={640}
                  height={1280}
                  className="h-auto w-full rounded-[24px] object-cover will-change-transform"
                  priority
                />
                {/* Darken overlay on the image */}
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-black/45 sm:bg-black/55" />
              </div>
            </div>

            {/* Yellow glow */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-[32px]"
              style={{ boxShadow: `0 0 64px ${hexWithAlpha(YELLOW, 0.22)}` }}
            />
          </div>

          {/* Right column */}
          <div className="grid content-center gap-8">
            {RIGHT.map((s, i) => (
              <ServiceCard
                key={s.title}
                {...s}
                className={seen ? "animate-srv-slide-right" : "opacity-0"}
                style={withDelay(200 + i * 140)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Local CSS for load-in animation (no global file needed) */}
      <style jsx global>{`
        @keyframes image-reveal {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
            filter: blur(4px);
          }
          60% {
            opacity: 1;
            transform: translateY(0) scale(1.005);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        .animate-image-reveal {
          animation: image-reveal 800ms cubic-bezier(0.2, 0.65, 0.2, 1) both;
          animation-delay: var(--delay, 0ms);
        }

        /* Optional: respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-image-reveal {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ title, desc, href, icon, className, style }: CardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md ${
        className || ""
      }`}
      style={style}
    >
      <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 60px ${hexWithAlpha(YELLOW, 0.2)}` }}
      />
      <div className="mb-4 flex items-center gap-3">
        <div
          className="grid size-10 place-items-center rounded-full ring-1 ring-black/10"
          style={{ background: YELLOW, color: "#111" }}
        >
          {icon}
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-white/70">{desc}</p>
      <Link
        href={href || "/#work"}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
      >
        Read More
        <span
          className="grid size-7 place-items-center rounded-full ring-1 ring-black/10 transition-transform group-hover:translate-x-0.5"
          style={{ background: YELLOW, color: "#000" }}
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}

function hexWithAlpha(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
