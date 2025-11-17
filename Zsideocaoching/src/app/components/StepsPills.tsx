"use client";

import { ArrowRight, LineChart, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Step = {
  id: string | number;
  label: string;   // small top text
  title: string;   // bold main text
  icon?: React.ReactNode;
};

interface StepsPillsProps {
  steps?: Step[];
  className?: string;
  iconColorFrom?: string; // tailwind color class e.g. "from-[#790BFF]"
  iconColorTo?: string;   // e.g. "to-[#4b1b99]"
}

export default function StepsPills({
  steps = [
    {
      id: 1,
      label: "WORLD-CLASS",
      title: "Learning",
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      id: 2,
      label: "SCALE FROM ZERO",
      title: "To $10k/Mo",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      id: 3,
      label: "1-ON-1 ADVICE",
      title: "From Experts",
      icon: <Users className="h-5 w-5" />,
    },
  ],
  className,
  iconColorFrom = "from-[#790BFF]",
  iconColorTo = "to-[#2e075e]",
}: StepsPillsProps) {
  return (
    <div className={clsx("w-full flex items-center justify-center gap-6", className)}>
      {steps.map((s, i) => (
        <div key={s.id} className="flex items-center gap-6">
          {/* Pill */}
          <motion.div
            whileHover={{ y: -1 }}
            className={clsx(
              "relative group grid grid-cols-[auto_1fr] items-center gap-3",
              "rounded-[999px] bg-black/70 text-white",
              "border border-white/15 px-5 py-3 pr-6",
              "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            )}
            style={{
              // extra subtle outer ring (second outline)
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 0 2px rgba(255,255,255,0.10)",
            }}
          >
            {/* Icon badge */}
            <div
              className={clsx(
                "relative grid h-10 w-10 place-items-center rounded-full",
                "bg-gradient-to-br",
                iconColorFrom,
                iconColorTo,
                "text-white/95",
                "transition-all duration-300"
              )}
              // glow on hover
            >
              <div
                className={clsx(
                  "absolute inset-0 rounded-full",
                  "ring-1 ring-white/20"
                )}
              />
              <div className="relative transition drop-shadow-[0_0_0_rgba(0,0,0,0)] group-hover:drop-shadow-[0_0_16px_rgba(121,11,255,0.65)]">
                {s.icon}
              </div>
            </div>

            {/* Text */}
            <div className="leading-tight">
              <div className="text-[11px] tracking-[0.08em] text-white/60">
                {s.label}
              </div>
              <div className="text-[20px] font-semibold">{s.title}</div>
            </div>

            {/* subtle inner border line, to emulate double outline */}
            <span className="pointer-events-none absolute inset-[6px] rounded-[999px] border border-white/10" />
          </motion.div>

          {/* Arrow separator (except after last) */}
          {i < steps.length - 1 && (
            <ArrowRight className="h-6 w-6 text-white/70" />
          )}
        </div>
      ))}
    </div>
  );
}
