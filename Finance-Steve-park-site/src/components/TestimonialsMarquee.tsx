"use client";

import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  city: string;
  quote: string;
  avatar?: string; // optional /public path
  rating?: number; // 1..5
};

const ROW_A: Testimonial[] = [
  {
    id: 1,
    name: "Ravi M.",
    city: "Bangalore",
    quote:
      "Fastest approval I’ve ever seen. Applied, got it, done. All digital — no calls!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya S.",
    city: "Mumbai",
    quote:
      "Got over ₹10K in perks within the first month. Easily the smartest card I own.",
    rating: 5,
  },
  {
    id: 3,
    name: "Karan P.",
    city: "Delhi",
    quote:
      "Stylish, secure, and smart. Lounge access + instant tracking — love it.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ravi M.",
    city: "Bangalore",
    quote: "The app is clean and quick. Redemption was instant.",
    rating: 5,
  },
];

const ROW_B: Testimonial[] = [
  {
    id: 5,
    name: "Aisha K.",
    city: "Hyderabad",
    quote: "Support team is actually helpful. Solved my query in minutes.",
    rating: 5,
  },
  {
    id: 6,
    name: "Nitin G.",
    city: "Pune",
    quote: "Rewards stack nicely on daily spends. Worth it.",
    rating: 5,
  },
  {
    id: 7,
    name: "Meera V.",
    city: "Chennai",
    quote: "Loved the priority invites — unique experiences every month.",
    rating: 5,
  },
  {
    id: 8,
    name: "Rohit S.",
    city: "Gurgaon",
    quote: "Approval + activation took under 10 minutes. Crazy fast.",
    rating: 5,
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="mb-3 text-[12px] tracking-tight">
      {"★★★★★☆☆☆☆☆".slice(0, Math.max(0, Math.min(10, n)))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div
      className="
        shrink-0 w-[320px] md:w-[360px] lg:w-[380px]
        rounded-xl border border-zinc-700/70 bg-[#0B0B0B] text-zinc-100
        p-5 mr-4 md:mr-6
        shadow-[0_0_0_1px_rgba(255,255,255,0.02)] 
      "
    >
      <Stars n={t.rating ?? 5} />
      <p className="text-sm md:text-[15px] leading-6 text-zinc-300">
        “{t.quote}”
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full border border-zinc-700 bg-zinc-800">
          {/* Optional avatar; fallback gradient blob */}
          {t.avatar ? (
            <Image src={t.avatar} alt={t.name} fill sizes="36px" />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,#43E0C0,transparent_40%),radial-gradient(circle_at_70%_70%,#F2C56B,transparent_40%)]" />
          )}
        </div>
        <div className="leading-tight">
          <div className="text-sm font-medium text-white">{t.name}</div>
          <div className="text-xs text-zinc-400">{t.city}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  // Duplicate rows to create seamless loops
  const row1 = [...ROW_A, ...ROW_A];
  const row2 = [...ROW_B, ...ROW_B];

  return (
    <section className="bg-black text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-20">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#F2C56B] via-[#E3D97C] to-[#43E0C0] bg-clip-text text-transparent">
              Hear From Our Satisfied Clients
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
            Real stories. Real benefits. Auto-scrolling testimonials you can
            skim without lifting a finger.
          </p>
        </div>

        {/* Row A (left -> right) */}
        <div className="group relative overflow-hidden">
          <div className="mask-fade pointer-events-none absolute inset-0 z-10" />
          <div className="flex animate-marquee-left group-hover:[animation-play-state:paused]">
            {row1.map((t, i) => (
              <Card key={`r1-${i}-${t.id}`} t={t} />
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div className="h-6 md:h-8" />

        {/* Row B (right -> left) */}
        <div className="group relative overflow-hidden">
          <div className="mask-fade pointer-events-none absolute inset-0 z-10" />
          <div className="flex animate-marquee-right group-hover:[animation-play-state:paused]">
            {row2.map((t, i) => (
              <Card key={`r2-${i}-${t.id}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Scoped styles for marquee + edge fade */}
      <style jsx>{`
        /* edge fade so cards softly disappear on sides */
        .mask-fade {
          --fade: 140px;
          -webkit-mask: linear-gradient(
            to right,
            transparent 0,
            black var(--fade),
            black calc(100% - var(--fade)),
            transparent 100%
          );
          mask: linear-gradient(
            to right,
            transparent 0,
            black var(--fade),
            black calc(100% - var(--fade)),
            transparent 100%
          );
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* The content is duplicated, so translating 50% creates a perfect loop */
        .animate-marquee-left {
          width: max-content;
          animation: marquee-left 28s linear infinite;
        }

        .animate-marquee-right {
          width: max-content;
          animation: marquee-right 32s linear infinite;
        }

        /* Responsive: slow a bit on small screens */
        @media (max-width: 768px) {
          .animate-marquee-left {
            animation-duration: 36s;
          }
          .animate-marquee-right {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}
