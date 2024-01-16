import React, {useState} from "react";
import './testimonial.css';
import testimonialsData from './testimonial.json';

export default function TestimonialSlider () {
    const [testimonials, setTestimonials] = useState(testimonialsData);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide -1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="wrapper">
          <div className="testimonial-container">
            <p>{testimonials[currentSlide]?.testimonial}</p>
            <span>{testimonials[currentSlide]?.author}</span>
          </div>
          <button className="testimonial-button" onClick={prevSlide}>&lt;</button>
          <button className="testimonial-button" onClick={nextSlide}>&gt;</button>
        </div>
      );
    
}