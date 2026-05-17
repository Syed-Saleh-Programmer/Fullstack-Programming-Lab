import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

const sliderProducts = [
  { id: 1, name: "Bosch 22 Cu. Ft Stainless", sku: "8Q2S3CG5N5G", price: "$2,549.15" },
  { id: 2, name: "Bosch 20 Cu. Ft Stainless", sku: "8Q2S3CG5N6G", price: "$2,549.15" },
  { id: 3, name: "Bosch 19 Cu. Ft Stainless", sku: "8Q2S3CG5N7G", price: "$2,549.15" },
  { id: 4, name: "Bosch 21 Cu. Ft Stainless", sku: "8Q2S3CG5N8G", price: "$2,549.15" },
];

export default function LoginPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <span>My Account</span>
        </div>
        <h1>Login Or Creat Account</h1>

        <div className="account-panel two-col">
          <div className="panel-col">
            <h2>User Login Details</h2>
            <p>Please sign in below with your login information.</p>
            <small>*Required Fields</small>

            <form className="classic-form" action="#">
              <label htmlFor="login-email">Email *</label>
              <input id="login-email" type="email" />

              <label htmlFor="login-password">Password*</label>
              <input id="login-password" type="password" />

              <label className="check-row" htmlFor="remember-login">
                <input id="remember-login" type="checkbox" />
                Remember me in next time i visit
              </label>

              <div className="form-actions">
                <Link className="btn-red" href="/account/profile">
                  SIGN IN
                </Link>
                <Link href="/account/forgot-password" className="inline-link">
                  Forgot your password?
                </Link>
              </div>
            </form>
          </div>

          <div className="panel-col split-left">
            <h2>New Customer</h2>
            <p>As a registered account customer you can:</p>
            <ul className="bullet-list">
              <li>Store billing & shipping information</li>
              <li>Check your order status</li>
              <li>Track your delivery status</li>
              <li>View your order history</li>
            </ul>
            <Link className="btn-red" href="/account/register">
              CREATE NEW ACCOUNT
            </Link>
          </div>
        </div>

        <section className="also-viewed">
          <h3>Customers Who Viewed This Item Also</h3>
          <div className="mini-carousel">
            {sliderProducts.map((item) => (
              <article key={item.id} className="mini-item">
                <div className="mini-thumb"></div>
                <div>
                  <div className="mini-price">{item.price}</div>
                  <p>{item.name}</p>
                  <small>{item.sku}</small>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </StoreScaffold>
  );
}
