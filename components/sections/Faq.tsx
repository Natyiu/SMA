/* eslint-disable @next/next/no-img-element */
export default function Faq() {
  return (
    <>
    <section className="section" id="faq" style={{ paddingTop: "40px" }}>
      {" "}
      <div className="wrap faq-grid">
        {" "}
        <div className="section-head reveal">
          {" "}
          <span className="kicker">FAQ</span>
          {" "}
          <h2>Questions, answered.</h2>
          {" "}
          <p className="lead">Still deciding? Here's what buyers ask us most.</p>
          {" "}
          <figure className="faq-photo">
            <img src="/images/site/lounge.jpg" alt="Friends talking around a table in a sunlit lounge" loading="lazy" />
          </figure>
          {" "}
        </div>
        {" "}
        <div className="faq-list reveal">
          {" "}
          <details open>
            <summary>I've never bought a business. Is this over my head?<span className="pm" /></summary>
            <p>
              It's built for exactly this. You start on a step-by-step path that assumes nothing, and every week there's a live call where you can ask the basic questions everyone else is wondering too. Most members go from "what's SDE?" to analyzing deals confidently within their first month.
            </p>
          </details>
          {" "}
          <details>
            <summary>I've already closed deals. What's in it for me?<span className="pm" /></summary>
            <p>
              Deal flow and speed: 80,000+ listings from 30+ sources in one feed, off-market opportunities, a FitScore tuned to your buy box, and a pipeline CRM that replaces your spreadsheet. Coaching is there when you want a second set of eyes.
            </p>
          </details>
          {" "}
          <details>
            <summary>How is this different from BizBuySell or BizScout?<span className="pm" /></summary>
            <p>
              Those platforms end at the search results. We aggregate the serious listings they carry and more, then add live coaching, community deal reviews, a buyer community, and analysis tools built around your criteria.
            </p>
          </details>
          {" "}
          <details>
            <summary>Are the listings current?<span className="pm" /></summary>
            <p>
              We add new listings from 30+ sources daily. Listings come from third-party sellers, brokers, and marketplaces, so availability and financials can change, and we can't guarantee every one is still available or accurate. That's why you get the tools and training to dig deeper before moving forward.
            </p>
          </details>
          {" "}
          <details>
            <summary>How much money do I need to buy a business?<span className="pm" /></summary>
            <p>
              It depends on the purchase price and how you finance it. SBA loans can reduce the cash you need upfront, but you'll still need to cover a down payment, closing costs, and working capital. Inside, you'll learn to assess your buying power and narrow your search to deals that fit your budget.
            </p>
          </details>
          {" "}
          <details>
            <summary>What happens on the weekly live calls?<span className="pm" /></summary>
            <p>
              Josh and acquisition experts break down real deals, answer questions live, and walk through whatever stage members are stuck on. Every call is recorded and added to the library.
            </p>
          </details>
          {" "}
          <details>
            <summary>Do you take a cut of my deal?<span className="pm" /></summary>
            <p>
              No. No commissions, no success fees, no percentage of your purchase. It's $67/month, flat.
            </p>
          </details>
          {" "}
          <details>
            <summary>How does the free trial work?<span className="pm" /></summary>
            <p>
              Full access to everything for 7 days: every listing, tool, call, and course. Cancel before the trial ends and you pay nothing.
            </p>
          </details>
          {" "}
          <details>
            <summary>How long until I actually buy a business?<span className="pm" /></summary>
            <p>
              Most serious buyers close their first deal in 6–12 months. The search takes weeks; diligence and financing take months. What we cut out is the wasted time spent on bad-fit listings, mispriced deals, and avoidable LOI mistakes.
            </p>
          </details>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
}
