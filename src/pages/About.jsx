import './About.css';
import Reveal from "../components/Reveal";
import React from "react";

const biography = `Quirijn Dees is a \nfilmmaker,\ngeneralist in 3D-animation (Blender and Houdini),\nsound designer (Reaper and Ableton),\nelectronic music producer (Ableton and Supercollider),\ncreative coder (C++ with Openframeworks),\ncompositor (After Effects & Davinci Resolve),\nperson (mind)` 
const cv = 'find my CV ';
const ctma = "contact me at:";
const email = "quirijnnn  [@]  gmail  .  com";
const qIsA = "Quirijn Dees is a ";

const texts = [biography, cv,  ctma, email];

export default function About() {

  return (
    <div className="about-body">
      
      <Reveal>
        <div className="imageBlock-wrapper-about">
          <img
            className="about-portraitGif"
            src={`${import.meta.env.BASE_URL}images/About/Q_Scan_Gif.webp`}
            alt="portrait"
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="image-overlay-about"></div>
        </div>
      </Reveal>

      <Reveal>
        <div className="about-text">
          <div className="about-biography-grid">
            <div className="bio-left">
              <p className="about-bio-left-text">
                {qIsA}
              </p>
            </div>
            <div className="bio-right">
              {biography
                .split("\n")
                .slice(1)
                .map((line, i) => (
                  <p key={i} className="about-bio-right-text">
                    {line}
                  </p>
                ))}
            </div>  
          </div>

      
          {texts.slice(1).map((item, index) => (
            <div key={index} className="about-text-section">
              {index === 0 ? (
                <p className="about-paragraph center-line">
                  {item}
                  <a
                    className="aboutPage-CV-link"
                    href="./documents/ShortCV_2025.pdf"
                    target="_blank"
                  >
                    here.
                  </a>
                </p>
              ) : index === 1 ? (
                <p className="about-paragraph center-line">{item}</p>
              ) : (
                <p className="about-email">{item}</p>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
      <div className="about-linkLogos">
        <a
          href="https://www.instagram.com/quirijndees/"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a
          href="https://vimeo.com/user103304092"
          aria-label="Vimeo"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ion-icon name="logo-vimeo"></ion-icon>
        </a>
        <a
          href="https://linkedin.com/in/quirijn-dees-51011b19a"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
      </Reveal>
    </div>  
  );
}
