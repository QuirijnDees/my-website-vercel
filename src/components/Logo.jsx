import React, { useState, useRef, useEffect } from "react";
import "./Logo.css";
import { useGlobal } from "../GlobalContext";

export default function HoverSlideshow({className = ""}) {

  let titleNums = 10;
  const [titleNum, setTitleNum] = useState(() => Math.floor(Math.random() * titleNums) + 1);
  const { setCursorPos } = useGlobal();

  const jitterRange = 3;
  const imageRange = 53;
  const intervalJitter = 1000 / 24;
  const intervalPlay = 1000 / 24;

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [initialLoaded, setInitialLoaded] = useState(false);
  const preloadedImagesRef = useRef([]);
  const preloadCacheRef = useRef(new Map()); 
  const INITIAL_LOAD_COUNT = 8;

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const jitterRef = useRef(null);
  const jitterOn = useRef(true);


  const makeImagePaths = (tNum) => {
    const arr = [];
    for (let i = 0; i < imageRange; i++) {
      const prefix = i < 10 ? "000" : i < 100 ? "00" : i < 1000 ? "0" : "";
      arr.push(`${import.meta.env.BASE_URL}images/qd_headerLogo/title${tNum}/${prefix}${i}.webp`);
    }
    return arr;
  };

  const imagePaths = makeImagePaths(titleNum);


  useEffect(() => {
    if (preloadCacheRef.current.has(titleNum)) {
   
      preloadedImagesRef.current = preloadCacheRef.current.get(titleNum);
      setInitialLoaded(true);
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const tempImages = [];
    const loadImage = (src, onLoad) => {
      const img = new Image();
      img.src = src;
      img.onload = onLoad;
      return img;
    };


    for (let i = 0; i < Math.min(INITIAL_LOAD_COUNT, imagePaths.length); i++) {
      tempImages[i] = loadImage(imagePaths[i], () => {
        loadedCount++;
        if (loadedCount === INITIAL_LOAD_COUNT) {
          setInitialLoaded(true);
        }
      });
    }


    const loadRest = () => {
      let restIndex = INITIAL_LOAD_COUNT;
      const loadNext = () => {
        if (restIndex >= imagePaths.length) {
          setImagesLoaded(true);
          preloadCacheRef.current.set(titleNum, tempImages);
          return;
        }
        tempImages[restIndex] = loadImage(imagePaths[restIndex], () => {
          restIndex++;
          requestIdleCallback(loadNext);
        });
      };
      requestIdleCallback(loadNext);
    };

    if (window.requestIdleCallback) requestIdleCallback(loadRest);
    else setTimeout(loadRest, 500);

    preloadedImagesRef.current = tempImages;
  }, [titleNum]);


  const preloadNextTitle = () => {
    const nextTitle = getNextTitleNum();
    if (preloadCacheRef.current.has(nextTitle)) return; 

    const nextPaths = makeImagePaths(nextTitle);
    const nextImages = [];

    nextPaths.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      nextImages[i] = img;
    });

    preloadCacheRef.current.set(nextTitle, nextImages);
  };



  const getNextTitleNum = () => {
    return titleNum % titleNums + 1;
  };


  const startSlideshow = (direction) => {
    if (!initialLoaded) return;

    preloadNextTitle(); 

    clearInterval(intervalRef.current);
    clearInterval(jitterRef.current);
    jitterRef.current = null;
    jitterOn.current = false;

    setCursorPos(direction > 0 ? 1 : 0);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        if (direction === 1) {
          prev = Math.min(imagePaths.length - 1, prev + 1);
          if (prev >= imagePaths.length - 1) jitterOn.current = true;
          return prev;
        } else {
          prev = Math.max(0, prev - 3);
          if (prev <= 0) {
            if (!jitterOn.current) {
              const next = getNextTitleNum();
              setTitleNum(next);
            }
            jitterOn.current = true;
          }
          return prev;
        }
      });

      if (jitterOn.current) {
        stopSlideshow();
        jitter(direction);
      }
    }, intervalPlay);
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const jitter = (direction) => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    clearInterval(jitterRef.current);

    jitterRef.current = setInterval(() => {
      setIndex(() => {
        if (direction < 0) {
          return 0 + Math.ceil(Math.random() * (jitterRange + 1));
        } else {
          return (
            imagePaths.length -
            1 -
            Math.floor(Math.random() * (jitterRange + 1))
          );
        }
      });
    }, intervalJitter);
  };

  useEffect(() => {
    jitter(-1);
  }, []);


  return (
    <div className= {`logoDiv ${className}`}>
      <a href="/">
        {!initialLoaded ? (
          <div style={{ width: "100px", height: "100px" }}></div>
        ) : (
          <img
            src={imagePaths[index]}
            alt={`Slide ${index + 1}`}
            className="logo"
            onMouseOver={() => startSlideshow(1)}
            onMouseLeave={() => startSlideshow(-1)}
            onMouseOut={stopSlideshow}
          />
        )}
        {!imagesLoaded && initialLoaded && (
          <div className="preloading-note"></div>
        )}
      </a>
    </div>
  );
}
