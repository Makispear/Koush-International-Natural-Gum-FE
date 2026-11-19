import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe, Download } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [installMessage, setInstallMessage] = useState("");
  const [isInstalled, setIsInstalled] = useState(false);
  const menuToggleRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      const target = event.target;
      if (
        !navigationRef.current?.contains(target) &&
        !menuToggleRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    const handleFocusIn = (event) => {
      const target = event.target;
      if (
        !navigationRef.current?.contains(target) &&
        !menuToggleRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    const handlePopState = () => setIsOpen(false);
    const handleDesktopLayout = (event) => {
      if (event.matches) setIsOpen(false);
    };
    const desktopLayout = window.matchMedia("(min-width: 1025px)");

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("focusin", handleFocusIn);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);
    desktopLayout.addEventListener("change", handleDesktopLayout);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
      desktopLayout.removeEventListener("change", handleDesktopLayout);
    };
  }, [isOpen]);

  useEffect(() => {
    const checkInstalled = () => {
      setIsInstalled(
        window.matchMedia("(display-mode: standalone)").matches ||
          window.navigator.standalone === true,
      );
    };
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      setInstallMessage("");
    };
    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setInstallMessage("");
      setIsInstalled(true);
    };

    checkInstalled();
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    const displayMode = window.matchMedia("(display-mode: standalone)");
    displayMode.addEventListener("change", checkInstalled);
    return () => {
      displayMode.removeEventListener("change", checkInstalled);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);
  const installApp = async () => {
    if (!installPrompt) {
      setInstallMessage(
        "On iPhone or iPad, tap Share, then Add to Home Screen. On other devices, open your browser menu and choose Install app.",
      );
      return;
    }

    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === "accepted") closeMenu();
    } catch {
      setInstallMessage(
        "Installation could not start. Try your browser's install option.",
      );
    } finally {
      setInstallPrompt(null);
    }
  };

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
            ref={navigationRef}
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
            {!isInstalled && (
              <button
                type="button"
                className="navbar-install"
                onClick={installApp}
              >
                Install app <Download size={16} aria-hidden="true" />
              </button>
            )}
            {installMessage && (
              <span className="navbar-install-message" role="status">
                {installMessage}
              </span>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}
