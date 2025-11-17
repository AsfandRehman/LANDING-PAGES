// components/CalendlyCTA.tsx
"use client";

import Script from "next/script";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

const BRAND = "#3354A5";
const CALENDLY_URL =
  "https://calendly.com/dom-stratoscontent/30min?embed_domain=book.stratoscontent.com&embed_type=Inline&hide_gdpr_banner=1";

type CalendlyCTAProps = {
  text?: string;
  url?: string;
  center?: boolean;
  className?: string;
  brandColor?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
};

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="4"
        width="18"
        height="17"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="15" r="1.3" fill="currentColor" />
      <circle cx="8" cy="15" r="1.3" fill="currentColor" />
      <circle cx="16" cy="15" r="1.3" fill="currentColor" />
    </svg>
  );
}

export default function CalendlyCTA({
  text = "Book a free Call",
  url = CALENDLY_URL,
  center = true,
  className,
  brandColor = BRAND,
  onClick,
  size = "lg",
  icon,
}: CalendlyCTAProps) {
  const [inlineOpen, setInlineOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (typeof e.data !== "object" || !e.data?.event) return;
      if (e.data.event === "calendly.ui.opened") {
        document.documentElement.classList.add("cal-blur");
      }
      if (e.data.event === "calendly.ui.closed") {
        document.documentElement.classList.remove("cal-blur");
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInlineOpen(false);
        document.documentElement.classList.remove("cal-blur");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openCalendly = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      onClick?.();

      if (window.Calendly?.initPopupWidget) {
        document.documentElement.classList.add("cal-blur");
        const popupUrl = url.split("?")[0];
        window.Calendly.initPopupWidget({ url: popupUrl });
        return;
      }

      document.documentElement.classList.add("cal-blur");
      setInlineOpen(true);
    },
    [onClick, url]
  );

  const closeInline = useCallback(() => {
    setInlineOpen(false);
    document.documentElement.classList.remove("cal-blur");
  }, []);

  const sizeClasses = useMemo(() => {
    switch (size) {
      case "sm":
        return "h-10 px-4 text-sm";
      case "md":
        return "h-11 px-5 text-[15px]";
      case "lg":
        return "h-12 px-6 text-base";
      case "xl":
        return "h-14 px-7 text-lg";
      default:
        return "h-12 px-6 text-base";
    }
  }, [size]);

  const btnClasses = cx(
    "group inline-flex items-center justify-center gap-2 rounded-full",
    "font-semibold tracking-wide text-white",
    "relative overflow-hidden", // for shimmer
    "transition-all duration-300 ease-out hover:translate-y-[-1px] active:translate-y-0",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30",
    sizeClasses,
    className
  );

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />

      <div
        className={cx(center && "w-full flex items-center justify-center")}
        style={
          {
            ["--brand" as string]: brandColor,
          } as React.CSSProperties
        }
      >
        <button
          onClick={openCalendly}
          className={`${btnClasses} btn-fill-shine`}
          aria-label={text}
        >
          {/* Just the icon (no circle background now) */}
          {icon ?? (
            <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          )}

          <span>{text}</span>

          <span
            className="translate-x-0 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>

      {inlineOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === overlayRef.current) closeInline();
          }}
        >
          <div className="relative w-[94vw] max-w-5xl rounded-2xl border border-neutral-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.25)]">
            <button
              aria-label="Close"
              onClick={closeInline}
              className="absolute right-3 top-3 rounded-full bg-black/5 px-3 py-1 text-sm text-neutral-700 hover:bg-black/10"
            >
              ✕
            </button>
            <div className="h-[75vh] min-h-[560px]">
              <iframe
                title="Book a 30 Minute Meeting – Calendly"
                src={url}
                className="h-full w-full rounded-2xl"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="pb-3 pt-2 text-center text-xs text-neutral-500">
              Scheduling provided by Calendly.
            </p>
          </div>
        </div>
      )}

      {/* Shimmer fill styles */}
      <style jsx global>{`
        @keyframes fill-shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .btn-fill-shine {
          background: linear-gradient(
            110deg,
            var(--brand) 0%,
            var(--brand) 40%,
            #4a67c5 50%,
            var(--brand) 60%,
            var(--brand) 100%
          );
          background-size: 200% 100%;
          animation: fill-shine 2.8s linear infinite; /* always animate */
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22),
            0 0 24px rgba(51, 84, 165, 0.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .btn-fill-shine {
            animation: none !important;
            background-position: 0 0 !important;
          }
        }
      `}</style>
    </>
  );
}
