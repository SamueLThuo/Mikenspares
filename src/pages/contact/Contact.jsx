import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contacts = () => {
  const phoneNumber = "254712345678";

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’re here to help. Reach out with questions, orders, or partnership inquiries.</p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Call Us</h4>
              <p>+254 712 345 678</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>info@mickenspares.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Visit Us</h4>
              <p>Lithuli-Gaberone Road, Nairobi</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${phoneNumber}?text=Hello, I'm interested in your products.`}
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Miken Location"
          src="https://www.google.com/maps?q=luthuli%20avenue%20nairobi&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
