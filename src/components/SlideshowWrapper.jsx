import React, { useEffect } from "react";
import DynElement from "./dynElement";

// Helper for image preloading
function preloadSlideImages(slides, index) {
  if (!slides || slides.length === 0) return;

  const indicesToPreload = [
    (index - 1 + slides.length) % slides.length,
    index,
    (index + 1) % slides.length,
  ];

  indicesToPreload.forEach((i) => {
    const slide = slides[i];
    if (!slide) return;

    if (slide.type === "image" && Array.isArray(slide.value)) {
      slide.value.forEach((img) => {
        const image = new Image();
        image.src = img.src;
      });
    }
  });
}

export default function SlideshowWrapper({
  item,
  slideShowLengths,
  slideShowIndices,
  slideDirections,
  updateSlideshowIndices,
  linkWords,
  boldWords,
  setLightBoxIndex,
  keySeed,
}) {
  const ssI = slideShowIndices[item.slideNumber];
  const direction = slideDirections[item.slideNumber];

  // ✅ Preload current, next, and previous slides whenever index changes
  useEffect(() => {
    preloadSlideImages(item.slides, ssI);
  }, [ssI, item.slides]);

  const slideKey = `${keySeed}-ss-${item.slideNumber}-${ssI}`;

  return (
    <div className="slideshowWrapper" key={slideKey}>
      <div
        className="slideshow-row" key={`${keySeed}-ssR-${item.slideNumber}-${ssI}}`} 
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <button
          id="leftButton"
          className="slideShowButton"
          onClick={() =>
            updateSlideshowIndices(
              item.slideNumber,
              (ssI - slideShowLengths[item.slideNumber][1] + item.slides.length) %
                item.slides.length,
              "left"
            )
          }
        >
          ◀
        </button>

        <div className="slideshowContainer" style={{ maxWidth: "60rem" }} key={`${keySeed}-ssC-${item.slideNumber}-${ssI}}`}>
          <div className={`slideContent slide-${direction}`} key={`${keySeed}-sCs-${item.slideNumber}-${ssI}}`}>
                <DynElement
                key={`${slideKey}-${ssI}-${direction}`}
                item={item.slides[ssI]}
                linkWords={linkWords}
                boldWords={boldWords}
                setLightBoxIndex={setLightBoxIndex}
                keySeed={`${slideKey}-main`}
                animationDirection={direction}
                />
            <div
              className={
                slideShowLengths[item.slideNumber][2] ? "imagesColumn" : "imagesRow"
              }
            key={`${keySeed}-imagesCorR-${item.slideNumber}-${ssI}}`}
            >
              {Array(slideShowLengths[item.slideNumber][1] - 1)
                .fill(0)
                .map((_, i) => {
                  const nextIdx = (ssI + i + 1) % item.slides.length;
                  return (
                        <DynElement
                        key={`${slideKey}-extra-${nextIdx}`}
                        item={item.slides[nextIdx]}
                        linkWords={linkWords}
                        boldWords={boldWords}
                        setLightBoxIndex={setLightBoxIndex}
                        keySeed={`${slideKey}-extra-${nextIdx}`}
                        animationDirection={direction}
                        />
                  );
                })}
            </div>
          </div>
        </div>

        <button
          id="rightButton"
          className="slideShowButton"
          onClick={() =>
            updateSlideshowIndices(
              item.slideNumber,
              (ssI + slideShowLengths[item.slideNumber][1]) % item.slides.length,
              "right"
            )
          }
        >
          ▶
        </button>
      </div>
    </div>
  );
}
