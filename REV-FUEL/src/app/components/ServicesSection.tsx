// app/components/ServicesSection.tsx
"use client";

import * as React from "react";
import {
  BadgeCheck,
  MonitorPlay,
  Mail,
  Workflow,
  BarChart3,
  Megaphone,
} from "lucide-react";

type ServiceSection = {
  heading: string;
  text?: string;
  images?: string[];
};
type Service = {
  title: string;
  summary: string;
  sections: ServiceSection[];
};

const BRAND = "#FF2D55"; // red
const BG = "#0B0B12";

// Updated SERVICES aligned to Business Coaching + DFY Systems
const SERVICES: Service[] = [
  {
    title: "Business Coaching",
    summary:
      "Strategy, positioning, pricing, and weekly accountability to get you to $100k/mo.",
    sections: [],
  },
  // REMOVED "Done-For-You Systems"
  {
    title: "Landing Pages & VSLs",
    summary:
      "High-converting pages and persuasive VSLs: scripts, storyboards, and split tests.",
    sections: [],
  },
  {
    title: "Email Marketing & Nurture",
    summary:
      "Automations, segmentation, and campaigns that turn attention into bookings.",
    sections: [],
  },
  {
    title: "CRM, Pipelines & Automations",
    summary:
      "GHL/HubSpot architecture, triggers, webhooks, and follow-ups that close deals.",
    sections: [],
  },
  {
    title: "Analytics, Tracking & CRO",
    summary:
      "GA4, pixels, dashboards, and iterative A/B tests to raise conversion rates.",
    sections: [],
  },
  {
    title: "Content Engine",
    summary: "Calendars, hooks, and repurposing to keep acquisition always-on.",
    sections: [],
  },
  // REMOVED "Offer Assets & SOPs"
];

// Map service titles to icons
const ICON_MAP: Record<string, React.ReactNode> = {
  "Business Coaching": <BadgeCheck className="w-5 h-5" />,
  "Landing Pages & VSLs": <MonitorPlay className="w-5 h-5" />,
  "Email Marketing & Nurture": <Mail className="w-5 h-5" />,
  "CRM, Pipelines & Automations": <Workflow className="w-5 h-5" />,
  "Analytics, Tracking & CRO": <BarChart3 className="w-5 h-5" />,
  "Content Engine": <Megaphone className="w-5 h-5" />,
};

export default function ServicesSection() {
  // Filter out the D & O cards
  const VISIBLE = React.useMemo(
    () =>
      SERVICES.filter(
        (s) =>
          s.title !== "Done-For-You Systems" &&
          s.title !== "Offer Assets & SOPs"
      ),
    []
  );

  return (
    <section
      aria-label="Services"
      className="w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 relative isolate overflow-hidden"
      style={{
        backgroundColor: BG,
        color: "white",
        ["--brand" as string]: BRAND,
      }}
    >
      {/* Background: flames vibe (image + dark overlay + animated warm glows) */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={
            {
              backgroundImage: "url('/images/flames-bg.jpg')",
            } as React.CSSProperties
          }
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Flame-like warm gradients */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div
          className="absolute -top-24 -left-28 w-[45rem] h-[30rem] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(40% 50% at 50% 50%, rgba(255,125,0,0.45), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-10 -right-24 w-[48rem] h-[32rem] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(40% 50% at 50% 50%, rgba(255,45,85,0.35), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(40% 50% at 50% 50%, rgba(255,159,28,0.30), transparent 60%)",
          }}
        />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.12]">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Heading + subheading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND}, #FFA07A)`,
              }}
            >
              Our Services
            </span>
          </h2>
          <p className="mt-3 text-white/80 max-w-3xl mx-auto">
            We build and run the growth stack—pages, VSLs, email, CRM, and CRO—
            so you can focus on creating while revenue compounds.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VISIBLE.map((svc) => {
            const icon = ICON_MAP[svc.title] ?? (
              <BadgeCheck className="w-5 h-5" />
            );
            return (
              <article
                key={svc.title}
                className="
                  rounded-2xl
                  bg-white/[0.035] backdrop-blur-[2px]
                  ring-1 ring-white/10
                  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                  p-6
                  transition
                  hover:bg-white/[0.06]
                  hover:ring-[--brand]/40
                "
              >
                {/* Icon in red circle with white glyph */}
                <div className="mb-4">
                  <span
                    aria-hidden
                    className="inline-grid place-items-center w-10 h-10 rounded-full shadow-[0_0_18px_rgba(255,45,85,0.35)]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,45,85,0.95), rgba(255,106,106,0.95))",
                      color: "white",
                    }}
                  >
                    {icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold">{svc.title}</h3>

                {/* Condensed Summary */}
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {svc.summary}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Foreground vignette for depth */}
      <div
        className="
          pointer-events-none absolute inset-0
          [mask-image:radial-gradient(90%_60%_at_50%_40%,black,transparent)]
          bg-[radial-gradient(800px_300px_at_50%_120%,rgba(0,0,0,0.45),transparent)]
        "
      />
    </section>
  );
}
