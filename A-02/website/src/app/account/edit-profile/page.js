import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function EditProfilePage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <Link href="/account/login">User Account</Link> <span>›</span>{" "}
          <span>Edit Profile details</span>
        </div>

        <h1>Edit Profile details</h1>

        <div className="account-panel">
          <p>Please fill the form below to update your Profile details.</p>

          <form className="classic-form two-col">
            <label>
              First Name *
              <input name="first" defaultValue="Farrukh" />
            </label>
            <label>
              Last Name *
              <input name="last" defaultValue="Javaid" />
            </label>
            <label>
              Email *
              <input name="email" type="email" defaultValue="email@hottubdirect.com" />
            </label>
            <label>
              Current Password *
              <input name="current" type="password" />
            </label>
            <label>
              New Password *
              <input name="new" type="password" />
            </label>
            <label>
              Confirm Password *
              <input name="confirm" type="password" />
            </label>

            <div className="form-actions">
              <button className="btn-red">UPDATE DETAILS</button>
            </div>
          </form>
        </div>
      </section>
    </StoreScaffold>
  );
}
