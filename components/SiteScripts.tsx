"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { initSite } from "@/lib/site";

declare global {
  interface Window {
    Lenis?: typeof Lenis;
    __smbSiteInit?: boolean;
  }
}

/**
 * Runs the page's DOM behaviour (smooth scroll, reveals, carousels, scroll-linked
 * sections, tutorial player, preview switchers) once, after hydration.
 * Guarded so React Strict Mode's double effect run doesn't attach everything twice.
 */
export default function SiteScripts() {
  useEffect(() => {
    if (window.__smbSiteInit) return;
    window.__smbSiteInit = true;
    window.Lenis = Lenis;
    initSite();
  }, []);
  return null;
}
