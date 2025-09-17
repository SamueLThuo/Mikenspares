// src/pages/deals/DealsSection.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DealsSection.css';

const DealsSection = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const phoneNumber = "254708122732"; // ✅ Updated business WhatsApp

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(res => res.json())
      .then(data => {
        const dealProducts = data.filter(product => product.is_deal);
        setDeals(dealProducts);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch deals:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="deals-section">
      <h2>🔥 Hot Deals</h2>
      {loading ? (
        <p>Loading deals...</p>
      ) : deals.length === 0 ? (
        <p>No deals available right now.</p>
      ) : (
        <div className="deal-grid">
          {deals.map(product => {
            const message = `Hello, I want to order: ${product.name} (${product.category?.name || "Uncategorized"}).`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            return (
              <div key={product.id} className="deal-card">
                {product.discount_percent > 0 && (
                  <div className="discount-badge">
                    -{product.discount_percent}%
                  </div>
                )}
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="category">{product.category?.name}</p>
                <div className="price">
                  {product.discount_percent > 0 ? (
                    <>
                      <span className="original">KSh {product.price}</span>
                      <span className="discounted">KSh {product.discounted_price}</span>
                    </>
                  ) : (
                    <span>KSh {product.price}</span>
                  )}
                </div>
                <div className="deal-actions">
                  <a
                    href={whatsappUrl}
                    className="whatsapp-btn"
                    target="_blank"
                    rel="noopener noreferrer"
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

export default DealsSection;
