"use client";

import { useEffect, useRef } from "react";

type RenderOptions = { initialStatus?: "enabled" | "disabled" };

declare global {
  interface Window {
    senderForms?: { render: (formId: string, options?: RenderOptions) => void };
  }
}

/**
 * Repeatedly attempts to render a Sender embed form when:
 *  - the container exists
 *  - the library is ready (window.senderForms)
 * Tries up to ~10 seconds, then stops.
 */
export function useSenderRender(formId: string, containerSelector: string, opts?: RenderOptions) {
  const rendered = useRef(false);

  useEffect(() => {
    let tries = 0;
    const maxTries = 100;   // 100 * 100ms = 10s
    const intervalMs = 100;

    const tryRender = () => {
      if (rendered.current) return;

      const container = document.querySelector(containerSelector);
      const api = window.senderForms;

      if (container && api) {
        try {
          api.render(formId, { initialStatus: "enabled", ...(opts ?? {}) });
          rendered.current = true;
          clearInterval(timer);
          return;
        } catch {
          // keep trying
        }
      }

      if (++tries >= maxTries) clearInterval(timer);
    };

    const timer = window.setInterval(tryRender, intervalMs);
    // kick immediately
    tryRender();

    return () => {
      clearInterval(timer);
      rendered.current = false;
      // ensure clean container on unmount in SPA
      const c = document.querySelector(containerSelector) as HTMLElement | null;
      if (c) c.innerHTML = "";
    };
  }, [formId, containerSelector, opts]);
}
