import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllProduct.css";
import CategoryBar from "../../components/category/CategoryBar"; // ✅ import category bar

const phoneNumber = "254708122732";


// Category colors
const categoryStyles = {
  Screens: { bg: "#E3F2FD", icon: "🖥️" },
  Chargers: { bg: "#FFF3E0", icon: "🔌" },
  Batteries: { bg: "#E8F5E9", icon: "🔋" },
  Watches: { bg: "#F3E5F5", icon: "⌚" },
  Accessories: { bg: "#FFEBEE", icon: "🎧" },
  Uncategorized: { bg: "#ECEFF1", icon: "📦" },
};

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null); // ✅ filter state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories/with_products/")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load categories with products:", err);
        setLoading(false);
      });

    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // ✅ Filter categories if one is selected
  const displayedCategories =
    filteredCategory && filteredCategory !== null
      ? categories.filter((cat) => cat.name === filteredCategory)
      : categories;

  if (loading) return <div className="loading-message">Loading all products...</div>;

  return (
    <div className="all-products-page">
      {/* Category bar */}
      <CategoryBar onSelectCategory={setFilteredCategory} />

      {/* Intro */}
      <div className="page-intro">
        <h1>Explore Our Products</h1>
        <p>
          Browse through all our categories below. Each section has a unique
          color for easy navigation. Order instantly via WhatsApp or view more
          details on each product page.
        </p>
      </div>

      {displayedCategories.map((category) => {
        const style = categoryStyles[category.name] || { bg: "#ECEFF1" };

        return (
          <div
            key={category.id}
            className="category-section"
            style={{ backgroundColor: style.bg }}
          >
            <div className="category-content">
              {/* Category Header */}
              <div className="category-header">
                {style.icon && <span className="category-icon">{style.icon}</span>}
                <h2>{category.name}</h2>
              </div>

              {/* Product Grid */}
              <div className="product-grid">
                {category.products.map((product) => {
                  const message = `Hello, I want to order: ${product.name} (${category.name}).`;
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;

                  return (
                    <div className="product-card" key={product.id}>
                      {product.discount_percent > 0 && (
                        <div className="discount-badge">
                          -{product.discount_percent}%
                        </div>
                      )}
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <p className="brand">{product.brand}</p>
                      <p className="price">
                        {product.discount_percent > 0 ? (
                          <>
                            <span className="original-price">
                              KSh {product.price}
                            </span>
                            <span className="discounted-price">
                              KSh {product.discounted_price}
                            </span>
                          </>
                        ) : (
                          <span>KSh {product.price}</span>
                        )}
                      </p>

                      <div className="action-buttons">
                        <a
                          href={whatsappUrl}
                          className="whatsapp-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          💬 Order on WhatsApp
                        </a>
                        <Link
                          to={`/product/${product.slug}`}
                          className="view-btn"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
