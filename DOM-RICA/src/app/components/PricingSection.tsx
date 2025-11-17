// app/components/PricingSection.tsx
"use client";

import * as React from "react";
import { Check } from "lucide-react";

const BRAND = "#6E4BFF";

type Plan = {
  name: string;
  price: number;
  videosPerMonth: number;
  features: string[];
  perPiecePrice: string; // e.g. "$20 per piece of content"
  highlight?: boolean; // for the middle (Basic) plan
};

const PLANS: Plan[] = [
  {
    name: "Lite",
    price: 450,
    videosPerMonth: 15,
    features: [
      "Strategy, Cloning + editing included",
      "Unlimited revisions",
      "Dedicated Slack channel",
    ],
    perPiecePrice: "$30 per piece of content",
  },
  {
    name: "Basic",
    price: 600,
    videosPerMonth: 30,
    features: [
      "Strategy, Cloning + editing included",
      "Unlimited revisions",
      "Dedicated Slack channel",
    ],
    perPiecePrice: "$20 per piece of content",
    highlight: true,
  },
  {
    name: "Pro",
    price: 900,
    videosPerMonth: 60,
    features: [
      "Strategy, Cloning + editing included",
      "Unlimited revisions",
      "Dedicated Slack channel",
    ],
    perPiecePrice: "$15 per piece of content",
  },
];

export default function PricingSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B0B12] text-white">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_0%,rgba(120,80,255,0.25),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(120,80,255,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_40%,black,transparent)] bg-[radial-gradient(800px_300px_at_50%_120%,rgba(0,0,0,0.5),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-extrabold tracking-tight">
            <span className="opacity-90">Finally, </span>
            <span className="opacity-100">Agency-Level Execution</span>{" "}
            <span className="opacity-90">Without Agency Pricing</span>
          </h2>

          {/* thin accent underline */}
          <div
            className="mx-auto mt-3 h-[3px] w-24 rounded-full"
            style={{ background: BRAND }}
          />

          <p className="mt-6 text-white/80 leading-relaxed">
            Most agencies will quote you $2,000–$5,000/mo just for video editing
            or strategy alone.
          </p>
          <p className="mt-2 text-white/80 leading-relaxed">
            Stratos gives you an entire in-house content team — strategy,
            cloning, editing, posting —
            <span className="font-semibold"> all for a fraction</span> of that.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isHot = !!plan.highlight;

  return (
    <div
      className={[
        "relative rounded-2xl p-6 sm:p-7 border transition-all",
        isHot
          ? "border-white/10 shadow-[0_20px_80px_rgba(110,75,255,0.35)]"
          : "border-white/10 shadow-[0_12px_50px_rgba(0,0,0,.25)]",
      ].join(" ")}
      style={
        isHot
          ? ({
              background:
                "linear-gradient(180deg, rgba(122,92,255,0.88), rgba(98,62,255,0.88))",
            } as React.CSSProperties)
          : ({ background: "rgba(255,255,255,0.03)" } as React.CSSProperties)
      }
    >
      {/* subtle inner overlay for highlighted card to match screenshot */}
      {isHot && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl [box-shadow:inset_0_1px_0_rgba(255,255,255,.25)]" />
      )}

      <div className="relative">
        <h3
          className={[
            "text-center text-2xl font-bold",
            isHot ? "text-white" : "text-white",
          ].join(" ")}
        >
          {plan.name}
        </h3>

        {/* small accent line under plan name */}
        <div
          className="mx-auto mt-2 h-1 w-10 rounded-full"
          style={{ background: isHot ? "rgba(255,255,255,.75)" : BRAND }}
        />

        {/* Price */}
        <div className="mt-4 text-center">
          <div className="text-5xl font-extrabold tracking-tight">
            ${plan.price}
          </div>
          <div className="mt-1 text-base opacity-90">monthly</div>
        </div>

        {/* Feature bullets */}
        <ul className="mt-6 space-y-3">
          <Feature>
            <strong className="font-semibold">{plan.videosPerMonth}</strong>{" "}
            videos per month
          </Feature>

          {plan.features.map((f, i) => (
            <Feature key={i}>{f}</Feature>
          ))}

          <Feature>{plan.perPiecePrice}</Feature>
        </ul>

        {/* CTA pill */}
        <div className="mt-7">
          <button
            className={[
              "w-full rounded-full px-4 py-3 text-sm font-semibold tracking-wide",
              "shadow-[0_8px_24px_rgba(0,0,0,.25)] ring-1 ring-white/15",
              isHot
                ? "bg-white/10 hover:bg-white/15"
                : "bg-white/5 hover:bg-white/10",
            ].join(" ")}
          >
            No Lock In, No Contracts
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full"
        style={{ background: "rgba(255,255,255,.08)" }}
      >
        <Check className="h-3.5 w-3.5" style={{ color: "white" }} aria-hidden />
      </span>
      <span className="text-white/90">{children}</span>
    </li>
  );
}
