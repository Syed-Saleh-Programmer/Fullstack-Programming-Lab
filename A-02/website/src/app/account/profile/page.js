import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

const recentOrders = [
  { id: "#303", date: "December 18, 2014", status: "On hold", total: "$ 699.00" },
  { id: "#307", date: "December 18, 2014", status: "On hold", total: "$ 799.00" },
];

export default function ProfilePage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <Link href="/account/login">User Account</Link> <span>›</span>{" "}
          <span>My Account</span>
        </div>
        <h1>User Profile Details</h1>

        <div className="account-panel">
          <h2>User profile</h2>
          <p>
            Hallo User named! From your account you can view your next orders, manage your shipping and
            billing address.
          </p>
          <p>
            <Link className="inline-link" href="/account/forgot-password">
              edit your password
            </Link>{" "}
            and{" "}
            <Link className="inline-link" href="/account/edit-profile">
              edit your profile
            </Link>
            .
          </p>

          <div className="sub-block">
            <h3>Recent Orders</h3>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <Link href="/account/order-details">{order.id}</Link>
                    </td>
                    <td>{order.date}</td>
                    <td>{order.status}</td>
                    <td>{order.total}</td>
                    <td>
                      <Link href="/account/order-summary" className="btn-red small">
                        VIEW ORDER
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sub-block">
            <h3>My Addresses</h3>
            <p>The following addresses will be used on the checkout page by default</p>
            <div className="addresses-grid">
              <article className="address-card">
                <h4>Billing address</h4>
                <p>Farrukh Javaid</p>
                <p>HotTub Spas</p>
                <p>Plot 10 Tech Society</p>
                <p>California CA 20112</p>
                <p>United State</p>
                <Link href="/account/edit-shipping" className="btn-red small">EDIT ADDRESS</Link>
              </article>
              <article className="address-card">
                <h4>Billing address</h4>
                <p>Farrukh Javaid</p>
                <p>HotTub Spas</p>
                <p>Plot 10 Tech Society</p>
                <p>California CA 20112</p>
                <p>United State</p>
                <Link href="/account/edit-billing" className="btn-red small">EDIT ADDRESS</Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </StoreScaffold>
  );
}
