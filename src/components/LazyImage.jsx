import React, { useRef, useState, useEffect } from "react";
import "./LazyImage.css";

export default function LazyImage({
  src,
  alt = "",
  className = "",
  onClick,
  aspectRatio,
  keyToImage,
  layout = "row", // "row" or "column"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const paddingTop = aspectRatio ? `${100 / aspectRatio}%` : "100%";

  // true for horizontal row-style layout
  const isRowLayout = layout === "row";

  return (
    <div
      ref={ref}
      className={`lazy-wrapper ${className}`}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        aspectRatio: isRowLayout ? undefined : aspectRatio, // maintain ratio in column layout
      }}
    >
      {isRowLayout && (
        <div
          className="lazy-placeholder"
          style={{
            paddingTop,
            visibility: hasLoaded ? "hidden" : "visible",
          }}
        />
      )}

      {isVisible && (
        <img
          key={keyToImage}
          src={src}
          alt={alt}
          className={`lazy-image ${hasLoaded ? "loaded" : ""}`}
          onLoad={() => setHasLoaded(true)}
          onContextMenu={e => e.preventDefault()}
          onClick={onClick}
          draggable="false"
          style={{  
            aspectRatio: aspectRatio,
            position: isRowLayout ? "absolute" : "static",
          }}
        />
      )}
    </div>
  );
}
