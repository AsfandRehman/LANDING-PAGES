// app/legal/terms/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import CalendlyCTA from "../components/CalendlyCTA";

const BRAND = "#3354A5";
const INK = "#231F20";

export default function TermsPage() {
  return (
    <main
      className="relative isolate min-h-screen bg-[#F7F8FB] text-[--ink] scroll-smooth"
      style={{ ["--ink" as string]: INK, ["--brand" as string]: BRAND }}
    >
      {/* soft background washes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(51,84,165,0.12),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(35,31,32,0.08),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.22] bg-[linear-gradient(0deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Heading */}
        <header className="mx-auto max-w-5xl text-center space-y-4 mt-10">
          <h1 className="font-extrabold tracking-tight leading-[0.95] text-[clamp(34px,6.5vw,68px)]">
            Terms of <span className="shine-text-accent">Service</span>
          </h1>
        </header>

        {/* Content grid: sticky TOC + centered article */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Sidebar TOC */}
          <aside className="lg:self-start lg:sticky lg:top-24">
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-5 py-5 shadow-sm"
            >
              <ol className="list-decimal pl-5 space-y-2 text-[15px] leading-6 text-black/85">
                {[
                  ["#who-we-are", "Who We Are"],
                  ["#scope", "Scope of Services"],
                  ["#client-responsibilities", "Client Responsibilities"],
                  ["#deliverables-ownership", "Deliverables & Ownership"],
                  ["#revisions", "Revisions"],
                  ["#payment", "Payment, Billing & Cancellation"],
                  ["#refunds", "Refunds"],
                  ["#results", "Results Disclaimer"],
                  ["#ai-consent", "AI Cloning & Likeness Consent"],
                  ["#confidentiality", "Confidentiality"],
                  ["#compliance", "Compliance & Acceptable Use"],
                  ["#limitation", "Limitation of Liability"],
                  ["#termination", "Term & Termination"],
                  ["#misc", "Miscellaneous"],
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
              <section id="who-we-are" className="scroll-mt-28">
                <h3>1. Who We Are</h3>
                <p>
                  <strong>Stratos</strong> is a done-for-you content engine for
                  creators. We provide content strategy, cloning, scripting, and
                  video editing — handling the entire pipeline from ideas to
                  scripts to edits and posting. Our service is capacity-limited
                  to ensure quality and focus.
                </p>
              </section>

              <section id="scope" className="scroll-mt-28">
                <h3>2. Scope of Services</h3>
                <p>
                  Plans typically include monthly bundles of edited short-form
                  videos (e.g., 15/30/60), strategy support, cloning, and
                  unlimited revisions within the active billing cycle. Exact
                  deliverables are defined in your order or proposal. We may use
                  AI tooling and internal processes to produce assets
                  efficiently.
                </p>
                <p>
                  Posting, thumbnails, captions, and distribution support may be
                  included if stated in your plan or proposal. Any additional
                  work beyond scope requires a change order and may incur
                  additional fees.
                </p>
              </section>

              <section id="client-responsibilities" className="scroll-mt-28">
                <h3>3. Client Responsibilities</h3>
                <ul>
                  <li>
                    Provide timely brand guidelines, footage, approvals, and
                    account access (e.g., Instagram/Calendly/Slack where
                    applicable).
                  </li>
                  <li>Ensure you hold rights to any materials you supply.</li>
                  <li>
                    Respond to review requests within mutually agreed timelines
                    so the pipeline stays on schedule.
                  </li>
                </ul>
              </section>

              <section id="deliverables-ownership" className="scroll-mt-28">
                <h3>4. Deliverables &amp; Ownership</h3>
                <p>
                  Upon full payment,{" "}
                  <strong>
                    you own the final exported creative deliverables
                  </strong>{" "}
                  we produce for you (videos, scripts, captions). Internal
                  project files, templates, and proprietary systems remain
                  Stratos IP unless expressly transferred in writing.
                </p>
              </section>

              <section id="revisions" className="scroll-mt-28">
                <h3>5. Revisions</h3>
                <p>
                  We offer <strong>unlimited revisions</strong> on included
                  deliverables during the active billing period. Revisions are
                  intended to refine the agreed brief — not to introduce new
                  concepts or additional assets outside the plan scope.
                </p>
              </section>

              <section id="payment" className="scroll-mt-28">
                <h3>6. Payment, Billing &amp; Cancellation</h3>
                <ul>
                  <li>
                    Subscriptions are billed in advance on a monthly basis (no
                    long-term lock-ins by default).
                  </li>
                  <li>
                    Cancelling stops the next cycle; your current cycle
                    continues until its end date.
                  </li>
                  <li>
                    Late or failed payments may pause work until resolved.
                  </li>
                </ul>
              </section>

              <section id="refunds" className="scroll-mt-28">
                <h3>7. Refunds</h3>
                <p>
                  <strong>No refunds</strong> are offered once content
                  production has begun. If you cancel, we will complete work
                  owed in the current cycle based on materials and approvals
                  received to date.
                </p>
              </section>

              <section id="results" className="scroll-mt-28">
                <h3>8. Results Disclaimer</h3>
                <p>
                  We guarantee delivery of the agreed content; however,{" "}
                  <strong>
                    specific results (audience growth, engagement, revenue)
                  </strong>{" "}
                  are not guaranteed. Performance depends on factors outside our
                  control (platform changes, market trends, compliance,
                  product-market fit, ad spend, etc.).
                </p>
              </section>

              <section id="ai-consent" className="scroll-mt-28">
                <h3>9. AI Cloning &amp; Likeness Consent</h3>
                <p>
                  If you opt into AI avatar/voice/likeness cloning, you grant
                  Stratos the limited right to process your likeness and voice
                  solely to produce deliverables under your plan. You confirm
                  you have authority to grant this consent and that your use of
                  cloned outputs complies with applicable laws and platform
                  rules. You may revoke cloning consent at any time for future
                  production by notifying us in writing; revocation does not
                  affect work already completed.
                </p>
              </section>

              <section id="confidentiality" className="scroll-mt-28">
                <h3>10. Confidentiality</h3>
                <p>
                  Both parties agree to keep non-public information confidential
                  and to use it only for delivering/receiving the services,
                  except where disclosure is required by law.
                </p>
              </section>

              <section id="compliance" className="scroll-mt-28">
                <h3>11. Compliance &amp; Acceptable Use</h3>
                <ul>
                  <li>
                    Provide only lawful content and do not request anything that
                    infringes third-party rights.
                  </li>
                  <li>
                    We may decline work that violates laws, platform policies,
                    or brand-safety standards.
                  </li>
                </ul>
              </section>

              <section id="limitation" className="scroll-mt-28">
                <h3>12. Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by law, Stratos will not be
                  liable for any indirect, incidental, special, or consequential
                  damages. Our total liability for any claim arising out of
                  these Terms will not exceed the amount paid by you to Stratos
                  in the three (3) months preceding the event giving rise to the
                  claim.
                </p>
              </section>

              <section id="termination" className="scroll-mt-28">
                <h3>13. Term &amp; Termination</h3>
                <p>
                  Either party may terminate for material breach if not cured
                  within fourteen (14) days after written notice. Sections
                  intended to survive (e.g., ownership, confidentiality,
                  limitation of liability) will survive termination.
                </p>
              </section>

              <section id="misc" className="scroll-mt-28">
                <h3>14. Miscellaneous</h3>
                <ul>
                  <li>
                    <strong>Governing Law.</strong> These Terms are governed by
                    the laws of <em>[Your Region/State/Country]</em>.
                  </li>
                  <li>
                    <strong>Entire Agreement.</strong> These Terms plus your
                    order/proposal constitute the entire agreement.
                  </li>
                  <li>
                    <strong>Updates.</strong> We may update these Terms from
                    time to time; material changes will be posted on this page
                    with a new effective date.
                  </li>
                </ul>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h3>15. Contact</h3>
                <p>Questions? Contact us at </p>
              </section>
            </div>

            {/* CTA below the article (not inside a paragraph) */}
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

      {/* Shimmer styles */}
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
