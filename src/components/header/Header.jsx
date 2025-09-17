import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaSearch, 
  FaBars, 
  FaTimes, 
  FaSun, 
  FaMoon, 
  FaArrowUp,
  FaWhatsapp
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?search=${encodeURIComponent(search.trim())}`);
      setSearch('');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header className="sticky-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left-info">
          <FaPhoneAlt className="icon" />
          <a href="tel:+254708122732" className="contact-link">+254 708 122 732</a>
          <FaEnvelope className="icon" />
          <a href="mailto:info@mikenspares.com" className="contact-link">info@mikenspares.com</a>
          <FaWhatsapp className="icon" style={{ color: '#25D366' }} />
          <a
            href="https://wa.me/254708122732"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            WhatsApp Us
          </a>
        </div>
        <div className="right-info">
          <span className="tagline">Your Trusted Electronics & Repair Partner</span>
        </div>
      </div>

      {/* Main Header */}
      <div className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo (Flipkart style) */}
        <div className="logo-area" onClick={() => navigate('/')}>
          <div className="brand-text">
      <h1 className="brand">
        <span className="brand-part1">Miken Phone</span>
      </h1>
    </div>

    {/* Tagline (centered inside box) */}
    <div className="tagline-area">
      <span className="brand-tagline">
        <span className="highlight">  SPARES ✨</span>
      </span>
    </div>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit"><FaSearch /></button>
        </form>

        {/* Menu Toggle */}
        <div className="header-actions">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/quote" className="quote-btn" onClick={() => setMenuOpen(false)}>Get Quote</Link>
          <Link to="/login" className="login-link" onClick={() => setMenuOpen(false)}>Login</Link>
        </nav>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      {/* Floating Dark Mode Button */}
      <button className="floating-dark-mode" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;
