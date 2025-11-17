"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Instagram, Youtube } from "lucide-react";

export default function AboutPage() {
  // Same JSON-LD Person schema for this entity page
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saim Ali Ahmad",
    "alternateName": ["Saim Ahmad"],
    "url": "https://saimaliahmad.com/",
    "image": "https://saimaliahmad.com/images/saim.jpg",
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "ZSIDEO CONTENT LLC",
      "url": "https://zsideocontentllc.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "homeLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressCountry": "PK"
      }
    },
    "sameAs": [
      "https://www.instagram.com/saimzsideo/",
      "https://www.youtube.com/@saimzsideo"
    ],
    "knowsAbout": [
      "Short-form content strategy",
      "Digital marketing",
      "Web development",
      "AI solutions",
      "Business operations",
      "Entrepreneurship"
    ],
    "description": "Self-made millionaire by 19, founder and CEO of ZSIDEO CONTENT LLC. Operates multiple service-based businesses in content creation, AI solutions, and digital marketing."
  };

  return (
    <>
      {/* JSON-LD for this entity page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      
      <div className="min-h-screen bg-[#0B0B10] text-white">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#0B0B10] via-[#0B0B10] to-[#0A0A0F]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,128,0.1),_transparent_70%)]" />
          
          <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Saim Ali Ahmad
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8">
                Entrepreneur and operator focused on short-form content, AI, and web ventures.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
                <Image
                  src="/images/saim.jpg"
                  alt="Saim Ali Ahmad - Professional Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Short Bio */}
              <div>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-white/70 leading-relaxed">
                  Founder of ZSIDEO CONTENT and Multiple Other Service Based Businesses. Self‑made by 19, operator at 20. 
                  Verified results across the US, CA, UK, AU, and AE. Revenue from services, not selling courses. Proof over promises.
                </p>
              </div>

              {/* Long Bio */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Journey</h2>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    Saim Ali Ahmad is a self-made young millionaire who earned over $1M by 19. Now 20, he is the founder and CEO of 
                    ZSIDEO CONTENT LLC, a Dubai-based content agency delivering high-quality short-form video editing for businesses, 
                    entrepreneurs, and creators. With clients primarily in the United States and across Canada, the UK, Australia, 
                    and Dubai, Saim has built a reputation for exceptional results and creative execution.
                  </p>
                  <p>
                    His journey was not easy. A college dropout under pressure to pursue engineering, he faced criticism and even had 
                    his laptop confiscated. Refusing to quit, he kept learning and hustling. A first $1,000 client became the foundation to scale.
                  </p>
                  <p>
                    Beyond ZSIDEO CONTENT, Saim operates multiple service-based businesses in AI solutions, website development, and 
                    digital marketing. He earns from operating agencies and services—not selling courses—and shares verifiable proof of outcomes.
                  </p>
                  <p>
                    Dubai-based and legally registered, Saim is an operator and strategist who actively runs and scales ventures, 
                    publishing frameworks he uses to build profitable service companies.
                  </p>
                </div>
              </div>

              {/* Key Facts */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Facts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold text-[#FF0080] mb-2">Role</h3>
                    <p className="text-white/70">Founder & CEO, ZSIDEO CONTENT LLC</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold text-[#FF0080] mb-2">Location</h3>
                    <p className="text-white/70">Lahore, Pakistan</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold text-[#FF0080] mb-2">Company HQ</h3>
                    <p className="text-white/70">Dubai, UAE</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold text-[#FF0080] mb-2">Achievement</h3>
                    <p className="text-white/70">Self-made millionaire by 19</p>
                  </div>
                </div>
              </div>

              {/* Official Profiles */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Official Profiles</h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/saimzsideo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-[#FF0080]" />
                    <span>Instagram</span>
                    <ExternalLink className="h-4 w-4 text-white/40" />
                  </a>
                  <a
                    href="https://www.youtube.com/@saimzsideo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-[#FF0080]" />
                    <span>YouTube</span>
                    <ExternalLink className="h-4 w-4 text-white/40" />
                  </a>
                </div>
              </div>

              {/* References Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">References</h2>
                <p className="text-white/60 text-sm">
                  <Link
                  href="https://wikialpha.co/wiki/Saim_Ali_Ahmad"
                  className="underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  target="_blank">
                    About SaimAliAhmad
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
