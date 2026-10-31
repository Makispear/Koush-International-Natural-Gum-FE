import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, PhoneCallIcon, ShieldCheck } from "lucide-react";
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
              <span className="footer-logo-text">KUOSH INTERNATIONAL</span>
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
                  Gum Arabic (hashab / Talha)
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
                <Globe className="w-4 h-4 text-amber-500 shrink-0" />
                <span>U.S.-based operations</span>
              </li>
              <li>
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Omdurman%2C+Sudan+-+Omdurman+Industrial+Area"
                  target="_blank"
                  rel="noreferrer"
                >
                  Headquarters: Omdurman, Sudan
                </a>
              </li>
              <li>
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>makiaboabidamaki@gmail.com</span>
              </li>
              <li>
                <PhoneCallIcon className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+18607941672">+1 (860) 794-1672</a>
              </li>
              <li>
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Verified Certificate of Analysis (CoA) Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Kuosh International Natural Gum. All rights
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
