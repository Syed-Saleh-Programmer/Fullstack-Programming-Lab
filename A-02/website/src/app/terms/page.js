import Link from "next/link";
import StoreScaffold from "@/components/StoreScaffold";

export default function TermsPage() {
  return (
    <StoreScaffold>
      <section className="account-page">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> <span>›</span> <span>Payments</span> <span>›</span> <span>Terms and Conditions</span>
        </div>

        <h1>Terms and Conditions for Sale</h1>

        <div className="account-panel">
          <div className="legal-text">
            <h3>General Terms and Conditions</h3>
            <p>General Terms and conditions for Business, Payment and Delivery for Hot tubs and Spas.</p>

            <ol>
              <li>
                <strong>Interpretation</strong>
                <p>In these conditions of sale: the Company means The Edge (Systems) Limited.</p>
              </li>
              <li>
                <strong>Risk and title</strong>
                <p>The risk in the products will pass to the customer as soon as they are delivered to the customer.</p>
              </li>
              <li>
                <strong>Charges</strong>
                <p>All prices are subject to VAT where applicable.</p>
              </li>
              <li>
                <strong>Payment</strong>
                <p>Payment must be by credit/debit card or cheque unless agreed otherwise in writing.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </StoreScaffold>
  );
}
