// src/components/category/CategoryBar.jsx
import React, { useEffect, useState } from 'react';
import './Category.css';

const CategoryBar = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched categories:", data);
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (Array.isArray(data.results)) {
          setCategories(data.results);
        } else {
          console.error("Unexpected category format:", data);
          setCategories([]);
        }
      })
      .catch(err => {
        console.error('Failed to fetch categories:', err);
        setCategories([]);
      });
  }, []);

  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    onSelectCategory(name); // pass category name
  };

  const handleAllClick = () => {
    setActiveCategory(null);
    onSelectCategory(null); // reset to all
  };

  return (
    <div className="category-bar">
      {/* "All" Button */}
      <button
        className={`category-btn ${activeCategory === null ? 'active' : ''}`}
        onClick={handleAllClick}
      >
        <div className="category-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            alt="All"
            className="category-icon"
          />
        </div>
        All
      </button>

      {/* Category Buttons */}
      {Array.isArray(categories) && categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${activeCategory === cat.name ? 'active' : ''}`}
          onClick={() => handleCategoryClick(cat.name)}
        >
          {cat.icon_url && (
            <img src={cat.icon_url} alt={cat.name} className="category-icon" />
          )}
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
