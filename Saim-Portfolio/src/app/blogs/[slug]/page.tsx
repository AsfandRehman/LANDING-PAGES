// app/blogs/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { PBLOGS, AUTHOR } from "../data";
import { slugify } from "../../../lib/slug";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

type Blog = (typeof PBLOGS)[number];

function findPostBySlug(raw: string): Blog | undefined {
  const slug = decodeURIComponent((raw || "").trim().toLowerCase());
  return (
    PBLOGS.find((p) => (p.slug || "").toLowerCase() === slug) ||
    PBLOGS.find((p) => slugify(p.title ?? String(p.id)) === slug) ||
    PBLOGS.find((p) => String(p.id) === slug)
  );
}

// ---- JSON-LD helpers ----
function ArticleJsonLd({
  slug,
  post,
}: {
  slug: string;
  post: Blog;
}) {
  const url = `/blogs/${slug}`;
  const ogImage = post.ogImage ?? post.banner?.image?.src ?? "/images/placeholder.jpg";

  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt ?? "",
    image: [ogImage],
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt ?? post.publishedAt ?? undefined,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      alternateName: AUTHOR.alternateName,
      jobTitle: Array.isArray(AUTHOR.jobTitle) ? AUTHOR.jobTitle.join(", ") : AUTHOR.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: AUTHOR.worksFor.name,
        url: AUTHOR.worksFor.url,
      },
      sameAs: AUTHOR.sameAs,
    },
    publisher: {
      "@type": "Organization",
      name: AUTHOR.worksFor.name,
      url: AUTHOR.worksFor.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function PersonJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    alternateName: AUTHOR.alternateName,
    givenName: AUTHOR.givenName,
    familyName: AUTHOR.familyName,
    birthDate: AUTHOR.birthDate,
    nationality: AUTHOR.nationality,
    jobTitle: AUTHOR.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: AUTHOR.worksFor.name,
      url: AUTHOR.worksFor.url,
    },
    homeLocation: AUTHOR.homeLocation,
    sameAs: AUTHOR.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

// ---- Metadata ----
export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt ?? "";
  const url = `/blogs/${slug}`;
  const ogImage = post.ogImage ?? post.banner?.image?.src ?? "/images/placeholder.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: ogImage }],
    },
  };
}

export default async function BlogDetail({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) return notFound();

  const title = post.seoTitle ?? post.title;
  const desc = post.desc ?? "";
  const author = post.author ?? AUTHOR.name;
  const published = post.publishedAt ? new Date(post.publishedAt) : null;

  const heroImage = post.banner?.image?.src ?? post.ogImage ?? "/images/placeholder.jpg";
  const heroAlt = post.banner?.image?.alt ?? post.title;

  return (
    <main className="relative isolate min-h-screen bg-[#0B0B10] text-white">
      {/* background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_22%,rgba(56,189,248,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_88%_26%,rgba(168,85,247,0.10),transparent_60%)]" />
      </div>

      <div className="relative z-10">
        <div className="h-16 sm:h-20 md:h-24" />

        <article className="mx-auto max-w-3xl px-5 py-10 md:py-16">
          <header>
            <h1 className="text-[30px] font-bold leading-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/60">
              <span>By {author}</span>
              {published && (
                <time dateTime={published.toISOString()}>
                  {published.toLocaleDateString()}
                </time>
              )}
            </div>
          </header>

          {/* Hero image */}
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>

          {/* Body */}
          {desc && (
            <section className="prose prose-invert prose-sm md:prose-base max-w-none mt-8 text-white/90">
              <ReactMarkdown>{desc}</ReactMarkdown>
            </section>
          )}

          {/* Optional references */}
          {post.references?.length ? (
            <section className="mt-10">
              <h3 className="text-sm font-semibold text-white/80">References</h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-white/75">
                {post.references.map((r, i) => (
                  <li key={i}>
                    <a
                      href={r.url}
                      className="underline decoration-white/30 underline-offset-2 hover:decoration-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* About the author */}
          <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="text-sm text-white/80">
              <p className="font-semibold">{AUTHOR.name}</p>
              <p className="mt-1">
                Pakistani entrepreneur & founder of{" "}
                <a
                  href={AUTHOR.worksFor.url}
                  className="underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {AUTHOR.worksFor.name}
                </a>{" "}
                in the UAE. Focused on systems, short-form content, and service-based business scale.
              </p>
              <div className="mt-2 flex flex-wrap gap-3 text-xs">
                {AUTHOR.sameAs.map((u) => (
                  <a
                    key={u}
                    href={u}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-3 py-1 text-white/70 hover:bg-white/10"
                  >
                    {new URL(u).hostname.replace("www.", "")}
                  </a>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-10 flex justify-center">
            <Link
              href="/blogs"
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 hover:bg-white/10"
            >
              ← Back to all articles
            </Link>
          </div>

          {post.updatedAt && (
            <p className="mt-6 text-center text-[11px] text-white/50">
              Last updated: {new Date(post.updatedAt).toLocaleDateString()}
            </p>
          )}
        </article>

        {/* JSON-LD for the page */}
        <ArticleJsonLd slug={slug} post={post} />
        <PersonJsonLd />
      </div>
    </main>
  );
}
