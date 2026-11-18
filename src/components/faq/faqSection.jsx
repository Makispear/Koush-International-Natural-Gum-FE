import { useId, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./faqSection.css";

export default function FaqSection() {
  const sectionId = useId();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What varieties of Gum Arabic do you supply?",
      answer:
        "We supply Hashab (Acacia senegal) and Talha (Acacia seyal). If you are unsure which to request, include your intended use and our trade desk can help you identify the variety to quote.",
    },
    {
      question: "Which forms and specifications can I request?",
      answer:
        "The catalogue lists raw, cleaned, sorted and graded, and kibbled gum. Include your preferred form, grade, and particle size; availability and specifications are confirmed for each order.",
    },
    {
      question: "What are your minimum order quantities?",
      answer:
        "Minimum order quantities depend on the product and packing configuration, so share your target volume and we will confirm what is available. For planning, a 20-foot container holds approximately 16 MT and a 40-foot container approximately 26 MT.",
    },
    {
      question: "What packaging options do you offer?",
      answer:
        "The standard offering is 50 kg bags. Custom logo printing can be requested; bag and labeling details are confirmed for the selected product and order.",
    },
    {
      question: "Can I request a sample, and what size is it?",
      answer:
        "Yes. Samples are typically 150–250 g. Tell us the product or variety and destination; our trade desk will confirm sample availability and delivery arrangements.",
    },
    {
      question: "What export documentation do you provide?",
      answer:
        "Depending on the product and shipment, documents can include a Certificate of Analysis (CoA), Certificate of Origin, and commercial invoice. Phytosanitary documents depend on destination requirements. Share your destination country and port so we can confirm the applicable list.",
    },
    {
      question: "Which shipping terms can I request?",
      answer:
        "FOB and CIF can be discussed; other terms depend on the route and order. Include your destination port and country so the quotation can specify the applicable Incoterm and freight arrangement.",
    },
    {
      question: "What is your order lead time?",
      answer:
        "Plan for at least three months for bulk orders. The specific schedule is confirmed for each order; include your destination and target ship date when you enquire.",
    },
    {
      question: "What do I need to request a quotation?",
      answer:
        "An email address is enough to start. For a more specific quotation, include the product and variety, form or grade, quantity, destination port or country, and target timing if known. Send what you have; our trade desk can follow up on missing details.",
    },
  ];

  return (
    <section
      id="faq-section"
      className="faq-section"
      aria-labelledby={`${sectionId}-faq-heading`}
    >
      <div className="faq-container">
        {/* Section Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>Procurement Support</span>
          </div>
          <h2 className="faq-heading" id={`${sectionId}-faq-heading`}>
            Frequently Asked Questions
          </h2>
          <p className="faq-sub">
            Practical guidance for choosing a product, requesting a quotation,
            and planning a shipment.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `${sectionId}-faq-answer-${index}`;
            return (
              <div
                key={faq.question}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() =>
                    setOpenIndex((currentIndex) =>
                      currentIndex === index ? null : index,
                    )
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    className={`faq-chevron ${isOpen ? "rotate" : ""}`}
                  />
                </button>
                <div
                  id={answerId}
                  className="faq-answer-wrapper"
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
