import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Top Section: Brand & Quick Navigation */}
        <div className="footer-grid">
          {/* Column 1: Company Info */}
          <div className="footer-col footer-brand-col">
            <div className="footer-brand">
              <span className="footer-logo-text">KOSH INTERNATIONAL</span>
              <span className="footer-logo-sub">
                Natural Gum & Agricultural Exports
              </span>
            </div>
            <p className="footer-about-text">
              Direct origin sourcing and global container fulfillment of Grade-1
              Gum Arabic, Frankincense, and elite agricultural commodities
              backed by a 13-year operational legacy.
            </p>
            <div className="footer-origin-badge">
              <Globe className="w-4 h-4 text-amber-500" />
              <span>Khartoum, Sudan & International Operations</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products & Specifications</Link>
              </li>
              <li>
                <Link to="/about">Our 13-Year Legacy</Link>
              </li>
              <li>
                <Link to="/contact">Request Quotation (RFQ)</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Commodities */}
          <div className="footer-col">
            <h4 className="footer-heading">Export Catalog</h4>
            <ul className="footer-links-list">
              <li>
                <span className="footer-static-link">
                  Gum Arabic (Hashal / Talha)
                </span>
              </li>
              <li>
                <span className="footer-static-link">
                  Frankincense (Boswellia Resin)
                </span>
              </li>
              <li>
                <span className="footer-static-link">Agricultural Staples</span>
              </li>
              <li>
                <span className="footer-static-link">
                  Bulk Container Allocation
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Trade Desk Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Global Trade Desk</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  Khartoum, Sudan / North American Logistics Coordination
                </span>
              </li>
              <li>
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>trade@koshinternational.com</span>
              </li>
              <li>
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Verified Certificate of Analysis (CoA) Available</span>
              </li>
            </ul>
            <Link to="/contact" className="footer-rfq-btn">
              Inquire Bulk Rates <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Kosh International Natural Gum. All rights
            reserved. Direct Origin Exporter.
          </p>
          <div className="footer-legal-links">
            <span className="footer-legal-item">
              ISO / HACCP Standard Compliance
            </span>
            <span className="footer-legal-item">Incoterms: FOB / CIF</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
