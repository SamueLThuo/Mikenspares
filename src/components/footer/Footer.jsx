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
              {["Home", "Products", "About Us", "Contact", "Privacy Policy", "Terms of Service"].map((link, idx) => (
                <li key={idx}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              {["Batteries", "LCD Screens", "Accessories", "Watches", "Power Plates", "Repair Tools"].map((cat, idx) => (
                <li key={idx}><a href="#">{cat}</a></li>
              ))}
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
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#"><Icon className="icon" /></a>
              ))}
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
