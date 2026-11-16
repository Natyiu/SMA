/* eslint-disable @next/next/no-img-element */
export default function Nav() {
  return (
    <>
    <header className="nav" id="nav">
      {" "}
      <div className="wrap nav-inner">
        {" "}
        <a href="#" className="logo" aria-label="SMB Market home">
          {" "}
          <span className="logo-mark">
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 12V7.5M8 12V4M13 12V9" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
          </span>
          {" "}SMB Market{" "}
        </a>
        {" "}
        <nav className="nav-links">
          {" "}
          <a href="#marketplace">Marketplace</a>
          {" "}
          <a href="#tools">Buyer system</a>
          {" "}
          <a href="#compare">Compare</a>
          {" "}
          <a href="#pricing">Pricing</a>
          {" "}
          <a href="#faq">FAQ</a>
          {" "}
        </nav>
        {" "}
        <div className="nav-cta">
          {" "}
          <a href="https://smbmarket.com/" className="login">Log in</a>
          {" "}
          <a href="#pricing" className="btn btn-dark">Start free trial</a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </header>
    </>
  );
}
