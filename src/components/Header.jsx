import Logo from './Logo';
import './Header.css'
import { Link } from 'react-router-dom';
import { useGlobal } from "../GlobalContext";



export default function Header() {

  const { setCursorPos } = useGlobal();

  const onHome = (over) => {

    if(over === true){
      setCursorPos(2);
    }else{
      setCursorPos(0);
    };
  };

    const onAbout = (over) => {

    if(over === true){
      setCursorPos(3);
    }else{
      setCursorPos(0);
    };

  };



  return (
    <header>
      <nav className= "container">
        <div className="logoItem">
          <Logo className= "logo-Header" />
        </div>
        <ul className="navLinks">
          <Link to="/" style={{ color: "white", textDecoration: "none" }} className="headerLinks" onMouseOver={() => onHome(true)} onMouseOut={() => onHome(false)}>Work</Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }} className="headerLinks" onMouseOver={() => onAbout(true)} onMouseOut={() => onAbout(false)}>About</Link>
        </ul>
      </nav>
    </header>
  );
}

