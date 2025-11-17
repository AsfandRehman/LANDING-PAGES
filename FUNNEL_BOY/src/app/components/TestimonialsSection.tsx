"use client";

import Image from "next/image";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar?: string; // public path like /people/lewis.jpg
  quote: string;
};

const DATA: Testimonial[] = [
  {
    id: "lewis",
    name: "LEWIS HERRIN",
    role: "CEO / SSI",
    avatar: "/people/lewis.jpg",
    quote:
      "They are friendly, engaging and excellent at what they do. Great ideas and a great interpretation of our needs..",
  },
  {
    id: "julianne",
    name: "JULIANNE HOUGH",
    role: "KINRGY",
    avatar: "/people/julianne.jpg",
    quote:
      "Among the plethora of agencies we spoke with, Buzzworthy stood out significantly. Their work not only exceeded our expectations, but what truly set them apart was the sheer talent within their team. They breathed life into our vision with finesse and expertise..",
  },
  {
    id: "richard",
    name: "RICHARD VEVERS",
    role: "CEO / OCEAN AGENCY",
    avatar: "/people/richard.jpg",
    quote:
      "Our site was unveiled in 2023, and the influx of leads soared to 10x compared to the previous website. Buzzworthy not only met deadlines, but they also catapulted our expectations, designing an absolute standout..",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-visible py-20 md:py-28">
      {/* Top-left brand mark bubble (red circle with 'b') */}

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Tiny section label */}
        <div className="flex items-center gap-3">
          <span className="relative grid place-items-center h-4 w-4 rounded-full">
            <span className="absolute inset-0 rounded-full border border-white/40" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_0_2px_rgba(255,255,255,0.15)]" />
          </span>
          <span className="uppercase text-[11px] tracking-[0.22em] text-[#6AB1FF] bg-[#6AB1FF]/15 px-2 py-0.5 rounded-[3px]">
            Testimonials
          </span>
        </div>

        {/* Jumbo right-aligned heading */}
        <div className="mt-6 md:mt-10">
          <h2 className="text-right font-extrabold leading-[0.9] tracking-tight uppercase">
            <span className="block text-[18vw] md:text-[9vw] lg:text-[7.5vw]">
              We Keep Our
            </span>
            <span className="inline-flex items-center gap-3 text-[18vw] md:text-[9vw] lg:text-[7.5vw]">
              Promise
              <span className="inline-block h-3 w-3 rounded-[6px] bg-[#E73852]" />
            </span>
          </h2>
        </div>

        {/* Cards row */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {DATA.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>

      {/* Floating red FAB (bottom-right) */}
      <button
        aria-label="Open testimonials action"
        className="fixed right-6 bottom-6 md:right-10 md:bottom-10 h-16 w-16 rounded-full bg-[#E73852] grid place-items-center shadow-[0_20px_60px_rgba(231,56,82,0.35)] hover:brightness-110 transition"
      >
        {/* pencil icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 17.25V20h2.75L17.81 8.94l-2.75-2.75L4 17.25z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 6.5l2.75 2.75"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className={[
        "relative rounded-xl md:rounded-2xl",
        "bg-white/5 backdrop-blur-[1px] ring-1 ring-white/10",
        "p-6 md:p-8",
        // deep shadow like the shot
        "shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      {/* name pill with dot */}
      <div className="mb-6 flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/80">
        <span className="relative grid place-items-center h-3.5 w-3.5 rounded-full">
          <span className="absolute inset-0 rounded-full border border-white/35" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-pink-500" />
        </span>
        <span className="whitespace-nowrap">
          {t.name}
          <span className="opacity-60"> / {t.role}</span>
        </span>
      </div>

      <div className="flex items-start gap-4 md:gap-5">
        <Avatar src={t.avatar} alt={t.name} />
        <p className="text-[15px] md:text-[17px] leading-relaxed text-white/85">
          {t.quote}
        </p>
      </div>
    </article>
  );
}

function Avatar({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    // fallback initials
    const initial = alt?.[0]?.toUpperCase() ?? "•";
    return (
      <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/20 grid place-items-center">
        <span className="text-white/90 font-semibold">{initial}</span>
      </div>
    );
  }
  return (
    <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden ring-2 ring-white/20">
      <Image src={src} alt={alt} fill sizes="56px" className="object-cover" />
    </div>
  );
}
