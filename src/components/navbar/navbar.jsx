import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    const handlePopState = () => setIsOpen(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar-wrapper">
      {/* Utility Top Bar */}
      <div className="navbar-top-bar">
        <div className="navbar-top-container">
          <div className="navbar-top-left">
            <Globe className="w-3.5 h-3.5 text-amber-500" />
            <span>
              Headquartered in Khartoum, Sudan with Global Export Operations
            </span>
          </div>
          <div className="navbar-top-right">
            <span>13 years exporting</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img
              className="navbar-logo"
              src="/kuosh-logo.svg"
              alt="Kuosh International Natural Gum Trading Co. Ltd"
            />
          </Link>

          <button
            type="button"
            ref={menuToggleRef}
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            {isOpen ? (
              <X className="navbar-toggle-icon" aria-hidden="true" />
            ) : (
              <Menu className="navbar-toggle-icon" aria-hidden="true" />
            )}
          </button>

          <nav
            id="primary-navigation"
            className={`navbar-links ${isOpen ? "active" : ""}`}
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "navbar-link-current" : undefined
              }
              onClick={closeMenu}
            >
              Main Page
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "navbar-link-current" : undefined
              }
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar-link-current" : undefined
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navbar-cta${isActive ? " navbar-cta-current" : ""}`
              }
              onClick={closeMenu}
            >
              Request Quote
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}
