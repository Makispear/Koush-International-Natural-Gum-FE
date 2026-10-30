import { Link } from "react-router-dom";
import "./products.css";

export default function Products() {
  const flagshipCommodities = [
    {
      name: "Gum Arabic",
      grade: "Grade 1 Cleaned & Hand-Picked (Acacia Senegal - Hashal)",
      category: "Flagship Export",
      image: "/pic7.png",
      isFlagship: true,
      specs: "Kordofan Region • 99.5% Min Purity • Moisture Max 13%",
      use: "World-class hydrocolloid, food and beverage stabilizer, pharmaceutical binder, and flavor emulsifier.",
    },
    {
      name: "Frankincense",
      grade: "Bulk Raw Natural Boswellia Oleoresin Tears",
      category: "Flagship Export",
      image: "/pic1.jpeg",
      isFlagship: true,
      specs: "Unfiltered Harvest Stock • Direct Origin Grading",
      use: "Essential oil extraction, aromatherapy, and bulk fragrance manufacturing.",
    },
  ];

  const supplementaryCommodities = [
    {
      name: "Sudan Sesame Seeds",
      grade: "Cleaned White & Mixed Humera Export Grade",
      specs: "High Oil Content • Sorted & Cleaned Stock",
      use: "Tahini production, confectionery manufacturing, baking, and edible oil extraction.",
    },
    {
      name: "Hibiscus Flowers",
      grade: "Whole Dry Sabdariffa Calyces (Grade A)",
      specs: "Deep Crimson Color • Mechanically Cleaned & Sifted",
      use: "Herbal teas, beverage infusions, natural food coloring, and extract manufacturing.",
    },
    {
      name: "Fool Sudani (Peanuts)",
      grade: "Raw Sudanese Groundnuts in Shell & Kernels",
      specs: "High Kernel Count • Export Standard Bagging",
      use: "Peanut butter processing, snack roasting, confectionery, and oil pressing.",
    },
  ];

  return (
    <div className="products-page">
      <div className="products-header-wrapper">
        <div className="products-header">
          <span className="products-tag">Verified Export Catalog</span>
          <h1 className="products-title">Direct Origin Commodities</h1>
          <p className="products-description">
            Specializing in elite Sudanese Gum Arabic and Frankincense resins,
            backed by 13 years of direct origin expertise and rigorous
            container-grade quality control.
          </p>
        </div>
        <div>
          <Link to="/quote" className="catalog-inquiry-btn">
            Request Wholesale Quote
          </Link>
        </div>
      </div>

      {/* Flagship Focus Section */}
      <div className="flagship-section-heading">
        <h2>Primary Flagship Specialties</h2>
        <p>
          Our core export focus: raw resins and natural gums harvested from
          premier Sudanese belts.
        </p>
      </div>

      <div className="products-grid flagship-grid">
        {flagshipCommodities.map((item, index) => (
          <div key={index} className="product-card flagship-card">
            {item.image && (
              <div className="product-image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-thumb"
                />
              </div>
            )}
            <div className="product-card-content">
              <span className="product-category">{item.category}</span>
              <h3 className="product-name">{item.name}</h3>
              <p className="product-grade-sub">{item.grade}</p>
              <div className="product-specs-box">
                <p className="product-spec">
                  <span>Specs:</span> {item.specs}
                </p>
              </div>
              <p className="product-use">
                <span>Applications:</span> {item.use}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Supplementary Origin Stock Section */}
      <div className="supplementary-section-heading">
        <h2>Additional Origin Commodities</h2>
        <p>
          Available for mixed container allocations and recurring bulk orders.
        </p>
      </div>

      <div className="products-grid supplementary-grid">
        {supplementaryCommodities.map((item, index) => (
          <div key={index} className="product-card supplementary-card">
            <div className="product-card-content">
              <span className="product-category">Supplementary Export</span>
              <h3 className="product-name">{item.name}</h3>
              <p className="product-grade-sub">{item.grade}</p>
              <div className="product-specs-box">
                <p className="product-spec">
                  <span>Specs:</span> {item.specs}
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
