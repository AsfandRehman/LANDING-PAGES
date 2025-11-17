"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

export default function OurWorkSection() {
  const ACCENT = "#FFEB3B";
  const BG_IMAGE = "/images/work-bg.jpg";

  // --- Parallax: move bg slower than scroll ---
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1200], [0, -220]);

  // smooth-scroll globally
  const SmoothScroll = useMemo(
    () => (
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    ),
    []
  );

  const PROJECTS = [
    {
      id: 1,
      title: "SP Funding",
      href: "https://finance-steve-park-site.vercel.app/",
      image: "/images/steve.png",
      description:
        "Financial growth with smart investing, and wealth planning strategies.",
      year: 2025,
    },
    {
      id: 2,
      title: "True Scope Marketting",
      href: "https://tru-scope-marketting.vercel.app/",
      image: "/images/true.png",
      description:
        "Social media growth with content strategy and audience engagement optimization.",
      year: 2024,
    },
    {
      id: 3,
      title: "Dr.Jhonathan",
      href: "https://nextjonathan.vercel.app/",
      image: "/images/jhon.png",
      description:
        "Holistic wellness with natural remedies, meditation, and mindful living practices.",
      year: 2025,
    },
    {
      id: 4,
      title: "Ridge Back Built",
      href: "https://ridge-back-builders.vercel.app/",
      image: "/images/ridge.png",
      description:
        "Construction solutions with quality builds, project management, and on-time delivery.",
      year: 2025,
    },
    {
      id: 5,
      title: "Nobtimed",
      href: "https://nobtimed-marketing.vercel.app/",
      image: "/images/nobtimedmarket.png",
      description:
        "Trust-driven healthcare site with compliant design, patient resources, and lead conversion.",
      year: 2025,
    },
    {
      id: 6,
      title: "Housers",
      href: "https://houser-beta.vercel.app/",
      image: "/images/housers.png",
      description:
        "Housing platform with property listings, tenant resources, and easy applications.",
      year: 2025,
    },
    {
      id: 7,
      title: "Business Portfolio",
      href: "https://marcus-portfolio-zw4s.vercel.app/",
      image: "/images/portfolio.png",
      description:
        "Professional portfolio with case studies, client showcases, and brand credibility.",
      year: 2024,
    },
    {
      id: 8,
      title: "Shoot n Scale",
      href: "https://www.scalewithck.com/",
      image: "/images/scalewithck.png",
      description:
        "Business coaching with  strategies, leadership , and performance optimization",
      year: 2024,
    },
    {
      id: 9,
      title: "Prime",
      href: "https://primelabstudios.com",
      image: "/images/primelab.png",
      description:
        "Video editing agency with short-form content, viral strategies, and platform optimization.",
      year: 2025,
    },
    {
      id: 10,
      title: "Curve",
      href: "https://project-omega-roan.vercel.app/",
      image: "/images/crve.png",
      description: "Grow a Business That Fuels Your Life, Not Drains It",
      year: 2025,
    },
    {
      id: 11,
      title: "Edenz Consultsnts",
      href: "https://www.edenzconsultant.org/",
      image: "/images/edenz.png",
      description:
        "Denz Consultant: Study abroad made easy with admissions, visas, and test prep.",
      year: 2025,
    },
    {
      id: 12,
      title: "Victoria Rose",
      href: "https://victoriaroserecords.com/",
      image: "/images/victoriaaa.png",
      description:
        "I’m Victoria Rose, turning my journey with bipolar disorder into music I share with you.",
      year: 2025,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {SmoothScroll}

      {/* Parallax BG (unchanged) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute left-1/2 -translate-x-1/2 -top-[220px] -bottom-[220px] w-screen -z-10 will-change-transform"
      >
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_35%,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.28)_60%,rgba(0,0,0,0.6)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 blur-3xl opacity-40 mix-blend-screen
                     bg-[conic-gradient(from_140deg_at_20%_10%,rgba(255,235,59,0.18),transparent_30%),conic-gradient(from_-20deg_at_80%_20%,rgba(255,235,59,0.12),transparent_30%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay
                     bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
                     bg-[size:80px_80px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          aria-hidden
        >
          <style jsx>{`
            div :global(&) {
              background-image: url("data:image/svg+xml;utf8,\
                <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>\
                  <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter>\
                  <rect width='64' height='64' filter='url(%23n)' opacity='0.35'/>\
                </svg>");
              background-size: 180px 180px;
            }
          `}</style>
        </div>
      </motion.div>

      {/* Section content */}
      <section className="relative isolate" aria-labelledby="our-work-heading">
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <header className="mb-8 md:mb-12">
            <h2
              id="our-work-heading"
              className="text-center text-2xl font-light tracking-wide text-white md:text-3xl"
            >
              Selected Work
            </h2>
            <p className="mt-2 text-center text-sm text-white/80 md:text-base">
              A curated mix of brand sites, web apps, and growth experiences.
            </p>
          </header>

          <div className="relative grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-2 lg:gap-x-20">
            {/* center guideline */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 lg:block"
            >
              <div
                className="sticky top-28 z-10 mx-auto mt-20 h-2 w-2 rounded-full"
                style={{ background: ACCENT }}
              />
            </div>

            {PROJECTS.map((p, idx) => {
              const delay = idx * 0.05;
              const isRight = idx % 2 === 1;

              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.6,
                    delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "group relative",
                    idx % 3 === 0 ? "lg:mt-6" : "",
                  ].join(" ")}
                >
                  {/* NEW: Background “blur card” layer */}
                  <div
                    className={[
                      "absolute -inset-2 rounded-[28px] -z-[1]",
                      "backdrop-blur-md bg-black/25 border border-white/10",
                      "shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
                      // tiny randomness offset for your staggered vibe (doesn’t change layout/grid)
                      idx % 2 ? "translate-y-0.5" : "-translate-y-0.5",
                    ].join(" ")}
                    aria-hidden
                  />

                  <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
                    {/* 16:9 aspect preserved */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-800 ease-out group-hover:scale-[1.05]"
                        sizes="(min-width:1024px) 44vw, 100vw"
                        priority={idx < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>

                    <div className="pointer-events-none absolute left-4 top-4 z-[2] rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[12px] font-medium text-white/85 backdrop-blur">
                      {p.year ?? "—"}
                    </div>

                    <span
                      className="absolute left-6 right-6 bottom-0 h-[2px] scale-x-0 origin-left transition-transform duration-500"
                      style={{ background: ACCENT }}
                    />
                  </div>

                  <div
                    className={[
                      "mt-4 flex items-start gap-4 text-white lg:items-center",
                      isRight ? "lg:flex-row-reverse lg:text-right" : "",
                    ].join(" ")}
                  >
                    <span
                      className="mt-2 inline-block h-1.5 w-1.5 rounded-full lg:mt-0"
                      style={{ background: ACCENT }}
                      aria-hidden
                    />
                    <div className="flex-1">
                      <h3 className="text-[18px] font-semibold leading-snug md:text-xl">
                        <Link
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 underline-offset-4 hover:underline decoration-white/40"
                        >
                          {p.title}
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 17l10-10M7 7h10v10"
                            />
                          </svg>
                        </Link>
                      </h3>
                      {p.description && (
                        <p className="mt-1.5 text-sm md:text-[15px] text-white/80">
                          {p.description}
                        </p>
                      )}
                    </div>

                    {/* Filled CTA with #FFEB3B */}
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full border border-transparent px-3.5 py-2 text-xs md:text-sm font-medium transition hover:translate-x-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
                      style={{ background: ACCENT, color: "#000" }}
                    >
                      Visit
                    </Link>
                  </div>

                  <style jsx>{`
                    .group:hover > span:last-of-type {
                      transform: scaleX(1);
                    }
                  `}</style>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
