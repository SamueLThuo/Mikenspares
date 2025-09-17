import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${slug}/`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [slug]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: "300px" }} />
      <p><strong>Category:</strong> {product.category.name}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> KSh {product.price}</p>
    </div>
  );
};

export default ProductDetail;
