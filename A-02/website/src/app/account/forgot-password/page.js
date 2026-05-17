import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function ForgotPasswordPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <span>My Account</span>
        </div>
        <h1>Forget Your Password</h1>

        <div className="account-panel">
          <h2>User Account Details</h2>
          <p>Please enter your email address below to retrieve your password.</p>
          <small>*Required Fields</small>

          <form className="classic-form" action="#">
            <label htmlFor="forgot-email">Email *</label>
            <input id="forgot-email" type="email" />

            <label className="check-row" htmlFor="remember-forgot">
              <input id="remember-forgot" type="checkbox" />
              Remember me in next time i visit
            </label>

            <div className="form-actions">
              <button className="btn-red" type="submit">
                SUBMIT
              </button>
              <Link href="/account/login" className="inline-link">
                Back to sign in
              </Link>
            </div>
          </form>
        </div>
      </section>
    </StoreScaffold>
  );
}
