'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] font-cormorant min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold uppercase italic font-cinzel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        <p className="mt-4 text-[var(--foreground)]/70">
          Whether you&apos;re a fan, a journalist, or an industry pro—I&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="px-6 max-w-3xl mx-auto space-y-12">
        <motion.form
          className="space-y-6 bg-[var(--color-plum)] p-8 rounded-lg border border-[var(--foreground)]/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#1e1e1e] text-white px-4 py-3 rounded-md border border-[#333] placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#1e1e1e] text-white px-4 py-3 rounded-md border border-[#333] placeholder-gray-500"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full bg-[#1e1e1e] text-white px-4 py-3 rounded-md border border-[#333] placeholder-gray-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-[var(--accent)] text-black rounded-md font-semibold hover:opacity-90 transition"
            onClick={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-sm text-green-400 pt-2">Thanks! Your message has been received.</p>
          )}
        </motion.form>

        {/* Booking Info */}
        <div className="text-center text-[var(--foreground)]/40 text-xl space-y-2">
          <p>
            Booking / Management:{' '}
            <span className="text-[var(--foreground)] font-medium">team@victoriaroserecords.com</span>
          </p>
         
        </div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SocialLink href="https://www.tiktok.com/@victoriaroserecords" label="TikTok" />
          <SocialLink href="https://www.instagram.com/victoriarosemusic_/" label="Instagram" />
          <SocialLink href="https://x.com/victoriaroserec" label="Twitter/X" />
          <SocialLink href="https://www.youtube.com/@victoriarose9348" label="YouTube" />
        </motion.div>

        {/* Mailing List Signup */}
        <div className="pt-16">
          <motion.h2
            className="text-2xl md:text-3xl text-center mb-4 italic font-cinzel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join the Mailing List
          </motion.h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail('');
              setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 w-full max-w-sm bg-[#1e1e1e] border border-[#333] text-white rounded-md"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[var(--accent)] text-black rounded-md hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="text-sm text-green-400 mt-3 text-center">
              You’ve been added to the list!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--accent)] hover:underline text-lg"
    >
      {label}
    </Link>
  );
}
