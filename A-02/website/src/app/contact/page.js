import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function ContactPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <span>Customer Support</span> <span>›</span>{" "}
          <span>Contact Us</span>
        </div>
        <h1>Contact Us</h1>

        <div className="account-panel">
          <h2>Contact Our Customer Support</h2>
          <p>Online Sales & Customer Support</p>
          <p>Call Us: 020 78899845</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <h3>Retail Store Location</h3>
              <p>HotTub Store Loc<br/>5000N, Ford avenue<br/>Newyork, NY 20145<br/>888.123.1234</p>
            </div>
            <div>
              <h3>Services</h3>
              <p>HotTub Store Loc<br/>5000N, Ford avenue<br/>Newyork, NY 20145<br/>888.123.1234</p>
            </div>
          </div>

          <form className="classic-form" action="#" style={{ marginTop: 18 }}>
            <label htmlFor="c-first">First name *</label>
            <input id="c-first" type="text" required />

            <label htmlFor="c-email">Email *</label>
            <input id="c-email" type="email" required />

            <label htmlFor="c-subject">Subject *</label>
            <input id="c-subject" type="text" required />

            <label htmlFor="c-message">Your Message</label>
            <textarea id="c-message" style={{ gridColumn: "1 / 3", minHeight: 140 }} />

            <div className="form-actions" style={{ gridColumn: "1 / 3" }}>
              <button className="btn-red" type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    </StoreScaffold>
  );
}
