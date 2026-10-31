import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, Award, ArrowRight } from "lucide-react";
import "./legacy.css";

export default function Legacy() {
  const heritagePillars = [
    {
      icon: <MapPin className="legacy-pillar-icon" size={24} />,
      title: "Direct Origin Sourcing",
      description:
        "Rooted directly in the premier harvest belts of Sudan, bypassing middlemen to secure uncompromised grade purity from farm gate to international ports.",
    },
    {
      icon: <ShieldCheck className="legacy-pillar-icon" size={24} />,
      title: "Uncompromising Quality Control",
      description:
        "Rigorous hand-picking, mechanical cleaning, and container-grade sorting ensuring strict compliance with international food and industrial standards.",
    },
    {
      icon: <Award className="legacy-pillar-icon" size={24} />,
      title: "Decades of Trade Expertise",
      description:
        "Built on generational agricultural knowledge and expert logistics coordination, ensuring seamless multi-container FCL fulfillment worldwide.",
    },
  ];

  return (
    <div className="legacy-page">
      {/* Header Section */}
      <div className="legacy-header-wrapper">
        <div className="legacy-header">
          <span className="legacy-tag">Heritage & Authority</span>
          <h1 className="legacy-title">The Kosh International Legacy</h1>
          <p className="legacy-description">
            Bridging Sudanese origin harvesting with industrial manufacturers,
            processors, and institutional buyers across global markets. We
            specialize in elite-grade Gum Arabic, Frankincense, and vital
            agricultural commodities.
          </p>
        </div>
        <div>
          <Link to="/quote" className="legacy-inquiry-btn">
            Inquire For Allocation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Narrative Block */}
      <div className="legacy-story-container">
        <div className="legacy-story-card">
          <h2>Our Origin Story</h2>
          <p>
            Kosh International was established with a singular mission: to
            connect global industrial supply chains directly to the rich,
            natural harvests of Sudan. In an industry often diluted by
            intermediaries and inconsistent grading, we maintain absolute
            transparency and traceability.
          </p>
          <p>
            From our signature **Acacia Senegal (Hashal)** Gum Arabic and raw
            Boswellia oleoresin tears to our meticulously cleaned sesame seeds
            and hibiscus calyces, every shipment reflects our commitment to
            purity, consistency, and professional execution.
          </p>
        </div>
      </div>

      {/* Core Pillars Grid */}
      <div className="legacy-pillars-section-heading">
        <h2>Core Operational Pillars</h2>
        <p>
          The operational standards that define every metric of our export
          business.
        </p>
      </div>

      <div className="legacy-pillars-grid">
        {heritagePillars.map((pillar, index) => (
          <div key={index} className="legacy-pillar-card">
            <div className="legacy-icon-wrapper">{pillar.icon}</div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-desc">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
