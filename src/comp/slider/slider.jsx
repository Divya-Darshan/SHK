import React, { useState, useEffect } from "react";
import "./slider.css";

function Slider() {
  const images = [
    "./img/h.jpg",
    "./img/w.jpg",

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
    const timer = setInterval(nextSlide, 3000);
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
    </div>
  );
}

export default Slider;
