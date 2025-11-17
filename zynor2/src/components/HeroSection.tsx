"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const PURPLE = "#6c1898";

// replace with your real hero images
const slideBgImages = [
  "/images/slider1.avif",
  "/images/slider2.jpg",
  "/images/slider3.jpeg",
];

type Slide = {
  badge: string;
  heading: string;
  desc: string;
  primaryCta: string;
  secondaryCta: string;
};

const slides: Slide[] = [
  {
    badge: "Software Solutions",
    heading: "Transform Your Business with Custom Software",
    desc: "We deliver innovative software solutions that help businesses grow and succeed. From web applications to mobile apps, we have the expertise to bring your vision to life.",
    primaryCta: "Request Demo",
    secondaryCta: "Explore Our Work",
  },
  {
    badge: "Our Services",
    heading: "With Zynor Experts, Everything Is Easier",
    desc: "Zynor is a professional software house delivering cutting-edge solutions for businesses worldwide. We specialize in custom software development, web applications, and IT consulting services.",
    primaryCta: "Request Demo",
    secondaryCta: "What's Zynor?",
  },
  {
    badge: "Quality Assured",
    heading: "Get the Best Results for Your Business",
    desc: "Our team of experienced developers and designers work closely with you to ensure every project exceeds expectations. We pride ourselves on delivering high-quality, scalable solutions.",
    primaryCta: "Request Demo",
    secondaryCta: "Learn More",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden flex items-center min-h-[600px] md:min-h-[700px] lg:min-h-[95vh]"
      style={{
        backgroundColor: PURPLE,
        borderBottomRightRadius: "22rem",
      }}
    >
      {/* decorative rings - hidden on mobile */}
      <div className="pointer-events-none absolute left-66 top-24 h-84 w-84 opacity-60 hidden lg:block">
        <div className="relative w-full h-full rounded-full border border-white/30">
          <div className="absolute top-8 left-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] rounded-full border border-white" />
        </div>
      </div>
      <div className="pointer-events-none absolute right-70 top-0 h-94 w-94 opacity-60 hidden lg:block">
        <div className="relative w-full h-full rounded-full border border-white/30">
          <div className="absolute top-8 left-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] rounded-full border border-white" />
        </div>
      </div>

      {/* main content container */}
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="relative flex w-full items-center justify-end">
          {/* arrows column (pulled in close to slider now) - hidden on small mobile */}
          <div className="hidden sm:flex absolute -left-2 flex-col gap-4 sm:-left-2 md:-left-1 md:bottom-0 z-20">
            <button
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-800 shadow-xl ring-1 ring-black/10 hover:bg-white/90 active:scale-[0.97] transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-800 shadow-xl ring-1 ring-black/10 hover:bg-white/90 active:scale-[0.97] transition"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* BIG slider frame */}
          <div
            className="
    relative 
    ml-auto
    rounded-xl md:rounded-2xl
    overflow-hidden 
    shadow-[0_30px_80px_rgba(0,0,0,0.7)] md:shadow-[0_50px_120px_rgba(0,0,0,0.7)]
    w-full md:w-[90%]
    max-w-[1100px]
  "
          >

            {/* viewport */}
            <div className="relative overflow-hidden h-full w-full">
              {/* slides wrapper */}
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="
    w-full
    shrink-0
    relative
    min-h-[420px]
    sm:min-h-[460px]
    md:min-h-[500px]
    lg:min-h-[540px]
    xl:min-h-[580px]
  "
                  >

                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slideBgImages[i] || "/placeholder-slide.jpg"})`,
                      }}
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Text block */}
                    <div className="relative z-10 flex h-full w-full items-end p-8 sm:p-10 md:p-12 lg:p-16">
                      <div className="max-w-xl text-white">
                        {/* badge */}
                        <span className="inline-block rounded-md bg-[rgba(108,24,152,0.9)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
                          {slide.badge}
                        </span>

                        {/* heading */}
                        <h2 className="mt-6 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                          {slide.heading}
                        </h2>

                        {/* description */}
                        <p className="mt-6 text-[14px] leading-relaxed text-white/85 sm:text-[15px] sm:leading-relaxed">
                          {slide.desc}
                        </p>

                        {/* buttons row */}
                        <div className="mt-8 flex flex-col flex-wrap items-start gap-4 text-[13px] font-medium text-white sm:flex-row sm:items-center">
                          {/* primary CTA */}
                          <button className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-gray-800 shadow-[0_20px_32px_rgba(0,0,0,0.4)] hover:opacity-90 active:scale-[0.98] transition">
                            {slide.primaryCta}
                          </button>

                         
                        </div>

                        {/* dots */}
                        <div className="mt-10 flex items-center gap-2">
                          {slides.map((_, dotIndex) => {
                            const active = dotIndex === index;
                            return (
                              <button
                                key={dotIndex}
                                onClick={() => setIndex(dotIndex)}
                                className="h-3 w-3 rounded-full transition-all"
                                style={{
                                  backgroundColor: active
                                    ? "#ffffff"
                                    : "rgba(255,255,255,0.4)",
                                  boxShadow: active
                                    ? "0 8px 16px rgba(0,0,0,0.4)"
                                    : "none",
                                  width: active ? "14px" : "12px",
                                  height: active ? "14px" : "12px",
                                }}
                                aria-label={`Go to slide ${dotIndex + 1}`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {/* /text block */}
                  </div>
                ))}
              </div>
            </div>
            {/* /viewport */}
          </div>
          {/* /BIG slider frame */}
        </div>
      </div>
    </section>
  );
}
