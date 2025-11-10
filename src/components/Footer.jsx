import { useState, useEffect } from "react";
import "./Footer.css"; 
import { useLocation } from "react-router-dom";
import useWindowWidth from "./useWindowWidth";
import { useGlobal } from "../GlobalContext";

export default function Footer() {
  
  const { setCursorPos } = useGlobal();
  const location = useLocation();
  const [boxBodyPage, setboxBodyPage] = useState(false);
  const [footerWidth, setFooterWidth] = useState("75%");
  const [padding, setPadding] = useState("0 1rem");

  const width = useWindowWidth();

  useEffect(() => {
    setboxBodyPage(location.pathname === "/"); 
  }, [location.pathname]); 

  useEffect(() => {
    if(boxBodyPage){

      if(width > 450){
        setFooterWidth("75%");
        setPadding("0rem 1rem");
      }else{
        setFooterWidth("100%");
        setPadding("0rem 1rem");
      }
        
    }else{
      if(width < 500){
        setFooterWidth("100%");
        setPadding("0rem 1rem");
      }else{
        setFooterWidth("90%");
        setPadding("0rem 10%");
      }
    }
  }, [boxBodyPage, width]);

  const onEmail = (over) => {
    if(over === true){
      setCursorPos(4);
    }else{
      setCursorPos(0);
    };
  }

  const onInsta = (over) => {
    if(over === true){
      setCursorPos(5);
    }else{
      setCursorPos(0);
    };    
  }

    const onVimeo = (over) => {
    if(over === true){
      setCursorPos(6);
    }else{
      setCursorPos(0);
    };    
  }

  const onYoutube = (over) => {
    if(over === true){
      setCursorPos(7);
    }else{
      setCursorPos(0);
    };    
  }


  return (
    <footer className="footer">
      <div className="footer-container" 
      style= {{
        justifyContent: boxBodyPage ? "space-between" : "center"}}>
        <div className="footerLine"></div>
          <div className="social-icons" style= {{width: footerWidth, padding: padding}}>
            <p className = "footerEmail"  onMouseOver={() => onEmail(true)} onMouseOut={() => onEmail(false)}>quirijnnn   [@]  gmail  .  com</p>
            <a href="https://www.instagram.com/quirijndees/" aria-label="Instagram" target="_blank" rel="noreferrer noopener" onMouseOver={() => onInsta(true)} onMouseOut={() => onInsta(false)}><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="https://vimeo.com/user103304092" aria-label="Vimeo"  target="_blank" rel="noreferrer noopener" onMouseOver={() => onVimeo(true)} onMouseOut={() => onVimeo(false)}><ion-icon name="logo-vimeo"></ion-icon></a>
            <a href="https://www.youtube.com/@quirtje1" aria-label="Youtube" target="_blank" rel="noreferrer noopener" onMouseOver={() => onYoutube(true)} onMouseOut={() => onYoutube(false)}> <ion-icon name="logo-youtube"></ion-icon></a>
        </div>
        <div className="footerLine"></div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} by Quirijn Dees. All rights reserved.</p>
      </div>
    </footer>
  );
};


