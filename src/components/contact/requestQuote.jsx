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
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      import.meta.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
    );
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
    <section className="rfq-section" id="rfq-form">
      <div className="rfq-container">
        {/* Header Notice Box */}
        <div className="rfq-header-notice">
          <div className="notice-item">
            <HelpCircle className="notice-icon" size={20} />
            <span>
              Have questions about Incoterms, MOQs, or CoA? Check our{" "}
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
                href="mailto:makiaboabidamaki@gmail.com"
                className="notice-link"
              >
                makiaboabidamaki@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="rfq-card">
          <div className="rfq-card-header">
            <span className="rfq-tag">Institutional Procurement</span>
            <h2 className="rfq-title">Request for Quotation (RFQ)</h2>
            <p className="rfq-subtitle">
              Submit your container allocation requirements. Our trade desk
              responds within 24 business hours with formal pricing and origin
              availability.
            </p>
          </div>

          {submitted ? (
            <div className="rfq-success-state">
              <CheckCircle2 size={48} className="success-icon" />
              <h3>RFQ Successfully Transmitted</h3>
              <p>
                Thank you for your inquiry. Our export desk has received your
                container allocation request and will contact you shortly.
              </p>
              <p className="success-email-note">
                Need to attach documents or modify your request? Email us
                directly at{" "}
                <a href="mailto:makiaboabidamaki@gmail.com">
                  makiaboabidamaki@gmail.com
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
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g., Jonathan Vance"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Organization *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="e.g., Global Ingredients Ltd."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Business Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="procurement@globalingredients.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 019-2834"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="commodity">Target Commodity *</label>
                  <select
                    id="commodity"
                    name="commodity"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select target commodity...
                    </option>
                    <option value="Gum Arabic (Acacia Senegal - Grade 1)">
                      Gum Arabic (Acacia Senegal - Grade 1)
                    </option>
                    <option value="Frankincense Gum / Tears">
                      Frankincense Gum / Tears
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
                    Estimated Volume / Containers *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    required
                    placeholder="e.g., 1x 20ft Container (FCL)"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="destination">
                    Destination Port / Delivery Location *
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    required
                    placeholder="e.g., Port of Rotterdam, Netherlands"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">
                    Specification Notes / Incoterm Preferences
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Specify grade requirements, target delivery timelines, or preferred Incoterms (FOB/CIF)..."
                  ></textarea>
                </div>
              </div>

              <div className="rfq-form-footer">
                <p className="form-privacy-note">
                  <AlertCircle size={14} /> Strict commercial confidentiality
                  guaranteed. Direct origin supply from Kosh International.
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
