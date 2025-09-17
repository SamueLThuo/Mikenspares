import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/3.jpg";
import bg2 from "../../assets/banner2.png";
import "./Hero.css";

const slides = [
  {
    title: "COME GET YOUR PHONE REPAIRED",
    description:
      "Looking for genuine mobile spare parts in Kenya? We stock a wide range of spares for you and your smartphone devices.",
    bg: bg1,
    cta: "Shop With Us",
  },
  {
    title: "QUALITY ELECTRONICS PARTS",
    description:
      "From batteries to screens, we deliver trusted components across Kenya. Fast. Affordable. Reliable.",
    bg: bg2,
    cta: "Shop With Us",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          <div
            className="hero-background"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${slide.bg})`,
            }}
          />
          <div className="overlay"></div>

          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <Link to="/products" className="hero-btn">
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="nav-arrow left"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="nav-arrow right"
      >
        <ChevronRight size={28} />
      </button>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
