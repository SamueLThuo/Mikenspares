import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Official Miken Spares WhatsApp number
  const phoneNumber = "254708122732";  

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${slug}/`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading product:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="loading">🔄 Loading product details...</div>;
  if (!product) return <div className="error">🚫 Product not found.</div>;

  const whatsappMessage = `Hello, I want to order: ${product.name} (${product.brand || "Unknown Brand"}) in category ${product.category?.name || "Uncategorized"}.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="brand">
          Brand: <strong>{product.brand || "Unknown"}</strong>
        </p>
        <p className="category">
          Category: <strong>{product.category?.name || "Uncategorized"}</strong>
        </p>

        <p className="description">{product.description || "No description provided."}</p>

        <div className="price-details">
          {product.discount_percent > 0 ? (
            <>
              <span className="original-price">KSh {product.price}</span>
              <span className="discounted-price">KSh {product.discounted_price}</span>
              <span className="discount-badge">-{product.discount_percent}%</span>
            </>
          ) : (
            <span className="final-price">KSh {product.price}</span>
          )}
        </div>

        <a
          href={whatsappUrl}
          className="whatsapp-order-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
