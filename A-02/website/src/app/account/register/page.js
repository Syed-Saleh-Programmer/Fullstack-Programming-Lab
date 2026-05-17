import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function RegisterPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <span>Register</span>
        </div>
        <h1>Create New Account</h1>

        <div className="account-panel">
          <h2>User Account Details</h2>
          <p>
            To create a new account, please fill in the required information below. Passwords are case
            sensitive and must be 6 to 20 characters long.
          </p>
          <small>*Required Fields</small>

          <form className="classic-form" action="#">
            <label htmlFor="reg-email">Email Address *</label>
            <input id="reg-email" type="email" />

            <label htmlFor="reg-pass">Password*</label>
            <input id="reg-pass" type="password" />

            <label htmlFor="reg-repass">Re-enter Password *</label>
            <input id="reg-repass" type="password" />

            <label htmlFor="reg-first">First Name *</label>
            <input id="reg-first" type="text" />

            <label htmlFor="reg-last">Last Name *</label>
            <input id="reg-last" type="text" />

            <label className="check-row" htmlFor="reg-news">
              <input id="reg-news" type="checkbox" />
              Yes, I want to receive email about new products and specials
            </label>

            <div className="form-actions">
              <Link className="btn-red" href="/account/profile">
                CREATE ACCOUNT
              </Link>
              <Link href="/account/forgot-password" className="inline-link">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </StoreScaffold>
  );
}
