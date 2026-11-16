"use client";
import { useState } from "react";

const PLANS = {
  annual: { name: "Annual", price: "$53", note: "Billed annually at $636" },
  monthly: { name: "Monthly", price: "$67", note: "Billed monthly" },
} as const;

export default function StartForm() {
  const [plan, setPlan] = useState<keyof typeof PLANS>("annual");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="st-card st-done">
        <div className="st-check" aria-hidden="true">✓</div>
        <h2>You&apos;re in.</h2>
        <p>Thanks for starting your {PLANS[plan].name.toLowerCase()} trial. We&apos;ll email you next steps shortly.</p>
        <a href="/" className="btn btn-dark btn-lg">Back to home</a>
      </div>
    );
  }

  return (
    <form className="st-card" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="st-plans" role="radiogroup" aria-label="Plan">
        {(Object.keys(PLANS) as (keyof typeof PLANS)[]).map((k) => (
          <button type="button" key={k} role="radio" aria-checked={plan === k}
            className={"st-plan" + (plan === k ? " on" : "")} onClick={() => setPlan(k)}>
            <span>{PLANS[k].name}{k === "annual" && <em>Save 20%</em>}</span>
            <b>{PLANS[k].price}<small>/month</small></b>
            <i>{PLANS[k].note}</i>
          </button>
        ))}
      </div>
      <label>Full name<input name="name" required autoComplete="name" placeholder="Jane Doe" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
      <button type="submit" className="btn btn-dark btn-lg st-submit">Start 7-day free trial</button>
      <p className="st-fine">No charge today. Cancel anytime before your trial ends.</p>
    </form>
  );
}
