"use client";
import { useEffect, useState } from "react";

const LINKS = [
  ["#marketplace", "Marketplace"],
  ["#tools", "Buyer system"],
  ["#compare", "Compare"],
  ["#pricing", "Pricing"],
  ["#faq", "FAQ"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  // close the mobile menu on Escape or when the viewport grows past the mobile breakpoint
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width:1001px)");
    const onMq = () => mq.matches && setOpen(false);
    addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    // menu state lives in data-menu, not className: lib/site.js toggles .scrolled on this element
    <header className="nav" id="nav" data-menu={open ? "open" : undefined}>
      <div className="wrap nav-inner">
        <a href="#" className="logo" aria-label="SMB Market home">
          <span className="logo-mark">
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 12V7.5M8 12V4M13 12V9" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
          </span>
          {" "}SMB Market{" "}
        </a>
        <nav className="nav-links">
          {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-cta">
          <a href="/start" className="login">Log in</a>
          <a href="/start" className="btn btn-dark">Start free trial</a>
          <button type="button" className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
      <nav id="nav-menu" className="nav-menu" hidden={!open}>
        {LINKS.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="/start" className="nav-menu-login">Log in</a>
      </nav>
    </header>
  );
}
