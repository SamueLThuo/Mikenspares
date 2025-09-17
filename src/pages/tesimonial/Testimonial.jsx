import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css';

const testimonials = [
  {
    name: "James K.",
    role: "Phone Repair Technician, Nairobi",
    message: "Miken Spares never disappoints. Quality screens and batteries that last. My go-to shop every week!",
  },
  {
    name: "Mercy W.",
    role: "Electronics Seller, Eldoret",
    message: "Affordable, reliable and fast delivery. My customers are always happy thanks to Miken.",
  },
  {
    name: "Brian O.",
    role: "Laptop Repair Expert, Kisumu",
    message: "I get all my tools and parts from Miken. They even helped me get a rare part I couldn't find elsewhere.",
  },
];

const Testimonial = () => {
  return (
    <div className="carousel-wrapper">
      <h2>Customer Testimonials</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="testimonial-swiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <p className="quote">“{t.message}”</p>
              <div className="author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
