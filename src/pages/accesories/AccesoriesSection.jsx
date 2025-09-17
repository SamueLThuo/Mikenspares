import React from "react";
import "./AccessoriesSection.css";

const AccessoriesSection = () => {
  return (
    <div className="about-page">
      <h1>Welcome to Miken Spares – Your Trusted Mobile Electronics Store</h1>
      <p>
        At <strong>Miken Spares</strong>, we specialize in high-quality{" "}
        <em>mobile electronics and spare parts</em> that help you repair, upgrade,
        and enhance your devices with confidence. Whether you’re a technician,
        reseller, or an everyday user, we’ve got everything you need — from
        <strong> power ICs, charging ports, batteries, and display units</strong> to
        accessories that make your tech life easier.
      </p>

      <h2>Why Choose Miken Spares?</h2>
      <ul>
        <li>✅ <strong>Wide selection</strong> of genuine, tested mobile spare parts</li>
        <li>✅ <strong>Fast delivery</strong> nationwide (same-day dispatch for most orders)</li>
        <li>✅ <strong>Easy WhatsApp ordering</strong> — get instant assistance</li>
        <li>✅ <strong>Bulk discounts</strong> for technicians and resellers</li>
        <li>✅ <strong>Expert advice</strong> on product compatibility & repairs</li>
      </ul>

      <h2>Shop With Confidence</h2>
      <p>
        We are committed to offering only genuine and high-performance parts.
        Every product is carefully inspected before shipping to ensure you get
        the quality you deserve.
      </p>

      <h2>Buy Now, Pay Later <span style={{ fontSize: "0.8em" }}>(Coming Soon)</span></h2>
      <p>
        We’re working on introducing <strong>Buy Now, Pay Later</strong> and{" "}
        <strong>No-Cost EMI</strong> options so you can get what you need without
        worrying about upfront costs.
      </p>

      <h2>Warranty & Returns</h2>
      <p>
        Most of our products come with a warranty for peace of mind. If your
        item is defective or damaged upon arrival, we offer a{" "}
        <strong>hassle-free return & exchange process</strong>.
      </p>

      <h2>Looking to Sell or Exchange?</h2>
      <p>
        Got unused or faulty parts? Our upcoming{" "}
        <strong>Spare Parts Exchange Program</strong> will let you trade them in
        for store credit or new parts. Stay tuned!
      </p>

      <h2>Need Help?</h2>
      <p>
        Our customer support team is here to help you find the right product
        and guide you through the buying process.
      </p>
      <div className="cta-buttons">
        <a
          href="https://wa.me/254741140644"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          💬 Chat on WhatsApp
        </a>
        <a href="/products" className="shop-now-btn">
          🛒 Start Shopping
        </a>
      </div>
    </div>
  );
};

export default AccessoriesSection;
