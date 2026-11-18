import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import "./closingAssurance.css";

export default function ClosingAssurance() {
  return (
    <section
      className="closing-assurance-section"
      aria-labelledby="trade-assurance-heading"
    >
      <div className="closing-container">
        <div className="certification-seal-silhouette">
          <div className="certificate-inner-content">
            <div className="certificate-seal-header">
              <div className="seal-emblem">
                <ShieldCheck size={23} aria-hidden="true" />
              </div>
              <div className="certificate-doc-brand">
                <span>Kuosh International</span>
                <span>Export assurance</span>
              </div>
              <span className="certificate-id-label">
                Product <span>·</span> Quality <span>·</span> Documentation
              </span>
            </div>

            <div className="certificate-title-group">
              <span className="assurance-eyebrow">A clear standard, from origin to shipment</span>
              <h2 id="trade-assurance-heading" className="closing-title">
                Trade assurance, clearly documented.
              </h2>
              <p className="closing-subtitle">
                Our trade desk helps confirm product specifications, supporting
                documents, and shipping details for each order and destination.
                With 13+ years of export experience, we make the next steps
                easier to understand.
              </p>
            </div>

            <div className="certificate-clauses-grid">
              <article className="clause-item">
                <div className="clause-topline">
                  <div className="clause-icon-box">
                    <FileCheck size={19} aria-hidden="true" />
                  </div>
                  <span className="clause-index">01</span>
                </div>
                <div className="clause-content">
                  <h3>Quality &amp; Certificate of Analysis</h3>
                  <p>
                    We confirm applicable quality records against the order
                    specifications. A Certificate of Analysis can document
                    parameters such as moisture, mechanical purity, and
                    botanical details when applicable.
                  </p>
                </div>
              </article>

              <article className="clause-item">
                <div className="clause-topline">
                  <div className="clause-icon-box">
                    <Award size={19} aria-hidden="true" />
                  </div>
                  <span className="clause-index">02</span>
                </div>
                <div className="clause-content">
                  <h3>13+ years of export experience</h3>
                  <p>
                    We coordinate container shipments for buyers across
                    Europe, Asia, the Middle East, and North America.
                  </p>
                </div>
              </article>

              <article className="clause-item">
                <div className="clause-topline">
                  <div className="clause-icon-box">
                    <ShieldCheck size={19} aria-hidden="true" />
                  </div>
                  <span className="clause-index">03</span>
                </div>
                <div className="clause-content">
                  <h3>Export documentation</h3>
                  <p>
                    Supporting documents may include phytosanitary certificates
                    and bills of lading. Requirements vary by order and
                    destination.
                  </p>
                </div>
              </article>
            </div>

            <div className="certificate-footer-banner">
              <div className="footer-banner-text">
                <h3>Planning a shipment?</h3>
                <p>
                  Share your product and destination. We’ll help you work
                  through availability and a quotation.
                </p>
              </div>
              <Link to="/contact" className="closing-cta-btn">
                Request a quotation <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
