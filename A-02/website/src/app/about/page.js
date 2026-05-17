import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function AboutPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <span>About Us</span>
        </div>

        <h1>About Us</h1>

        <div className="account-panel">
          <h2>Welcome to the Company</h2>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate cursus a sit amet mauris.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginTop: 18 }}>
            {[1,2,3,4].map((i)=> (
              <figure key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 160, height: 120, background: '#e6eef2', margin: '0 auto', borderRadius: 6 }} />
                <figcaption style={{ marginTop: 8 }}>
                  <strong>Jennifer lawrence</strong>
                  <div style={{ fontSize: 12, color: '#6b6b6b' }}>Business Consultant</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </StoreScaffold>
  );
}
