import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./faqSection.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What varieties of Gum Arabic do you supply?",
      answer:
        "Hashab (Acacia senegal) and Talha (Acacia seyal).",
    },
    {
      question: "What forms of Gum Arabic are available?",
      answer:
        "Raw, cleaned, sorted and graded, kibbled, powder, and spray-dried.",
    },
    {
      question: "What are your minimum order quantities?",
      answer:
        "Bulk orders are container-based: approximately 16 MT for a 20-foot container or 26 MT for a 40-foot container.",
    },
    {
      question: "What packaging options do you offer?",
      answer:
        "50 kg bags, with buyer and Kuosh International logos available.",
    },
    {
      question: "Can buyers request samples?",
      answer:
        "Yes. 150–250 g samples are available on request.",
    },
    {
      question: "What export documentation do you provide?",
      answer:
        "Available documents include a CoA, Certificate of Origin, and commercial invoice. Phytosanitary documents depend on destination.",
    },
    {
      question: "What shipping arrangements do you support?",
      answer:
        "CIF is available. Other arrangements can be discussed by destination.",
    },
    {
      question: "What is your order lead time?",
      answer:
        "Allow at least three months for bulk orders.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="faq-section">
      <div className="faq-container">
        {/* Section Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>Procurement Support</span>
          </div>
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-sub">
            Clear, institutional answers regarding our B2B export protocols,
            container specifications, and fulfillment terms.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    className={`faq-chevron ${isOpen ? "rotate" : ""}`}
                  />
                </button>
                <div
                  className="faq-answer-wrapper"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
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
