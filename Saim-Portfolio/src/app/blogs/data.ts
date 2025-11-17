// app/blogs/data.ts
export type PBlog = {
  id: number;
  title: string;
  slug?: string;

  excerpt?: string;

  // SEO (optional)
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  author?: string;
  publishedAt?: string; // ISO
  updatedAt?: string;   // ISO
  ogImage?: string;

  banner?: {
    image: { src: string; alt?: string };
  };

  // Simple description (Markdown supported)
  desc?: string;

  // Optional bullets
  bullets?: string[];

  // Optional references section
  references?: { label: string; url: string }[];
};

// ---- Author (Person) data for JSON-LD & UI ----
export const AUTHOR = {
  name: "Saim Ali Ahmad",
  givenName: "Saim",
  familyName: "Ahmad",
  alternateName: "Saim ZSIDEO",
  birthDate: "2005-03-16",
  nationality: "Pakistani",
  jobTitle: ["Entrepreneur", "Business Strategist", "Founder & CEO"],
  worksFor: {
    name: "ZSIDEO CONTENT LLC",
    url: "https://zsideocontentllc.com",
  },
  homeLocation: "Dubai, United Arab Emirates",
  sameAs: [
    "https://saimaliahmad.com",
    "https://zsideocontentllc.com",
    "https://www.instagram.com/saimzsideo",
    "https://www.youtube.com/@SaimZSIDEO",
    "https://www.linkedin.com/in/saimzsideo",
    // Keep your WikiAlpha source here too (even though it's not Wikipedia)
    "https://wikialpha.co/index.php?title=Saim_Ali_Ahmad",
  ],
};

export const PBLOGS: readonly PBlog[] = [
  {
    id: 1,
    title: "How I Scaled My First Service Business Before 20",
    slug: "scaled-first-service-business-before-20",
    excerpt:
      "Behind the scenes: pricing, delivery, and systems that kept quality high while revenue climbed.",
    seoTitle: "Scaling My First Service Business Before 20 — Systems, Pricing, Delivery",
    seoDescription:
      "How I scaled a service business in my teens using SOPs, fast delivery loops, and focused offers. A practical breakdown for young founders.",
    keywords: [
      "service business",
      "SOPs",
      "systems",
      "entrepreneurship",
      "operations",
      "youth entrepreneurship",
    ],
    author: AUTHOR.name,
    publishedAt: "2025-10-01T10:00:00.000Z",
    updatedAt: "2025-11-01T10:00:00.000Z",
    ogImage: "/images/firstclient.jpg",
    banner: {
      image: { src: "/images/firstclient.jpg", alt: "Laptop and notebook on a desk" },
    },
    desc: `I started with zero funding, zero audience, and no fancy brand.

**What worked**:
- Ruthless clarity on the offer
- Speedy delivery loops
- Documented SOPs from day one

This post breaks down the exact *structure* I used, the *mistakes* I made, and the *framework* I still apply.`,
    references: [
      { label: "Official Website", url: "https://saimaliahmad.com" },
      { label: "ZSIDEO CONTENT LLC", url: "https://zsideocontentllc.com" },
      { label: "WikiAlpha: Saim Ali Ahmad", url: "https://wikialpha.co/index.php?title=Saim_Ali_Ahmad" },
      { label: "Instagram", url: "https://www.instagram.com/saimzsideo" },
      { label: "YouTube", url: "https://www.youtube.com/@SaimZSIDEO" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/saimzsideo" },
    ],
  },
  {
    id: 2,
    title: "My Content Engine: 1 Shoot → 30+ Clips",
    slug: "content-engine-one-shoot-30-clips",
    excerpt:
      "Turning one recording session into a month of short-form content without losing quality.",
    seoTitle: "My Content Engine: 1 Shoot to 30+ Short-Form Clips",
    seoDescription:
      "Record once, publish everywhere. The exact workflow to turn one session into a month of high-quality short-form content.",
    keywords: ["content", "short-form", "workflow", "TikTok", "Reels", "YouTube Shorts"],
    author: AUTHOR.name,
    publishedAt: "2025-10-12T10:00:00.000Z",
    updatedAt: "2025-11-01T10:00:00.000Z",
    ogImage: "/images/hq1.jpg",
    banner: {
      image: { src: "/images/hq1.jpg", alt: "Camera and lighting setup" },
    },
    desc: `If you're busy operating, you don't have time to script daily.

Here's my **record-once, publish-everywhere** engine:
1. Shoot long form (45–60 min)
2. Extract 12 anchor ideas
3. Cut into 9:16, add captions, brand, CTA
4. Schedule for 30 days

I share templates + the file structure I use.`,
    references: [
      { label: "ZSIDEO CONTENT LLC", url: "https://zsideocontentllc.com" },
      { label: "Instagram", url: "https://www.instagram.com/saimzsideo" },
      { label: "YouTube", url: "https://www.youtube.com/@SaimZSIDEO" },
      { label: "WikiAlpha: Saim Ali Ahmad", url: "https://wikialpha.co/index.php?title=Saim_Ali_Ahmad" },
    ],
  },

  // (Optional) You can add a dedicated “About Saim / Biography” post to fully leverage the WikiAlpha info:
  {
    id: 3,
    title: "About Saim Ali Ahmad — Founder, Operator, Builder",
    slug: "about-saim-ali-ahmad",
    excerpt:
      "Pakistani entrepreneur and founder of ZSIDEO CONTENT LLC, operating from the UAE — building systemized, service-based companies.",
    seoTitle: "About Saim Ali Ahmad | Saim ZSIDEO — Founder of ZSIDEO CONTENT LLC",
    seoDescription:
      "Saim Ali Ahmad (Saim ZSIDEO) — entrepreneur and business strategist. Founder of ZSIDEO CONTENT LLC in UAE. Philosophy: execution, systems, authenticity.",
    keywords: [
      "Saim Ali Ahmad",
      "Saim ZSIDEO",
      "ZSIDEO CONTENT LLC",
      "entrepreneur",
      "UAE founder",
      "Pakistani entrepreneur",
    ],
    author: AUTHOR.name,
    publishedAt: "2025-10-20T10:00:00.000Z",
    updatedAt: "2025-11-01T10:00:00.000Z",
    ogImage: "/images/saim.jpg",
    banner: { image: { src: "/images/saim.jpg", alt: "Saim Ali Ahmad portrait" } },
    desc: `**Saim Ali Ahmad** (born 16 March 2005) is a Pakistani entrepreneur and business strategist, founder of **ZSIDEO CONTENT LLC** — a media and marketing company headquartered in **Sharjah Media City (SHAMS), UAE**.

He is best known for scaling creative service-based businesses and mentoring young founders under his personal brand, **Saim ZSIDEO**. By his early twenties, Saim had grown ZSIDEO CONTENT into a seven-figure enterprise recognized for its approach to short-form video production and social media marketing.

### Early life and education
- Born in Lahore, Pakistan (2005-03-16), raised in a middle-class family that valued education and entrepreneurship.
- Attended **Pak Turk High School**; developed an interest in tech, media, and online business.
- Studied **BBA** at **Anglia Ruskin University (UK)**, specializing in marketing and strategic management.
- As a teenager, explored freelancing, e-commerce, and digital marketing; earned over **US$10,000** from early online projects.
- Influences include **Jeremy Pogue**, **Nik Setting**, and **Devin Jatho**.

### Career — ZSIDEO CONTENT LLC (founded 2022)
- Short-form content agency focused on **video editing, creative direction, and social media strategy**.
- Known for **high-volume editing systems**, **data-driven ad creatives**, and structured client delivery pipelines.
- Operates from **SHAMS, UAE**; client base spans **North America** and the **Middle East**.
- Reported to have surpassed **seven-figure monthly revenues** by 2025.

### Expansion
- **Zynor Technologies** — creative-tech and AI automation.
- **Saim ZSIDEO Mentorship** — coaching for agency owners on systems and scaling.
- **Crypto & Funded Accounts Division** — managing 100+ funded trading accounts.

### Philosophy
**Execution, systems, authenticity.** Build sustainable service businesses with SOPs, onboarding frameworks, and accountability. Long-term target: **US$100M/month in output**.

### Personal brand & presence
Instagram **@SaimZSIDEO**, YouTube, LinkedIn. Lives in **Dubai, UAE**.

> *This biography summarizes publicly available information and your provided WikiAlpha entry.*`,
    references: [
      { label: "Official Website", url: "https://saimaliahmad.com" },
      { label: "ZSIDEO CONTENT LLC", url: "https://zsideocontentllc.com" },
      { label: "Instagram", url: "https://www.instagram.com/saimzsideo" },
      { label: "YouTube", url: "https://www.youtube.com/@SaimZSIDEO" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/saimzsideo" },
      { label: "WikiAlpha: Saim Ali Ahmad", url: "https://wikialpha.co/index.php?title=Saim_Ali_Ahmad" },
    ],
  },
];
