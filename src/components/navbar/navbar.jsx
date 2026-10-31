import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar-wrapper">
      {/* Utility Top Bar */}
      <div className="navbar-top-bar">
        <div className="navbar-top-container">
          <div className="navbar-top-left">
            <Globe className="w-3.5 h-3.5 text-amber-500" />
            <span>
              Direct Origin Exporter • Khartoum, Sudan & International
              Operations
            </span>
          </div>
          <div className="navbar-top-right">
            <span>13 Years Industry Legacy</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <span className="navbar-logo-text">KUOSH INTERNATIONAL</span>
            <span className="navbar-logo-sub">
              Natural Gum & Agricultural Exports
            </span>
          </Link>

          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/products" onClick={closeMenu}>
              Products
            </Link>
            <Link to="/legacy" onClick={closeMenu}>
              Legacy
            </Link>
            <Link to="/contact" className="navbar-cta" onClick={closeMenu}>
              Request Quote
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
