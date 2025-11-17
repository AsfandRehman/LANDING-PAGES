// components/ContactSection.tsx
"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Mail, UserRound, MessageSquareText } from "lucide-react";

const ACCENT = "#FFEB3B";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState<"idle" | "sending" | "ok">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      setSent("sending");
      // TODO: send to your API route
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify({ name, email, msg }) });
      await new Promise((r) => setTimeout(r, 600));
      setSent("ok");
      setName("");
      setEmail("");
      setMsg("");
    } catch {
      setSent("idle");
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate bg-[#0B0B0B] py-16 sm:py-20"
    >
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[6%] top-[10%] h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.14),transparent_60%)] blur-2xl" />
        <div className="absolute right-[8%] bottom-[8%] h-60 w-60 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.10),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        {/* Left: heading & copy */}
        <div className="text-center lg:text-left">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Ready to Start? <span style={{ color: ACCENT }}>Contact Us</span>
          </h2>

          <p className="mt-3 max-w-xl text-white/70 lg:mt-4">
            Tell us a little about your project. We’ll reply within 24 hours
            with next steps and a quick call slot.
          </p>

          <ul className="mx-auto mt-6 grid max-w-md gap-2 text-left text-sm text-white/70 lg:mx-0">
            <li className="flex items-start gap-2">
              <span
                className="mt-[6px] inline-block size-2 rounded-full"
                style={{ background: ACCENT }}
              />
              Project scoping & timelines
            </li>
            <li className="flex items-start gap-2">
              <span
                className="mt-[6px] inline-block size-2 rounded-full"
                style={{ background: ACCENT }}
              />
              Clear pricing—no surprises
            </li>
            <li className="flex items-start gap-2">
              <span
                className="mt-[6px] inline-block size-2 rounded-full"
                style={{ background: ACCENT }}
              />
              Built for performance & scale
            </li>
          </ul>
        </div>

        {/* Right: compact, aligned form card */}
        <div className="mx-auto w-full max-w-xl">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md ring-1 ring-white/10"
          >
            {/* email + send (newsletter style) */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-full border border-white/10 bg-black/30 py-3 pl-10 pr-4 text-sm text-white placeholder-white/45 outline-none ring-1 ring-white/10 transition focus:border-white/20"
                />
              </div>

              <button
                type="submit"
                disabled={sent === "sending"}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#0b0b0b] transition disabled:opacity-70"
                style={{ background: ACCENT }}
              >
                {sent === "sending" ? "Sending…" : "Send"}
                <span className="grid size-7 place-items-center rounded-full bg-black/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>

            {/* name */}
            <div className="relative mt-4">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full rounded-full border border-white/10 bg-black/30 py-3 pl-10 pr-4 text-sm text-white placeholder-white/45 outline-none ring-1 ring-white/10"
              />
            </div>

            {/* message */}
            <div className="relative mt-4">
              <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-white/60" />
              <textarea
                id="message"
                rows={5}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Message (optional)"
                className="w-full resize-y rounded-2xl border border-white/10 bg-black/30 py-3 pl-10 pr-4 text-sm text-white placeholder-white/45 outline-none ring-1 ring-white/10"
              />
            </div>

            {sent === "ok" ? (
              <p className="mt-3 rounded-lg bg-green-500/10 px-3 py-2 text-center text-sm text-green-300">
                Thanks! We’ll get back to you shortly.
              </p>
            ) : (
              <p className="mt-3 text-center text-xs text-white/50">
                We respect your time and inbox. No spam—ever.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
