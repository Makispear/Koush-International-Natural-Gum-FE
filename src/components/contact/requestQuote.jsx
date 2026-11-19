import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  Mail,
  Send,
} from "lucide-react";
import "./requestQuote.css";
import FaqSection from "../faq/faqSection";

const productSuggestions = [
  "Gum Arabic — Hashab",
  "Gum Arabic — Talha",
  "Sudan Sesame Seeds",
  "Hibiscus Flowers",
  "Peanuts",
  "Mixed container enquiry",
  "Other / not listed",
];

export default function RequestQuote() {
  const [status, setStatus] = useState("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [productValue, setProductValue] = useState("");
  const [productSuggestionsOpen, setProductSuggestionsOpen] = useState(false);
  const [activeProductSuggestion, setActiveProductSuggestion] = useState(-1);
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
  const filteredProductSuggestions = productSuggestions.filter((product) =>
    product.toLowerCase().includes(productValue.trim().toLowerCase()),
  );
  const showProductSuggestions =
    productSuggestionsOpen && filteredProductSuggestions.length > 0;

  const selectProductSuggestion = (product) => {
    setProductValue(product);
    setProductSuggestionsOpen(false);
    setActiveProductSuggestion(-1);
  };

  const handleProductKeyDown = (event) => {
    if (event.key === "Escape") {
      setProductSuggestionsOpen(false);
      setActiveProductSuggestion(-1);
      return;
    }

    if (filteredProductSuggestions.length === 0) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setProductSuggestionsOpen(true);
      setActiveProductSuggestion((currentIndex) => {
        if (event.key === "ArrowDown") {
          return (currentIndex + 1) % filteredProductSuggestions.length;
        }
        return currentIndex <= 0
          ? filteredProductSuggestions.length - 1
          : currentIndex - 1;
      });
    } else if (event.key === "Enter" && showProductSuggestions) {
      event.preventDefault();
      const selectedIndex = Math.max(activeProductSuggestion, 0);
      selectProductSuggestion(filteredProductSuggestions[selectedIndex]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!accessKey) {
      setSubmissionError("Online request service is not configured.");
      setStatus("error");
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", "New quotation enquiry — Kuosh International");

    setSubmissionError("");
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || result?.success !== true) {
        throw new Error(
          result?.message ||
            `The request could not be sent (HTTP ${response.status}).`,
        );
      }

      setProductValue("");
      setProductSuggestionsOpen(false);
      setActiveProductSuggestion(-1);
      setStatus("success");
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "The request could not be sent. Please try again or email our trade desk.",
      );
      setStatus("error");
    }
  };

  return (
    <section className="rfq-section" id="rfq-form">
      <div className="rfq-container">
        <div className="rfq-card">
          <header className="rfq-card-header">
            <div className="rfq-document-header">
              <div className="rfq-document-brand">
                <span className="rfq-document-mark" aria-hidden="true">
                  <FileCheck2 size={20} />
                </span>
                <span className="rfq-document-brand-copy">
                  <strong>Kuosh International</strong>
                  <span>Export enquiry</span>
                </span>
              </div>
              <span className="rfq-document-category">
                <span>Product</span>
                <span>Supply</span>
                <span>Quotation</span>
              </span>
            </div>

            <div className="rfq-heading-block">
              <span className="rfq-tag">Trade desk</span>
              <h1 className="rfq-title" id="rfq-title">
                Request for Quotation
              </h1>
              <p className="rfq-subtitle">
                Start with your email. Add a product or note only if you have
                one in mind; our team can follow up to learn what you need.
              </p>
            </div>
          </header>

          {status === "success" ? (
            <div className="rfq-success-state" role="status" aria-live="polite">
              <span className="rfq-success-icon" aria-hidden="true">
                <CheckCircle2 size={26} />
              </span>
              <div>
                <h2>Thank you. Your enquiry has been sent.</h2>
                <p>
                  Our trade desk will follow up about your request. If you need
                  to add something, email{" "}
                  <a href="mailto:info@kuoshinternational.com">
                    info@kuoshinternational.com
                  </a>
                  .
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="rfq-reset-btn"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rfq-form"
              aria-labelledby="rfq-title"
            >
              <div className="rfq-email-field">
                <label htmlFor="rfq-email">
                  Email address <span>Required</span>
                </label>
                <input
                  type="email"
                  id="rfq-email"
                  name="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck="false"
                  inputMode="email"
                  placeholder="you@company.com"
                  required
                />
                <p className="rfq-field-hint">
                  The only required field. We’ll use it to reply to your enquiry.
                </p>
              </div>

              <details className="rfq-optional-details">
                <summary>
                  <span>
                    Add a product or note <i>Optional</i>
                  </span>
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <div className="rfq-optional-fields">
                  <div className="rfq-field">
                    <label htmlFor="rfq-product">Product of interest</label>
                    <div className="rfq-autocomplete">
                      <input
                        type="text"
                        id="rfq-product"
                        name="product"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-expanded={showProductSuggestions}
                        aria-controls="rfq-product-suggestions"
                        aria-activedescendant={
                          showProductSuggestions && activeProductSuggestion >= 0
                            ? `rfq-product-option-${activeProductSuggestion}`
                            : undefined
                        }
                        aria-describedby="rfq-product-hint"
                        autoComplete="off"
                        placeholder="Start typing a product"
                        value={productValue}
                        onChange={(event) => {
                          setProductValue(event.target.value);
                          setProductSuggestionsOpen(true);
                          setActiveProductSuggestion(-1);
                        }}
                        onFocus={() => setProductSuggestionsOpen(true)}
                        onBlur={() => setProductSuggestionsOpen(false)}
                        onKeyDown={handleProductKeyDown}
                      />
                      <ul
                        id="rfq-product-suggestions"
                        className="rfq-product-suggestions"
                        role="listbox"
                        hidden={!showProductSuggestions}
                      >
                        {filteredProductSuggestions.map((product, index) => (
                          <li
                            key={product}
                            id={`rfq-product-option-${index}`}
                            role="option"
                            aria-selected={activeProductSuggestion === index}
                            onPointerDown={(event) => event.preventDefault()}
                            onClick={() => selectProductSuggestion(product)}
                          >
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="rfq-field-hint" id="rfq-product-hint">
                      Type to filter suggestions, or enter another product.
                    </p>
                  </div>
                  <div className="rfq-field">
                    <label htmlFor="rfq-note">Note for our trade desk</label>
                    <textarea
                      id="rfq-note"
                      name="message"
                      rows={3}
                      maxLength={1000}
                      placeholder="Share a grade, quantity, or destination if known."
                    />
                  </div>
                </div>
              </details>

              {(submissionError || !accessKey) && (
                <p className="rfq-form-error" role="alert">
                  {submissionError || "Online request service is not configured."}{" "}
                  <a href="mailto:info@kuoshinternational.com">
                    Email the trade desk
                  </a>
                  .
                </p>
              )}

              <div className="rfq-form-footer">
                <div className="rfq-footer-copy">
                  <p>
                    By sending this request, you’re asking our trade desk to
                    contact you about your enquiry.
                  </p>
                  <a
                    href="mailto:info@kuoshinternational.com"
                    className="rfq-direct-email"
                  >
                    <Mail size={15} aria-hidden="true" />
                    Prefer email? Write to us
                  </a>
                </div>
                <button
                  type="submit"
                  className="rfq-submit-btn"
                  disabled={status === "submitting" || !accessKey}
                >
                  {status === "submitting" ? (
                    "Sending…"
                  ) : status === "error" ? (
                    "Try again"
                  ) : (
                    <>
                      Send enquiry <Send size={16} aria-hidden="true" />
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
