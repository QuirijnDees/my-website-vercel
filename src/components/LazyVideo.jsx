import React, { useRef, useState, useEffect } from "react";
import "./LazyImage.css";

export default function LazyVideo({
  src,
  alt = "",
  className = "",
  onClick,
  aspectRatio,
  keyToImage,
  layout = "row", // "row" or "column"
  link,
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

            link ? (

                    <iframe
                      className = {`embeddedVideos ${
                        item.isSlide ? (animationDirection === "left" ? "slide-in-left" : "slide-in-right") : "fade-in"
                      }`}
                      key= {`${keySeed}-iframe`}
                      src={item.value.src}
                      title= {item.value.alt}       
                      frameBorder="0" 
                      allow="autoplay; encrypted-media; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />  

                    ):(

                    <div className={`video-container ${
                                      item.isSlide ? (animationDirection === "left" ? "slide-in-left" : "slide-in-right") : "fade-in"
                                    }`}>
                      <video
                        className="video-player"
                        key = {`${keySeed}-video`}
                        width={item.value.width}
                        controls={true}
                        autoPlay={false}
                        preload="none"
                        loop={true}
                        muted={false}
                        poster={item.value.thumbnail}
                      >
                      <source src={item.value.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    )
                )}
    </div>
  );
}
