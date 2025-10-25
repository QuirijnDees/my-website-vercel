import React, { useEffect, useState } from "react";
import "./lightBox.css"; 

export default function Lightbox({ imageList = [], currentIndex = 0, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    if (imageList.length > 0 && currentIndex !== null) {
      setIndex(currentIndex);
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, [imageList, currentIndex]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  
  const handleKeyDown = (e) => {
    if (!isVisible) return;
    if (e.key === "Escape") {
      handleClose();
    } else if (e.key === "ArrowLeft") {
      showPrev(e);
    } else if (e.key === "ArrowRight") {
      showNext(e);
    }
  };


 
  useEffect(() => {
    if (isVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  const currentImage = imageList[index]?.src;

  if (!imageList.length) return null;

  return (
    <div className={`lightbox-overlay ${isVisible ? "show" : ""}`} onClick={handleClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={handleClose}>×</button>

        <div className="lightbox-inner">
          <button className="lightbox-prev" onClick={showPrev}>‹</button>
          <div className="lb-imageBlock-wrapper"> 
            <img src={currentImage} alt="" className="lightbox-image" onContextMenu={(e) => e.preventDefault()} />
            <div className="lb-image-overlay"></div>
          </div>
          <button className="lightbox-next" onClick={showNext}>›</button>
        </div>
      </div>
    </div>
  );
}

