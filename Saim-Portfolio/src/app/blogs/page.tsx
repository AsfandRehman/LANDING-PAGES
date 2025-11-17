// app/blogs/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PBLOGS } from "./data";
import { slugify } from "../../lib/slug";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Personal writings on building, operating, and scaling service businesses — simple, direct, and proof-driven.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Articles",
    description:
      "Personal writings on building, operating, and scaling service businesses.",
    url: "/blogs",
    type: "website",
  },
};

type Q = { q?: string | string[] };

function BlogsItemListJsonLd() {
  const items = PBLOGS.map((b, i) => {
    const slug = b.slug ?? slugify(b.title ?? String(b.id));
    return { "@type": "ListItem", position: i + 1, url: `/blogs/${slug}`, name: b.title };
  });

  const jsonLd = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: items };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogsIndexPage({
  searchParams,
}: {
  searchParams?: Promise<Q>;
}) {
  const sp = (await searchParams) ?? {};
  const qRaw = Array.isArray(sp.q) ? sp.q[0] : sp.q ?? "";
  const q = qRaw.trim().toLowerCase();

  const list = q
    ? PBLOGS.filter((b) => (b.title || "").toLowerCase().includes(q))
    : PBLOGS;

  return (
    <main className="min-h-screen bg-[#0B0B10] text-white">
      {/* Simple header section, matching your Hero vibe */}
      <section className="relative isolate">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_22%,rgba(56,189,248,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_88%_26%,rgba(168,85,247,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Articles
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Simple reads on building, content, and operations.
          </p>

          {/* Minimal client-side search (uses URL ?q=) */}
          <form className="mx-auto mt-6 flex max-w-md items-center gap-2">
            <input
              name="q"
              defaultValue={qRaw}
              placeholder="Search articles…"
              className="w-full rounded-xl bg-white/5 px-4 py-2 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50"
            />
            <button
              type="submit"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-24">
        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => {
            const slug = b.slug ?? slugify(b.title ?? String(b.id));
            const href = `/blogs/${slug}`;
            const img = b.ogImage ?? b.banner?.image?.src ?? "/images/placeholder.jpg";
            const alt = b.banner?.image?.alt ?? b.title ?? "Article cover";
            return (
              <article
                key={b.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={img}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold">
                    <Link href={href} className="hover:underline">
                      {b.title}
                    </Link>
                  </h3>
                  {b.excerpt && (
                    <p className="mt-1 line-clamp-2 text-sm text-white/70">
                      {b.excerpt}
                    </p>
                  )}
                  <Link
                    href={href}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-white/80"
                  >
                    Read → 
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-white/60">
            No articles found for <span className="font-semibold">“{qRaw}”</span>
          </p>
        )}
      </section>

      <BlogsItemListJsonLd />
    </main>
  );
}
