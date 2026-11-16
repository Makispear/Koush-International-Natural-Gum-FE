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

    {/* CONTACT INFORMATION */}
    <h3 className="form-section-heading full-width">
      Contact Information
    </h3>

    <div className="form-group">
      <label htmlFor="name">Full Name *</label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="name"
        required
        placeholder="Your full name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="company">Company / Organization *</label>
      <input
        type="text"
        id="company"
        name="company"
        autoComplete="organization"
        required
        placeholder="Company name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Business Email *</label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        required
        placeholder="name@company.com"
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone / WhatsApp</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        autoComplete="tel"
        placeholder="+Country code and phone number"
      />
    </div>

    <div className="form-group">
      <label htmlFor="country">Company Country *</label>
      <input
        type="text"
        id="country"
        name="country"
        autoComplete="country-name"
        required
        placeholder="Country where your company is based"
      />
    </div>

    <div className="form-group">
      <label htmlFor="website">Company Website</label>
      <input
        type="url"
        id="website"
        name="website"
        placeholder="https://www.example.com"
      />
    </div>

    {/* PRODUCT REQUIREMENTS */}
    <h3 className="form-section-heading full-width">
      Product Requirements
    </h3>

    <div className="form-group">
      <label htmlFor="commodity">Commodity *</label>
      <select
        id="commodity"
        name="commodity"
        required
        defaultValue=""
      >
        <option value="" disabled>Select a commodity...</option>
        <option value="Gum Arabic">Gum Arabic</option>
        <option value="Frankincense">Frankincense</option>
        <option value="Sudan Sesame Seeds">Sudan Sesame Seeds</option>
        <option value="Hibiscus Flowers">Hibiscus Flowers</option>
        <option value="Fool Sudani (Peanuts)">Fool Sudani (Peanuts)</option>
        <option value="Mixed Container Allocation">
          Mixed Container Allocation
        </option>
        <option value="Other / Not Listed">Other / Not Listed</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="variety">Gum Arabic Variety</label>
      <select
        id="variety"
        name="variety"
        defaultValue=""
      >
        <option value="">Select if applicable...</option>
        <option value="Hashab">Hashab</option>
        <option value="Talha">Talha</option>
        <option value="Both Hashab and Talha">
          Both Hashab and Talha
        </option>
        <option value="Open to either variety">
          Open to either variety
        </option>
        <option value="Not sure / Need guidance">
          Not sure / Need guidance
        </option>
      </select>
    </div>

    <div className="form-group full-width">
      <label htmlFor="otherCommodity">
        Other Commodity (if applicable)
      </label>
      <input
        type="text"
        id="otherCommodity"
        name="otherCommodity"
        placeholder="Tell us what product you are looking for"
      />
    </div>

    <div className="form-group">
      <label htmlFor="form">Preferred Product Form</label>
      <input
        type="text"
        id="form"
        name="productForm"
        placeholder="e.g. Raw, cleaned, sorted, graded, kibbled"
      />
    </div>

    <div className="form-group">
      <label htmlFor="grade">Required Grade / Quality</label>
      <input
        type="text"
        id="grade"
        name="grade"
        placeholder="Your required grade or quality standard"
      />
    </div>

    <div className="form-group full-width">
      <label htmlFor="specifications">
        Product Specifications / Technical Requirements
      </label>
      <textarea
        id="specifications"
        name="specifications"
        rows="3"
        placeholder="Particle size, moisture, purity, sorting, technical standards, or any other product requirements..."
      />
    </div>

    {/* ORDER AND LOGISTICS */}
    <h3 className="form-section-heading full-width">
      Order & Logistics
    </h3>

    <div className="form-group">
      <label htmlFor="orderType">Type of Inquiry</label>
      <select
        id="orderType"
        name="orderType"
        defaultValue=""
      >
        <option value="">Select inquiry type...</option>
        <option value="Sample Request">Sample Request</option>
        <option value="Trial Order">Trial Order</option>
        <option value="Bulk Purchase">Bulk Purchase</option>
        <option value="Recurring Supply Agreement">
          Recurring Supply Agreement
        </option>
        <option value="Long-Term Supply Partnership">
          Long-Term Supply Partnership
        </option>
        <option value="General Inquiry">General Inquiry</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="quantity">Estimated Quantity / Volume</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        placeholder="e.g. 5 MT, 20 MT, 2 containers, or sample"
      />
    </div>

    <div className="form-group">
      <label htmlFor="destinationCountry">Destination Country *</label>
      <input
        type="text"
        id="destinationCountry"
        name="destinationCountry"
        required
        placeholder="Country of delivery"
      />
    </div>

    <div className="form-group">
      <label htmlFor="destinationPort">Destination Port / Location</label>
      <input
        type="text"
        id="destinationPort"
        name="destinationPort"
        placeholder="e.g. Port of New York / Los Angeles"
      />
    </div>

    <div className="form-group">
      <label htmlFor="incoterm">Preferred Incoterm</label>
      <select
        id="incoterm"
        name="incoterm"
        defaultValue=""
      >
        <option value="">Select if known...</option>
        <option value="CIF">CIF</option>
        <option value="FOB">FOB</option>
        <option value="CFR">CFR</option>
        <option value="CPT">CPT</option>
        <option value="CIP">CIP</option>
        <option value="DAP">DAP</option>
        <option value="DDP">DDP</option>
        <option value="EXW">EXW</option>
        <option value="FCA">FCA</option>
        <option value="Not sure / To be discussed">
          Not sure / To be discussed
        </option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="deliveryDate">Expected Delivery Timeline</label>
      <input
        type="text"
        id="deliveryDate"
        name="deliveryTimeline"
        placeholder="e.g. March 2027, within 6 months"
      />
    </div>

    <div className="form-group full-width">
      <label htmlFor="packaging">Packaging Requirements</label>
      <textarea
        id="packaging"
        name="packaging"
        rows="2"
        placeholder="Preferred packaging, labeling, branding, or other requirements..."
      />
    </div>

    {/* COMMERCIAL REQUIREMENTS */}
    <h3 className="form-section-heading full-width">
      Additional Commercial Requirements
    </h3>

    <div className="form-group">
      <label htmlFor="paymentTerms">Preferred Payment Terms</label>
      <input
        type="text"
        id="paymentTerms"
        name="paymentTerms"
        placeholder="e.g. Cash on delivery, bank transfer, or to be discussed"
      />
    </div>

    <div className="form-group">
      <label htmlFor="currency">Preferred Quotation Currency</label>
      <select
        id="currency"
        name="currency"
        defaultValue=""
      >
        <option value="">No preference</option>
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="GBP">GBP - British Pound</option>
        <option value="Other">Other / To be discussed</option>
      </select>
    </div>

    <div className="form-group full-width">
      <label htmlFor="comments">
        Additional Requirements / Comments
      </label>
      <textarea
        id="comments"
        name="comments"
        rows="4"
        placeholder="Share any additional sourcing, documentation, inspection, certification, shipping, or commercial requirements..."
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
        "Submitting..."
      ) : (
        <>
          Submit Request for Quotation <Send size={16} />
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
