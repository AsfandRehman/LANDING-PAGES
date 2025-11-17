// app/components/FAQSection.tsx
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = { q: string; a: React.ReactNode };

const BRAND = "#FF2D55"; // red
const BG = "#0B0B12";

const FAQS: FAQ[] = [
  {
    q: "What is CRM optimization and why do I need it?",
    a: (
      <>
        CRM optimization is the process of refining your Customer Relationship
        Management (CRM) system to ensure it functions efficiently and aligns
        with your business objectives. It involves streamlining processes,
        improving data quality, enhancing user adoption, and utilizing CRM
        features effectively. If your CRM is not optimized, you could face
        inefficiencies, miss out on potential sales opportunities, and waste
        resources on manual tasks that could be automated.
      </>
    ),
  },
  {
    q: "How much time can I expect to save with your CRM optimization services?",
    a: (
      <>
        Our services typically help businesses save at least{" "}
        <strong>10 hours per week</strong> by automating manual, repetitive
        tasks. However, the exact time savings may vary depending on the
        complexity of your processes and the degree of automation implemented.
      </>
    ),
  },
  {
    q: "What kind of increase in revenue can I expect from your services?",
    a: (
      <>
        While results can vary based on multiple factors, we typically help
        businesses increase their revenue by around <strong>30%</strong> through
        improved lead management, streamlined sales processes, and better
        customer engagement facilitated by an optimized CRM.
      </>
    ),
  },
  {
    q: "Do you provide training for my team on how to use the optimized CRM?",
    a: (
      <>
        Yes, comprehensive training is a key part of our service. We ensure that
        everyone in your organization understands how to effectively use the
        CRM. Our training covers everything from basic functionality to advanced
        features and is tailored to different roles within your organization.
      </>
    ),
  },
  {
    q: "What happens after the CRM system is implemented and optimized? Do you provide ongoing support?",
    a: (
      <>
        Absolutely. After the initial implementation and training, we continue
        to provide support to help you navigate any issues and make the most of
        your CRM system. We&apos;re committed to helping you continuously
        improve and optimize your system over time.
      </>
    ),
  },
  {
    q: "How does the process of working with your agency start?",
    a: (
      <>
        The process starts with an initial, no-obligation consultation where we
        understand your business goals and current challenges. Post
        consultation, we conduct a comprehensive audit of your existing systems,
        based on which we develop a customized CRM strategy for your business.
        After the strategy is approved, we implement the CRM system and provide
        comprehensive training for your team.
      </>
    ),
  },
  {
    q: "What size company or revenue do I need to be to use your CRM optimization services?",
    a: (
      <>
        Our CRM optimization services are valuable for businesses of all sizes
        and at all stages, including start-ups. Regardless of your company size
        or revenue, managing your customer relationships effectively is
        critical. Even if you&apos;re a brand new company, a properly set up and
        optimized CRM can help you start off on the right foot by streamlining
        your sales and marketing processes, improving your lead management, and
        saving time through automation. As your business grows, an optimized CRM
        can scale with you, providing the insights and efficiency needed to
        support and accelerate your growth.
      </>
    ),
  },
];

const cx = (...c: Array<string | false | undefined>) =>
  c.filter(Boolean).join(" ");

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <motion.section
      id="faq"
      aria-label="FAQ"
      className="relative isolate overflow-hidden w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: BG, color: "white" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {/* Background image (optional) + dark overlay */}
      <div className="absolute inset-0 -z-20">
        {/* Replace the URL or remove this div if you don't need an image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/flames-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Warm glows (pure inline styles for stability) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute -top-24 -left-28 w-[48rem] h-[32rem] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(40% 50% at 50% 50%, rgba(255,122,0,0.35), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-8 -right-24 w-[48rem] h-[32rem] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(40% 50% at 50% 50%, rgba(255,45,85,0.35), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(40% 50% at 50% 50%, rgba(255,159,28,0.25), transparent 60%)",
          }}
        />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.12]">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.05, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[0.98]">
            Frequently Asked{" "}
            <span
              style={{
                color: "transparent",
                backgroundImage: `linear-gradient(110deg, ${BRAND} 0%, ${BRAND} 35%, #ffffff 50%, ${BRAND} 65%, ${BRAND} 100%)`,
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                // simple shimmer without <style jsx>
                animation: "faq-shimmer 2.4s linear infinite",
                textShadow: "0 0 0.25px rgba(0,0,0,0.06)",
                // define keyframes inline via the global <style> below
              }}
            >
              Questions
            </span>
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto italic">
            Clear answers on CRM optimization, automation, training, and how we
            help you scale.
          </p>
        </motion.header>

        {/* Accordion */}
        <motion.ol
          className="mt-10 sm:mt-12 space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            return (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <motion.div
                  className={cx(
                    "group relative rounded-xl w-full",
                    "bg-white/[0.035] backdrop-blur-[2px]",
                    "ring-1 ring-white/10",
                    "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
                    "transition-all"
                  )}
                  style={{
                    boxShadow: isOpen
                      ? "0 28px 56px -28px rgba(0,0,0,0.55)"
                      : "0 20px 40px -28px rgba(0,0,0,0.45)",
                  }}
                  whileHover={{ y: -2 }}
                >
                  {/* Left accent rail */}
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl hidden sm:block"
                    initial={false}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    style={{ background: BRAND }}
                  />

                  <motion.button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full items-center gap-3 text-left px-5 py-4 sm:px-6 sm:py-5"
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  >
                    {/* Number badge */}
                    <span
                      className="inline-grid place-items-center rounded-full font-bold text-[11px] leading-none text-white select-none"
                      style={{
                        background: BRAND,
                        minWidth: 32,
                        height: 32,
                        padding: "0 6px",
                      }}
                    >
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span className="flex-1 min-w-0 text-sm sm:text-base font-semibold leading-snug break-words">
                      {item.q}
                    </span>

                    {/* Toggle icon */}
                    <motion.span
                      className="ml-3 grid w-8 h-8 place-items-center rounded-full border bg-white/5"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      aria-hidden
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </motion.span>
                  </motion.button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-white/85 border-t border-white/10"
                          initial={{ y: -6, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.05, duration: 0.2 }}
                        >
                          {item.a}
                        </motion.div>
                        <div
                          className="h-px w-full"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,0,0,0.3), transparent)",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="/book-call"
            className="
              inline-flex items-center justify-center gap-2 rounded-xl
              px-6 py-3 text-sm font-bold text-white
              shadow-[0_10px_40px_rgba(255,45,85,0.45)]
              transition-transform duration-200 hover:scale-[1.03]
              bg-[linear-gradient(90deg,#FF2D55,#FF7A7A)]
              hover:[background-image:linear-gradient(90deg,#FF3A63,#FF8A8A)]
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20
            "
          >
            Get Your CRM Audit
          </a>
        </div>
      </div>

      {/* Tiny global keyframes inserted safely once per component */}
      <style>{`
        @keyframes faq-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </motion.section>
  );
}

/* ---- Icons ---- */
function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10 4v12M4 10h12" strokeLinecap="round" />
    </svg>
  );
}
function MinusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 10h12" strokeLinecap="round" />
    </svg>
  );
}
