import { useState } from "react";
import {
  HelpCircle,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import "./requestQuote.css";
import FaqSection from "../faq/faqSection";

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setLoading(true);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
        "PlaceholderAccessKeyForTesting - means it didn't read if if you see this in production",
    );
    formData.append("subject", "New B2B RFQ Submission - Kuosh International");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        const errorMessage =
          data.message ??
          data.body?.message ??
          data.error ??
          `Request failed with status ${response.status}.`;
        alert(`Could not submit your inquiry: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error submitting RFQ:", error);
      alert("An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rfq-section" id="rfq-form">
      <div className="rfq-container">
        {/* Header Notice Box */}
        <div className="rfq-header-notice">
          <div className="notice-item">
            <HelpCircle className="notice-icon" size={20} />
            <span>
              Have questions about shipping terms, minimum order quantities, or
              certificates of analysis? Check our{" "}
              <a href="#faq-section" className="notice-link">
                FAQs below
              </a>{" "}
              before submitting.
            </span>
          </div>
          <div className="notice-item">
            <Mail className="notice-icon" size={20} />
            <span>
              Prefer direct correspondence or need to share heavy spec sheets?
              Email our trade desk at{" "}
              <a
                href="mailto:info@kuoshinternational.com"
                className="notice-link"
              >
                info@kuoshinternational.com
              </a>
            </span>
          </div>
        </div>

        <div className="rfq-card">
          <div className="rfq-card-header">
            <span className="rfq-tag">Institutional Procurement</span>
            <h2 className="rfq-title">Request for Quotation (RFQ)</h2>
            <p className="rfq-subtitle">
              Submit your product and shipment requirements. Our team will
              review your inquiry and coordinate pricing, availability, and
              export arrangements based on your specifications.
            </p>
          </div>

          {submitted ? (
            <div className="rfq-success-state">
              <CheckCircle2 size={48} className="success-icon" />
              <h3>RFQ Successfully Transmitted</h3>
              <p>
                Thank you for your inquiry. Our team will review your
                requirements and follow up regarding availability and a
                quotation.
              </p>
              <p className="success-email-note">
                Need to update your inquiry or send a larger document? Email us
                directly at{" "}
                <a href="mailto:info@kuoshinternational.com">
                  info@kuoshinternational.com
                </a>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="rfq-reset-btn"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rfq-form">
              <div className="rfq-form-grid">
                <h3 className="form-section-heading full-width">
                  Contact Information
                </h3>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Organization *</label>
                  <input type="text" id="company" name="company" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Business Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <h3 className="form-section-heading full-width">
                  Product Requirements
                </h3>

                <div className="form-group">
                  <label htmlFor="commodity">Target Commodity *</label>
                  <select
                    id="commodity"
                    name="commodity"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a commodity...
                    </option>
                    <option value="Gum Arabic - Acacia senegal (Hashab)">
                      Gum Arabic - Acacia senegal (Hashab)
                    </option>
                    <option value="Gum Arabic - Acacia seyal (Talha)">
                      Gum Arabic - Acacia seyal (Talha)
                    </option>
                    <option value="Frankincense - Raw Natural Resin">
                      Frankincense - Raw Natural Resin
                    </option>
                    <option value="Sudan Sesame Seeds">
                      Sudan Sesame Seeds
                    </option>
                    <option value="Hibiscus Flowers">Hibiscus Flowers</option>
                    <option value="Fool Sudani (Peanuts)">
                      Fool Sudani (Peanuts)
                    </option>
                    <option value="Mixed Container Allocation">
                      Mixed Container Allocation
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">
                    Estimated Volume / Container Requirements *
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select volume requirements...
                    </option>
                    <option value="20-foot container (~16 MT, where applicable)">
                      20-foot container (~16 MT, where applicable)
                    </option>
                    <option value="40-foot container (~26 MT, where applicable)">
                      40-foot container (~26 MT, where applicable)
                    </option>
                    <option value="Other quantity / Sample inquiry">
                      Other quantity / Sample inquiry
                    </option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="destination">
                    Destination Country / Port *
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="specifications">
                    Preferred Product Form / Specifications
                  </label>
                  <textarea
                    id="specifications"
                    name="specifications"
                    rows="3"
                    placeholder="Grade, quality, particle size, sorting, or other specifications"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="incoterm">
                    Preferred International Commercial Terms
                  </label>
                  <select id="incoterm" name="incoterm" defaultValue="">
                    <option value="">Select, if known...</option>
                    <option value="CIF">CIF</option>
                    <option value="Other / To be discussed">
                      Other / To be discussed
                    </option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="comments">
                    Additional Requirements / Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows="3"
                    placeholder="Sourcing, packaging, documentation, or shipping requirements"
                  />
                </div>
              </div>

              <div className="rfq-form-footer">
                <p className="form-privacy-note">
                  <AlertCircle size={14} />
                  Your inquiry will be handled with commercial confidentiality.
                  Our team will review your requirements and follow up regarding
                  product availability, specifications, and quotation.
                </p>
                <button
                  type="submit"
                  className="rfq-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    "Transmitting..."
                  ) : (
                    <>
                      Submit Quotation Request <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        <FaqSection />
      </div>
    </section>
  );
}
