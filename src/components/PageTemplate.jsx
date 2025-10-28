// PageTemplate.jsx
import { useState } from 'react';
import "./PageTemplate.css";
import Lightbox from "./lightBox";
import DynElement from "./dynElement";
import SlideshowWrapper from "./SlideshowWrapper";
import Reveal from "./Reveal";

const basePath = `${import.meta.env.BASE_URL}images/`;

export default function PageTemplate({ workTitle, subImList, gifIndices, titleImageSize, orderList, slideShowLengths, videoList, headerList, textList, links, linkWords, boldWords}) {

  const titleImSize = titleImageSize;
  const initIndices = Array(slideShowLengths.length).fill(0); 
  const [slideShowIndices, setSlideShowIndices] = useState(initIndices);
  const [lightBoxIndex, setLightBoxIndex] = useState(null);
  const [slideDirections, setSlideDirections] = useState(
    Array(slideShowLengths.length).fill("right")
  );

    const updateSlideshowIndices = (index, newValue, direction) => {
    setSlideDirections(prev =>
      prev.map((d, i) => (i === index ? direction : d))
    );
    setSlideShowIndices(prev =>
      prev.map((item, i) => (i === index ? newValue : item))
    );
  };


  const imageList = [];
  const lightBoxImList = [];
  const secondVidList = [];
  let imageListN = 0;
  let lightBoxIdx = 0;
  let vidListN = 0;

  for(let i = 0; i < orderList.length; i++){


    if(orderList[i] === "image"){

      const secondImList = [];

      for(let u = 0; u < subImList[imageListN]; u++){

        var fileType = ".webp";

          gifIndices.map((item) => {  
            if(item[0]-1 == imageListN){
              if(item[1]-1 == u){
                fileType = ".gif";
              }
            }
          });
          
          secondImList.push({
              type: "image",
              id: u,
              src: basePath + workTitle + "/Image_" + String(imageListN+1) + "_" + String(u+1) + fileType,
              alt: workTitle + "_Image" + String(imageListN+1) + "_" + String(u+1),
              lightBIdx: lightBoxIdx
          });

          lightBoxImList.push({
            src: basePath + workTitle + "/Image_" + String(imageListN+1) + "_" + String(u+1) + fileType,
          })

          lightBoxIdx++;

      };

      imageList.push(secondImList);
      
      imageListN++;
    };


    if(orderList[i] === "video"){

      secondVidList.push({
        id: i,
        alt: videoList[vidListN].alt,
        src: videoList[vidListN].src, 
        link: videoList[vidListN].link, 
        width: videoList[vidListN].width, 
        thumbnail: basePath + workTitle + "/Thumbnail_" + String(vidListN+1) + ".webp"
      });

      vidListN++;
    }

  }

  const combined = [];
  const slideshowArrays = [];
  let textN = 0;
  let imN = 0;
  let vidN = 0;
  let slideN = 0;

  for(let i = 0; i <  orderList.length; i++){

    if(orderList[i] === "slideshow"){

      const slides = [];

      for(let s = i+1; s <= i+slideShowLengths[slideN][0]; s++){
        
        if(orderList[s] === "text"){
            slides.push({type: "text", value: textList[textN], header: headerList[textN], link: links[textN], idx: s, vertical: slideShowLengths[slideN][2], isSlide: true});
            textN++;
          }else{
            if(orderList[s] === "image"){
              slides.push({type: "image", value: imageList[imN], header:null, idx: s, vertical: slideShowLengths[slideN][2], isSlide: true});
              imN++;
            }else{
              slides.push({type: "video", value: secondVidList[vidN], header:null, idx: s, vertical: slideShowLengths[slideN][2], isSlide: true});
              vidN++;
            };
          };  
      };

      slideshowArrays.push(slides);
      combined.push({type: "slideshow", slides: slides, slideNumber: slideN, header:null, idx: i, isSlide: true});


      i += slideShowLengths[slideN][0];
      slideN++;

    }else{
    
      if(orderList[i] === "text"){

        combined.push({type: "text", value: textList[textN], header: headerList[textN], link: links[textN], idx: i, isSlide: false});
        textN++;

      }else{

        if(orderList[i] === "image"){

          combined.push({type: "image", value: imageList[imN], header:null, idx: i, isSlide: false});
          imN++;

        }else{

          combined.push({type: "video", value: secondVidList[vidN], header:null, idx: i, isSlide: false});
          vidN++;

        };
    };
        
  }
}

if(titleImSize !== null){
  combined.unshift({
    type: "title",
    src: basePath + workTitle + "/PageTitle.webp",
    header: null,
    width: titleImSize,
    idx: -1,
    isSlide: false,
  });
};


  return (


    <div className="body">

      {combined.map((item, index) => {
        const keySeed = `page-${workTitle}-${item.type}-${item.idx}-${index}`;

        return (
       
            item.type === "slideshow" ? (
              <Reveal key={`page-${workTitle}-${item.type}-${item.idx}-${index}-reveal`}>
                <SlideshowWrapper
                  key={`${keySeed}-slideshow-${item.slideNumber}`}
                  item={item}
                  slideShowLengths={slideShowLengths}
                  slideShowIndices={slideShowIndices}
                  slideDirections={slideDirections}
                  updateSlideshowIndices={updateSlideshowIndices}
                  linkWords={linkWords}
                  boldWords={boldWords}
                  setLightBoxIndex={setLightBoxIndex}
                  keySeed={keySeed}
                />
              </Reveal>
            ) : (
              <Reveal key={`page-${workTitle}-${item.type}-${item.idx}-${index}-reveal`}>
                <DynElement
                  item={item}
                  linkWords={linkWords}
                  boldWords={boldWords}
                  setLightBoxIndex={setLightBoxIndex}
                  keySeed={keySeed}
                />
              </Reveal>
            )
          
        );

        /*
        if (item.type === "slideshow") {
            return (
              <SlideshowWrapper
                key={`${keySeed}-slideshow-${item.slideNumber}`}
                item={item}
                slideShowLengths={slideShowLengths}
                slideShowIndices={slideShowIndices}
                slideDirections={slideDirections}
                updateSlideshowIndices={updateSlideshowIndices}
                linkWords={linkWords}
                boldWords={boldWords}
                setLightBoxIndex={setLightBoxIndex}
                keySeed={keySeed}
              />
            );
        }

        // Non-slideshow items
        return (
          <DynElement
            key={keySeed}
            item={item}
            linkWords={linkWords}
            boldWords={boldWords}
            setLightBoxIndex={setLightBoxIndex}
            keySeed={keySeed}

          />
        );*/
      })
      
      }

      {lightBoxIndex !== null && (
        <Lightbox
        imageList={lightBoxImList.map(img => ({
          src: img.src,
          alt: img.alt
        }))}
        
          currentIndex={lightBoxIndex}
          onClose={() => setLightBoxIndex(null)}
        />
      )}
            

    </div>
  );
}
