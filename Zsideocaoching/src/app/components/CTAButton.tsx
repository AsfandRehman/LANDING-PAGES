"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CTAButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  label = "Start Your Business Growth",
  onClick,
  className,
}: CTAButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={clsx(
        "relative inline-flex items-center justify-center px-8 py-4",
        "rounded-full font-semibold text-lg text-black",
        "bg-gradient-to-r from-[#790BFF] via-[#A45CFF] to-[#790BFF]",
        "shadow-[0_4px_20px_rgba(121,11,255,0.5)]",
        "transition-all duration-300 hover:shadow-[0_6px_28px_rgba(121,11,255,0.7)]",
        className
      )}
    >
      {/* Inner Glow Border */}
      <span className="absolute inset-0 rounded-full border border-white/20" />

      {/* Button Text */}
      <span className="relative z-10">{label}</span>

      {/* Arrow */}
      <ArrowRight className="relative z-10 ml-2 h-5 w-5" />
    </motion.button>
  );
}
