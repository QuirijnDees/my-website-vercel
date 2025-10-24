// DynElement.jsx

import React from "react";
import SmartLink from "./SmartLink";
import useWindowWidth from "./useWindowWidth";
import { useState, useEffect } from "react";

const basePath = "../images/";

export default function DynElement({item, linkWords, boldWords, setLightBoxIndex, keySeed, animationDirection = "right"})   {

            const width = useWindowWidth();
            const vertical = !!item.vertical;
            const bothPresent = item.value && item.header;
            const [aspectRatio, setAspectRatio] = useState(null);
            
            let dynMaxWidth = "100%";
            let divisionNumber = 160;
            let below450 = null;
            let dynGaps = "1rem";
            
            if(item.type === "image" || item.type === "title"){
                
              var source;

              if(item.type === "image"){
                source = item.value[0].src;
              }else{
                source = item.src;
              };

              useEffect(() => {
                if (!source) return;
                const img = new Image();
                img.src = source;
                img.onload = () => {
                  const ratio = img.naturalWidth / img.naturalHeight;
                  setAspectRatio(ratio);
                };
              }, [source]);

            };

              
              if(item.type === "image"){

                  dynMaxWidth = item.value.length <= 6 ? ("60rem"):("100%");    
                  dynMaxWidth = item.value.length === 1 ? ("45rem") : (dynMaxWidth);          
                  dynGaps = item.value.length <= 6 ? ("3rem") : ("1rem");
                  dynGaps = item.value.length == 1 ? ("0rem") : (dynGaps); 

                if(width < 827){
                    if(width<450){
                     below450 = item.value.length <= 6 ? "1 1 17.2vw" : "1 1 29vw";
                    };

                    divisionNumber = item.value.length <= 6 ? (1) : (2);
                      
                  } else{
                    divisionNumber = item.value.length <= 6 ? (25) : (10);
                  }


              };


              /// TEXT ELEMENT
            if(item.type === "text"){
                return(
                  
                  <div className = {`textBody ${
                                      item.isSlide ? (animationDirection === "left" ? "slide-in-left" : "slide-in-right") : "fade-in"
                                    }`}
                  key={`${keySeed}-textBody`}>
                    <div key={`${keySeed}-row`} className = {`row ${bothPresent ? "two-col" : "one-col"}`}>
 
                      {item.header && (
                        <p className= {bothPresent ? "cell left" : "cell full"} key={`${keySeed}-header`}
                        style={{padding: ((item.value.length <= 1) && (bothPresent) &&  (width<700)) ? ("0rem 0rem") : ("1rem 0")}}>
                        
                          {item.header
                          .split("\n")
                            .map((line, i) => {
                            return(
                              <React.Fragment key={`${keySeed}-header-line-${i}`}> 
                              {line}
                              <br key={`${keySeed}-br-${i}`} />
                              </React.Fragment>
                            );
                            })}
      
                        </p>
                      )}

                      {item && (
                        <p className= {bothPresent ? "cell right" : "cell full"} 
                        key = {`${keySeed}-value`}
                        style={{
                          maxHeight: ((item.value.length <= 1) && (bothPresent) &&  (width<700)) ? ("0rem") : ("auto"),
                        }}>

                          {item.value
                          .split("\n")
                          .map((line, i) => {
                            
                             const regex = new RegExp(
                            `(${[
                            ...Object.keys(linkWords),
                            ...boldWords
                            ]
                            .map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                            .join("|")})`,
                            "gi"
                            );

                            const words = line.split(regex);
                            let wIdx = 0;

                            return(
                              <React.Fragment key={`${keySeed}-value-line-${i}`}> 
                           
                              {words.map((word, wI) =>{
                                wIdx = wI;
                                const trimmed = word.trim(); // NEW REGEX
                                if(!trimmed) return word; /// SKIP WHITE SPACE NEW REGEX
                                
                                //////////////////////////////  CHECK LINK WORDS
                                if(linkWords[trimmed]){
                                    return(
                                      <SmartLink className="links" key={`${keySeed}-link-${i}-${wI}`} to={linkWords[word]}>{word}</SmartLink>
                                    )
                                }

                                //////////////////////////////  CHECK BOLD WORDS
                                if(boldWords.some(b => b.toLowerCase() === trimmed.toLowerCase())) {
                                  return <strong key={`${keySeed}-bold-${i}-${wI}`}>{word}</strong>;
                                }


                                return(
                                  <span key={`${keySeed}-span-${i}-${wI}`}>{word}</span>
                                );
                              })}
                              
                                {(item.link) && (item.link.lineNumber === i) && (
                                  <SmartLink className="links" key={`${keySeed}-link-${i}-${wIdx+1}`} to={item.link.to}>{item.link.word}</SmartLink>
                                )}

                              <br key={`${keySeed}-valbr-${i}`} />

                              </React.Fragment>

                              );

                          })}



                        </p>
                      )}
                    </div>
                  </div>
                )
          
                };
            
                /// IMAGE ELEMENT
            if(item.type === "image"){
  
                return(  
                  <div className = 
                  {`imageBody ${vertical ? "vertical" : ""} ${
                    item.isSlide ? (animationDirection === "left" ? "slide-in-left" : "slide-in-right") : "fade-in"
                  }`}

                    key={`${keySeed}-imageBody`}
                    style={{
                      maxWidth: dynMaxWidth, 
                      gap: dynGaps,
                      flexWrap: item.value.length > 3 ? "wrap" : "nowrap",
                      flexDirection: vertical ? "column" : "row",
                    }}
                  >
                        
                      {item.value.map((it, ind) => (
                            <div key={`${keySeed}-imBox-${it.id}-${ind}`} className="imBox" 
                              style={{
                                flex: vertical ? "1 0" + Math.min(divisionNumber/item.value.length, 5) + "rem" : 
                                below450 ? below450 : "1 1" + Math.min(divisionNumber/item.value.length, 100) + "rem"   
                              }}>
                                <div className="imageBlock-wrapper"> 
                                  <img 
                                    key = {`${keySeed}-img-${it.id}-${ind}`}
                                    className= "image" 
                                    src= {it.src} 
                                    alt={it.alt+"_image"} 
                                    style={{aspectRatio: aspectRatio}}
                                    onContextMenu={(e) => e.preventDefault()}
                                  ></img>
                                  <div className="image-overlay" 
                                  key={`${keySeed}-overlay-${it.id}-${ind}`}
                                  onClick={() => setLightBoxIndex(it.lightBIdx)}></div>
                                </div>
                            </div>
                      ))}

                  </div>

                  )
    
               }

                // VIDEO ELEMENT
                if (item.type === "video") {   
                  return item.value.link ? 
                    (

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
                }

            if(item.type === "title"){
              return( 
                <div className="imageBlock-wrapper"> 
                  <div key={item.idx-1}>
                    <img
                      src={item.src}
                      key={item.idx-2}
                      className= {`titleImage ${
                                    item.isSlide ? (animationDirection === "left" ? "slide-in-left" : "slide-in-right") : "fade-in"
                                  }`}
                      style={{
                        width: (width < 800) ? "100%" : item.width,
                        objectFit:  "cover",
                        aspectRatio: aspectRatio ? aspectRatio : "1 / 1",
                      }}
                    />
                  </div>
                  <div className="image-overlay" style={{cursor:"default"}}></div>
                </div>
              )
            }
            
  
            return null;

}

