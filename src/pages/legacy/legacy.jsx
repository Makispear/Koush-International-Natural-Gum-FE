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
          <span className="legacy-tag">About Us</span>
          <h1 className="legacy-title">About Kuosh International</h1>
          <p className="legacy-description">
            Bridging Sudanese origin harvesting with industrial manufacturers,
            processors, and institutional buyers across global markets. We
            specialize in elite-grade Gum Arabic, and vital
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
          <div className="legacy-story-brand">
            <img
              src="/kuosh-logo.svg"
              alt="Kuosh International Natural Gum Trading Co. Ltd"
              className="legacy-story-logo"
            />
          </div>
          <div className="legacy-story-content">
            <h2>Our Story</h2>
            <p>
              Kuosh International was established with a singular mission: to
              connect global industrial supply chains directly to the rich,
              natural harvests of Sudan. In an industry often diluted by
              intermediaries and inconsistent grading, we maintain absolute
              transparency and traceability.
            </p>
            <p>
              From our signature{" "}
              <strong className="legacy-highlight">
                Acacia Senegal (Hashab)
              </strong>{" "}
              Gum Arabic and raw Boswellia oleoresin tears to our meticulously
              cleaned sesame seeds and hibiscus calyces, every shipment reflects
              our commitment to purity, consistency, and professional execution.
            </p>
          </div>
        </div>
      </div>

      <section
        className="legacy-location-section"
        aria-labelledby="legacy-location-heading"
      >
        <div className="legacy-location-info">
          <MapPin className="legacy-location-icon" size={28} aria-hidden="true" />
          <h2 id="legacy-location-heading">Omdurman Industrial Area</h2>
          <p>Omdurman, Sudan</p>
          <a
            className="legacy-location-link"
            href="https://www.google.com/maps/search/?api=1&query=Omdurman%20Industrial%20Area%2C%20Omdurman%2C%20Sudan"
            target="_blank"
            rel="noreferrer"
          >
            View location in Google Maps
          </a>
        </div>
        <div className="legacy-location-map">
          <iframe
            title="Map of Omdurman Industrial Area, Omdurman, Sudan"
            src="https://maps.google.com/maps?q=Omdurman%20Industrial%20Area%2C%20Omdurman%2C%20Sudan&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

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
