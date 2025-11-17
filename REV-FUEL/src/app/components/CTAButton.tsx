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
        "relative inline-flex items-center justify-center overflow-hidden",
        // Responsive padding
        "px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4",
        // Responsive text
        "rounded-full font-semibold text-base sm:text-lg md:text-xl text-white",
        // 🔴 Red gradient & shadow
        "bg-gradient-to-r from-[#ef4444] via-[#dc2626] to-[#b91c1c]",
        "shadow-[0_4px_20px_rgba(220,38,38,0.5)]",
        "transition-all duration-300 hover:shadow-[0_6px_28px_rgba(220,38,38,0.7)]",
        // Slight inner glass
        "backdrop-blur-[1px]",
        className
      )}
    >
      {/* Inner Glow Border */}
      <span className="pointer-events-none absolute inset-0 rounded-full border border-white/20" />

      {/* 🔥 Flame particles (soft radial glows that float up) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Flame 1 */}
        <motion.span
          className="absolute bottom-0 left-[18%] w-14 h-14 sm:w-16 sm:h-16 rounded-full"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255,230,230,0.85) 0%, rgba(255,160,160,0.45) 40%, rgba(255,0,0,0) 65%)",
            filter: "blur(6px)",
            mixBlendMode: "screen",
          }}
          animate={{
            y: [8, -8, 8],
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Flame 2 */}
        <motion.span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255,248,248,0.9) 0%, rgba(255,180,180,0.5) 42%, rgba(255,0,0,0) 68%)",
            filter: "blur(8px)",
            mixBlendMode: "screen",
          }}
          animate={{
            y: [10, -10, 10],
            scale: [1, 1.12, 1],
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.15,
          }}
        />
        {/* Flame 3 */}
        <motion.span
          className="absolute bottom-0 right-[14%] w-12 h-12 sm:w-14 sm:h-14 rounded-full"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255,220,220,0.8) 0%, rgba(255,150,150,0.4) 38%, rgba(255,0,0,0) 64%)",
            filter: "blur(6px)",
            mixBlendMode: "screen",
          }}
          animate={{
            y: [7, -7, 7],
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.95, 0.5],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </div>

      {/* ✨ Shimmer sweep */}
      <span aria-hidden className="" />

      {/* Button Text */}
      <span className="relative z-10">{label}</span>

      {/* Arrow */}
      <ArrowRight className="relative z-10 ml-2 h-4 w-4 sm:h-5 sm:w-5" />

      {/* Local keyframes for shimmer */}
      <style jsx>{`
        @keyframes shimmerScan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shimmer-scan {
          animation: shimmerScan 1.25s ease-in-out infinite;
        }
      `}</style>
    </motion.button>
  );
}
