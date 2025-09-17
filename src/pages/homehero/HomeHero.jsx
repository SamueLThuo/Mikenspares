import React from 'react';
import { FaTruck, FaComments, FaUndo, FaCreditCard } from 'react-icons/fa';
import './HomeHero.css';

const HomeHero = () => {
  return (
    <div className="feature-strip">
      <div className="feature-strip">
  <div className="feature-box animate-slide" style={{ animationDelay: '0.2s' }}>
    <FaTruck className="feature-icon" />
    <div>
      <h4>Free shipping</h4>
      <p>When you spend KSh 5000 or more</p>
    </div>
  </div>
  <div className="feature-box animate-slide" style={{ animationDelay: '0.4s' }}>
    <FaComments className="feature-icon" />
    <div>
      <h4>We are available 24/7</h4>
      <p>Need help? Contact us anytime</p>
    </div>
  </div>
  <div className="feature-box animate-slide" style={{ animationDelay: '0.6s' }}>
    <FaUndo className="feature-icon" />
    <div>
      <h4>Satisfied or return</h4>
      <p>Easy 30-day return policy</p>
    </div>
  </div>
  <div className="feature-box animate-slide" style={{ animationDelay: '0.8s' }}>
    <FaCreditCard className="feature-icon" />
    <div>
      <h4>100% secure payments</h4>
      <p>MPesa, Visa, Mastercard, PayPal</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default HomeHero;
