// components/StepsSection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap, Users, DollarSign } from "lucide-react";

const steps = [
    {
        icon: <GraduationCap className="w-9 h-9 text-zsideo-gradient" />,
        title: "Step 1: Diagnose",
        points: [
            "Audit your current business model and strategies",
            "Identify hidden gaps and overlooked opportunities",
            "Set a clear roadmap for sustainable growth",
        ],
        image: "/images/step1.jpg",
    },
    {
        icon: <Users className="w-9 h-9 text-zsideo-gradient" />,
        title: "Step 2: Implement",
        points: [
            "Build scalable systems for operations and sales",
            "Train teams to execute with clarity and consistency",
            "Leverage modern tools to accelerate productivity",
        ],
        image: "/images/step2.jpg",
    },
    {
        icon: <DollarSign className="w-9 h-9 text-zsideo-gradient" />,
        title: "Step 3: Scale",
        points: [
            "Expand into new markets with confidence",
            "Diversify income streams strategically",
            "Sustain growth with accountability and coaching",
        ],
        image: "/images/step3.jpg",
    },
];

export default function StepsSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="steps" ref={ref} className="relative bg-[#0B0C10] py-28">
            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Center timeline line */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-gray-700 -translate-x-1/2">
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute top-0 left-0 w-full bg-yellow-400"
                    />
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-40 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`grid md:grid-cols-2 gap-12 items-center relative ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Top bullet */}
                            <div className="absolute left-1/2 -top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#0B0C10] shadow-lg z-10" />

                            {/* Image */}
                            <div className="flex justify-center">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={500}
                                    height={350}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Text content */}
                            <div className="text-white space-y-6">
                                <div className="flex items-center gap-4">
                                    {step.icon}
                                    <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                                </div>

                                <ul className="space-y-4">
                                    {step.points.map((p, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-zsideo-gradient text-lg mt-1">✔</span>
                                            <span className="text-gray-300 text-base md:text-lg">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
