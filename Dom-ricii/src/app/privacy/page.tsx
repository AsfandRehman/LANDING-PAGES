// app/legal/privacy/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import CalendlyCTA from "../components/CalendlyCTA";

const BRAND = "#3354A5";
const INK = "#231F20";

export default function PrivacyPage() {
  return (
    <main
      className="relative isolate min-h-screen bg-[#F7F8FB] text-[--ink] scroll-smooth"
      style={{ ["--ink" as string]: INK, ["--brand" as string]: BRAND }}
    >
      {/* soft background washes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(51,84,165,0.12),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(35,31,32,0.08),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.22] bg-[linear-gradient(0deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Heading */}
        <header className="mx-auto max-w-5xl text-center space-y-4 pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-28 lg:pb-6">
          <h1 className="font-extrabold tracking-tight text-[clamp(34px,6.5vw,68px)] leading-[1.08] sm:leading-[1.06] md:leading-[1.04]">
            Privacy <span className="shine-text-accent">Policy</span>
          </h1>
        </header>

        {/* Content grid */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Sidebar TOC */}
          <aside className="lg:order-1 lg:self-start lg:sticky lg:top-28">
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-5 py-5 shadow-sm"
            >
              <ol className="list-decimal pl-5 space-y-2 text-[15px] leading-6 text-black/85">
                {[
                  ["#scope", "Scope"],
                  ["#data-we-collect", "Data We Collect"],
                  ["#how-we-use", "How We Use Data (Purposes & Legal Bases)"],
                  ["#sharing", "Sharing & Processors"],
                  ["#cookies", "Cookies & Analytics"],
                  ["#retention", "Data Retention"],
                  ["#security", "Security"],
                  ["#intl", "International Transfers"],
                  ["#rights", "Your Rights"],
                  ["#children", "Children"],
                  ["#updates", "Updates"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      className="underline decoration-[--brand] decoration-2 underline-offset-4 hover:decoration-[length:3px]"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Main article */}
          <article className="lg:order-2">
            <div className="prose prose-neutral max-w-3xl mx-auto prose-h3:mt-10 prose-h3:text-[1.15rem] sm:prose-h3:text-xl prose-h3:font-bold prose-p:leading-7 sm:prose-p:leading-8 prose-li:leading-7 marker:text-black/50 prose-a:text-[--brand]">
              <section id="scope" className="scroll-mt-28">
                <h3>1. Scope</h3>
                <p>
                  This Policy explains how <strong>Stratos</strong> collects,
                  uses, and shares information about visitors and clients of our
                  website and services, including our done-for-you content
                  production, strategy, cloning, scripting, and editing.
                </p>
              </section>

              <section id="data-we-collect" className="scroll-mt-28">
                <h3>2. Data We Collect</h3>
                <ul>
                  <li>
                    <strong>Contact &amp; Account Data:</strong> name, email,
                    social handles, company, plan selection, billing info (via
                    payment processors).
                  </li>
                  <li>
                    <strong>Content &amp; Project Data:</strong> scripts,
                    footage, brand assets, briefs, comments, approvals, platform
                    access tokens (as needed).
                  </li>
                  <li>
                    <strong>Communications:</strong> Slack/Email/Calendly
                    messages, support requests, meeting notes.
                  </li>
                  <li>
                    <strong>Usage &amp; Device Data:</strong> pages viewed,
                    approximate location, IP, device/browser type, via
                    cookies/analytics.
                  </li>
                  <li>
                    <strong>AI Cloning Inputs (optional):</strong> voice, image,
                    or likeness samples you provide when you opt into cloning
                    features.
                  </li>
                </ul>
              </section>

              <section id="how-we-use" className="scroll-mt-28">
                <h3>3. How We Use Data (Purposes &amp; Legal Bases)</h3>
                <ul>
                  <li>
                    <strong>Provide Services:</strong> produce and deliver
                    content, manage revisions, and operate our pipeline
                    (contract necessity).
                  </li>
                  <li>
                    <strong>Communicate:</strong> project updates, scheduling,
                    support (contract necessity/legitimate interests).
                  </li>
                  <li>
                    <strong>Personalize &amp; Improve:</strong> QA, workflow
                    optimization, product development (legitimate interests).
                  </li>
                  <li>
                    <strong>Payments &amp; Billing:</strong> subscription
                    processing (contract necessity/legal obligation).
                  </li>
                  <li>
                    <strong>Compliance &amp; Safety:</strong> prevent misuse,
                    enforce terms, comply with legal requests (legal
                    obligation/legitimate interests).
                  </li>
                  <li>
                    <strong>AI Cloning:</strong> generate approved outputs using
                    your authorized likeness (consent).
                  </li>
                </ul>
              </section>

              <section id="sharing" className="scroll-mt-28">
                <h3>4. Sharing &amp; Processors</h3>
                <p>
                  We share data with trusted processors solely to operate the
                  service: hosting, storage, analytics, communications (e.g.,
                  Slack/Email), scheduling (e.g., Calendly), payment processing,
                  and editing/production tools (including AI models). These
                  vendors process data under contractual safeguards and only per
                  our instructions. We may disclose data if required by law or
                  to protect rights and safety.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-28">
                <h3>5. Cookies &amp; Analytics</h3>
                <p>
                  We use cookies and similar technologies for core
                  functionality, preferences, and analytics. You can control
                  cookies via your browser settings. Some features may not
                  function properly without certain cookies.
                </p>
              </section>

              <section id="retention" className="scroll-mt-28">
                <h3>6. Data Retention</h3>
                <p>
                  We retain data for as long as needed to provide services, meet
                  legal obligations, resolve disputes, and enforce agreements.
                  Project files may be archived for a reasonable period to
                  support revisions and record-keeping; you may request deletion
                  subject to exceptions.
                </p>
              </section>

              <section id="security" className="scroll-mt-28">
                <h3>7. Security</h3>
                <p>
                  We implement administrative, technical, and physical measures
                  appropriate to the nature of the data. No method of
                  transmission or storage is 100% secure; we cannot guarantee
                  absolute security.
                </p>
              </section>

              <section id="intl" className="scroll-mt-28">
                <h3>8. International Transfers</h3>
                <p>
                  Your information may be processed in countries other than your
                  own. Where required, we use appropriate safeguards for
                  international transfers (e.g., standard contractual clauses).
                </p>
              </section>

              <section id="rights" className="scroll-mt-28">
                <h3>9. Your Rights</h3>
                <p>
                  Depending on your location, you may have rights to access,
                  correct, delete, or port your data, object to or restrict
                  processing, and withdraw consent (for cloning/marketing) at
                  any time. To exercise rights, contact us at{" "}
                  <a href="mailto:privacy@yourdomain.com">
                    privacy@yourdomain.com
                  </a>
                  . We may verify your identity before responding.
                </p>
              </section>

              <section id="children" className="scroll-mt-28">
                <h3>10. Children</h3>
                <p>
                  Our services are not directed to children under the age of 13
                  (or applicable local age). We do not knowingly collect
                  personal information from children.
                </p>
              </section>

              <section id="updates" className="scroll-mt-28">
                <h3>11. Updates to This Policy</h3>
                <p>
                  We may update this Policy from time to time. Material changes
                  will be posted on this page with an updated effective date.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h3>12. Contact</h3>
                <p>Questions or requests? </p>
              </section>
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-xs text-black/60">
              This Policy is provided for general informational purposes and
              does not constitute legal advice. You should consult with counsel
              to tailor these terms to your specific operations and
              jurisdiction.
            </p>

            <section className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <CalendlyCTA />
              </motion.div>
            </section>
          </article>
        </div>
      </section>

      {/* Shimmer & heading styles */}
      <style jsx global>{`
        @keyframes shine-move {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .shine-text-accent {
          position: relative;
          display: inline-block;
          color: transparent;
          line-height: 1.08; /* prevent descenders clipping */
          background-image: linear-gradient(
            110deg,
            var(--brand, ${BRAND}) 0%,
            var(--brand, ${BRAND}) 42%,
            rgba(255, 255, 255, 0.98) 50%,
            var(--brand, ${BRAND}) 58%,
            var(--brand, ${BRAND}) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 220% 100%;
          animation: shine-move 2.8s linear infinite;
        }
        h1,
        h2,
        h3 {
          color: ${INK};
        }
      `}</style>
    </main>
  );
}
