// components/CTASection.tsx
"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section id="cta" className="relative bg-[#0B0C10] py-32 overflow-hidden">
            {/* Glow background */}
            <div className="absolute inset-0">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-zsideo-gradient/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
                >
                    Let’s Build Your <span className="text-zsideo-gradient">Business Playbook</span>
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-6 text-lg md:text-xl text-gray-300"
                >
                    Partner with <span className="text-zsideo-gradient">ZSideo Coaching </span>
                    and gain the strategic clarity, frameworks, and coaching you need
                    to scale with confidence.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-10"
                >
                    <a
                        href="/join"
                        className="inline-block bg-gradient-to-r from-[#0052A3] to-[#1A73E8] 
             hover:from-[#1A73E8] hover:to-[#0052A3] 
             text-white font-bold text-lg px-12 py-5 rounded-xl shadow-xl 
             transition-transform hover:scale-105"
                    >
                        Book Your Coaching Session
                    </a>
                </motion.div>

                {/* Social Proof / Guarantee */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-6 text-sm text-gray-400"
                >
                    Trusted by entrepreneurs and businesses across industries.
                </motion.p>
            </div>
        </section>
    );
}
