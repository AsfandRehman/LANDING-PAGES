// components/BeforeAfterStrip.tsx
"use client";

import { useRef } from "react";

type Cell = {
  label: "Before" | "After";
  poster?: string;
  src?: string;
};

// <-- NEW: looser input type for props / normalize
type CellInput = {
  poster?: string;
  src?: string;
  label?: string; // can be anything, we'll ignore/overwrite
};

const PLACEHOLDER_SRC = "/videos/v1.mp4";
const PLACEHOLDER_POSTER = "/images/p1.png";

export default function BeforeAfterStrip({
  heading = "Before & After",
  cells = makeAltSix(), // can still default to proper 6
}: {
  heading?: string;
  // <-- accept loose input here
  cells?: CellInput[];
}) {
  // Ensure exactly 6, alternating
  const items = normalizeSix(cells);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
          {heading}
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-6 md:gap-6">
        {items.map((c, i) => (
          <VideoCell
            key={i}
            label={c.label}
            src={c.src ?? PLACEHOLDER_SRC}
            poster={c.poster ?? PLACEHOLDER_POSTER}
            className="w-[140px] lg:w-[160px] xl:w-[180px]"
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden -mx-4 px-4">
        <div className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto">
          {items.map((c, i) => (
            <VideoCell
              key={i}
              label={c.label}
              src={c.src ?? PLACEHOLDER_SRC}
              poster={c.poster ?? PLACEHOLDER_POSTER}
              className="snap-center w-[150px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCell({
  label,
  src,
  poster,
  className = "",
}: {
  label: "Before" | "After";
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const play = () => ref.current?.play().catch(() => { });
  const pauseReset = () => {
    if (!ref.current) return;
    ref.current.pause();
    ref.current.currentTime = 0;
  };
  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.paused) ref.current.play().catch(() => { });
    else pauseReset();
  };

  return (
    <figure className={`group relative ${className}`}>
      <div
        className="relative overflow-hidden rounded-2xl bg-black ring-1 ring-black/10 shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-transform duration-200 group-hover:-translate-y-0.5"
        style={{ aspectRatio: "9 / 16" }}
        onMouseEnter={play}
        onMouseLeave={pauseReset}
        onClick={toggle}
      >
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          poster={poster}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <span
          className={[
            "absolute left-2 top-2 rounded-full px-2 py-0.5 text-[11px] font-semibold",
            label === "After"
              ? "bg-red-600 text-white"
              : "bg-white/90 text-neutral-900",
          ].join(" ")}
        >
          {label}
        </span>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />
      </div>
    </figure>
  );
}

function makeAltSix(): Cell[] {
  return [
    { label: "Before", src: PLACEHOLDER_SRC, poster: PLACEHOLDER_POSTER },
    { label: "After", src: PLACEHOLDER_SRC, poster: PLACEHOLDER_POSTER },
    { label: "Before", src: PLACEHOLDER_SRC, poster: PLACEHOLDER_POSTER },
    { label: "After", src: PLACEHOLDER_SRC, poster: PLACEHOLDER_POSTER },
    { label: "Before", src: PLACEHOLDER_SRC, poster: PLACEHOLDER_POSTER },
    { label: "After", src: PLACEHOLDER_SRC, poster: PLACEHOLDER_POSTER },
  ];
}

/** Coerce loose input into strict 6 alternating cells */
function normalizeSix(arr: CellInput[]): Cell[] {
  const base = makeAltSix();
  return base.map((b, i) =>
    arr?.[i]
      ? {
        poster: arr[i].poster ?? b.poster,
        src: arr[i].src ?? b.src,
        // force the alternating union type here:
        label: (i % 2 === 0 ? "Before" : "After"),
      }
      : b
  );
}
