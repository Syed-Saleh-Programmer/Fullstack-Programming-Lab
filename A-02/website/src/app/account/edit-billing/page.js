import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function EditBilling() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <Link href="/account/profile">My Account</Link> <span>›</span>{" "}
          <span>Edit Billing Address</span>
        </div>
        <h1>Edit Billing Address</h1>

        <div className="account-panel">
          <h2>Please fill the form bellow to update your Profile details.</h2>
          <small>*Required Fields</small>

          <form className="classic-form" action="#">
            <label htmlFor="bill-first">First Name *</label>
            <input id="bill-first" type="text" />

            <label htmlFor="bill-last">Last Name *</label>
            <input id="bill-last" type="text" />

            <label htmlFor="bill-email">Email *</label>
            <input id="bill-email" type="email" />

            <label htmlFor="bill-phone">Phone*</label>
            <input id="bill-phone" type="tel" />

            <label htmlFor="bill-city">City *</label>
            <input id="bill-city" type="text" />

            <label htmlFor="bill-state">State *</label>
            <input id="bill-state" type="text" />

            <label htmlFor="bill-zip">Zip Code *</label>
            <input id="bill-zip" type="text" />

            <label htmlFor="bill-country">Country *</label>
            <input id="bill-country" type="text" />

            <div className="form-actions">
              <button className="btn-red" type="submit">UPDATE ADDRESS</button>
            </div>
          </form>
        </div>
      </section>
    </StoreScaffold>
  );
}
