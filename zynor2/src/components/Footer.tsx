"use client";

export default function Footer() {
  return (
    <footer
      className="relative bottom-0 left-0 w-full text-center text-white overflow-hidden rounded-t-[160px]"
      style={{ backgroundColor: "#6c1898" }}
    >
      {/* Decorative circles on top-left */}
      <div className="absolute -top-40 left-0 opacity-25 pointer-events-none select-none">
        <div className="relative w-[360px] h-[360px] rounded-full border border-white/25">
          <div className="absolute top-10 left-10 w-[240px] h-[240px] rounded-full border border-white/25"></div>
          <div className="absolute top-20 left-20 w-[120px] h-[120px] rounded-full border border-white/25"></div>
        </div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 py-10 md:py-12 px-6 md:px-10">
        <p className="text-[13px] md:text-[14px] leading-relaxed text-white/90">
          Copyright © 2025{" "}
          <span className="font-semibold">Zynor</span>. All rights reserved. &nbsp;
          <span className="block md:inline">
            Professional Software Development & IT Solutions
          </span>
        </p>
      </div>
    </footer>
  );
}
