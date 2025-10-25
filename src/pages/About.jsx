import './About.css';

const biography = `Quirijn Dees is a sound designer, music producer and animator.
He initially developed an interest in sound through producing beat music. At the age of 18, Quirijn started his Sonology Bachelor at the Royal Conservatory in The Hague. Here his interest in audiovisual composition and animation grew. During this time Quirijn started experimenting with creative coding and digital cut-out animation.
After finishing his Sonology Bachelor, he did a Bachelor in Animation at KASK in Gent, Belgium. Here, he learned digital 3D-animation and created his first experimental and absurdist narrative films.
In 2024-25 Quirijn did a Master’s in Animation at HSLU in Luzern, Switzerland, continuing his experiments into digital 3D-animation and creative coding.`;

const ctma = "contact me at:";
const email = "quirijnnn  [@]  gmail  .  com";

const texts = [biography, ctma, email];

export default function About() {
  return (
    <div className="about-body">
      <div className="imageBlock-wrapper-about">
        <img
          className="about-portraitGif"
          src={`${import.meta.env.BASE_URL}/images/About/Q_Scan_Gif.webp`}
          alt="portrait"
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="image-overlay-about"></div>
      </div>

      <div className="about-text">
        {texts.map((item, index) => (
          <div key={index} className="about-text-section">
            {index === 2 ? (
           
              <p className="about-email">{item}</p>
            ) : (
             
              item.split("\n").map((line, i) => (
                <p key={i} className="about-paragraph">
                  {line}
                </p>
              ))
            )}
          </div>
        ))}
      </div>

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
          href="https://www.youtube.com/@quirtje1"
          aria-label="YouTube"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </div>
    </div>
  );
}
