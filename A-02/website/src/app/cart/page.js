import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

const cartItems = [
  {
    id: 1,
    title: "The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in",
    price: "$9.00",
    qty: 1,
  },
  {
    id: 2,
    title: "The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in",
    price: "$9.00",
    qty: 1,
  },
];

export default function CartPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <span>Shopping Cart</span>
        </div>

        <h1>Shopping Cart</h1>

        <div className="account-panel">
          <div className="notice success">Items added: user_name</div>

          <div className="cart-list">
            {cartItems.map((it) => (
              <div key={it.id} className="cart-row">
                <div className="thumb" />
                <div className="meta">
                  <Link href="#">{it.title}</Link>
                  <div className="meta-sub">Standard (7 - 10 business days)</div>
                </div>
                <div className="qty">Quantity: {it.qty}</div>
                <div className="price">{it.price}</div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <Link href="/category" className="btn">CONTINUE SHOPPING</Link>
            <Link href="/checkout" className="btn-red">PROCEED TO CHECKOUT</Link>
          </div>
        </div>
      </section>
    </StoreScaffold>
  );
}
