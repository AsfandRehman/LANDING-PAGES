// components/TestimonialsReelsSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        video: "/reels/testimonial1.mp4",
        thumbnail: "/images/thumbnail.jpg",
        user: "Sarah J.",
        tag: "Scaled from 0 → $15k/mo",
    },
    {
        video: "/reels/testimonial2.mp4",
        thumbnail: "/images/thumbnail.jpg",
        user: "David R.",
        tag: "Quit his 9-5 job",
    },
    {
        video: "/reels/testimonial3.mp4",
        thumbnail: "/images/thumbnail.jpg",
        user: "Aisha K.",
        tag: "Built a global client base",
    },
    {
        video: "/reels/testimonial4.mp4",
        thumbnail: "/images/thumbnail.jpg",
        user: "Mark L.",
        tag: "Now traveling the world",
    },
    {
        video: "/reels/testimonial5.mp4",
        thumbnail: "/images/thumbnail.jpg",
        user: "Emily R.",
        tag: "Doubled her freelance income",
    },
    {
        video: "/reels/testimonial6.mp4",
        thumbnail: "/images/thumbnail.jpg",
        user: "Ali Khan",
        tag: "Opened his first agency",
    },
];

export default function TestimonialsReelsSection() {
    const [paused, setPaused] = useState(false);

    return (
        <section id="testimonials" className="relative bg-[#0B0C10] py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Proven Results with {" "}
                    <span className="text-zsideo-gradient">ZSideo Coaching</span>
                </h2>
                <p className="mt-4 text-gray-400 text-lg">
                    Hear directly from entrepreneurs and business owners who transformed
                    their companies with our strategies.
                </p>

                {/* Auto-scrolling carousel */}
                <div
                    className="relative mt-16 w-full overflow-hidden"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <motion.div
                        className="flex gap-8"
                        animate={{
                            x: paused ? 0 : ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="relative min-w-[320px] md:min-w-[360px] max-w-[360px] rounded-2xl overflow-hidden shadow-xl bg-black group"
                            >
                                {/* Thumbnail (default state) */}
                                <Image
                                    src={t.thumbnail}
                                    alt={`${t.user} testimonial`}
                                    width={360}
                                    height={500}
                                    className="w-full h-[500px] object-cover absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
                                />

                                {/* Video (only plays on hover) */}
                                <video
                                    src={t.video}
                                    className="w-full h-[500px] object-cover"
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    onMouseEnter={(e) => {
                                        const vid = e.currentTarget as HTMLVideoElement;
                                        vid.currentTime = 0;
                                        vid.play();
                                    }}
                                    onMouseLeave={(e) => {
                                        const vid = e.currentTarget as HTMLVideoElement;
                                        vid.pause();
                                        vid.currentTime = 0; // reset to show thumbnail again
                                    }}
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                {/* User info */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                    <div className="text-left">
                                        <p className="text-white font-semibold">{t.user}</p>
                                        <p className="text-sm text-zsideo-gradient">{t.tag}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <div className="mt-14">
                    <a
                        href="/join"
                        className="inline-block bg-zsideo-gradient hover:bg-yellow-600 text-black font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition"
                    >
                        Start Your Story
                    </a>
                </div>
            </div>
        </section>
    );
}
