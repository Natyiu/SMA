/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <>
    <section className="hero" id="marketplace">
      {" "}
      <div className="wrap">
        {" "}
        <div className="hero-copy">
          {" "}
          <h1>
            <span className="hw-l">Everything you</span>
            {" "}
            <span className="hw-b">need to</span>
            <br className="br-d" />
            {" "}
            <span className="hw-b">buy</span>
            {" "}
            <span className="hw-l">the</span>
            {" "}
            <span className="hw-b">right business</span>
            {" "}
            <span className="hw-l">all</span>
            <br className="br-d" />
            {" "}
            <span className="hw-m">in one place.</span>
          </h1>
          {" "}
          <p className="lead">
            80,000+
            <sup className="fn">1</sup>
            {" "}businesses for sale, plus the deal tools, live coaching, and community to take you from discovery to close.
          </p>
          {" "}
          <div className="hero-actions">{" "}<a href="/start" className="btn btn-primary btn-lg">Find My Business</a>{" "}</div>
          {" "}
        </div>
        {" "}
        <div className="hero-feed reveal">
          {" "}
          <div className="hc-tabs">
            <button type="button" className="hc-tab on" data-cat="all">All</button>
            <button type="button" className="hc-tab" data-cat="service">Service Businesses</button>
            <button type="button" className="hc-tab" data-cat="automotive">Automotive</button>
            <button type="button" className="hc-tab" data-cat="manufacturing">Manufacturing</button>
            <button type="button" className="hc-tab" data-cat="wholesale">Wholesale</button>
            <button type="button" className="hc-tab" data-cat="accounting">Accounting</button>
          </div>
          {" "}
          <div className="hc-grid">
            {" "}
            <a className="hc" href="/start" data-cat="service">
              {" "}
              <div className="hc-img" style={{ backgroundImage: "url(/images/listings/dental.jpg)" }}><span className="hc-new"><i />New today</span></div>
              {" "}
              <div className="hc-body">
                {" "}
                <div className="hc-top">
                  <span className="hc-cat">Service Businesses</span>
                  <span className="hc-fin">SDE $370k · Revenue $518k</span>
                </div>
                {" "}
                <h3>Dental Practice Digital Marketing Agency - 52 Clients - 63% Growth</h3>
                {" "}
                <div className="hc-price"><div><small>Asking</small><b>$1.4M</b></div><span className="hc-mult">3.8x SDE</span></div>
                {" "}
                <span className="hc-link">
                  View listing{" "}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a className="hc" href="/start" data-cat="automotive">
              {" "}
              <div className="hc-img" style={{ backgroundImage: "url(/images/listings/gas-station.jpg)" }}><span className="hc-new"><i />New today</span></div>
              {" "}
              <div className="hc-body">
                {" "}
                <div className="hc-top">
                  <span className="hc-cat">Automotive</span>
                  <span className="hc-fin">SDE $376k · Revenue $1.2M</span>
                </div>
                {" "}
                <h3>Gas Station New Listing: $372,000 Net Combined - 2 Corner Locations</h3>
                {" "}
                <div className="hc-price"><div><small>Asking</small><b>$799k</b></div><span className="hc-mult">2.1x SDE</span></div>
                {" "}
                <span className="hc-link">
                  View listing{" "}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a className="hc" href="/start" data-cat="manufacturing">
              {" "}
              <div className="hc-img" style={{ backgroundImage: "url(/images/listings/fabricator.jpg)" }}><span className="hc-new"><i />New today</span></div>
              {" "}
              <div className="hc-body">
                {" "}
                <div className="hc-top">
                  <span className="hc-cat">Manufacturing</span>
                  <span className="hc-fin">SDE $572k · Revenue $2.3M</span>
                </div>
                {" "}
                <h3>Stone Fabricator To The Luxury Home Market For Sale</h3>
                {" "}
                <div className="hc-price"><div><small>Asking</small><b>$1.7M</b></div><span className="hc-mult">3.0x SDE</span></div>
                {" "}
                <span className="hc-link">
                  View listing{" "}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="wrap stats">
        {" "}
        <div className="stats-grid">
          {" "}
          <div className="stat"><b>91,652<sup className="fn">1</sup></b><span>Active listings</span></div>
          {" "}
          <div className="stat"><b>30+</b><span>Brokers and marketplaces</span></div>
          {" "}
          <div className="stat"><b>3,500+<sup className="fn">2</sup></b><span>Buyers in the community</span></div>
          {" "}
          <div className="stat"><b>52</b><span>Live coaching calls a year</span></div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
}
