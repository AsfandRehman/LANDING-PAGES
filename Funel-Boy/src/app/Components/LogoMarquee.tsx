"use client";
import Image from "next/image";

export default function LogoMarquee() {
  const LOGOS = [
    {
      src: "/images/truscope.png",
      alt: "Airbnb",
      width: 140,
      height: 60,
      mobileWidth: 100,
      mobileHeight: 40,
    },
    {
      src: "/images/Dr.jhon.png",
      alt: "Amazon",
      width: 180,
      height: 80,
      mobileWidth: 120,
      mobileHeight: 50,
    },
    {
      src: "/images/RBB.png",
      alt: "FedEx",
      width: 120,
      height: 50,
      mobileWidth: 90,
      mobileHeight: 40,
    },
    {
      src: "/images/nobtimed.png",
      alt: "Google",
      width: 160,
      height: 60,
      mobileWidth: 110,
      mobileHeight: 45,
    },
    {
      src: "/images/houser1.png",
      alt: "Microsoft",
      width: 150,
      height: 50,
      mobileWidth: 100,
      mobileHeight: 40,
    },
    {
      src: "/images/saim.png",
      alt: "Microsoft",
      width: 150,
      height: 50,
      mobileWidth: 100,
      mobileHeight: 40,
    },
    {
      src: "/images/scale.png",
      alt: "Microsoft",
      width: 130,
      height: 30,
      mobileWidth: 100,
      mobileHeight: 40,
    },
    {
      src: "/images/victoria.png",
      alt: "Microsoft",
      width: 170,
      height: 50,
      mobileWidth: 100,
      mobileHeight: 40,
    },
    {
      src: "/images/PRIME.png",
      alt: "Microsoft",
      width: 130,
      height: 30,
      mobileWidth: 100,
      mobileHeight: 40,
    },
    {
      src: "/images/CURVE.png",
      alt: "Microsoft",
      width: 150,
      height: 20,
      mobileWidth: 100,
      mobileHeight: 40,
    },
  ];

  // duplicate for a seamless loop
  const LOOP = [...LOGOS, ...LOGOS];

  return (
    <section className="relative overflow-hidden py-8 pt-20">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="fade-mask relative overflow-hidden">
          <div className="marquee-ltr [--duration:30s] hover:[animation-play-state:paused]">
            {LOOP.map((l, i) => (
              <div
                key={i}
                className="mr-16 md:mr-28 inline-flex shrink-0 opacity-70 transition hover:opacity-100"
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={l.width}
                  height={l.height}
                  className="h-auto w-auto md:h-auto md:w-auto"
                  sizes={`(max-width: 768px) ${l.mobileWidth}px, ${l.width}px`}
                  style={{
                    maxHeight: "100%",
                    height: "auto",
                    width: "auto",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* component-scoped CSS */}
      <style jsx>{`
        .marquee-ltr {
          display: inline-flex;
          width: max-content;
          animation: scroll-ltr var(--duration, 30s) linear infinite;
          transform: translateX(-50%);
        }
        @keyframes scroll-ltr {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
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
          .marquee-ltr {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
