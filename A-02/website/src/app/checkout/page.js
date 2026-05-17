import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function CheckoutPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <Link href="/cart">Payments</Link> <span>›</span>{" "}
          <span>Secure Checkouts</span>
        </div>

        <h1>Secure Checkouts</h1>

        <div className="account-panel">
          <div className="checkout-grid">
            <div className="checkout-col">
              <h3>Step 1. Billing Address</h3>
              <form className="classic-form">
                <label>First Name *<input defaultValue="Farrukh" /></label>
                <label>Last Name *<input defaultValue="Javaid" /></label>
                <label>Email *<input type="email" defaultValue="email@hottubdirect.com" /></label>
                <label>Phone *<input defaultValue="0888 7578 787" /></label>
                <label>Address *<input defaultValue="Plot 10 Tech Society" /></label>
              </form>
            </div>

            <div className="checkout-col right">
              <h3>Step 2. Card Details</h3>
              <form className="classic-form">
                <label>Card Type<select defaultValue="Master Card"><option>Master Card</option></select></label>
                <label>Card Number<input defaultValue="1234 5678 9123 4567" /></label>
                <label>Expiration<select><option>01</option></select> <select><option>December</option></select></label>
                <label>Secure Code<input defaultValue="123" /></label>
              </form>

              <h3>Step 3. Review Your Order</h3>
              <div className="order-review">
                <div className="order-line">XS SCYVA X SERIES 119 — price: $699 — qty: 1</div>
                <div className="order-total">Total with shipping: <strong>$699.00</strong></div>
                <button className="btn-red">Place Your Order</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StoreScaffold>
  );
}
