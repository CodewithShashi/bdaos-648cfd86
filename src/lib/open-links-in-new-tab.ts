import { useEffect } from "react";

/**
 * Site-wide behaviour: every navigational link / CTA opens in a new browser tab.
 * In-page hash anchors, placeholder "#" links, mailto/tel links and
 * modified clicks (ctrl/cmd/middle) keep their default behaviour.
 */
export function useOpenLinksInNewTab() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const raw = anchor.getAttribute("href");
      if (!raw) return;
      if (anchor.target === "_blank") return;
      if (anchor.hasAttribute("data-same-tab")) return;

      if (anchor.hasAttribute("download")) return;
      if (raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      // Same page, only a hash change -> let it scroll normally.
      if (
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        url.hash
      ) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      window.open(url.href, "_blank", "noopener,noreferrer");
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}
