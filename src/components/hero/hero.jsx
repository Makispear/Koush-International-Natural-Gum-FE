import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Carousel from "../carousel/carousel";
import "./hero.css";

export default function Hero() {
  const heroImages = ["/pic1.jpeg", "/pic2.jpeg", "/pic3.jpeg"];

  return (
    <section className="hero-wrapper">
      <Carousel images={heroImages} />

      <div className="hero-content">
        <span className="hero-tag">Global Agricultural Exporter</span>
        <h1
          className="navbar-logo-text"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: "800",
            color: "#fff",
            marginBottom: "0.5rem",
          }}
        >
          KOUSH INTERNATIONAL
        </h1>
        <h2 className="hero-subtitle">
          EXPORTS OF NATURAL GUM & ELITE SUDANESE COMMODITIES
        </h2>
        <p className="hero-description">
          Bridging direct-origin Sudanese harvesting with global industrial
          buyers. Delivering uncompromising purity in Gum Arabic, Frankincense,
          and agricultural staples to international markets.
        </p>

        {/* Updated Actions Container with proper spacing */}
        <div className="hero-actions">
          <Link to="/products" className="hero-btn">
            Explore Export Catalog
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-amber-400 font-semibold text-sm transition py-3"
          >
            Inquire Bulk Container Rates &rarr;
          </Link>
        </div>

        {/* Corporate Trust Metrics Bar */}
        <div className="hero-metrics-grid">
          <div className="hero-metric-item">
            <span className="hero-metric-number">13 Years</span>
            <span className="hero-metric-label">Operational Legacy</span>
          </div>
          <div className="hero-metric-item">
            <span className="hero-metric-number">Global Reach</span>
            <span className="hero-metric-label">
              Active Trade Across 12+ Countries
            </span>
          </div>
          <div className="hero-metric-item">
            <span className="hero-metric-number">Grade 1</span>
            <span className="hero-metric-label">Direct Origin Sourcing</span>
          </div>
        </div>
      </div>

      {/* Gentle Scroll Down Cue */}
      <a
        href="#destinations"
        className="hero-scroll-prompt"
        onClick={(e) => {
          e.preventDefault();
          window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: "smooth",
          });
        }}
      >
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 text-amber-500" />
      </a>
    </section>
  );
}
