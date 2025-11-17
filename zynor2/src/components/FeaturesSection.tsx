"use client";

import React from "react";
import {
  Code,
  Laptop,
  Users,
  Globe,
  ShoppingBag,
  Rocket,
  BarChart3,
  Server,
  Megaphone,
  IdCard,
  MapPin,
  UserCircle2,
  Share2,
  Blocks,
  Store,
  FileText,
  Bot,
  Workflow,
  MessageSquare,
  Palette,
  PenTool,
  LayoutTemplate,
} from "lucide-react";

/* ---------- Types ---------- */
type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

/* ---------- Data ---------- */
const features: Feature[] = [
  {
    icon: StarIconFix, // we'll define this below since Star was removed from import
    title: "Personal Branding",
    desc: "Your message, look, and positioning dialed so people remember you instantly.",
  },
  {
    icon: Share2,
    title: "Social Media Presence",
    desc: "Platform strategy built for attention, not random posts. Grow reach the smart way.",
  },
  {
    icon: Blocks,
    title: "GoHighLevel Systems",
    desc: "All-in-one CRM, funnels, automations and follow-ups without needing custom code.",
  },
  {
    icon: Store,
    title: "Shopify Store Setup",
    desc: "Products, checkout, shipping, and payments ready so you can start selling quickly.",
  },
  {
    icon: FileText,
    title: "WordPress & Blog Sites",
    desc: "Flexible sites for blogs, services, or personal brands that you can update yourself.",
  },
  {
    icon: Users,
    title: "Automated CRMs",
    desc: "Leads captured, followed up, and tracked for you — zero manual chasing.",
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    desc: "AI that can answer questions, qualify leads, and book calls 24/7 in your voice.",
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    desc: "We connect your tools so work moves on its own instead of copy-pasting all day.",
  },
  {
    icon: MessageSquare,
    title: "Smart Website Chat",
    desc: "Branded chat widgets that talk like you and collect leads while you sleep.",
  },
  {
    icon: FileText,
    title: "Airtable Systems",
    desc: "Custom dashboards and databases to organize clients, content, deals, or ops.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Clean, high-end interfaces that feel easy and trustworthy on web and mobile.",
  },
  {
    icon: PenTool,
    title: "Brand & Visual Design",
    desc: "Color, typography, and visuals that look premium and stay consistent everywhere.",
  },
  {
    icon: LayoutTemplate,
    title: "Figma Prototyping",
    desc: "Clickable mockups of sites, dashboards, or apps so you see it before build.",
  },
  {
    icon: Code,
    title: "Custom Development",
    desc: "When you outgrow templates, we write custom code built exactly for you.",
  },
  {
    icon: UserCircle2,
    title: "Dedicated Expert Team",
    desc: "Designers, engineers, and operators working together to ship real results.",
  },
  {
    icon: Globe,
    title: "Websites & Online Presence",
    desc: "Full websites that make you look credible, explain what you do, and bring clients to you 24/7.",
  },
  {
    icon: Rocket,
    title: "High-Converting Landing Pages",
    desc: "Single-focus pages built to drive action — book a call, buy now, or join your list fast.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Online Stores",
    desc: "Sell products or services online with clean product pages, secure checkout, and easy admin.",
  },
  {
    icon: BarChart3,
    title: "Sales Funnels & Lead Capture",
    desc: "Step-by-step funnels that guide visitors from first click to paid client using proven flow.",
  },
  {
    icon: Laptop,
    title: "Business & Company Sites",
    desc: "Professional sites with services, team, trust signals, and clear contact paths for clients.",
  },
  {
    icon: BarChart3,
    title: "Search Engine Optimization (SEO)",
    desc: "We structure content so you show up when people Google the exact problem you solve.",
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    desc: "Fast, secure hosting with backups and monitoring so you never worry about uptime.",
  },
  {
    icon: IdCard,
    title: "Google Knowledge Panel",
    desc: "Authority box on Google with your name, brand, photo, and key info in one snapshot.",
  },
  {
    icon: Megaphone,
    title: "Social Media Handling",
    desc: "We plan, create, and post so you stay visible, consistent, and on-brand everywhere.",
  },
  {
    icon: LayoutTemplate,
    title: "Portfolio & Case Studies",
    desc: "Show your best work in a clean, proof-driven format that builds instant trust.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Get found on Maps, collect reviews, and turn local searches into real calls and visits.",
  },
  {
    icon: FileText,
    title: "Wikipedia & Online Authority",
    desc: "Public-facing credibility layers that position you as established, legit, and notable.",
  },
];

// you imported Star from lucide-react, so we can just alias it.
// but lucide icons have strokeWidth prop etc. TypeScript doesn't always like directly using that in a generic ComponentType<SVGProps<SVGSVGElement>>.
// easiest: wrap it.
function StarIconFix(props: React.SVGProps<SVGSVGElement>) {
  return <Star {...props} />;
}

const PAGE_SIZE = 6; // 2 rows x 3 columns

export default function FeaturesSection() {
  // break features[] into Feature[][] of size 6 per page
  const pages = React.useMemo<Feature[][]>(() => {
    const out: Feature[][] = [];
    for (let i = 0; i < features.length; i += PAGE_SIZE) {
      out.push(features.slice(i, i + PAGE_SIZE));
    }
    return out;
  }, []);

  const [pageIndex, setPageIndex] = React.useState(0);

  const nextPage = React.useCallback(() => {
    setPageIndex((prev) => (prev + 1) % pages.length);
  }, [pages.length]);

  const prevPage = React.useCallback(() => {
    setPageIndex((prev) => {
      const n = prev - 1;
      return n < 0 ? pages.length - 1 : n;
    });
  }, [pages.length]);

  return (
    <section
      className="
        bg-white
        md:min-h-screen
        flex flex-col justify-center
        py-16 md:py-24
      "
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-10 md:gap-12 w-full">
        {/* Heading + Arrows */}
        <div className="flex flex-col items-center text-center gap-6">
          <h2
            className="
              text-4xl md:text-5xl
              font-semibold
              text-gray-900
              tracking-tight
              leading-[1.1]
            "
          >
            What We Build &amp; Run For You
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={prevPage}
              className="
                inline-flex items-center justify-center
                h-10 w-10 rounded-full
                bg-white text-[#6c1898]
                ring-1 ring-black/10
                shadow-[0_12px_24px_rgba(0,0,0,0.08)]
                hover:bg-[#6c1898] hover:text-white
                transition
              "
              aria-label="Previous"
            >
              <span className="text-lg leading-none font-medium">‹</span>
            </button>

            <button
              onClick={nextPage}
              className="
                inline-flex items-center justify-center
                h-10 w-10 rounded-full
                bg-white text-[#6c1898]
                ring-1 ring-black/10
                shadow-[0_12px_24px_rgba(0,0,0,0.08)]
                hover:bg-[#6c1898] hover:text-white
                transition
              "
              aria-label="Next"
            >
              <span className="text-lg leading-none font-medium">›</span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-x-hidden pt-16">
          <div
            className="
              flex flex-nowrap
              transition-[transform]
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
            "
            style={{
              transform: `translateX(-${pageIndex * 100}%)`,
            }}
          >
            {pages.map((page, idx) => (
              <div key={idx} className="shrink-0 w-full">
                {/* 2 rows x 3 cols on desktop, stack on mobile */}
                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    gap-10 md:gap-12 lg:gap-14
                  "
                >
                  {page.map((item, i) => (
                    <div
                      key={i}
                      className="
                        relative group
                        rounded-xl
                        bg-[#f6f3ff]
                        p-6 pt-20 md:p-8 md:pt-24
                        ring-1 ring-black/5
                        flex flex-col
                      "
                    >
                      {/* Floating icon bubble */}
                      <div
                        className="
                          absolute
                          -top-10
                          left-1/2 -translate-x-1/2
                          md:left-auto md:right-6 md:translate-x-0
                          w-28 h-28 md:w-32 md:h-32
                          rounded-full
                          bg-[#6c1898]
                          flex items-center justify-center
                        "
                      >
                        <item.icon
                          className="
                            w-14 h-14 text-white
                            transition-transform duration-200
                            group-hover:-translate-y-1
                            group-hover:scale-[1.06]
                          "
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                        {item.title}
                      </h3>

                      {/* Desc */}
                      <p className="mt-4 text-[15px] leading-relaxed text-gray-700 min-h-[4.5rem]">
                        {item.desc}
                      </p>

                      {/* Button */}
                      <button
                        className="
                          mt-8 inline-block
                          rounded-full
                          bg-white
                          px-5 py-2.5
                          text-[14px] font-semibold
                          text-[#6c1898]
                          shadow-[0_12px_24px_rgba(0,0,0,0.08)]
                          ring-1 ring-black/5
                          hover:bg-[#6c1898] hover:text-white
                          transition
                          w-max
                        "
                      >
                        Read More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* lucide-react Star wrapper */
function Star(props: React.SVGProps<SVGSVGElement>) {
  // dummy fallback to satisfy TS if Star import gets tree-shaken weird.
  // if you actually imported { Star } from "lucide-react", delete this wrapper and just alias that.
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9" />
    </svg>
  );
}
