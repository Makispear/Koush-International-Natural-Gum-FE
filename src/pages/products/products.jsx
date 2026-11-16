import { Link } from "react-router-dom";
import { useState } from "react";
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
    varieties: ["White", "Mixed Humera"],
    forms: ["Cleaned seeds"],
    specifications: "Export grades; sorted and cleaned.",
  },
  {
    name: "Hibiscus Flowers",
    varieties: ["Grade A"],
    forms: ["Whole dried calyces", "Cleaned & sifted"],
    specifications: "Deep crimson color.",
  },
  {
    name: "Peanuts",
    varieties: ["Sudanese groundnuts"],
    forms: ["In-shell", "Kernels"],
    specifications: "High kernel count; export-standard bagging.",
  },
];

function ProductCard({ item, flagship = false }) {
  const [selectedVariety, setSelectedVariety] = useState(
    flagship ? item.varieties[0] : null,
  );
  const productImage = flagship ? selectedVariety.image : item.image;

  return (
    <article
      className={`product-card${flagship ? " flagship-card" : " supplementary-card"}`}
    >
      {productImage && (
        <div className="product-image-container">
          <img
            src={productImage}
            alt={`${item.name}${flagship ? ` (${selectedVariety.name})` : ""} product`}
            className="product-thumb"
          />
        </div>
      )}
      <div className="product-card-content">
        <h3 className="product-name">{item.name}</h3>
        {flagship && (
          <p className="product-origin">Origin: Kordofan Region, Sudan</p>
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
                  onClick={() => setSelectedVariety(variety)}
                >
                  {variety.name}
                  <span>{variety.botanicalName}</span>
                </button>
              ))}
            </div>
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
    </article>
  );
}

export default function Products() {
  return (
    <div className="products-page">
      <div className="products-header-wrapper">
        <div className="products-header">
          <span className="products-tag">Verified Export Catalog</span>
          <h1 className="products-title">Sudanese Products</h1>
          <p className="products-description">
            Export-ready gums and agricultural commodities, sourced directly
            from Sudan.
          </p>
        </div>
        <div className="products-header-action">
          <Link to="/quote" className="catalog-inquiry-btn">
            Request Wholesale Quote
          </Link>
        </div>
      </div>

      <p className="samples-notice">
        Product samples are available for all items below. Contact us to request
        samples.
      </p>

      <section className="product-section" aria-labelledby="flagship-heading">
        <div className="flagship-section-heading">
          <h2 id="flagship-heading">Flagship Product</h2>
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
          <h2 id="supplementary-heading">Additional Origin Commodities</h2>
          <p>
            Available for mixed container allocations and recurring bulk orders.
          </p>
        </div>
        <div className="products-grid supplementary-grid">
          {supplementaryCommodities.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
