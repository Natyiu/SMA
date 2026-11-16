/* eslint-disable @next/next/no-img-element */
export default function Industries() {
  return (
    <>
    <section className="section ic-section" aria-label="Industries">
      {" "}
      <div className="wrap">
        {" "}
        <div className="ic-head reveal">
          {" "}
          <div className="section-head">
            {" "}
            <span className="kicker">Industries</span>
            {" "}
            <h2>Businesses for every kind of buyer.</h2>
            {" "}
            <p className="lead">Browse cash-flowing companies across dozens of industries, all in one feed.</p>
            {" "}
          </div>
          {" "}
          <div className="ic-ctrl">
            {" "}
            <a href="#marketplace" className="btn btn-dark">
              Browse all listings{" "}
              <svg viewBox="0 0 16 16" fill="none" style={{ width: "12px", height: "12px" }}>
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="ic-viewport">
        {" "}
        <button className="ic-arrow ic-prev" data-dir="-1" aria-label="Previous">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {" "}
        <button className="ic-arrow ic-next" data-dir="1" aria-label="Next">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {" "}
        <div className="ic-track" tabIndex={0}>
          {" "}
          <a className="ic-card" href="#marketplace">
            {" "}
            <div className="ic-img"><img src="/images/carousel/c15.jpg" alt="Cafés and restaurants" loading="lazy" /></div>
            {" "}
            <p>
              <b>Cafés and restaurants</b>
              {" "}with loyal regulars, trained staff, and steady daily foot traffic.
            </p>
            {" "}
            <span className="ic-link">
              Browse café listings{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {" "}
          </a>
          {" "}
          <a className="ic-card" href="#marketplace">
            {" "}
            <div className="ic-img"><img src="/images/carousel/c17.jpg" alt="Main Street retail" loading="lazy" /></div>
            {" "}
            <p><b>Main Street retail</b>{" "}shops with prime storefronts and decades of local goodwill.</p>
            {" "}
            <span className="ic-link">
              Browse retail listings{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {" "}
          </a>
          {" "}
          <a className="ic-card" href="#marketplace">
            {" "}
            <div className="ic-img"><img src="/images/carousel/c19.jpg" alt="Design and architecture" loading="lazy" /></div>
            {" "}
            <p>
              <b>Design and architecture</b>
              {" "}firms with repeat clients and a portfolio of signed projects.
            </p>
            {" "}
            <span className="ic-link">
              Browse design listings{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {" "}
          </a>
          {" "}
          <a className="ic-card" href="#marketplace">
            {" "}
            <div className="ic-img"><img src="/images/carousel/c20.jpg" alt="Agencies and consultancies" loading="lazy" /></div>
            {" "}
            <p>
              <b>Agencies and consultancies</b>
              {" "}built on long-term client relationships and recurring retainers.
            </p>
            {" "}
            <span className="ic-link">
              Browse agency listings{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {" "}
          </a>
          {" "}
          <a className="ic-card" href="#marketplace">
            {" "}
            <div className="ic-img"><img src="/images/carousel/c16.jpg" alt="Media and publishing" loading="lazy" /></div>
            {" "}
            <p>
              <b>Media and publishing</b>
              {" "}businesses with an established audience and advertiser base.
            </p>
            {" "}
            <span className="ic-link">
              Browse media listings{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {" "}
          </a>
          {" "}
          <a className="ic-card" href="#marketplace">
            {" "}
            <div className="ic-img"><img src="/images/carousel/c18.jpg" alt="Craft and studio businesses" loading="lazy" /></div>
            {" "}
            <p>
              <b>Craft and studio businesses</b>
              {" "}with a recognized brand, loyal customers, and skilled makers.
            </p>
            {" "}
            <span className="ic-link">
              Browse studio listings{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {" "}
          </a>
          {" "}
          <a className="ic-card" href="#marketplace">
            {" "}
            <div className="ic-img"><img src="/images/carousel/c21.jpg" alt="Home-based and online" loading="lazy" /></div>
            {" "}
            <p><b>Home-based and online</b>{" "}businesses you can run from anywhere, with low overhead.</p>
            {" "}
            <span className="ic-link">
              Browse online listings{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {" "}
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
}
