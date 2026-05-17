import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

const sampleProducts = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: "XS SCYBAX SERIES 119",
  price: "$500.00",
}));

export default function CategoryPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <span>Category</span>
        </div>

        <h1>Top Product Listing</h1>

        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 24 }}>
          <aside style={{ paddingRight: 16 }}>
            <h3>Shopping Options</h3>
            <ul className="bullet-list">
              <li>2 - 4 PEOPLE</li>
              <li>5 - 7 PEOPLE</li>
              <li>8 PERSON AND MORE</li>
            </ul>
          </aside>

          <div>
            <div className="products-grid" style={{ marginBottom: 18 }}>
              {sampleProducts.map((p) => (
                <article key={p.id} className="product-card">
                  <div className="product-image">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(#e9eef1,#d7dee3)' }} />
                  </div>
                  <h3>{p.name}</h3>
                  <p>The goods of our stores are very reliable and dur we care about the customer</p>
                  <div className="price">{p.price}</div>
                  <button type="button" className="btn-red">ADD TO CART</button>
                </article>
              ))}
            </div>

            <section className="also-viewed">
              <h3>Customers Who Viewed This Item Also</h3>
              <div className="mini-carousel">
                {sampleProducts.slice(0,4).map((item) => (
                  <article key={item.id} className="mini-item">
                    <div className="mini-thumb" />
                    <div>
                      <div className="mini-price">$2,549.15</div>
                      <p>{item.name}</p>
                      <small>8Q2S3CG5N5G</small>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </StoreScaffold>
  );
}
