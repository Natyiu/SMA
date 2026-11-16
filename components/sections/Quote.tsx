/* eslint-disable @next/next/no-img-element */
export default function Quote() {
  return (
    <>
    <section className="section" style={{ paddingTop: "110px", paddingBottom: "40px" }}>
      {" "}
      <div className="wrap">
        {" "}
        <figure className="tq3 reveal">
          {" "}
          <blockquote>
            “SMB Market quickly became my go‑to{" "}
            <span className="tq3-pic"><img src="/images/site/desk-orange.jpg" alt="" loading="lazy" /></span>
            {" "}search tool.{" "}
            <mark>It compiles listings from the smaller sites, which made my daily search much faster.</mark>
            {" "}I ultimately found the business I acquired through the platform.”
          </blockquote>
          {" "}
          <figcaption>
            <span className="tq3-ava"><img src="/images/site/desk-orange.jpg" alt="" loading="lazy" /></span>
            <b>Sakris Zenobian</b>
            <span className="tq3-dot" />
            <small>Acquired a business through SMB Market</small>
          </figcaption>
          {" "}
        </figure>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
}
