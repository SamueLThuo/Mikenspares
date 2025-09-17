import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;

    setLoading(true);
    axios
      .get(`http://localhost:8000/api/products/?search=${encodeURIComponent(query)}`)
      .then((res) => {
        setResults(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query]);

  if (!query.trim()) {
    return <p className="no-query">Please enter a search term.</p>;
  }

  return (
    <div className="search-results-container">
      <h2>Search Results for "{query}"</h2>

      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <div className="results-grid">
          {results.map((product) => (
            <div className="result-card" key={product.id}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">KSh {product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found matching "{query}".</p>
      )}
    </div>
  );
};

export default SearchResults;
