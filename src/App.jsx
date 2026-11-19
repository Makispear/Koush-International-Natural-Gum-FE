/* src/App.jsx */
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Products from "./pages/products/products";
import "./styles/global.css";
import RequestQuote from "./components/contact/requestQuote";
import Legacy from "./pages/legacy/legacy";
import {
  notFoundMetadata,
  pageMetadata,
  routeAliases,
  SITE_URL,
} from "./seo/siteMetadata";

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const requestedPath = pathname.replace(/\/+$/, "") || "/";
    const canonicalPath = routeAliases[requestedPath] || requestedPath;
    const metadata = pageMetadata[canonicalPath] || notFoundMetadata;
    const canonicalLink = document.head.querySelector('link[rel="canonical"]');

    document.title = metadata.title;

    for (const [selector, content] of [
      ['meta[name="description"]', metadata.description],
      ['meta[name="robots"]', metadata.robots || "index, follow"],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      [
        'meta[property="og:url"]',
        `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`,
      ],
      ['meta[name="twitter:title"]', metadata.title],
      ['meta[name="twitter:description"]', metadata.description],
    ]) {
      const element = document.head.querySelector(selector);
      if (!element) {
        throw new Error(`Missing page metadata element: ${selector}`);
      }
      element.setAttribute("content", content);
    }

    if (!canonicalLink) {
      throw new Error("Missing canonical link element.");
    }
    canonicalLink.setAttribute(
      "href",
      `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`,
    );
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <h1 id="not-found-title">Page not found</h1>
      <p>The page you requested does not exist or may have moved.</p>
      <Link to="/">Return to the home page</Link>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div
        className="app-layout"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <PageMetadata />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="app-main" style={{ flex: 1 }} tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<RequestQuote />} />
            <Route path="/quote" element={<RequestQuote />} />
            <Route path="/about" element={<Legacy />} />
            <Route path="/legacy" element={<Navigate to="/about" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
