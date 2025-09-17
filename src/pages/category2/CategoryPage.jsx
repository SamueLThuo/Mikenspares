import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategorySection.css'; // your styles

const CategoryPage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios.get('/api/categories-with-products/')
      .then(response => setSections(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="category-sections">
      {sections.map((section, index) => (
        <div key={index} className="category-block">
          <h2 className="category-title">{section.name}</h2>
          <div className="product-list">
            {section.products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>KSh {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
