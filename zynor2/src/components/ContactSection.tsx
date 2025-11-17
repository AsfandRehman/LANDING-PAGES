"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

const ACCENT = "#6c1898";

export default function ContactSection() {
  // example local state for form (optional)
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-54 flex justify-center">
      {/* LIGHT BACK LAYER (left block) - hidden on mobile */}
      <div
        className={`
          hidden lg:block
          absolute left-0 top-1/2 -translate-y-1/2
          z-0
          shadow-sm
          py-10 md:py-14 lg:py-16
          pl-6 md:pl-10 lg:pl-16
          pr-6 md:pr-10 lg:pr-16
          max-w-[1300px] w-[90vw]
          rounded-r-[60px] md:rounded-r-[120px] lg:rounded-r-[188px] rounded-l-none
        `}
        style={{
          backgroundColor: "rgba(108,24,152,0.07)", // light tint of purple
        }}
      >
        {/* LEFT CONTENT (text + offer box) */}
        <div className="max-w-xl">
          {/* eyebrow */}
          <p
            className="text-[13px] font-semibold tracking-wide uppercase mb-4"
            style={{ color: ACCENT }}
          >
            Contact Us
          </p>

          {/* heading */}
          <h2 className="text-[28px] leading-[1.2] md:text-[32px] font-semibold text-black mb-6">
            Feel Free To Contact Us
            <br />
            Anytime
          </h2>

          {/* paragraph */}
          <p className="text-[15px] leading-relaxed text-[#4b4b4b] mb-8 max-w-[520px]">
            Have a project in mind? We'd love to hear from you! Our team is ready to 
            discuss your requirements and provide a customized solution that fits your needs. 
            Let's build something amazing together.
          </p>

          {/* OFFER CARD */}
          <div className="bg-white rounded-xl md:rounded-[12px] shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col sm:flex-row items-stretch sm:items-center overflow-hidden max-w-[520px]">
            {/* left purple badge */}
            <div
              className="flex flex-col justify-center items-center text-white px-5 py-5 sm:py-6 md:py-8 min-w-[100px] sm:min-w-[110px] relative"
              style={{ backgroundColor: ACCENT, borderRadius: "0 999px 999px 0" }}
            >
              <div className="text-[10px] md:text-[11px] uppercase font-semibold leading-none opacity-90">
                Free
              </div>
              <div className="text-[18px] md:text-[20px] font-bold leading-none">
                Quote
              </div>
            </div>

            {/* middle info */}
            <div className="flex-1 px-4 md:px-5 py-5 sm:py-6 md:py-8 text-left">
              <div className="text-[10px] md:text-[11px] uppercase text-[#4b4b4b] font-semibold tracking-wide mb-1">
                Response:{" "}
                <span className="text-[#6c1898] font-semibold">
                  Within 24 Hours
                </span>
              </div>
              <div className="text-[14px] md:text-[16px] font-semibold text-[#1a1a1a] leading-snug">
                Get a{" "}
                <span className="text-[#6c1898] font-bold">Free Consultation!</span>
              </div>
            </div>

            {/* arrow pill */}
            <button
              className="flex items-center justify-center mx-4 md:mx-5 my-4 md:my-5 w-9 h-9 md:w-10 md:h-10 rounded-full text-white shadow-[0_18px_30px_rgba(108,24,152,0.4)]"
              style={{ backgroundColor: ACCENT }}
            >
              <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT WRAPPER to position the dark form card on the right */}
      <div className="relative z-10 w-full max-w-[1400px] px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-10">
        {/* LEFT CONTENT - visible on mobile, spacer on lg */}
        <div className="flex-1 lg:max-w-[50%]">
          <div className="lg:hidden mb-8">
            {/* eyebrow */}
            <p
              className="text-[12px] md:text-[13px] font-semibold tracking-wide uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Contact Us
            </p>

            {/* heading */}
            <h2 className="text-[24px] sm:text-[26px] md:text-[28px] leading-[1.2] font-semibold text-black mb-4">
              Feel Free To Contact Us
              <br />
              Anytime
            </h2>

            {/* paragraph */}
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#4b4b4b] mb-6">
              Have a project in mind? We'd love to hear from you! Our team is ready to 
              discuss your requirements and provide a customized solution that fits your needs. 
              Let's build something amazing together.
            </p>

            {/* OFFER CARD */}
            <div className="bg-white rounded-xl md:rounded-[12px] shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col sm:flex-row items-stretch sm:items-center overflow-hidden">
              {/* left purple badge */}
              <div
                className="flex flex-col justify-center items-center text-white px-5 py-5 sm:py-6 md:py-8 min-w-[100px] sm:min-w-[110px] relative"
                style={{ backgroundColor: ACCENT, borderRadius: "0 999px 999px 0" }}
              >
                <div className="text-[10px] md:text-[11px] uppercase font-semibold leading-none opacity-90">
                  Free
                </div>
                <div className="text-[18px] md:text-[20px] font-bold leading-none">
                  Quote
                </div>
              </div>

              {/* middle info */}
              <div className="flex-1 px-4 md:px-5 py-5 sm:py-6 md:py-8 text-left">
                <div className="text-[10px] md:text-[11px] uppercase text-[#4b4b4b] font-semibold tracking-wide mb-1">
                  Response:{" "}
                  <span className="text-[#6c1898] font-semibold">
                    Within 24 Hours
                  </span>
                </div>
                <div className="text-[14px] md:text-[16px] font-semibold text-[#1a1a1a] leading-snug">
                  Get a{" "}
                  <span className="text-[#6c1898] font-bold">Free Consultation!</span>
                </div>
              </div>

              {/* arrow pill */}
              <button
                className="flex items-center justify-center mx-4 md:mx-5 my-4 md:my-5 w-9 h-9 md:w-10 md:h-10 rounded-full text-white shadow-[0_18px_30px_rgba(108,24,152,0.4)]"
                style={{ backgroundColor: ACCENT }}
              >
                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* DARK CARD (form) */}
        <div className="flex-1 lg:max-w-[50%]">
          <div
            className="relative rounded-2xl md:rounded-[20px] px-5 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10 lg:py-12 shadow-[0_40px_80px_rgba(0,0,0,0.25)] text-white overflow-hidden"
            style={{ backgroundColor: ACCENT }}
          >
            {/* decorative circles */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -bottom-20 right-0 w-[260px] h-[260px] rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -bottom-10 right-4 w-[180px] h-[180px] rounded-full border border-white/15" />

            {/* FORM FIELDS */}
            <form
              className="relative flex flex-col gap-4 md:gap-5 max-w-[600px]"
              onSubmit={(e) => {
                e.preventDefault();
                // handle submit here
              }}
            >
              {/* Name */}
              <input
                className="w-full rounded-full bg-white/15 border border-white/20 px-4 md:px-5 py-3 md:py-4 text-[13px] md:text-[14px] text-white placeholder-white/70 outline-none"
                placeholder="Your Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* Email */}
              <input
                className="w-full rounded-full bg-white/15 border border-white/20 px-4 md:px-5 py-3 md:py-4 text-[13px] md:text-[14px] text-white placeholder-white/70 outline-none"
                placeholder="Your E-mail..."
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />

              {/* Message */}
              <textarea
                className="w-full rounded-2xl md:rounded-[16px] bg-white/15 border border-white/20 px-4 md:px-5 py-3 md:py-4 text-[13px] md:text-[14px] text-white placeholder-white/70 outline-none min-h-[100px] md:min-h-[110px] resize-none"
                placeholder="Your Message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />

              {/* Button */}
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white text-[#1a1a1a] text-[13px] md:text-[14px] font-semibold px-4 md:px-5 py-2.5 md:py-3 shadow-[0_20px_30px_rgba(0,0,0,0.2)] hover:opacity-90 transition"
              >
                Send Message Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
