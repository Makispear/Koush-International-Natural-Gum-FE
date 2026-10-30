import { Link } from "react-router-dom";
import "./products.css";

export default function Products() {
  const commodities = [
    {
      name: "Gum Arabic (Acacia Senegal - Hashal)",
      category: "Flagship Export",
      image: null,
      isFlagship: true,
      specs: "Grade 1 Cleaned & Hand-Picked • Kordofan Region",
      purity: "99.5% Min Purity • Moisture Max 13%",
      use: "World-class hydrocolloid, food and beverage stabilizer, pharmaceutical binder, and flavor emulsifier.",
    },
    {
      name: "Gum Arabic (Acacia Seyal - Talha)",
      category: "Natural Resins",
      image: null,
      isFlagship: false,
      specs: "Industrial Grade • High Viscosity Solution",
      purity: "Commercial Export Standard • Natural Raw Calyces",
      use: "Adhesives, printing inks, technical coatings, and industrial binding applications.",
    },
    {
      name: "Frankincense Gum (Boswellia - Bulk Raw)",
      category: "Aromatic Resins",
      image: "/pic1.jpeg",
      isFlagship: false,
      specs: "Natural Oleoresin Tears • Bulk Origin Sacks",
      purity: "Unfiltered Harvest Stock • Direct Origin Grading",
      use: "Essential oil extraction, aromatherapy, and bulk fragrance manufacturing.",
    },
    {
      name: "Frankincense Tears (Hand-Inspected Grade)",
      category: "Aromatic Resins",
      image: "/pic2.jpeg",
      isFlagship: false,
      specs: "Hand-Sorted Raw Tears • Elite Select Profile",
      purity: "High Resin Content • Inspected Batches",
      use: "Botanical extraction, fine cosmetic processing, and premium resin supply.",
    },
    {
      name: "Cleaned Resin Granules & Siftings",
      category: "Natural Resins",
      image: "/pic3.jpeg",
      isFlagship: false,
      specs: "Sifted Granular Consistency • Graded Mesh",
      purity: "Uniform Particle Size • Foreign Matter Min",
      use: "Specialized processing, technical applications, and industrial manufacturing.",
    },
    {
      name: "Raw Harvest Resin Stock",
      category: "Natural Resins",
      image: "/pic4.jpeg",
      isFlagship: false,
      specs: "Direct Origin Collection Bags • Stock Lot",
      purity: "Verified Origin Sourcing • Sudan Belts",
      use: "Bulk industrial supply for international importers and processing plants.",
    },
  ];

  return (
    <div className="products-page">
      <div className="products-header-wrapper">
        <div className="products-header">
          <span className="products-tag">Verified Export Catalog</span>
          <h1 className="products-title">Direct Origin Commodities</h1>
          <p className="products-description">
            Specializing in elite Sudanese Gum Arabic and natural oleoresins.
            Backed by 13 years of origin expertise, rigorous quality control,
            and direct supply chain integrity from harvesting belts to container
            ports.
          </p>
        </div>
        <div>
          <Link to="/contact" className="catalog-inquiry-btn">
            Request Wholesale Quote
          </Link>
        </div>
      </div>

      <div className="products-grid">
        {commodities.map((item, index) => (
          <div
            key={index}
            className={`product-card ${item.isFlagship ? "flagship-card" : ""}`}
          >
            {item.image ? (
              <div className="product-image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-thumb"
                />
              </div>
            ) : (
              <div className="product-image-placeholder">
                <span className="placeholder-tag">Origin Flagship Stock</span>
                <p className="placeholder-text">
                  Official Harvest Documentation Available Upon Request
                </p>
              </div>
            )}

            <div className="product-card-content">
              <span className="product-category">{item.category}</span>
              <h3 className="product-name">{item.name}</h3>

              <div className="product-specs-box">
                <p className="product-spec">
                  <span>Specs:</span> {item.specs}
                </p>
                <p className="product-spec">
                  <span>Quality:</span> {item.purity}
                </p>
              </div>

              <p className="product-use">
                <span>Applications:</span> {item.use}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
