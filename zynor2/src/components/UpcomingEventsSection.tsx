"use client";

import { ChevronRight } from "lucide-react";

type EventItem = {
  tag: string;
  title: string;
  date: string;
  duration: string;
 
  img: string;
};

const events: EventItem[] = [
  {
    tag: "CRM",
    title: "Customer Management System",
    date: "16 Feb 2036",
    duration: "22 Hours",
    
    img: "/images/projects/web10.png",
  },
  {
    tag: "Saas Product",
    title: "Charm ",
    date: "24 Feb 2036",
    duration: "30 Hours",

   img: "/images/projects/web9.png",
  },
  {
    tag: "FULL STACK",
    title: "Edenz Consultancy Portal",
    date: "12 Mar 2036",
    duration: "48 Hours",
   
   img: "/images/projects/web11.png",
  },
];

export default function UpcomingEventsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 flex justify-center">
      <div className="w-full max-w-[1400px] px-4">
        {/* heading */}
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.1em] text-[#6c1898] uppercase">
            In Progress
          </div>
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px] font-semibold text-[#1a1a1a] leading-tight mt-2 md:mt-3">
            Ongoing Projects
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {events.map((ev, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-stretch gap-0"
            >
              {/* left image */}
              <div className="md:pl-6">
                <div className="w-full md:w-[200px] lg:w-[220px] h-[160px] sm:h-[180px] rounded-lg md:rounded-[10px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-gray-200">
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* content card */}
              <div className="relative flex-1 bg-[#f6f4ff] rounded-2xl md:rounded-[20px] md:-ml-6 pl-4 sm:pl-5 md:pl-6 pr-[70px] sm:pr-[80px] md:pr-[90px] py-6 sm:py-7 md:py-8 md:min-h-[180px] flex flex-col justify-center shadow-[0_30px_60px_rgba(0,0,0,0.03)]">
                {/* row 1: tag + detail columns */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 lg:gap-10">
                  {/* left block */}
                  <div className="flex-1 min-w-[180px] md:min-w-[200px]">
                    <div className="inline-block text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-[#6c1898] bg-white rounded-full px-2.5 md:px-3 py-1 border border-[#6c1898]/10 shadow-[0_10px_20px_rgba(108,24,152,0.12)]">
                      {ev.tag}
                    </div>

                    <h3 className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] font-semibold text-[#1a1a1a] mt-3 md:mt-4">
                      {ev.title}
                    </h3>
                  </div>

                  {/* date */}
                  <div className="text-sm text-[#1a1a1a] min-w-[120px] md:min-w-[140px]">
                    <div className="text-[12px] md:text-[13px] text-[#555] font-medium">
                      Date:
                    </div>
                    <div className="text-[13px] md:text-[14px] font-semibold text-[#6c1898] md:text-[#1a1a1a] md:font-normal md:text-[14px]">
                      <span className="md:text-[#6c1898] md:font-semibold">
                        {ev.date}
                      </span>
                    </div>
                  </div>

                  {/* duration */}
                  <div className="text-sm text-[#1a1a1a] min-w-[120px] md:min-w-[140px]">
                    <div className="text-[12px] md:text-[13px] text-[#555] font-medium">
                      Duration:
                    </div>
                    <div className="text-[13px] md:text-[14px] font-semibold text-[#6c1898]">
                      {ev.duration}
                    </div>
                  </div>

                 
                </div>

                {/* arrow bubble on right */}
                <button
                  className="absolute top-1/2 -translate-y-1/2 right-0 w-[70px] sm:w-[80px] md:w-[88px] h-[100px] sm:h-[110px] md:h-[120px] bg-[#6c1898] text-white rounded-l-full flex items-center justify-center shadow-[0_30px_60px_rgba(108,24,152,0.4)] hover:opacity-90 transition"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
