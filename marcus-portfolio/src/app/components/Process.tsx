// components/Process.tsx
"use client";

import { motion } from "framer-motion";
import { Film, Scissors, Rocket } from "lucide-react";

const steps = [
  {
    icon: Film,
    title: "Send Your Footage",
    description:
      "Share your raw clips with us securely via our encrypted upload portal. We handle all file types and ensure your content is protected.",
  },
  {
    icon: Scissors,
    title: "Editing Magic",
    description:
      "Our expert editors cut, enhance, add captions, optimize pacing, and apply professional effects to transform your raw footage into engaging content.",
  },
  {
    icon: Rocket,
    title: "Delivery",
    description:
      "Receive polished videos ready to post & perform across all platforms. Fast turnaround times and unlimited revisions included.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How It <span className="text-red-600">Works</span>
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          A streamlined, professional process designed to maximize your results while you focus on creating.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto space-y-28 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isRight = index % 2 === 1;

          return (
            <motion.div
              key={step.title}
              className={`flex flex-col md:flex-row items-start md:items-center gap-10 ${
                isRight ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 1,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className={`md:w-1/3 ${isRight ? "text-right" : "text-left"}`}>
                <motion.h3
                  className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
                  initial={{ x: isRight ? 80 : -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 1,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
              </div>

              <div className="md:w-2/3">
                <motion.div
                  className="relative bg-white border border-red-100 rounded-3xl shadow-xl p-10 group hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <motion.div
                    className="h-1 mt-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                    }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}