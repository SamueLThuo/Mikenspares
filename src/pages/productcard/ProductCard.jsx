// src/components/cards/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, image, price, discount_percent, discounted_price, category, brand, is_deal } = product;

  // ✅ Official Miken Spares WhatsApp number
  const phoneNumber = '254708122732';  

  const message = `Hello, I want to order: ${name} (${brand}) in category ${category.name}.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-card">
      {is_deal && <div className="deal-badge">Deal</div>}
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{category.name}</p>
      <div className="price">
        {discount_percent > 0 ? (
          <>
            <span className="original">KSh {price}</span>
            <span className="discounted">KSh {discounted_price}</span>
          </>
        ) : (
          <span>KSh {price}</span>
        )}
      </div>
      <a 
        href={whatsappUrl} 
        className="whatsapp-btn" 
        target="_blank" 
        rel="noreferrer"
      >
        Order on WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;
