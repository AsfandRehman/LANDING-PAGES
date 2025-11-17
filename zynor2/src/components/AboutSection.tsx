"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ACCENT = "#6c1898";

type QA = {
  q: string;
  a: string;
};

const faqs: QA[] = [
  {
    q: "What makes Zynor different?",
    a: "We combine technical excellence with deep industry understanding. Our team doesn't just code—we craft solutions that drive real business value and help your company grow.",
  },
  {
    q: "How do we ensure quality?",
    a: "Every project goes through rigorous testing, code reviews, and quality assurance. We follow industry best practices and maintain high standards throughout the development lifecycle.",
  },
  {
    q: "Why choose Zynor as your tech partner?",
    a: "With years of experience, proven track record, and dedication to client success, we deliver solutions that exceed expectations. Our agile approach ensures flexibility and transparency at every step.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Absolutely! We believe in long-term partnerships. Our support doesn't end at deployment—we're here to help you scale, optimize, and evolve your software as your business grows.",
  },
];

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className={`
        relative w-full bg-white
        py-16 md:py-24
        /* taller on mobile so nothing collides */
        min-h-[800px] md:min-h-[600px] lg:min-h-[500px]
      `}
    >
      {/* LIGHT BACK LAYER */}
      <div
        className={`
          /* mobile/tablet: behave like normal block so it flows in layout */
          relative
          w-[95vw] max-w-[1750px]
          mx-auto
          rounded-l-[40px] md:rounded-l-[120px] lg:rounded-l-[288px]
          rounded-r-none
          shadow-sm
          flex flex-col lg:flex-row
          items-start
          gap-10 lg:gap-16
          px-6 md:px-10 lg:px-16
          py-6 md:py-8 lg:py-10

          /* desktop+: snap to right edge and center vertically */
          lg:absolute
          lg:top-1/2 lg:-translate-y-1/2
          lg:right-0
          lg:w-[92vw]
        `}
        style={{
          backgroundColor: "rgba(108,24,152,0.07)",
        }}
      >
        {/* LEFT COLUMN (FAQ DARK CARD) */}
        <div
          className="w-full max-w-[520px] rounded-2xl md:rounded-[28px] lg:rounded-[32px] shadow-lg flex-shrink-0"
          style={{ backgroundColor: ACCENT }}
        >
          <div className="flex flex-col gap-4 md:gap-6 p-4 md:p-6 lg:p-8">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl bg-white text-left transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-4 text-left px-5 py-5 md:px-6"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-[16px] md:text-[17px] text-black leading-snug">
                        {item.q}
                      </p>

                      {isOpen && (
                        <p className="mt-4 text-[15px] leading-relaxed text-[#404040] pb-1 pr-8">
                          {item.a}
                        </p>
                      )}
                    </div>

                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                      style={{
                        backgroundColor: ACCENT,
                      }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN (ABOUT TEXT) */}
        <div className="max-w-xl flex-1">
          <p
            className="text-[13px] font-semibold tracking-wide mb-4"
            style={{ color: ACCENT }}
          >
            ABOUT US
          </p>

          <h2 className="text-[26px] leading-[1.2] md:text-[32px] font-semibold text-black mb-6">
            What Makes Us The Best
            <br className="hidden md:block" />
            <span className="md:hidden"> Software House?</span>
            <span className="hidden md:inline">{" "}Software House?</span>
          </h2>

          <p className="text-[15px] leading-relaxed text-[#4b4b4b] mb-8">
            We deliver cutting-edge solutions with a focus on innovation,
            quality, and client satisfaction. Our expertise in modern
            technologies, combined with agile methodologies, ensures your
            project is completed on time and exceeds expectations.
          </p>

          <button
            className="inline-block px-6 py-3 rounded-lg text-[14px] font-medium text-white shadow-md"
            style={{
              backgroundColor: ACCENT,
            }}
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
