/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <>
    <footer>
      {" "}
      <div className="wrap">
        {" "}
        <div className="foot-top">
          {" "}
          <div>
            {" "}
            <a href="#" className="logo">
              <span className="logo-mark">
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 12V7.5M8 12V4M13 12V9" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
              SMB Market
            </a>
            {" "}
            <p>The business acquisition platform that takes buyers from discovery to close.</p>
            {" "}
          </div>
          {" "}
          <div className="foot-col">
            <h6>Product</h6>
            <a href="#marketplace">Marketplace</a>
            <a href="#tools">Buyer system</a>
            <a href="#pricing">Pricing</a>
          </div>
          {" "}
          <div className="foot-col">
            <h6>Company</h6>
            <a href="#compare">Compare</a>
            <a href="#faq">FAQ</a>
            <a href="https://smbmarket.com/">Contact us</a>
          </div>
          {" "}
          <div className="foot-col">
            <h6>Legal</h6>
            <a href="https://smbmarket.com/">{"Terms & Conditions"}</a>
            <a href="https://smbmarket.com/">Privacy Policy</a>
          </div>
          {" "}
        </div>
        {" "}
        <div className="foot-bot"><span>© 2026 SMB Market</span><span>Made for buyers, not browsers.</span></div>
        {" "}
        <div className="notes">
          {" "}
          <span>¹ 91,652 listings shown inside the SMBMarket.com marketplace as of November 2026.</span>
          {" "}
          <span>² Registered SMB Market members as of October 2026.</span>
          {" "}
          <span>
            ³ Competitor features, listing counts, and pricing from each company's public website as of October 2026.
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
    </>
  );
}
