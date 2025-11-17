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
  label = "Book Your Call With Me",
  onClick,
  className,
}: CTAButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={clsx(
        "relative inline-flex items-center justify-center",
        // Responsive padding
        "px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4",
        // Responsive text
        "rounded-full font-semibold text-base sm:text-lg md:text-xl text-white",
        // Gradient & shadow
        "bg-gradient-to-r from-[#3154A5] via-[#3c64c2] to-[#27427a]",
        "shadow-[0_4px_20px_rgba(49,84,165,0.5)]",
        "transition-all duration-300 hover:shadow-[0_6px_28px_rgba(49,84,165,0.7)]",
        className
      )}
    >
      {/* Inner Glow Border */}
      <span className="absolute inset-0 rounded-full border border-white/20" />

      {/* Button Text */}
      <span className="relative z-10">{label}</span>

      {/* Arrow */}
      <ArrowRight className="relative z-10 ml-2 h-4 w-4 sm:h-5 sm:w-5" />
    </motion.button>
  );
}
