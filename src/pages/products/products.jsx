import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bean,
  Flower2,
  MapPin,
  Sprout,
  Wheat,
} from "lucide-react";
import "./products.css";

const flagshipCommodities = [
  {
    name: "Gum Arabic",
    varieties: [
      {
        name: "Hashab",
        botanicalName: "Acacia senegal",
        image: "/pic7.png",
      },
      {
        name: "Talha",
        botanicalName: "Acacia seyal",
        image: "/pic1.jpeg",
      },
    ],
    forms: ["Raw gum", "Cleaned gum", "Sorted & graded", "Kibbled"],
    specifications: "Grades and particle sizes tailored to buyer requirements.",
    packaging: "50 kg bags; custom logo printing available.",
  },
];

const supplementaryCommodities = [
  {
    name: "Sudan Sesame Seeds",
    icon: Wheat,
    varieties: ["White", "Mixed Humera"],
    forms: ["Cleaned seeds"],
    specifications: "Export grades; sorted and cleaned.",
  },
  {
    name: "Hibiscus Flowers",
    icon: Flower2,
    varieties: ["Grade A"],
    forms: ["Whole dried calyces", "Cleaned & sifted"],
    specifications: "Deep crimson color.",
  },
  {
    name: "Peanuts",
    icon: Bean,
    varieties: ["Sudanese groundnuts"],
    forms: ["In-shell", "Kernels"],
    specifications: "High kernel count; export-standard bagging.",
  },
];

function ProductCard({ item, flagship = false }) {
  const [selectedVariety, setSelectedVariety] = useState(
    flagship ? item.varieties[0] : null,
  );
  const productImage = flagship ? selectedVariety.image : null;
  const CommodityIcon = item.icon;

  return (
    <article
      className={`product-card${flagship ? " flagship-card" : " supplementary-card"}`}
    >
      {flagship ? (
        <div className="product-image-container">
          <img
            key={productImage}
            id="flagship-product-image"
            src={productImage}
            alt={`${selectedVariety.name} Gum Arabic from ${selectedVariety.botanicalName}`}
            className="product-thumb"
          />
          <div className="product-image-caption">
            <span>Selected variety</span>
            <strong>
              {selectedVariety.name} <i aria-hidden="true">·</i>{" "}
              {selectedVariety.botanicalName}
            </strong>
          </div>
        </div>
      ) : (
        <div
          className={`commodity-visual commodity-visual-${item.name
            .toLowerCase()
            .replaceAll(" ", "-")}`}
          aria-hidden="true"
        >
          <span className="commodity-visual-index">0{item.index}</span>
          <CommodityIcon className="commodity-visual-icon" size={48} />
          <span className="commodity-visual-label">Origin commodity</span>
        </div>
      )}

      <div className="product-card-content">
        {flagship && (
          <div className="flagship-product-label">
            <span>Primary export</span>
            <span>Sudan · Kordofan Region</span>
          </div>
        )}
        <h3 className="product-name">{item.name}</h3>
        {flagship && (
          <p className="product-origin">
            <MapPin size={15} aria-hidden="true" />
            Kordofan Region, Sudan
          </p>
        )}

        {flagship && (
          <div className="product-detail">
            <h4>Choose variety</h4>
            <div
              className="product-variety-options"
              role="group"
              aria-label="Gum Arabic variety"
            >
              {item.varieties.map((variety) => (
                <button
                  key={variety.name}
                  type="button"
                  className="product-variety-option"
                  aria-pressed={selectedVariety.name === variety.name}
                  aria-controls="flagship-product-image"
                  onClick={() => setSelectedVariety(variety)}
                >
                  {variety.name}
                  <span>{variety.botanicalName}</span>
                </button>
              ))}
            </div>
            <p className="product-selected-variety" aria-live="polite">
              Showing {selectedVariety.name} <span>·</span>{" "}
              {selectedVariety.botanicalName}
            </p>
          </div>
        )}

        <div className="product-detail">
          <h4>{flagship ? "Available forms" : "Variety"}</h4>
          <ul className="product-chips">
            {(flagship ? item.forms : item.varieties).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
        {!flagship && (
          <div className="product-detail">
            <h4>Available form</h4>
            <ul className="product-chips">
              {item.forms.map((form) => (
                <li key={form}>{form}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="product-specifications">
          <h4>Specifications</h4>
          <p>{item.specifications}</p>
          {item.packaging && (
            <p className="product-packaging">{item.packaging}</p>
          )}
        </div>
      </div>

      {flagship && (
        <div className="product-card-footer">
          <span>
            <MapPin size={15} aria-hidden="true" />
            Sourced in Sudan
          </span>
          <Link to="/contact" className="product-inquiry-link">
            Discuss this product <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      )}
    </article>
  );
}

export default function Products() {
  return (
    <div className="products-page">
      <div className="products-header-wrapper">
        <div className="products-header">
          <span className="products-tag">
            <Sprout size={15} aria-hidden="true" />
            Direct from origin · Sudan
          </span>
          <h1 className="products-title">Products with roots in Sudan.</h1>
          <p className="products-description">
            Explore Gum Arabic from Kordofan alongside select agricultural
            commodities. Tell us your preferred grade, form, and destination.
          </p>
        </div>
        <div className="products-header-action">
          <Link to="/contact" className="catalog-inquiry-btn">
            Request a wholesale quote <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <p className="samples-notice">
        Looking for samples? Ask our trade desk about availability for your
        product and destination.
      </p>

      <section className="product-section" aria-labelledby="flagship-heading">
        <div className="flagship-section-heading">
          <span className="section-kicker">01 / Core product</span>
          <h2 id="flagship-heading">Gum Arabic, up close.</h2>
          <p>Compare the two varieties and explore available forms.</p>
        </div>
        <div className="products-grid flagship-grid">
          {flagshipCommodities.map((item) => (
            <ProductCard key={item.name} item={item} flagship />
          ))}
        </div>
      </section>

      <section
        className="product-section supplementary-section"
        aria-labelledby="supplementary-heading"
      >
        <div className="supplementary-section-heading">
          <span className="section-kicker">02 / Further selections</span>
          <h2 id="supplementary-heading">More from Sudan.</h2>
          <p>
            A considered range of complementary agricultural commodities. Ask
            us about availability and shipment fit.
          </p>
        </div>
        <div className="products-grid supplementary-grid">
          {supplementaryCommodities.map((item, index) => (
            <ProductCard
              key={item.name}
              item={{ ...item, index: index + 1 }}
            />
          ))}
        </div>
      </section>

      <div className="catalog-footer">
        <div>
          <span className="section-kicker">Your requirements, in focus</span>
          <h2>Planning a product enquiry?</h2>
          <p>Share the product, grade, and destination you have in mind.</p>
        </div>
        <Link to="/contact" className="catalog-footer-link">
          Start a conversation <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
