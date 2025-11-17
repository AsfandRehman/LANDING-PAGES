// components/SharedBackground.tsx
"use client";

import Image from "next/image";
import type { ReactNode, CSSProperties } from "react";

type Props = {
  src: string; // background image that spans all sections
  overlayClassName?: string; // e.g. "bg-black/70"
  fixed?: boolean; // parallax feel if true
  fade?: boolean; // soft fade at bottom
  children: ReactNode;
};

export default function SharedBackground({
  src,
  overlayClassName = "bg-black/70",
  fixed = false,
  fade = true,
  children,
}: Props) {
  const fadeStyle: CSSProperties = {
    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
    maskImage: "linear-gradient(to bottom, black 70%, transparent)",
  };

  return (
    <section className="relative isolate">
      {/* one background for ALL child sections */}
      <div className={fixed ? "fixed inset-0 -z-10" : "absolute inset-0 -z-10"}>
        <Image src={src} alt="" fill priority className="object-cover" />
        <div className={`absolute inset-0 ${overlayClassName}`} />
        {fade && (
          <div
            className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
            style={fadeStyle}
          />
        )}
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
