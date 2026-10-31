/* src/App.jsx */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Products from "./pages/products/products";
import "./styles/global.css";
import RequestQuote from "./components/contact/requestQuote";
import Legacy from "./pages/legacy/legacy";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div
        className="app-layout"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <main className="app-main" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<RequestQuote />} />
            <Route path="/quote" element={<RequestQuote />} />
            <Route path="/legacy" element={<Legacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
