import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">MS</div>
              <div>
                <h3 className="footer-title">Miken Phone Spares</h3>
                <p className="footer-subtitle">Electronics & Repair Parts</p>
              </div>
            </div>
            <p className="footer-description">
              Your trusted source for quality electronics spare parts, repair tools, and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="/category/batteries">Batteries</a></li>
              <li><a href="/category/lcd-screens">LCD Screens</a></li>
              <li><a href="/category/accessories">Accessories</a></li>
              <li><a href="/category/watches">Watches</a></li>
              <li><a href="/category/power-plates">Power Plates</a></li>
              <li><a href="/category/repair-tools">Repair Tools</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li><Phone className="icon" /><span>+254 708 122 732</span></li>
              <li><Mail className="icon" /><span>info@mikenspares.com</span></li>
              <li><MapPin className="icon" /><span>Lithuli streets ,Gaberone road, Nairobi</span></li>
            </ul>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="icon" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="icon" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="icon" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="icon" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Miken Phone Spares. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
