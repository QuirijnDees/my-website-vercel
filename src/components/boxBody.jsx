import React, { useState, useEffect, useRef } from 'react';
import SmartLink from "./SmartLink";
import './boxBody.css'
import { useGlobal } from "../GlobalContext";
import useWindowHeight from "./useWindowHeight";
import useWindowWidth  from './useWindowWidth'; 

export default function BoxBody()   {

    const height = useWindowHeight();
    const width = useWindowWidth();
    let nextId = 0;
    const imBasePath = "../images/";
    const works = ["Symbionts","TexturingTool", "RMX",  "PubertJimbob", "ImageSamplingTool"];
    const webPorGif = ["webp","gif","webp","webp","webp"];
    /////////////////////////// IF A WORK HAS NO IMAGE AS TITLE, FILL IT IN THE TITLES[] ARRAY AND IT WILL SHOW UP AS TEXT INSTEAD OF AN IMAGE
    const titles = [    null, "— texturingtool —", "— spectator —", null,"— imagesamplingtool —"];
    const fontColor = [ null,   "white", "#eae6e2",  null, "white"];
    const fontTypes = [null, /*"Schibsted Grotesk*/ "Google Sans, sans-serif", "Inter, sans-serif", null, "Google Sans, sans-serif"];
    const roleDescription = ["my master's graduation film from HSLU.\nmy roles were:\n• director •\n• collaborative sound designer •\n• all 3D-animation •", "my custom-made texturing tool,\nfor authentically retexturing 3D-renders", "an AR-project by Giulia Martinelli.\nmy role was:\n• sound designer •", "my bachelor's graduation film from KASK.\nmy roles were:\n• director •\n• sound designer •\n• all 3D-animation •", "my custom-made image sampling tool,\nfor sampling digital imagery into abstract compositions and unique 3D texture maps"];
    const links = ["/symbionts", "/texturingtool", "https://vimeo.com/997306290", "/pubertjimbob", "/imagesamplingtool"];
    
    
    const randomLogoComment = ["excuse me... You're melting my logo", "uhmmm.. Watch out for the logo.", "please don't melt the logo..", "nooo not my logo!", "looks kinda cool but you're still melting my logo..."];
    const randomHomeComment = ["that's my work, but we are already there", "this is the homepage basically", "we are at 'work' already"];
    const randomAboutComment = ["it says 'about', but then with a capital 'a'", "you'll also find ways to approach me there", "this contains my biography, contact details and even a rotating 3D-scan of me.\nWhat more could you want?"];
    const randomClickComment = ["please don't click on me.", "do not click on me.", "I would rather not have you click on me.", "it hurts when you click me.", "please..", "stop clicking me.", "you can not just click on me.", "just like cigarettes, every click slightly reduces my life expectancy."];
    const randomHoverClickComment = ["no", "no!", "don't do it.", "please don't.."];
    const randomEmailComment = ["you are only one email away from contacting me.", "little hint:\nyou remove the spaces and brackets...\nyou have my electronic mailing address", "Thy message shall be received in utter mirth", "Do not be of an uncertain nature whenas thou seeketh to contact me."];
    const randomInstaComment = ["exploreth my instagrammatory escapades.", "I would glimpse my profile, if I were you..", "one click is all it takes", "thou shalt find me on the 'gram'"];
    const randomVimeoComment = ["there is not much there.\nYet...", "I should perhaps upload something to vimeo.", "my current films are still in festival circulation, hence the current scarcity of content there.", "My future vimeo-channel shall be well-endowed with content,\nas of yet it is not however."];
    const randomYoutubeComment = ["maybe I should upload something to youtube.", "alas, there is not much of mine on youtube as of yet..", "my current films are still in festival circulation, hence the scarcity of content there.", "An abundance of content shall grace my youtube-channel,\nwhen the time is ripe."];
    
    const fullTextArray = [
        roleDescription,
        randomLogoComment,
        randomHomeComment,
        randomAboutComment,
        randomEmailComment,
        randomInstaComment,
        randomVimeoComment,
        randomYoutubeComment,
        randomClickComment,
        randomHoverClickComment
    ];

    const [currentBoxIndex, set_currentBoxIndex] = useState(null);
    const timerRef = useRef(null);
    const { cursorPos } = useGlobal();
    const { setCursorPos } = useGlobal();
    
    /////////////////////////// COMMENTER LINE PRESETS

    const narrowComLine = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        if (i === 0) arr.push({ pos: "0", height: "0" });
        else if (i > 7) arr.push({ pos: "12", height: "26" });
        else arr.push({ pos: "18", height: "20" });
    }
    return arr;
    }, []);

    const hideComLine = React.useMemo(() => {
    return Array.from({ length: 10 }, () => ({ pos: "0", height: "0" }));
    }, []);

    const defaultComLine = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        if (i === 0) arr.push({ pos: "0", height: "0" });
        else if (i > 7) arr.push({ pos: "14", height: "23" });
        else arr.push({ pos: "32", height: "6" });
    }
    return arr;
    }, []);


    /////////////////////////// INITIALIZE workImPath STATE

     const [workImPath, set_workImPath] = useState(() => {
        return works.map((val, index) => ({
                id: nextId++,
                imPath: imBasePath + works[index] + "/GridStatic.webp",
                imText: imBasePath + works[index] + "/TitleLogo.webp",
                title: titles[index],
                fontColor: fontColor[index],
                fontType: fontTypes[index],
                link: links[index]
            })); 

     });

     /////////////////////////// CREATE ASPECT RATIO FOR IMAGES
        useEffect(() => {
            const loadAspectRatios = async () => {
            const promises = workImPath.map(
            (item) =>
                new Promise((resolve) => {
                const img = new Image();
                img.src = item.imPath;
                img.onload = () => {
                    const ratio = img.naturalWidth / img.naturalHeight;
                    resolve({ ...item, aspectRatio: ratio });
                };
                img.onerror = () => resolve({ ...item, aspectRatio: 1 }); // fallback square
                })
            );

        const withRatios = await Promise.all(promises);
        set_workImPath(withRatios);
    };

    loadAspectRatios();
    }, []);




    //////////////////////////// CHANGE IMAGE TO GIF ON HOVER

    const changeToGif = (index, toGif) => {

    if(toGif){
        set_currentBoxIndex(index);
    }else{
        set_currentBoxIndex(null);
    };

    const newPath = (toGif) ? imBasePath + works[index] + "/GridGif." + webPorGif[index] : imBasePath + works[index] +  "/GridStatic.webp";

    const nextWorkImPath = workImPath.map((item, i) => 
        index === item.id ? {...item, imPath: newPath} : {...item, imPath:  imBasePath + works[item.id] +  "/GridStatic.webp"});

    set_workImPath(nextWorkImPath);

    }

//////////////////////////////// COMMENTER LINE

const descripText = (cursorPos === 0) ? (roleDescription[currentBoxIndex]) : (fullTextArray[cursorPos][Math.floor(Math.random()*fullTextArray[cursorPos].length)]);
const [commenterLine, setCommenterLine] = useState(defaultComLine);

useEffect(() => {
    if (width < 900) {
        if (height > 480) {
        setCommenterLine(narrowComLine);
        } else {
        setCommenterLine(hideComLine);
        }
    } else {
        if(height < 590){
            setCommenterLine(hideComLine);
        }else{
            setCommenterLine(defaultComLine);
        };
    }
}, [width, height, narrowComLine, hideComLine, defaultComLine]);

 
/////////////////////////////////////// TEXT TIMER

useEffect(() => {

    return () => clearTimeout(timerRef.current);
}, []);


const commenterBoxTimer = (click) => {
    if(timerRef.current){
        clearTimeout(timerRef.current);
    };

    if(click === true){
        setCursorPos(8);
    }else{
        setCursorPos(9);
    };


    timerRef.current = setTimeout(() => {
        timerRef.current = null;
  
        setCursorPos(0);
    }, 1000);

}

const cancelTimer = () => {
    if(timerRef.current){
        clearTimeout(timerRef.current);
        timerRef.current = null;

        setCursorPos(0);
    }
}




    return(
        <div>

        <div className= "boxBody">

            {workImPath.map((item, index) => (
                <div key={String(item.id)} className="box" onMouseOver={() => changeToGif(item.id, true)} onMouseLeave={() => changeToGif(item.id, false)} width={400}>
                    <SmartLink to={item.link}>
                        <div className="imageBlock-wrapper" style={{ aspectRatio: item.aspectRatio ?? 1 }}>     
                            <img className= "image" src= {item.imPath} alt={works[item.id]+"_image"} onContextMenu={(e) => e.preventDefault()}></img>
                            {item.title === null ? (
                                <img className= "titleAsLogo" src= {item.imText} alt={works[item.id]+"_text"} onContextMenu={(e) => e.preventDefault()}></img>
                            ) : (
                                <h1 className="titleAsText" alt={works[item.id]+"_text"} style={{color: item.fontColor, fontFamily: item.fontType}}> {item.title} </h1>
                            )
                            }
                            <div className="image-overlay"></div>
                        </div>
                    </SmartLink>
            
                </div>
            ))}

        </div>

        <div className = "commenterContainer">

            <div className="commenterBox" onMouseOver = {() => commenterBoxTimer(false)} onMouseLeave={() => cancelTimer()}>
                <img className = "commenter" src= "../images/Static_Q3DScan.webp" onClick = {() => commenterBoxTimer(true)}></img>
            </div>

            <div className="lineDiv">
                
            </div>

            <div className="divDescriptionText">
                <div className="commenterLine"  
                    style={
                        commenterLine.length > 0 && commenterLine[cursorPos]
                        ? currentBoxIndex != null
                            ? {
                                bottom: commenterLine[1].pos + "%",
                                height: commenterLine[1].height + "%",
                            }
                            : {
                                bottom: commenterLine[cursorPos].pos + "%",
                                height: commenterLine[cursorPos].height + "%",
                            }
                        : {} 
                    }></div>
                <p className="descriptionText">
                    {(descripText != null) ? (
                    descripText.split("\n")
                        .map((line, i) => {
                        return(
                        <React.Fragment key={i}> 
                            {line}
                            <br key={i} />
                        </React.Fragment>
                        );
                        })): (
                            descripText
                        )
                    }
                </p>
                </div>
        
            </div>
        </div>

    );

}