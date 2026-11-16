/* eslint-disable @next/next/no-img-element */
export default function HeroB() {
  return (
    <>
    <section className="hero-b" id="marketplace-b" aria-label="Hero">
      {" "}
      <div className="hb-wrap">
        {" "}
        <div className="hb-copy">
          {" "}
          <h1>Everything you need to buy<br /><span className="hb-grad">the right business</span></h1>
          {" "}
          <p className="hb-lead">
            80,000+
            <sup className="fn">1</sup>
            {" "}businesses for sale, plus the deal tools, live coaching, and community to take you from discovery to close.
          </p>
          {" "}
          <div className="hb-actions">
            <a href="https://smbmarket.com/#pricing-plans" className="hb-btn">
              Find my business{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#tools" className="hb-link">
              See the buyer system{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          {" "}
        </div>
        {" "}
        <div className="hb-app" aria-hidden="true">
          {" "}
          <div className="hb-list">
            <div className="hb-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
              Search listings
            </div>
            <div className="hb-row">
              <img src="/images/listings/dental.jpg" alt="" />
              <div><b>Dental Practice Digital Marketing Agency</b><small>Service Businesses · $1.4M</small></div>
            </div>
            <div className="hb-row">
              <img src="/images/listings/gas-station.jpg" alt="" />
              <div><b>Gas Station: 2 Corner Locations</b><small>Automotive · $799k</small></div>
            </div>
            <div className="hb-row">
              <img src="/images/listings/fabricator.jpg" alt="" />
              <div><b>Stone Fabricator, Luxury Home Market</b><small>Manufacturing · $1.7M</small></div>
            </div>
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
}
