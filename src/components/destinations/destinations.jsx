import { useState } from "react";
import { Globe, MapPin, Shield } from "lucide-react";
import "./destinations.css";

export default function ExportDestinations() {
  const [activeRegion, setActiveRegion] = useState("all");

  const tradeCorridors = [
    {
      country: "China",
      region: "asia",
      hub: "Shanghai / Guangzhou Port Corridors",
      status: "Active Maritime Route",
    },
    {
      country: "Germany",
      region: "europe",
      hub: "Hamburg & Frankfurt Distribution Hubs",
      status: "Active Trade Route",
    },
    {
      country: "France",
      region: "europe",
      hub: "Marseille & Paris Industrial Processing",
      status: "Active Trade Route",
    },
    {
      country: "Netherlands",
      region: "europe",
      hub: "Port of Rotterdam Logistics Gateway",
      status: "Active Trade Route",
    },
    {
      country: "Turkey",
      region: "europe",
      hub: "Istanbul Transshipment Hub",
      status: "Active Trade Route",
    },
    {
      country: "Greece",
      region: "europe",
      hub: "Port of Piraeus Corridor",
      status: "Active Trade Route",
    },
    {
      country: "Dubai (UAE)",
      region: "mena",
      hub: "Jebel Ali Port / Middle East Terminal",
      status: "Active Trade Route",
    },
    {
      country: "Saudi Arabia",
      region: "mena",
      hub: "Jeddah & Dammam Trade Terminals",
      status: "Active Trade Route",
    },
    {
      country: "Iraq",
      region: "mena",
      hub: "Baghdad & Basra Commercial Corridors",
      status: "Active Trade Route",
    },
    {
      country: "Tunis",
      region: "mena",
      hub: "Tunis-Carthage Distribution Network",
      status: "Active Trade Route",
    },
    {
      country: "Morocco",
      region: "mena",
      hub: "Casablanca Maritime Gateway",
      status: "Active Trade Route",
    },
    {
      country: "United States",
      region: "americas",
      hub: "New York, Savannah & Houston Ports",
      status: "North American Expansion",
    },
  ];

  const filteredCorridors =
    activeRegion === "all"
      ? tradeCorridors
      : tradeCorridors.filter((item) => item.region === activeRegion);

  return (
    <section id="destinations" className="destinations-section">
      <div className="destinations-container">
        {/* Section Header */}
        <div className="destinations-header">
          <div className="destinations-badge">
            <Globe className="w-4 h-4 text-amber-500 animate-spin-slow" />
            <span>Global Trade Intelligence</span>
          </div>
          <h2 className="destinations-heading">
            Active Export Corridors & Markets
          </h2>
          <p className="destinations-sub">
            Kosh International bridges East African origin harvesting with
            industrial processors and wholesale distributors across 12+
            international jurisdictions[cite: 1].
          </p>
        </div>

        {/* Interactive Globe / Radar Visual Graphic Banner */}
        <div className="globe-visual-banner">
          <div className="radar-grid-overlay"></div>
          <div className="globe-center-content">
            <div className="pulsing-globe-icon">
              <Globe className="w-12 h-12 text-amber-400" />
              <div className="ping-ring"></div>
            </div>
            <div className="globe-stats-text">
              <span className="stat-highlight">13-Year Operational Legacy</span>
              <span className="stat-subtext">
                Direct Port-to-Port Container Fulfillment Across 3 Continents
              </span>
            </div>
          </div>
          <div className="trade-route-lines">
            <span className="line-dot dot-1"></span>
            <span className="line-dot dot-2"></span>
            <span className="line-dot dot-3"></span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="destination-filters">
          <button
            className={`filter-btn ${activeRegion === "all" ? "active" : ""}`}
            onClick={() => setActiveRegion("all")}
          >
            All Corridors ({tradeCorridors.length})
          </button>
          <button
            className={`filter-btn ${activeRegion === "europe" ? "active" : ""}`}
            onClick={() => setActiveRegion("europe")}
          >
            Europe
          </button>
          <button
            className={`filter-btn ${activeRegion === "mena" ? "active" : ""}`}
            onClick={() => setActiveRegion("mena")}
          >
            Middle East & North Africa
          </button>
          <button
            className={`filter-btn ${activeRegion === "asia" ? "active" : ""}`}
            onClick={() => setActiveRegion("asia")}
          >
            Asia
          </button>
          <button
            className={`filter-btn ${activeRegion === "americas" ? "active" : ""}`}
            onClick={() => setActiveRegion("americas")}
          >
            North America
          </button>
        </div>

        {/* Interactive Corridor Grid */}
        <div className="destinations-grid">
          {filteredCorridors.map((item, index) => (
            <div key={index} className="destination-card">
              <div className="card-top-row">
                <div className="country-title-wrapper">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <h3 className="destination-country-name">{item.country}</h3>
                </div>
                <span className="status-badge">{item.status}</span>
              </div>
              <p className="destination-hub-text">{item.hub}</p>
              <div className="card-footer-line">
                <span className="origin-label">
                  Origin: Port Sudan (FOB / CIF)
                </span>
                <Shield className="w-3.5 h-3.5 text-amber-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
