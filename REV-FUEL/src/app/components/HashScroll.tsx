// components/HashScroll.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HashScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams(); // forces effect on client nav

  useEffect(() => {
    // On mount or route/hash change, scroll to the element if a hash exists
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Also handle manual hash changes
    const onHashChange = () => {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
