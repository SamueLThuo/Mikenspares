// src/components/floating/FloatingContact.jsx
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import "./FloatingContact.css";

const FloatingContact = () => {
  const [show, setShow] = useState(false);

  // ✅ Your business contact numbers
  const whatsappNumber = "254708122732"; 
  const messengerPage = "miken.spares"; // Replace with your FB Page username or ID

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`floating-contact ${show ? "show" : ""}`}>
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Messenger Floating Button */}
      <a
        href={`https://m.me/${messengerPage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn messenger"
        aria-label="Chat on Messenger"
      >
        <FaFacebookMessenger />
      </a>
    </div>
  );
};

export default FloatingContact;
