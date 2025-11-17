// app/components/FAQ.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const BG_IMAGE = "/images/faq.jpg"; // change to your asset

type QA = { q: string; a: string; id?: string };

const faqs: QA[] = [
  {
    q: "How long does credit repair typically take?",
    a: "Most clients begin seeing improvements within 30–60 days, with full programs ranging from 3–6 months depending on report complexity, dispute cycles, and responsiveness from bureaus.",
    id: "timeline",
  },
  {
    q: "Can you guarantee specific credit score increases?",
    a: "No ethical firm can guarantee a specific score. We guarantee a rigorous process: detailed audit, prioritized dispute strategy, validation & verification, and month-by-month optimization.",
    id: "guarantee",
  },
  {
    q: "Will closing old accounts improve my score?",
    a: "Usually not. Length of credit history and utilization matter. Closing an older account can reduce average age and available limit—often hurting your score. We advise on a case-by-case basis.",
    id: "closing-accounts",
  },
  {
    q: "Do you help with business funding too?",
    a: "Yes. We map lender fit, prepare docs, and align your personal & business profiles to increase approval odds for lines of credit, term loans, and cards—without predatory rates.",
    id: "business-funding",
  },
  {
    q: "What happens in the free consultation?",
    a: "We review your goals, analyze key report factors, outline a step-by-step plan, and share transparent pricing. If we’re a fit, we send an agreement and your onboarding checklist.",
    id: "consultation",
  },
  {
    q: "Is this safe for my credit?",
    a: "Yes. We follow FCRA guidelines and use dispute methods that target inaccurate, unverified, or obsolete items. Your data is handled securely and never shared without consent.",
    id: "safety",
  },
];

export default function FAQ() {
  // Pre-open first two items for better scent
  const [openId, setOpenId] = useState<string | null>(faqs[0].id ?? null);

  const jsonLd = useMemo(() => {
    // Build FAQPage JSON-LD for SEO
    const structured = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };
    return JSON.stringify(structured);
  }, []);

  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Solid black overlay */}
      <div className="absolute inset-0 -z-20 bg-black" />
      {/* Colored mesh */}
      <div
        className="absolute inset-0 -z-10 opacity-60 mix-blend-screen"
        style={{
          background:
            "radial-gradient(40% 35% at 15% 25%, rgba(0,199,190,0.28) 0%, rgba(0,0,0,0) 60%)," +
            "radial-gradient(38% 38% at 85% 70%, rgba(255,140,0,0.28) 0%, rgba(0,0,0,0) 62%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#00C7BE] via-[#53E0CF] to-[#FF8C00] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
            Clear answers about credit repair, funding, and your free
            consultation.
          </p>
        </div>

        {/* Accordion */}
        <ul className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openId === (item.id ?? String(idx));
            const id = item.id ?? String(idx);

            return (
              <li key={id} id={id}>
                <motion.button
                  onClick={() => setOpenId(isOpen ? null : id)}
                  initial={false}
                  animate={{
                    backgroundColor: isOpen
                      ? "rgba(255,255,255,0.07)"
                      : "rgba(255,255,255,0.05)",
                  }}
                  transition={{ duration: 0.2 }}
                  className={[
                    "w-full text-left rounded-2xl border border-white/10 backdrop-blur",
                    "px-5 md:px-6 py-4 md:py-5",
                    "hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                    "group",
                  ].join(" ")}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${id}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-semibold leading-tight">
                      <span className="shine-fill">{item.q}</span>
                    </h3>
                    <span
                      className={[
                        "mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md",
                        "bg-white/10 border border-white/15",
                        "transition-transform duration-200",
                        isOpen ? "rotate-45" : "rotate-0",
                      ].join(" ")}
                      aria-hidden
                    >
                      {/* plus icon (rotates to × on open) */}
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <motion.div
                    id={`panel-${id}`}
                    role="region"
                    aria-labelledby={id}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 md:pt-4 text-sm md:text-base text-zinc-300/95">
                      {item.a}
                    </p>
                  </motion.div>
                </motion.button>
              </li>
            );
          })}
        </ul>

        {/* Optional bottom CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <a
            href="/book"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Still have questions? Book a free consultation
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Shine INSIDE text utility (works with your .shine-fill need) */}
      <style>{`
        .shine-fill {
          background-image: linear-gradient(
            90deg,
            #f3b665 0%,
            #e1d77a 25%,
            #45e2c1 50%,
            #e1d77a 75%,
            #f3b665 100%
          ), linear-gradient(
            115deg,
            transparent 0%,
            rgba(255, 255, 255, 0.65) 50%,
            transparent 60%
          );
          background-size: 200% 100%, 300% 100%;
          background-position: 0% 50%, -200% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shineBase 5s linear infinite, shineSweep 2.8s ease-in-out infinite;
        }
        @keyframes shineBase {
          0% { background-position: 0% 50%, -200% 50%; }
          100% { background-position: 200% 50%, 200% 50%; }
        }
        @keyframes shineSweep {
          0%, 8% { background-position: 200% 50%, -200% 50%; opacity: 1; }
          40% { background-position: 200% 50%, 0% 50%; }
          100% { background-position: 200% 50%, 200% 50%; }
        }
      `}</style>

      {/* SEO: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        // Dangerously set is fine for JSON-LD; ensure it's trusted content (it is: local array)
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </section>
  );
}
