"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ACCENT = "#6c1898";

type Testimonial = {
  quoteLines: string[];
  role: string;
  name: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quoteLines: [
      '"Zynor delivered exceptional results for our project.',
      "Their team's expertise and professionalism exceeded our expectations.",
      "We couldn't be happier with the final product!\"",
    ],
    role: "CEO, TechCorp",
    name: "Claude David",
    avatar:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quoteLines: [
      '"Working with Zynor was an absolute pleasure. Professional, efficient, and innovative."',
      "I'd 100% recommend them to anyone looking for quality software development.",
    ],
    role: "CTO, Digital Solutions",
    name: "Amjad Khan",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };
  const next = () => {
    setIndex((i) =>
      i === testimonials.length ? 0 : (i + 1) % testimonials.length
    );
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-24">
      {/* LIGHT BACK LAYER - keep it (desktop only) */}
  {/* DESKTOP LIGHT BACK LAYER (lg+) */}
<div
  className={`
    hidden lg:flex
    absolute top-1/2 -translate-y-1/2 right-0 z-0
    shadow-sm
    py-16 lg:py-20
    pr-10 lg:pr-16
    pl-6 xl:pl-20  /* was pl-10 lg:pl-16 */
    max-w-[1300px] w-[90vw]
    rounded-l-[120px] lg:rounded-l-[999px] rounded-r-none
    items-start
  `}
  style={{ backgroundColor: "rgba(108,24,152,0.07)" }}
>
  {/* spacer adjusted */}
  <div className="w-[560px] xl:w-[620px] min-h-[460px] shrink-0" />
  <div className="max-w-xl pl-8 xl:pl-12">
          <p
            className="text-[13px] font-semibold tracking-wide uppercase mb-4"
            style={{ color: ACCENT }}
          >
            TESTIMONIALS
          </p>

          <h2 className="text-[32px] leading-[1.2] font-semibold text-black mb-6">
            What They Say About Us?
          </h2>

          <p className="text-[15px] leading-relaxed text-[#4b4b4b] mb-8">
            Our clients trust us to deliver exceptional software solutions.
            From startups to enterprises, we&apos;ve helped businesses
            transform their ideas into successful digital products.
          </p>
        </div>
      </div>

      {/* FOREGROUND CONTENT ROW */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 flex flex-col md:flex-row items-start gap-8 md:gap-10">
        {/* LEFT PURPLE CARD */}
   <div
  className="relative w-full md:w-[560px] xl:w-[620px] max-w-[620px] min-h-[300px] sm:min-h-[320px] md:min-h-[350px] 
  rounded-2xl md:rounded-[24px] lg:rounded-[28px] xl:rounded-[32px] 
  px-6 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-12 md:py-24 
  shadow-lg text-white md:ml-0 xl:ml-10"
  style={{ backgroundColor: ACCENT }}
>
          {/* quote text */}
          <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed italic font-light text-white/90 space-y-3 md:space-y-4">
            {current.quoteLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* avatar + name/role */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-5 mt-8 md:mt-10">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-white/30 shrink-0">
              <Image
                src={current.avatar}
                alt={current.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="text-[12px] md:text-[13px] text-white/80 font-normal leading-tight">
                {current.role}
              </div>
              <div className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-tight text-white">
                {current.name}
              </div>
            </div>
          </div>

          {/* NAV BUTTONS */}
          <div className="hidden md:flex flex-col gap-4 absolute top-1/2 -translate-y-1/2 right-[-28px]">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white text-[#1a1a1a] shadow-lg flex items-center justify-center border border-black/5"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white text-[#1a1a1a] shadow-lg flex items-center justify-center border border-black/5"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MOBILE TEXT (under card). desktop still uses bg-layer text */}
        <div className="md:hidden w-full mt-6">
          <p
            className="text-[12px] font-semibold tracking-wide uppercase mb-3"
            style={{ color: ACCENT }}
          >
            TESTIMONIALS
          </p>

          <h2 className="text-[22px] sm:text-[24px] leading-[1.2] font-semibold text-black mb-4">
            What They Say About Us?
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#4b4b4b]">
            Our clients trust us to deliver exceptional software solutions.
            From startups to enterprises, we&apos;ve helped businesses transform
            their ideas into successful digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
