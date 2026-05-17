import Link from "next/link";

export default function StoreScaffold({ children }) {
  return (
    <main className="page-shell">
      <div className="site-wrap">
        <header>
          <div className="top-callout">
            <div>
              Call for Customer Support: <strong>020 38890565</strong>
            </div>
            <div className="utility-links">
              <Link href="/account/profile">My Account</Link>
              <Link href="/account/login">Wishlist</Link>
              <Link href="/cart">To Checkout</Link>
            </div>
          </div>

          <div className="brand-bar">
            <Link href="/" className="logo-block">
              <div className="logo-title">HOTSPRING</div>
              <div className="logo-tag">Portable Spas</div>
            </Link>

            <nav className="main-links">
              <Link href="/">HOME</Link>
              <Link href="/category">PRODUCTS</Link>
              <a href="#">SPECIAL OFFERS</a>
              <Link href="/contact">CUSTOMER SERVICE</Link>
              <Link href="/about">ABOUT</Link>
            </nav>

            <div className="cart-pill">
              <Link href="/cart">My Cart | 1 item(s)</Link>
            </div>
          </div>

          <div className="category-bar">
            <div className="category-links">
              <span>CATEGORY</span>
              <span>BRAND</span>
              <span>INFO</span>
            </div>
            <form className="search-box" action="#">
              <input aria-label="Search" placeholder="Search" />
              <button type="submit">SEARCH</button>
            </form>
          </div>
        </header>

        {children}

        <section className="brand-strip">
          <div className="brand-chip">SAVE $1,000'S</div>
          <div className="brand-chip">OCEANIC SPA</div>
          <div className="brand-chip">CalderaSpas</div>
          <div className="brand-chip">IslandSpas</div>
        </section>

        <footer className="site-footer">
          <div>
            <h4>CONTACT US</h4>
            <p>YourSiteName.com</p>
            <p>CALL 247. 888 - 201 - 8899</p>
            <p>Your Address: City and Country</p>
            <p>Email: service@mailyoursite.com</p>
          </div>
              <div>
                <h4>INFORMATION</h4>
                <ul>
                  <li>
                    <Link href="/about">ABOUT US</Link>
                  </li>
                  <li>
                    <Link href="/contact">CUSTOMER SERVICE</Link>
                  </li>
                  <li>
                    <Link href="/terms">TERMS &amp; CONDITIONS</Link>
                  </li>
                  <li>
                    <a href="#">PRIVACY POLICY</a>
                  </li>
                </ul>
              </div>
          <div>
            <h4>MY ACCOUNT</h4>
            <ul>
              <li>
                <Link href="/account/login">SIGN IN</Link>
              </li>
              <li>
                <Link href="/cart">VIEW CART</Link>
              </li>
              <li>
                <a href="#">MY WISHLIST</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>SIGNUP FOR A NEWS LETTER</h4>
            <input aria-label="newsletter" placeholder="SIGN UP FOR OUR NEWS LETTER" />
            <div className="payment-strip">Payment Solutions</div>
          </div>
        </footer>

        <div className="copyright">© 2014 HotTubspaservice.com. All Rights Reserved.</div>
      </div>
    </main>
  );
}
