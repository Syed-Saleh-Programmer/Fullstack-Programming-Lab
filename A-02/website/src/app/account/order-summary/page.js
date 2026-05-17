import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

const items = [
  { name: "Five person hottube spa with green light inside", qty: 1, price: "$699.00" },
  { name: "Five person hottube spa with green light inside", qty: 1, price: "$699.00" },
];

export default function OrderSummaryPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <Link href="/account/login">User Account</Link> <span>›</span>{" "}
          <span>Order Summary</span>
        </div>

        <h1>Order Summary</h1>

        <div className="account-panel">
          <div className="notice success">Thank you, your order has been received</div>

          <div className="sub-block">
            <h3>Your Order Summary</h3>
            <p>Order #: <strong>0303</strong></p>
            <p>Date: <strong>December 21 2014</strong></p>
            <p>Total: <strong>1 x $2500 = $2500</strong></p>
          </div>

          <div className="sub-block">
            <h3>Your Order Details</h3>
            <table className="orders-table full-width">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it, i) => (
                  <tr key={i}>
                    <td>{it.name}</td>
                    <td>{it.qty}</td>
                    <td>{it.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sub-block three-cols">
            <div>
              <h4>Customer details</h4>
              <p>Farrukh Javaid</p>
              <p>email@hottubdirect.com</p>
              <p>Phone: 0888 7578 787</p>
            </div>
            <div>
              <h4>Billing address</h4>
              <p>Farrukh Javaid</p>
              <p>HotTub Spas</p>
              <p>Plot 10 Tech Society</p>
              <p>California, CA 20112</p>
            </div>
            <div>
              <h4>Shipping address</h4>
              <p>Farrukh Javaid</p>
              <p>HotTub Spas</p>
              <p>Plot 10 Tech Society</p>
              <p>California, CA 20112</p>
            </div>
          </div>

        </div>
      </section>
    </StoreScaffold>
  );
}
