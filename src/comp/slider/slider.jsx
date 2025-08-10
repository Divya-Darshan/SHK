import React, { useState, useEffect } from "react";
import "./slider.css";

function Slider() {
  const images = [
    "./img/h.png",
    "./img/w.png",
    "./img/h.png",
    "./img/w.png", 
  
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-play every 3 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>❮</button>

      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="slide"
          className={index === current ? "active" : ""}
        />
      ))}

      <button className="next" onClick={nextSlide}>❯</button>

    
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active-dot" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
