/* eslint-disable @next/next/no-img-element */
export default function Founder() {
  return (
    <>
    <section className="section">
      {" "}
      <div className="wrap split">
        {" "}
        <div className="founder-photo reveal">
          <img src="https://smbmarket.com/images/homepage/founder_01.webp" alt="Josh Wilson, founder of SMB Market" loading="lazy" />
        </div>
        {" "}
        <div className="founder reveal">
          {" "}
          <span className="kicker">Meet the founder</span>
          {" "}
          <h2>Built by a buyer who grades every deal on the numbers.</h2>
          {" "}
          <p>
            Josh Wilson spent 15 years at Fortune 500 companies and startups making million-dollar decisions safe with data. Then he ran the same math on business ownership.
          </p>
          {" "}
          <p>
            {"Today Josh owns five companies, from M&A advisory firms to Main Street businesses, and has been in the room for hundreds of closed deals. He's the senior advisor at Acquisition Ace, and every deal on this platform is graded the way he grades his own."}
          </p>
          {" "}
          <div className="endorse">
            {" "}
            <img src="https://smbmarket.com/images/homepage/ben-kelly.webp" alt="" loading="lazy" />
            {" "}
            <div>
              <q>
                When members of my community need a trusted place to source deals, I send them to SMB Market. I recommend it to anyone serious about buying a small business.
              </q>
              <b>Ben Kelly{" "}<small>· Founder, Acquisition Ace</small></b>
                {" "}
        </div>
        {" "}
      </div>
            {" "}
          </div>
      </div>
      {" "}
    </section>
    </>
  );
}
