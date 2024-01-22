import React, { useState } from "react";
import "./testimonial.css";
import testimonialsData from "./testimonial.json";

export default function TestimonialSlider() {
  console.log('testimonialsData:', testimonialsData);
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 3) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 3 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="wrapper">
      <button className="testimonial-button" onClick={prevSlide}>
        &lt;
      </button>
      <div className="testimonial-container">
        {testimonials.slice(currentSlide, currentSlide + 3).map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>{testimonial.testimonial}</p>
            <span className="author">{testimonial.author}</span>
          </div>
        ))}
      </div>
      <button className="testimonial-button" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}

