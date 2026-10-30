import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  FileCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import "./closingAssurance.css";

export default function ClosingAssurance() {
  return (
    <section className="closing-assurance-section">
      <div className="closing-container">
        {/* Certificate Rosette / Seal Silhouette Wrapper */}
        <div className="certification-seal-silhouette">
          {/* Inner Content Container */}
          <div className="certificate-inner-content">
            <div className="certificate-seal-header">
              <div className="seal-emblem">
                <ShieldCheck className="w-8 h-8 text-amber-400" />
              </div>
              <span className="certificate-id-label">
                OFFICIAL EXPORT COMPLIANCE SEAL • REF: KOSH-REG-2026
              </span>
            </div>

            <div className="certificate-title-group">
              <h2 className="closing-title">
                Institutional-Grade Trade Guarantee
              </h2>
              <p className="closing-subtitle">
                Backed by 13 years of operational mastery, every metric
                ton dispatched from our facilities is governed by strict
                international export standards, verified purity thresholds, and
                complete legal accountability.
              </p>
            </div>

            {/* Certificate Clauses Grid */}
            <div className="certificate-clauses-grid">
              <div className="clause-item">
                <div className="clause-icon-box">
                  <FileCheck className="w-6 h-6 text-amber-400" />
                </div>
                <div className="clause-content">
                  <div className="clause-header-row">
                    <h3>Verified Purity & CoA Guarantee</h3>
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  </div>
                  <p>
                    Every shipment is accompanied by an official Certificate of
                    Analysis, guaranteeing moisture limits, mechanical purity,
                    and grade-1 botanical specifications.
                  </p>
                </div>
              </div>

              <div className="clause-item">
                <div className="clause-icon-box">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div className="clause-content">
                  <div className="clause-header-row">
                    <h3>13-Year Proven Track Record</h3>
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  </div>
                  <p>
                    A decade-plus legacy of reliable container allocation and
                    fulfillment across major trade corridors in Europe, Asia,
                    the Middle East, and North America.
                  </p>
                </div>
              </div>

              <div className="clause-item">
                <div className="clause-icon-box">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
                </div>
                <div className="clause-content">
                  <div className="clause-header-row">
                    <h3>Customs & Incoterms Compliance</h3>
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  </div>
                  <p>
                    Complete documentation packages—including phytosanitary
                    certificates and bills of lading—structured for seamless
                    customs clearance worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Execution Action Bar */}
            <div className="certificate-footer-banner">
              <div className="footer-banner-text">
                <h4>Ready to secure your bulk container allocation?</h4>
                <p>
                  Engage our trade desk for formal quotation, current
                  availability, and contract terms.
                </p>
              </div>
              <Link to="/contact" className="closing-cta-btn">
                Submit Request for Quotation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
