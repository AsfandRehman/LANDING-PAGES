"use client";

export default function StatsStrip() {
  return (
    <section className="w-full bg-white flex justify-start">
      {/* purple pill connected to LEFT edge (no gap) */}
      <div
        className="relative w-[88%] md:w-[85%] text-white px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24 lg:py-28 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12 overflow-hidden rounded-r-[80px] sm:rounded-r-[120px] md:rounded-r-[160px] lg:rounded-r-[200px] rounded-l-none"
        style={{ backgroundColor: "#6c1898", marginLeft: "0" }}
      >
        {/* decorative circles (top-left) - hidden on mobile */}
        <div className="absolute -top-44 left-12 pointer-events-none select-none opacity-25 hidden lg:block">
          <div className="relative w-[420px] h-[420px] rounded-full border border-white/25">
            <div className="absolute top-12 left-12 w-[300px] h-[300px] rounded-full border border-white/25" />
          </div>
        </div>

        {/* stats */}
        <div className="flex flex-wrap justify-center md:justify-between w-full max-w-6xl z-10 gap-8 md:gap-4">
          <StatBlock value="70+" label="Clients" />
          <StatBlock value="54+" label="Projects Completed" />
          <StatBlock value="15+" label="Employees" />
          <StatBlock value="4+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center min-w-[140px] sm:min-w-[180px] md:min-w-[200px]">
      <div className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-extrabold leading-none tracking-tight">
        {value}
      </div>
      <div className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] font-medium mt-3 md:mt-4 opacity-90">
        {label}
      </div>
    </div>
  );
}
