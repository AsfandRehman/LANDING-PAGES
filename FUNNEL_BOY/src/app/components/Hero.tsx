  "use client";

  import Image from "next/image";
  import React from "react";


type HeroProps = {
  blobSrc?: string;
  fabIconSrc?: string;
  onFabClick?: () => void;
};

export default function Hero({
  blobSrc = "/blob.png",
  fabIconSrc = "/icon-pencil.svg",
  onFabClick,
}: HeroProps) {
  const studioRef = React.useRef<HTMLHeadingElement>(null);
  const [studioWidth, setStudioWidth] = React.useState<number | null>(null);

  React.useLayoutEffect(() => {
    const measure = () => {
      if (studioRef.current) {
        const w = studioRef.current.getBoundingClientRect().width;
        setStudioWidth(w);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
    return (
  <section className="relative  min-h-screen overflow-hidden bg-transparent">
      

        {/* CONTENT */}
        <div className="relative h-full px-8 md:px-16 lg:px-24 py-4 md:py-10 mt-5">
          {/* top-left micro brand */}
          <div className="absolute top-8 left-24 hidden sm:block">
            <span className="text-[10px] tracking-[0.28em] text-black uppercase">
              BUZZWORTHY STUDIO
            </span>
          </div>

          {/* top-center tagline */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] text-black uppercase">WE</span>
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="absolute inset-0 rounded-full ring-2 ring-white/40" />
            </span>
            <span className="text-[10px] tracking-[0.3em] text-black uppercase">
              FEED AND FUEL GROWTH
            </span>
          </div>

          {/* bottom-center scroll hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <span className="text-[10px] tracking-[0.3em] text-red/50">( SCROLL )</span>
          </div>

        

          {/* Main grid */}
{/* Main grid */}
   {/* Main grid */}
        <div className="grid h-full grid-cols-12 items-start gap-x-8 md:gap-x-14 pt-24 md:pt-28">
          {/* LEFT */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-start">
            <h1 className="uppercase font-black text-black text-left text-[clamp(96px,10.5vw,220px)] tracking-[0.01em] leading-[0.82] origin-bottom [transform:scaleY(1.2)]">
              DIGITAL
            </h1>

            <div className="relative mt-6 md:mt-8 w-[min(42vw,520px)] aspect-square">
              <Image src={blobSrc} alt="Hero visual" fill className="object-contain opacity-90" priority />
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 md:col-span-6 flex flex-col items-end justify-start gap-y-[clamp(18px,2.2vw,44px)]">
            <h1 className="uppercase font-black text-black text-right text-[clamp(96px,10.5vw,220px)] tracking-[0.01em] leading-[0.82] origin-bottom [transform:scaleY(1.2)]">
              GROWTH
            </h1>

            {/* STUDIO (measured) */}
            <h1
              ref={studioRef}
              className="uppercase font-black text-black text-right text-[clamp(96px,10.5vw,220px)] tracking-[0.01em] leading-[0.82] origin-bottom [transform:scaleY(1.2)]"
            >
              STUDIO
            </h1>

            {/* CTA with width = STUDIO width */}
            <div className="mt-8 self-end" style={studioWidth ? { width: studioWidth } : undefined}>
              <div className="flex items-center justify-between gap-8 rounded-xl border border-black/15 bg-white/5 px-6 py-4 w-full">
                <span className="text-xs tracking-[0.25em] text-black/85 uppercase">CONNECT WITH US</span>
                <span className="relative inline-flex items-center">
                  <span className="h-px w-16 bg-black/40" />
                  <svg viewBox="0 0 24 24" className="h-4 w-4 -ml-1 opacity-80" fill="none">
                    <path d="M7 5l7 7-7 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <button className="text-xs tracking-[0.25em] text-black/85 uppercase hover:text-red transition-colors">
                  AND GROW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}