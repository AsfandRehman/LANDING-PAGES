"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Step = {
  id: string | number;
  label: string;
  title: string;
  icon?: React.ReactNode;
};

interface StepsPillsProps {
  steps?: Step[];
  className?: string;
  iconColorFrom?: string;
  iconColorTo?: string;
}

export default function StepsPills({
  steps = [],
  className,
  iconColorFrom = "from-[#790BFF]",
  iconColorTo = "to-[#2e075e]",
}: StepsPillsProps) {
  return (
    <div
      className={clsx(
        // Mobile: 2 per row, centered; Desktop: row with arrows
        "grid grid-cols-2 gap-3 justify-items-center md:flex md:items-center md:justify-center md:gap-6",
        className
      )}
    >
      {steps.map((s, i) => (
        <div key={s.id} className="flex items-center justify-center md:gap-6">
          {/* Pill */}
          <motion.div
            whileHover={{ y: -1 }}
            className={clsx(
              "relative group grid grid-cols-[auto_1fr] items-center gap-2 sm:gap-3",
              "rounded-[999px] bg-black/70 text-white",
              "border border-white/15 px-3.5 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3 pr-5 md:pr-6",
              "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            )}
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 0 2px rgba(255,255,255,0.10)",
            }}
          >
            {/* Icon badge */}
            <div
              className={clsx(
                "relative grid place-items-center rounded-full bg-gradient-to-br text-white/95 transition-all duration-300",
                "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10",
                iconColorFrom,
                iconColorTo
              )}
            >
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
              <div className="relative transition group-hover:drop-shadow-[0_0_16px_rgba(121,11,255,0.65)]">
                {s.icon}
              </div>
            </div>

            {/* Text */}
            <div className="leading-tight">
              <div className="text-[10px] sm:text-[11px] tracking-[0.08em] text-white/60">
                {s.label}
              </div>
              <div className="text-[15px] sm:text-[17px] md:text-[20px] font-semibold">
                {s.title}
              </div>
            </div>

            {/* Inner border */}
            <span className="pointer-events-none absolute inset-[6px] rounded-[999px] border border-white/10" />
          </motion.div>

          {/* Arrow — show only on desktop */}
          {i < steps.length - 1 && (
            <ArrowRight className="hidden md:block h-6 w-6 text-white/70" />
          )}
        </div>
      ))}
    </div>
  );
}
