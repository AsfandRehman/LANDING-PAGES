"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-20">
      {/* Text Content */}
      <div className="max-w-xl text-left ml-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          We build digital{" "} <br/>
          <span className="text-blue-600">products</span> for <br /> your{" "} <br />
          <span className="italic">success.</span>
        </h1>

        <Link
          href="#"
          className="inline-block bg-blue-600 w-65 text-center text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition"
        >
          GET STARTED NOW
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative mt-12 md:mt-0 md:ml-12">
        <div className="relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="/images/zsideoweb.png" // replace with your image
            alt="Hero"
            width={600}
            height={550}
            className="object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
