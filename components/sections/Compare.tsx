/* eslint-disable @next/next/no-img-element */

/* Phone version of the comparison: short labels, one checklist, SMB Market as a dark column.
   Values: "y" = yes, "x" = no, "p" = limited / paid add-on, anything else is shown as text. */
const MOBILE_ROWS: [string, string, string, string][] = [
  ["Listings", "80k+", "Own only", "20k+"],
  ["Off-market deals", "y", "x", "y"],
  ["Buy box + FitScore", "y", "x", "p"],
  ["Take-home pay analyzer", "y", "x", "y"],
  ["CIM analyzer", "y", "x", "x"],
  ["Deal pipeline CRM", "y", "x", "p"],
  ["Weekly live coaching", "y", "x", "x"],
  ["Community deal reviews", "y", "x", "p"],
  ["Step-by-step curriculum", "y", "x", "x"],
  ["Price / month", "$67", "Varies", "$199"],
];

function Mark({ v }: { v: string }) {
  if (v === "y") return <i className="cm-y" aria-label="Yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></i>;
  if (v === "x") return <i className="cm-x" aria-label="No"><svg viewBox="0 0 12 12"><path d="M3.5 3.5l5 5M8.5 3.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></i>;
  if (v === "p") return <i className="cm-p" aria-label="Limited or paid add-on" />;
  return <b className="cm-t">{v}</b>;
}

function MobileCompare() {
  return (
    <div className="cm" role="table" aria-label="SMB Market compared with BizBuySell and BizScout">
      <div className="cm-row cm-head" role="row">
        <span role="columnheader" />
        <span role="columnheader" className="cm-us">SMB Market</span>
        <span role="columnheader">BizBuy<wbr />Sell</span>
        <span role="columnheader">Biz<wbr />Scout</span>
      </div>
      {MOBILE_ROWS.map(([label, ...vals]) => (
        <div className="cm-row" role="row" key={label}>
          <span role="rowheader" className="cm-f">{label}</span>
          {vals.map((v, i) => (
            <span role="cell" key={i} className={i === 0 ? "cm-us" : undefined}><Mark v={v} /></span>
          ))}
        </div>
      ))}
      <p className="cm-key"><i className="cm-p" /> Limited or paid add-on. BizBuySell is free to browse, paid to engage.</p>
    </div>
  );
}

export default function Compare() {
  return (
    <>
    <section className="section" id="compare" style={{ paddingTop: "40px" }}>
      {" "}
      <div className="wrap">
        {" "}
        <figure className="img-band cmp-band reveal">
          {" "}
          <img src="/images/site/team-table-fx.jpg" alt="" loading="lazy" />
          {" "}
          <div className="cmp-copy">
            {" "}
            <span className="kicker">Compare</span>
            {" "}
            <h2>Other sites help you browse. <br />This one helps you close.</h2>
            {" "}
            <p className="lead cmp-lead">
              Finding a business was never the hard part.{" "}
              <b>Buying the right one is.</b>
              {" "}That's the part we built for. Live coaching, deal reviews, a community of buyers, and every tool you need from search to signed deal, all included at $67/month.
            </p>
            {" "}
          </div>
          {" "}
        </figure>
        {" "}
        <div className="table-wrap reveal">
          <MobileCompare />
          <div className="table-scroll">
            {" "}
            <table>
              <thead>
                <tr>
                  <th />
                  <th>BizBuySell</th>
                  <th>BizScout</th>
                  <th className="us">
                    <span className="us-h">
                      <i>
                        <svg viewBox="0 0 12 12" fill="#fff">
                          <rect x="2" y="6" width="2" height="4" rx=".5" />
                          <rect x="5" y="3.5" width="2" height="6.5" rx=".5" />
                          <rect x="8" y="5" width="2" height="5" rx=".5" />
                        </svg>
                      </i>
                      SMB Market
                      <em>Best value</em>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Listings</td>
                  <td>Their site only</td>
                  <td className="num">20,000+</td>
                  <td className="us"><span className="num">80,000+</span><small>From 30+ sources in one feed</small></td>
                </tr>
                <tr>
                  <td>Off-market deal flow</td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td>
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="us">
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Buy box + FitScore on every listing</td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td>Basic AI matching</td>
                  <td className="us">
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Scored on your criteria
                  </td>
                </tr>
                <tr>
                  <td>Take-home pay deal analyzer</td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td>
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="us">
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>CIM analyzer</td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="us">
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Deal pipeline CRM</td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td>Basic tracking</td>
                  <td className="us">
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Stages, tags, next steps
                  </td>
                </tr>
                <tr>
                  <td>Weekly live coaching calls</td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="us">
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    52 a year, included
                  </td>
                </tr>
                <tr>
                  <td>Community deal reviews</td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td>Paid add-on</td>
                  <td className="us">
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Included
                  </td>
                </tr>
                <tr>
                  <td>Step-by-step curriculum</td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td>
                    <span className="x">
                      <svg viewBox="0 0 12 12">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="us">
                    <span className="y">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    100+ hours
                  </td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>Free to browse, pay to engage</td>
                  <td><span className="num">$199</span>/mo</td>
                  <td className="us"><span className="num">$67</span>/mo, everything included</td>
                </tr>
              </tbody>
            </table>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <p className="foot">
          ³ Competitor features, listing counts, and pricing from each company's public website as of October 2026.
        </p>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
}
