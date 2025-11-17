// components/FAQSection.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How fast will I start seeing results?",
    answer:
      "That really depends on where you’re starting and how quickly you take action. Some clients land their first high-ticket clients in just a few weeks. Others spend a bit more time building the foundation before everything clicks. Either way, we’ll make sure you’re moving in the right direction from Day 1.",
  },
  {
    question:
      " Do I need to already have clients or a business before joining?",
    answer:
      "Nope — not at all. Even if you don’t have a business idea yet, we’ll help you come up with one based on your skills and goals. And if you already have one, we’ll refine it, package it, and help you turn it into something scalable.",
  },
  {
    question: "Will you actually help me get clients?",
    answer:
      "Absolutely. That’s one of the biggest parts of what we do. We’ll work with you to build a predictable system that brings clients to you — no cold messaging, no guessing, and no relying on luck.",
  },
  {
    question: " How much time will I need to commit?",
    answer:
      "This depends. You’re building a real business here, so you should be ready to dedicate a few focused hours a day. Your main job is to show up, care about the process, and make decisions — while we handle the heavy lifting with you.",
  },
  {
    question: "How much time do I need to commit each week?",
    answer:
      "Expect 60–90 minutes weekly for a focused working session and quick approvals. The goal is to save you 10–30+ hours per month by removing manual follow-ups and repetitive admin.",
  },
  {
    question: "What if I’ve already tried other programs and they didn’t work?",
    answer:
      " We hear this a lot — and honestly, we get it. Most programs hand you information and then leave you to figure it out alone. We don’t do that. We work side by side with you, building the systems together and staying involved until it’s actually working.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Optional: SEO FAQ schema
  const faqJsonLd = useMemo(() => {
    const mainEntity = faqData.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    }));
    return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity };
  }, []);

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-white via-[#f3fdfa] to-[#e1fbf5]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="mx-auto max-w-7xl text-center font-extrabold leading-[0.96] tracking-tight
             text-[var(--color-text)] text-[clamp(36px,6.5vw,72px)] mb-6"
          >
            Frequently Asked
            <span className="pl-2 italic text-[var(--color-accent)]">
              Questions
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Everything holding you back — solved by our simple, proven system.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = index === openIndex;
            const contentId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl transition-all overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold text-gray-800 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`transition-max-height duration-300 ease-in-out px-6 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0 overflow-hidden"
                  } text-gray-600`}
                >
                  {faq.answer}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* JSON-LD for rich results (keeps the exact visual design) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
