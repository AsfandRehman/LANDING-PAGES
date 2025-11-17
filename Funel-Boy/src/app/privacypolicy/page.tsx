// app/privacy/page.tsx
"use client";

import Link from "next/link";

const ACCENT = "#FFEB3B";

export default function PrivacyPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-white pt-20">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="absolute left-1/2 top-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,235,59,0.15),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
          Privacy <span style={{ color: ACCENT }}>Policy</span>
        </h1>

        <div className="space-y-8 text-sm leading-7 text-white/80">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information such as name, email, and contact
              details when you interact with our services. We also collect
              non-personal information such as browser type, IP address, and
              usage statistics to improve performance.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">
              2. How We Use Your Data
            </h2>
            <p>
              Your data is used to provide and improve our services, communicate
              with you, process requests, and send relevant updates. We do not
              sell your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">
              3. Cookies
            </h2>
            <p>
              We use cookies to enhance user experience, analyze traffic, and
              personalize content. You can disable cookies in your browser
              settings, though some features may be affected.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              information. However, no online service is 100% secure, and we
              cannot guarantee absolute protection.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">
              5. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data at any time by contacting us at{" "}
              <Link
                href="mailto:technioai@gmail.com"
                className="text-white hover:text-[--accent]"
              >
                technioai@gmail.com
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-xs text-white/60">
          Last updated: January 2025 ·{" "}
          <Link href="/terms" className="text-white hover:text-[--accent]">
            View Terms & Conditions
          </Link>
        </div>
      </div>
    </main>
  );
}
