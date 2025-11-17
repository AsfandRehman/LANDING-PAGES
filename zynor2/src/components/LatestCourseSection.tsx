"use client";

import { useState } from "react";

const ACCENT = "#6c1898";

type CourseCategory = "Webdesign" | "Funnels" | "Portals";

type Course = {
  id: number;
  category: "webdesign" | "funnels" | "portals";
  
  title: string;
  price: number;
  image: string;
};

const courses: Course[] = [
  {
    id: 1,
    category: "funnels",
    title: "The Ultimate Conversion Funnel — Turn Visitors Into Clients",
    price: 160,
    image: "/images/projects/web1.png",
  },
  {
    id: 2,
    category: "webdesign",
    title: "Award-Winning Portfolio Site — Where Creativity Meets Precision",
    price: 340,
    image: "/images/projects/web2.png",
  },
  {
    id: 4,
    category: "webdesign",
    title: "Modern Business Website — Designed for Impact and Clarity",
    price: 450,
    image: "/images/projects/web4.png",
  },
  {
    id: 5,
    category: "webdesign",
    title: "Nextjs Experience — A Fully Custom, High-Speed Site Build",
    price: 320,
    image: "/images/projects/web5.png",
  },
  {
    id: 6,
    category: "webdesign",
    title: "Full-Stack Brand Presence — Seamless UI, Built to Convert",
    price: 240,
    image: "/images/projects/web6.png",
  },
  {
    id: 7,
    category: "webdesign",
    title: "Next-Gen Web Interface — Minimal, Fast, and Immersive",
    price: 160,
    image: "/images/projects/web7.png",
  },
  {
    id: 8,
    category: "webdesign",
    title: "Elegant Web Redesign — Elevating Digital First Impressions",
    price: 340,
    image: "/images/projects/web8.png",
  },
  {
    id: 14,
    category: "portals",
    title: "Clean Simple Portal Design",
    price: 450,
    image: "/images/projects/web13.png",
  },
  {
    id: 9,
    category: "portals",
    title: "Client Access Portal — Streamlined, Secure, and Scalable",
    price: 640,
    image: "/images/projects/web9.png",
  },
  {
    id: 10,
    category: "portals",
    title: "Business Management Dashboard — Control Everything in One Place",
    price: 450,
    image: "/images/projects/web10.png",
  },
   {
    id: 13,
    category: "portals",
    title: "Control Everything in One Place",
    price: 450,
    image: "/images/projects/web12.webp",
  },
  {
    id: 11,
    category: "portals",
    title: "Learning Portal — Empower Teams Through Smart Education Systems",
    price: 450,
    image: "/images/projects/web11.png",
  },
    {
    id: 12,
    category: "portals",
    title: "Streamlined, Secure, and Scalable Portal",
    price: 640,
    image: "/images/projects/web12.jpg",
  },
 
  
];


const filterTabs: CourseCategory[] = [

  "Webdesign",
  "Funnels",
  "Portals",
];

export default function LatestCoursesSection() {
  const [active, setActive] = useState<CourseCategory>("Webdesign");

  const filtered = courses.filter((c) => {
    
    if (active === "Webdesign") return c.category === "webdesign";
    if (active === "Funnels") return c.category === "funnels";
    if (active === "Portals") return c.category === "portals";
    return true;
  });

  return (
    <section className="w-full bg-white py-12 md:py-16 flex flex-col items-center">
      {/* small label */}
      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--accent)]"
        style={
          {
            "--accent": ACCENT,
          } as React.CSSProperties
        }
      >
        Our Portfolio
      </div>

      {/* main heading */}
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1a1a1a] mt-2 px-4 text-center">
        Latest Work
      </h2>

      {/* filter pill bar */}
      <div className="mt-6 md:mt-8 bg-[#f3f2fa] rounded-full px-3 md:px-4 py-2 flex flex-wrap justify-center gap-2 text-[12px] md:text-[13px] font-medium text-[#1a1a1a] shadow-sm">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 md:px-4 py-2 rounded-full transition whitespace-nowrap ${
              active === tab
                ? "bg-white shadow-sm"
                : "bg-transparent text-[#4b4b4b]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* cards grid */}
      <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full px-4 md:px-6">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-[#edeaf9] rounded-xl overflow-hidden shadow-sm border border-transparent hover:shadow-lg transition">
      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        {/* category badge (top-left) */}
        <div
          className="absolute top-3 left-3 md:top-4 md:left-4 text-[10px] md:text-[11px] font-semibold uppercase tracking-wide bg-white rounded-full px-2.5 md:px-3 py-1 text-[color:var(--accent)]"
          style={
            {
              "--accent": ACCENT,
            } as React.CSSProperties
          }
        >
          {course.category}
        </div>

      </div>

      {/* bottom content */}
      <div className="px-4 md:px-5 py-4 md:py-5 text-left">
        
        <div className="text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#1a1a1a] leading-snug mt-1">
          {course.title}
        </div>
      </div>
    </div>
  );
}
