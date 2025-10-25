import React, { useState } from "react";
import "./Slideshow.css";

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <button className="nav-button" onClick={prevSlide}>
        ◀
      </button>

      <div className="slide">
        <div className="text">{slides[currentIndex].text}</div>
        <div className="images">
          {slides[currentIndex].images.map((img, i) => (
            <img key={i} src={img} alt={`Slide ${currentIndex} - ${i}`} />
          ))}
        </div>
      </div>

      <button className="nav-button" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
};

export default Slideshow;