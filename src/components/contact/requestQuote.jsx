import { useState } from "react";
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  Mail,
  Building2,
  Package,
} from "lucide-react";
import "./requestQuote.css";

import FaqSection from "../faq/faqSection";

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!web3FormsAccessKey) {
      alert("The contact form is not configured. Please try again later.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);
    // Configured with your target email routing through Web3Forms
    formData.append("access_key", web3FormsAccessKey);
    formData.append("subject", "New B2B RFQ Submission - Kosh International");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert(
          "Transmission failed. Please verify network connection and try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting RFQ:", error);
      alert("An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="request-quote" className="rfq-section">
      <div className="rfq-container">
        {/* Header */}
        <div className="rfq-header">
          <div className="rfq-badge">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Institutional Trade Desk</span>
          </div>
          <h2 className="rfq-heading">Request for Quotation (RFQ)</h2>
          <p className="rfq-sub">
            Secure container allocations, current FOB/CIF pricing, and official
            Certificate of Analysis (CoA) documentation for your industrial
            processing requirements.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="rfq-card-wrapper">
          {submitted ? (
            <div className="rfq-success-box">
              <CheckCircle2 className="w-16 h-16 text-amber-400 mb-4 animate-bounce" />
              <h3>RFQ Transmission Successful</h3>
              <p>
                Your inquiry has been logged and securely routed to our trade
                desk at <strong>makiaboabidamaki@gmail.com</strong>. A
                commercial representative will review your allocation request
                and respond within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="rfq-reset-btn"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rfq-form">
              <div className="form-row">
                <div className="form-group">
                  <label>
                    <Building2 className="w-4 h-4 text-amber-500" /> Company /
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="e.g., Global Hydrocolloids LLC"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Mail className="w-4 h-4 text-amber-500" /> Professional
                    Procurement Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="buyer@enterprise.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    <Package className="w-4 h-4 text-amber-500" /> Commodity
                    Grade
                  </label>
                  <select
                    name="commodity_grade"
                    required
                    className="rfq-select"
                  >
                    <option value="Grade 1 Cleaned hashab (Acacia Senegal)">
                      Grade 1 Cleaned hashab (Acacia Senegal - Kordofan)
                    </option>
                    <option value="Talha Grade (Acacia Seyal)">
                      Talha Grade (Acacia Seyal)
                    </option>
                    <option value="Custom Bulk Industrial Blend">
                      Custom Bulk Industrial Blend
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Estimated Volume / Container Allocation</label>
                  <input
                    type="text"
                    name="estimated_volume"
                    required
                    placeholder="e.g., 2 x 20ft Containers (FCL)"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>
                  Destination Port & Specific Requirements (Incoterms, CoA
                  specs)
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Specify target destination port (e.g., Port of Hamburg, CIF) and any specific documentation requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="rfq-submit-btn"
                disabled={loading}
              >
                {loading
                  ? "Transmitting RFQ Securely..."
                  : "Submit Official RFQ"}
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>

      <FaqSection />
    </section>
  );
}
