import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function EditShipping() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <Link href="/account/profile">My Account</Link> <span>›</span>{" "}
          <span>Edit Shipping Address</span>
        </div>
        <h1>Edit Shipping Address</h1>

        <div className="account-panel">
          <h2>Please fill the form bellow to update your Profile details.</h2>
          <small>*Required Fields</small>

          <form className="classic-form" action="#">
            <label htmlFor="ship-first">First Name *</label>
            <input id="ship-first" type="text" />

            <label htmlFor="ship-last">Last Name *</label>
            <input id="ship-last" type="text" />

            <label htmlFor="ship-email">Email *</label>
            <input id="ship-email" type="email" />

            <label htmlFor="ship-phone">Phone*</label>
            <input id="ship-phone" type="tel" />

            <label htmlFor="ship-city">City *</label>
            <input id="ship-city" type="text" />

            <label htmlFor="ship-state">State *</label>
            <input id="ship-state" type="text" />

            <label htmlFor="ship-zip">Zip Code *</label>
            <input id="ship-zip" type="text" />

            <label htmlFor="ship-country">Country *</label>
            <input id="ship-country" type="text" />

            <div className="form-actions">
              <button className="btn-red" type="submit">UPDATE ADDRESS</button>
            </div>
          </form>
        </div>
      </section>
    </StoreScaffold>
  );
}
