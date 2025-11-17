// app/components/ThreeStepProcess.tsx
"use client";

import Image from "next/image";

type Step = {
  n: number;
  title: string;
  desc: string;
  img: string;
};

const BG_IMAGE = "/images/4.jpg"; // section background image

export default function ThreeStepProcess() {
  const steps: Step[] = [
    {
      n: 1,
      title: "Book a Free Consultation",
      desc: "Schedule a complimentary call with our expert team to discuss your financial goals and challenges.",
      img: "/images/d.jpg",
    },
    {
      n: 2,
      title: "Sign Agreement & Plan",
      desc: "Review your customized financial strategy and sign our agreement to begin your transformation journey.",
      img: "/images/e.jpg",
    },
    {
      n: 3,
      title: "Achieve Financial Growth",
      desc: "Watch as we implement your personalized plan and begin seeing positive results.",
      img: "/images/f.jpg",
    },
  ];

  return (
    <section className="relative text-zinc-100 overflow-hidden">
      {/* === BG image === */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* === Bottom-to-top gradient overlay === */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* === Colored mesh for depth === */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60 [filter:saturate(115%)]"
        style={{
          background:
            "radial-gradient(40% 35% at 15% 25%, rgba(0,199,190,0.28) 0%, rgba(0,0,0,0) 60%)," +
            "radial-gradient(38% 38% at 85% 70%, rgba(255,140,0,0.28) 0%, rgba(0,0,0,0) 62%)," +
            "radial-gradient(30% 28% at 65% 10%, rgba(69,226,193,0.20) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-20 relative">
        {/* heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#F2C56B] via-[#E3D97C] to-[#43E0C0] bg-clip-text text-transparent">
              Our Simple 3-Step Process
            </span>
          </h2>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, idx) => {
            const isWarm = idx % 2 === 0;
            const cardGradient = isWarm
              ? "bg-[radial-gradient(120%_120%_at_50%_10%,#1C1C1C_0%,#0B0B0B_35%),linear-gradient(180deg,#0B0B0B_0%,#C6762C_55%,#BA5E1D_100%)]"
              : "bg-[radial-gradient(120%_120%_at_50%_10%,#1C1C1C_0%,#0B0B0B_35%),linear-gradient(180deg,#0B0B0B_0%,#0BAF9C_55%,#079C87_100%)]";

            const glowFrom = isWarm ? "from-[#FF9F43]" : "from-[#2FE6C8]";
            const glowTo = isWarm ? "to-[#C96A17]" : "to-[#0EA48E]";

            return (
              <article
                key={s.n}
                className={[
                  "group relative overflow-hidden rounded-3xl p-6 md:p-8",
                  "border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
                  cardGradient,
                  "transition-transform duration-300 hover:-translate-y-1",
                ].join(" ")}
              >
                {/* ambient glow behind card */}
                <div
                  aria-hidden
                  className={[
                    "pointer-events-none absolute -inset-8 -z-10 blur-2xl opacity-25",
                    `bg-gradient-to-br ${glowFrom} ${glowTo}`,
                    "transition-opacity duration-300 group-hover:opacity-50",
                  ].join(" ")}
                />

                {/* soft inner outline */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

                {/* step number pill */}
                <div className="mb-5 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs tracking-wide">
                  STEP {s.n}
                </div>

                {/* text */}
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-zinc-200/90 max-w-prose">
                  {s.desc}
                </p>

                {/* image */}
                <div className="relative mt-8 h-56 md:h-64">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                    sizes="(max-width:768px) 80vw, 30vw"
                    priority={idx === 0}
                  />
                </div>

                {/* hover bloom */}
                <div
                  aria-hidden
                  className={[
                    "pointer-events-none absolute left-1/2 bottom-2 h-24 w-[85%] -translate-x-1/2 blur-3xl opacity-0",
                    `bg-gradient-to-r ${glowFrom} ${glowTo}`,
                    "transition-opacity duration-300 group-hover:opacity-50",
                  ].join(" ")}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
