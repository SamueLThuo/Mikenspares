import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

const ProductGrid = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Official WhatsApp Number
  const phoneNumber = "254708122732";

  useEffect(() => {
    const controller = new AbortController(); // to cancel stale fetches
    const signal = controller.signal;

    setLoading(true);
    let url = 'http://localhost:8000/api/products/';
    if (selectedCategory) {
      url += `?category=${selectedCategory}`;
    }

    fetch(url, { signal })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Failed to load products:', err);
          setLoading(false);
        }
      });

    return () => controller.abort(); // cancel old requests on cleanup
  }, [selectedCategory]);

  return (
    <div className="product-section">
      {/* ✅ New Intro Paragraph */}
      <div className="browse-header">
        <h2>
          {selectedCategory 
            ? `Browse products in ${selectedCategory}` 
            : "Browse All Our Products"}
        </h2>
        <p>Discover a wide range of quality products available for you. Click on a product to view details or order directly on WhatsApp.</p>
      </div>

      {loading ? (
        <div className="loading-message">Loading products...</div>
      ) : products.length === 0 ? (
        <div className="loading-message">No products found.</div>
      ) : (
        <div className="product-grid">
          {products.map(product => {
            const message = `Hello, I want to order: ${product.name} (${product.category.name}).`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            return (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.category.name}</p>
                <p className="price">KSh {product.price}</p>
                <div className="action-buttons">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="whatsapp-btn"
                  >
                    Order on WhatsApp
                  </a>
                  <Link to={`/product/${product.slug}`} className="view-btn">
                    View Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
