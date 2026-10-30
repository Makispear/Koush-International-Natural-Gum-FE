import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./faqSection.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What are your minimum order quantities (MOQ) for bulk shipments?",
      answer:
        "Our standard MOQ for international export is one 20-foot container (FCL) to ensure optimal shipping efficiency and cost-effectiveness for ocean freight. Sample and pilot-run allocations can be reviewed upon request for qualified industrial processors.",
    },
    {
      question: "What Incoterms do you support for international deliveries?",
      answer:
        "We primarily operate under FOB (Free on Board) out of Port Sudan and CIF (Cost, Insurance, and Freight) to major designated international maritime terminals across Europe, Asia, the Middle East, and North America.",
    },
    {
      question:
        "Are Certificate of Analysis (CoA) and phytosanitary documents provided with every batch?",
      answer:
        "Yes. Every container is dispatched with rigorous origin documentation, including an official Certificate of Analysis guaranteeing moisture limits, purity thresholds, and grade-1 botanical specifications.",
    },
    {
      question:
        "What are your standard payment terms for bulk container allocations?",
      answer:
        "For institutional buyers and recurring partners, we accept secure international bank transfers (TT) and verified Letter of Credit (LC) terms established through recognized financial institutions.",
    },
    {
      question:
        "What is the typical lead time from RFQ confirmation to port dispatch?",
      answer:
        "Standard port dispatch and container loading from our Sudan processing facilities typically range between 10 to 21 business days, depending on port congestion, vessel scheduling, and specific customs documentation requirements.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
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
