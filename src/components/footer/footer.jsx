import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, PhoneCallIcon } from "lucide-react";
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
              <img
                className="footer-logo"
                src="/kuosh-logo.svg"
                alt="Kuosh International Natural Gum Trading Co. Ltd"
              />
            </div>
            <p className="footer-about-text">
              We source and export top-grade Gum Arabic and agricultural
              commodities directly from origin.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <nav aria-labelledby="footer-navigation-heading">
              <h2 className="footer-heading" id="footer-navigation-heading">
                Navigation
              </h2>
              <ul className="footer-links-list">
                <li>
                  <Link to="/">Main Page</Link>
                </li>
                <li>
                  <Link to="/products">Products & Specifications</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Request Quotation (RFQ)</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Product Catalogue */}
          <div className="footer-col">
            <h2 className="footer-heading">Export Catalog</h2>
            <ul className="footer-links-list">
              <li>
                <Link to="/products">View current product catalogue</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trade Desk Contact */}
          <div className="footer-col">
            <h2 className="footer-heading">Global Trade Desk</h2>
            <ul className="footer-contact-list">
              <li>
                <Globe
                  className="w-4 h-4 text-amber-500 shrink-0"
                  aria-hidden="true"
                />
                <span>U.S based operations</span>
              </li>
              <li>
                <MapPin
                  className="w-4 h-4 text-amber-500 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Omdurman%2C+Sudan+-+Omdurman+Industrial+Area"
                  target="_blank"
                  rel="noreferrer"
                >
                  Headquarters: Omdurman, Sudan
                </a>
              </li>
              <li>
                <Mail
                  className="w-4 h-4 text-amber-500 shrink-0"
                  aria-hidden="true"
                />
                <a href="mailto:info@kuoshinternational.com">
                  info@kuoshinternational.com
                </a>
              </li>
              <li>
                <PhoneCallIcon
                  className="w-4 h-4 text-amber-500 shrink-0"
                  aria-hidden="true"
                />
                <a href="tel:+18607941672">+1 (860) 794-1672</a>
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
              Order-specific documentation available
            </span>
            <span className="footer-legal-item">
              FOB / CIF terms discussed per order
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
