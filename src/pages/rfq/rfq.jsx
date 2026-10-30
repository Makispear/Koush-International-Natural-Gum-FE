import RequestQuote from "../../components/contact/requestQuote";
import FaqSection from "../../components/faq/faqSection";
import "./rfq.css";

export default function RfqPage() {
  return (
    <div className="rfq-page-wrapper">
      <RequestQuote />
      <div className="rfq-section-divider" />
      <FaqSection />
    </div>
  );
}
