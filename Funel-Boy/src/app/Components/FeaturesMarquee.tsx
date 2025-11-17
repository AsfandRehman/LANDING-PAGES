// components/FeaturesMarquee.tsx
"use client";

import { useState, ReactNode } from "react";
import {
  Zap,
  Settings,
  Cable,
  Folder,
  Shield,
  BarChart3,
  BellDot,
  Gauge,
  Bot,
  LineChart,
} from "lucide-react";

const YELLOW = "#FFEB3B";

type Item = { label: string; icon: ReactNode; accent?: boolean };

const ITEMS: Item[] = [
  { label: "AI-Powered Insight", icon: <Bot className="h-4 w-4" /> },
  { label: "Expense Tracking", icon: <Gauge className="h-4 w-4" /> },
  {
    label: "Automated Workflows",
    icon: <Settings className="h-4 w-4" />,
    accent: true,
  }, // default active
  { label: "API Integration", icon: <Cable className="h-4 w-4" /> },
  { label: "File Sharing", icon: <Folder className="h-4 w-4" /> },
  { label: "Client Portal", icon: <Shield className="h-4 w-4" /> },
  { label: "Performance Analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { label: "Resource Allocation", icon: <LineChart className="h-4 w-4" /> },
  { label: "Real-time Alerts", icon: <BellDot className="h-4 w-4" /> },
  { label: "Automation Triggers", icon: <Zap className="h-4 w-4" /> },
];

export default function FeaturesMarquee() {
  // default active = the one that had accent: true (fallback to first)
  const defaultActive = ITEMS.find((i) => i.accent)?.label ?? ITEMS[0].label;
  const [active, setActive] = useState<string>(defaultActive);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative isolate overflow-hidden py-8 sm:py-10">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="fade-mask relative overflow-hidden rounded-full">
          {/* track – duplicated content for seamless loop */}
          <div className="marquee [--duration:36s] hover:[animation-play-state:paused]">
            <ul className="flex items-center gap-3 pr-3">
              {ITEMS.map((it) => (
                <Pill
                  key={`a-${it.label}`}
                  {...it}
                  highlight={(hovered ?? active) === it.label}
                  onEnter={() => setHovered(it.label)}
                  onLeave={() => setHovered(null)}
                  onPick={() => setActive(it.label)}
                />
              ))}
              {ITEMS.map((it) => (
                <Pill
                  key={`b-${it.label}`}
                  {...it}
                  ariaHidden
                  highlight={(hovered ?? active) === it.label}
                  onEnter={() => setHovered(it.label)}
                  onLeave={() => setHovered(null)}
                  onPick={() => setActive(it.label)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* component-scoped CSS */}
      <style jsx>{`
        .marquee {
          width: max-content;
          display: flex;
          animation: scroll var(--duration, 36s) linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .fade-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 8%,
            black 92%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 8%,
            black 92%,
            transparent
          );
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}

function Pill({
  label,
  icon,
  highlight,
  ariaHidden = false,
  onEnter,
  onLeave,
  onPick,
}: Item & {
  highlight: boolean;
  ariaHidden?: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onPick: () => void;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur cursor-pointer select-none";
  if (highlight) {
    return (
      <li
        aria-hidden={ariaHidden}
        role="button"
        tabIndex={0}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onPick}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onPick()}
        className={`${base} border-white/10 bg-neutral-900/80 text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)]`}
      >
        <span
          className="grid size-6 place-items-center rounded-full ring-1 ring-black/10"
          style={{ background: YELLOW, color: "#0f0f0f" }}
        >
          {icon}
        </span>
        <span className="whitespace-nowrap">{label}</span>
        {/* yellow glow */}
        <span
          className="pointer-events-none absolute inset-0 -z-10 rounded-full"
          style={{ boxShadow: `0 0 40px rgba(255,226,65,.35)` }}
        />
      </li>
    );
  }

  return (
    <li
      aria-hidden={ariaHidden}
      role="button"
      tabIndex={0}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onPick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onPick()}
      className={`${base} border-white/10 bg-white/5 text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:bg-white/10`}
    >
      <span className="grid size-6 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
        {icon}
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </li>
  );
}
