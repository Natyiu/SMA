/* eslint-disable @next/next/no-img-element */
export default function Cta() {
  return (
    <>
    <section className="cta">
      {" "}
      <div className="cta-box reveal">
        {" "}
        <div className="cta-img" aria-hidden="true" />
        {" "}
        <h2>Don't just find a business. Buy the right one.</h2>
        {" "}
        <p>
          More than 80,000 listings are inside SMB Market right now, with more added every day. Find the one that fits your goals and your buying power.
        </p>
        {" "}
        <div className="hero-actions">
          <a href="/start" className="btn btn-white btn-lg">Start your 7-day free trial</a>
        </div>
        {" "}
        <p className="hero-note">Free for 7 days<span>·</span>Cancel anytime<span>·</span>$67/mo after</p>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
}
