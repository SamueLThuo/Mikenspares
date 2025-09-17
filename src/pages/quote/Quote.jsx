import React, { useState } from 'react';
import './Quote.css'; // Make sure this file exists

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { name, phone, email, product, message } = formData;

    // Validate required fields
    if (!name || !phone || !product) {
      alert('Please fill out required fields: name, phone and product.');
      return;
    }

    // Format phone number for WhatsApp (customer phone)
    const formattedPhone = phone.startsWith('0')
      ? '254' + phone.substring(1)
      : phone;

    if (!formattedPhone.startsWith('254')) {
      alert('Please enter a valid phone number starting with 254...');
      return;
    }

    // Save to backend (optional)
    try {
      await fetch('http://localhost:8000/api/quotes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.error('Backend error:', err);
    }

    // ✅ Official business WhatsApp number
    const businessPhone = '254708122732';

    // Auto-reply to customer
    const autoReply = `Hello ${name}, thank you for your quote request on "${product}". We’ll contact you shortly.`;
    const whatsappURLCustomer = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(autoReply)}`;
    window.open(whatsappURLCustomer, '_blank');

    // Notify business
    const businessMsg = `📝 *New Quote Request*%0A👤 Name: ${name}%0A📞 Phone: ${formattedPhone}%0A📧 Email: ${email || 'N/A'}%0A📦 Product: ${product}%0A💬 Message: ${message || 'N/A'}`;
    const whatsappURLBusiness = `https://wa.me/${businessPhone}?text=${businessMsg}`;
    window.open(whatsappURLBusiness, '_blank');

    // Reset form
    setFormData({ name: '', phone: '', email: '', product: '', message: '' });
  };

  return (
    <div className="quote-container">
      <h2>Request a Quote</h2>
      <form className="quote-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="product"
          placeholder="Product/Service *"
          value={formData.product}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Additional Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Quote via WhatsApp</button>
      </form>
    </div>
  );
};

export default Quote;
