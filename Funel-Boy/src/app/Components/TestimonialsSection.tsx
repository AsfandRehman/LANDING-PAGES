// src/components/TestimonialsSection.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const ACCENT = "#FFEB3B";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating?: number;
  photo: string; // big circular image (left)
  avatar: string; // small headshot (right)
};

const DATA: Testimonial[] = [
  {
    quote:
      "Partnering with this team has been game-changing for our business. From day one they understood our industry and delivered a custom solution that exceeded expectations.",
    name: "Amanda Reyes",
    role: "Owner",
    company: "FeaterDev",
    rating: 5,
    photo: "/images/r2.jpg",
    avatar: "/images/r2.jpg",
  },
  {
    quote:
      "Flawless execution, transparent reporting, and real results. Our conversions and retention both climbed within weeks.",
    name: "Derrick Miles",
    role: "CMO",
    company: "Northbay",
    rating: 5,
    photo: "/images/r1.jpg",
    avatar: "/images/r1.jpg",
  },
  {
    quote:
      "They ship fast, think strategically, and the quality is top-tier. Easily the best partner we’ve worked with.",
    name: "Sofia Kareem",
    role: "Product Lead",
    company: "Vistora",
    rating: 5,
    photo: "/images/R4.jpg",
    avatar: "/images/R4.jpg",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = DATA[idx];
  const next = () => setIdx((i) => (i + 1) % DATA.length);
  const prev = () => setIdx((i) => (i - 1 + DATA.length) % DATA.length);

  // swipe
  const [downX, setDownX] = useState<number | null>(null);
  const onDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDownX(e.clientX);
  };
  const onUp = (e: React.PointerEvent) => {
    if (downX == null) return;
    const dx = e.clientX - downX;
    if (dx < -60) next();
    if (dx > 60) prev();
    setDownX(null);
  };

  const stars = useMemo(() => Array.from({ length: 5 }), []);

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden py-16 sm:py-20"
      onPointerDown={onDown}
      onPointerUp={onUp}
    >
      {/* Background image + dark overlay */}
      <Image
        src="/images/footer-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* soft “tube”/spot lights like the mock */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* left diagonal glow */}
        <div
          className="absolute -left-24 top-0 h-[420px] w-[520px] rotate-[-22deg] blur-2xl opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 30% 60%, rgba(163,230,53,.12), transparent 70%)",
          }}
        />
        {/* right diagonal glow */}
        <div
          className="absolute -right-20 bottom-0 h-[420px] w-[520px] rotate-[18deg] blur-2xl opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 70% 40%, rgba(163,230,53,.10), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* LEFT: circular composition */}
        <div className="relative mx-auto w-full max-w-[540px]">
          {/* main circle */}
          <div
            className="pointer-events-none absolute left-1 top-1 h-[84%] w-[84%] rounded-full"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          />
          <div className="relative aspect-square w-[78%] overflow-hidden rounded-full border border-white/10 bg-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/work.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
            {/* green sweep from bottom-left */}
            <div className="absolute inset-0 bg-[conic-gradient(from_225deg_at_20%_80%,rgba(163,230,53,0.28),transparent_38%)]" />
          </div>

          {/* outer thin ring */}

          {/* quote bubble dot */}
          <div
            className="absolute left-[6%] top-[54%] grid size-10 place-items-center rounded-full ring-1 ring-black/10"
            style={{ background: ACCENT, color: "#0b0b0b" }}
            aria-hidden
          >
            <span className="text-xl font-black">“</span>
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="relative">
          {/* top-right circular seal */}
          <div className="pointer-events-none absolute -right-4 -top-8 hidden md:block">
            <Seal />
          </div>

          {/* label pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/80 backdrop-blur">
            ✳︎ WHAT OUR CLIENTS SAY
          </span>

          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What Our Clients Say <br className="hidden sm:block" />
            Results <span style={{ color: ACCENT }}>From Clients</span>
          </h3>

          {/* stars */}
          <div className="mt-5 flex items-center gap-1">
            {stars.map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5"
                style={{
                  color:
                    i < (t.rating ?? 5) ? ACCENT : "rgba(255,255,255,0.25)",
                  fill: i < (t.rating ?? 5) ? ACCENT : "transparent",
                }}
              />
            ))}
          </div>

          <p className="mt-4 max-w-2xl text-[17px] leading-7 text-white/85">
            “{t.quote}”
          </p>

          {/* person */}
          <div className="mt-6 flex items-center gap-3">
            <Image
              src={t.avatar}
              alt={t.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-white/70">
                {t.role}
                {t.company ? ` · ${t.company}` : ""}
              </p>
            </div>
          </div>

          {/* nav buttons */}
          <div className="mt-6 flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={prev}
              className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="grid size-9 place-items-center rounded-full border border-black/10 text-[#0b0b0b]"
              style={{ background: ACCENT }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** small circular “SUCCESS BRAND” seal (top-right) */
function Seal() {
  return (
    <div className="relative h-28 w-28">
      <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-sm ring-1 ring-white/10" />
      <svg viewBox="0 0 200 200" className="relative h-full w-full">
        <defs>
          <path
            id="circlePathT"
            d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
          />
        </defs>
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="rgba(255,255,255,.14)"
          strokeWidth="2"
        />
        <text
          fill="rgba(255,255,255,.85)"
          fontSize="14"
          fontWeight="700"
          letterSpacing="2"
        >
          <textPath href="#circlePathT" startOffset="0%">
            • SUCCESS BRAND • BUILD WITH •
          </textPath>
        </text>
        <g transform="translate(100,100)">
          <path
            d="M-6 0 H10 M4 -6 L10 0 L4 6"
            stroke="rgba(255,255,255,.85)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
