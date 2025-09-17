// src/pages/Home.jsx
import React, { useState } from 'react';
import Hero from "../components/Banner/Hero";
import CategoryBar from "../components/category/CategoryBar";
import ProductGrid from "./productgrid/ProductGrid";
import HomeHero from "../pages/homehero/HomeHero";
import AccessoriesSection from "./accesories/AccesoriesSection";
import CategoryPage from "./category2/CategoryPage";  // ✅ Shop With Us section
import DealsSection from './deals/DealsSection';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      {/* Category quick filter bar */}
      <CategoryBar onSelectCategory={setSelectedCategory} />

      {/* Main hero banner */}
      <Hero />

      {/* Extra homepage hero section */}
      <HomeHero />

      {/* Deals / Discounts */}
      <DealsSection />

      {/* Featured product grid (filterable by category) */}
      <ProductGrid selectedCategory={selectedCategory} />

      {/* Accessories Section */}
      <AccessoriesSection />

      {/* ✅ Shop With Us (Categories Page section) */}
      <CategoryPage />
    </div>
  );
};

export default Home;
