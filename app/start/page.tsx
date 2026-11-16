import type { Metadata } from "next";
import Link from "next/link";
import StartForm from "./StartForm";

export const metadata: Metadata = {
  title: "Start your free trial — SMB Market",
  description: "Start your 7-day free trial of SMB Market.",
};

export default function StartPage() {
  return (
    <main className="st">
      <div className="st-glow" aria-hidden="true" />
      <header className="st-nav">
        <Link href="/" className="logo" aria-label="SMB Market home">
          <span className="logo-mark">
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 12V7.5M8 12V4M13 12V9" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
          </span>
          SMB Market
        </Link>
        <Link href="/" className="st-back">← Back to home</Link>
      </header>

      <section className="st-wrap">
        <div className="st-copy">
          <span className="kicker">7-day free trial</span>
          <h1>Find the right business, starting today.</h1>
          <p>80,000+ businesses for sale, plus the deal tools, live coaching, and community to take you from discovery to close.</p>
          <ul className="st-list">
            <li>Every listing, tool, call, and course</li>
            <li>Weekly live coaching with deal reviews</li>
            <li>Cancel anytime during your trial</li>
          </ul>
        </div>
        <StartForm />
      </section>
    </main>
  );
}
