/* eslint-disable @next/next/no-img-element */
export default function Tutorial() {
  return (
    <>
    <section className="section tut" id="tutorial" style={{ paddingTop: "40px" }}>
      {" "}
      <div className="wrap">
        {" "}
        <div className="section-head center reveal">
          {" "}
          <span className="kicker">Tutorial</span>
          {" "}
          <h2>See how SMB Market works, start to finish.</h2>
          {" "}
          <p className="lead">
            Josh Wilson walks through a real search, from setting a buy box to checking take-home pay. Jump to any lesson.
          </p>
          {" "}
        </div>
        {" "}
        <div className="tp reveal">
          {" "}
          <div className="tp-player">
            {" "}
            <video className="tp-v" preload="metadata" playsInline poster="/images/smb-poster.jpg"><source src="/images/smb.mp4" type="video/mp4" /></video>
            {" "}
            <button className="tp-cover tn" aria-label="Play the tutorial">
              {" "}
              <span className="tn-bg"><img src="/images/josh-talk.jpg" alt="" /></span>
              {" "}
              <span className="tn-copy">
                {" "}
                <span className="tn-pill"><i />Tutorial · 10 lessons</span>
                {" "}
                <span className="tn-title">Buy the right business.{" "}<span>Start to finish.</span></span>
                {" "}
                <span className="tp-now">
                  <small>Lesson{" "}<i className="tp-now-n">1</i>{" "}of 10</small>
                  <b className="tp-now-t">The buy box framework</b>
                </span>
                {" "}
              </span>
              {" "}
              <span className="tn-btn"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg></span>
              {" "}
              <span className="tn-sub">“Let's start with the one thing most buyers skip: your buy box.”</span>
              {" "}
              <span className="tn-bar">
                {" "}
                <svg className="tn-ico" viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                {" "}
                <svg className="tn-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
                  <path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" />
                </svg>
                {" "}
                <span className="tn-time">0:00 / 1:15:31</span>
                {" "}
                <span className="tn-track">
                  <b />
                  <i style={{ left: "11.92%" }} />
                  <i style={{ left: "15.89%" }} />
                  <i style={{ left: "19.86%" }} />
                  <i style={{ left: "35.75%" }} />
                  <i style={{ left: "39.73%" }} />
                  <i style={{ left: "43.70%" }} />
                  <i style={{ left: "71.51%" }} />
                  <i style={{ left: "75.48%" }} />
                  <i style={{ left: "87.40%" }} />
                </span>
                {" "}
                <span className="tn-cc">CC</span>
                {" "}
                <svg className="tn-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
                {" "}
              </span>
              {" "}
            </button>
            {" "}
          </div>
          {" "}
          <aside className="tp-list">
            {" "}
            <div className="tp-head">
              {" "}
              <img src="/images/josh-ava.jpg" alt="" />
              {" "}
              <div><b>SMB Market walkthrough</b><small>Josh Wilson · 10 lessons · 1h 15m</small></div>
              {" "}
            </div>
            {" "}
            <ol className="tp-items" data-lenis-prevent="">
              <li>
                <button className="tp-item on" data-t="0">
                  <span className="tp-n">
                    <em>01</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>The buy box framework</b>
                    <small>Pursue, negotiate, or pass: how to triage any deal.</small>
                  </span>
                  <span className="tp-time">0:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="540">
                  <span className="tp-n">
                    <em>02</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>First look at the marketplace</b>
                    <small>Listings from 30+ sources, scored on your criteria.</small>
                  </span>
                  <span className="tp-time">9:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="720">
                  <span className="tp-n">
                    <em>03</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>What makes a business survive its SBA loan</b>
                    <small>The traits that predict repayment.</small>
                  </span>
                  <span className="tp-time">12:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="900">
                  <span className="tp-n">
                    <em>04</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>Industry sets the floor</b>
                    <small>Default rates by sector, and what they mean for you.</small>
                  </span>
                  <span className="tp-time">15:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="1620">
                  <span className="tp-n">
                    <em>05</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>A resilient deal in one picture</b>
                    <small>The checklist a strong deal should pass.</small>
                  </span>
                  <span className="tp-time">27:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="1800">
                  <span className="tp-n">
                    <em>06</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>How the business makes money</b>
                    <small>Recurring revenue, diversification, and the operator.</small>
                  </span>
                  <span className="tp-time">30:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="1980">
                  <span className="tp-n">
                    <em>07</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>Geography, workload, and margins</b>
                    <small>Scoring the rest of your buy box, row by row.</small>
                  </span>
                  <span className="tp-time">33:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="3240">
                  <span className="tp-n">
                    <em>08</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>Running a listing through the calculator</b>
                    <small>Debt service and cash at close on a real deal.</small>
                  </span>
                  <span className="tp-time">54:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="3420">
                  <span className="tp-n">
                    <em>09</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>Screening listings in the marketplace</b>
                    <small>Filter fast and open only the deals that fit.</small>
                  </span>
                  <span className="tp-time">57:00</span>
                </button>
              </li>
              <li>
                <button className="tp-item" data-t="3960">
                  <span className="tp-n">
                    <em>10</em>
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                  </span>
                  <span className="tp-tx">
                    <b>Take-home pay and loan structure</b>
                    <small>What you actually keep, and how DSCR holds up.</small>
                  </span>
                  <span className="tp-time">1:06:00</span>
                </button>
              </li>
            </ol>
            {" "}
          </aside>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
}
