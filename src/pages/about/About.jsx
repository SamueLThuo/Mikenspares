import React from 'react';
import './About.css';
import Testimonials from '../tesimonial/Testimonial';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Miken Spares</h1>
        <p>Trusted in Electronics & Spare Parts Since 2012</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Miken Spares is a leading electronics and spare parts supplier based in Kenya. 
          We specialize in high-quality replacement parts such as screens, batteries, chargers, and repair tools 
          for phones, laptops, watches, and other devices.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower technicians, resellers, and DIY enthusiasts by providing reliable spare parts and fast delivery — 
          all while offering excellent support and affordable pricing.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Wide selection of quality spares & accessories</li>
          <li>🚚 Fast delivery across Kenya</li>
          <li>📞 Personalized support via WhatsApp & phone</li>
          <li>💰 Affordable pricing & bulk discounts</li>
          <li>🔧 Technical advice & after-sales service</li>
        </ul>
      </div>

      <div className="about-section contact-cta">
        <h2>Need Help or a Custom Quote?</h2>
        <p>Contact us today via <strong>WhatsApp</strong> or use our online quote form.</p>
        <a href="https://wa.me/254712345678" className="whatsapp-cta" target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </div>
      <div>
        <Testimonials />
      </div>
      
    </div>
  );
};

export default About;
