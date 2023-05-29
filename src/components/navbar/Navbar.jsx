import "./Navbar.css"
import { Link } from "react-router-dom";
import logo from "../../images/logocim.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faUser, faBook, faPerson, faImage, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const CloseMenu = () => setClick(false)

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/"><img src={logo} className="logo" onClick={CloseMenu}/></Link>
        <div className="navItems">
          <button className="navButton">Bejelentkezés/Regisztráció</button>
          <div className='hamburger' onClick={handleClick}>
            {click ? (<FontAwesomeIcon icon={faTimes} className="icon" />)
              : (<FontAwesomeIcon icon={faBars} className="icon" />)}
          </div>
        </div>
        <div className={click ? "navList act" : "navList"}>
          <div className="navListItem">
            <NavLink to="/" className="navLink">
              <FontAwesomeIcon icon={faHome} className="link" onClick={CloseMenu} />
              <span className="navListSpan">Kezdőlap</span>
            </NavLink>
          </div>
          <div className="navListItem">
            <NavLink to="/person" className="navLink">
              <FontAwesomeIcon icon={faUser} className="link" onClick={CloseMenu} />  
              <span className="navListSpan">Adataim</span>
            </NavLink>
          </div>
          <div className="navListItem">
            <NavLink to="/competence" className="navLink">
              <FontAwesomeIcon icon={faBook} className="link" onClick={CloseMenu} />
              <span className="navListSpan">Kompetenciatár</span>
            </NavLink>
          </div>
          <div className="navListItem">
            <NavLink to="/notyet" className="navLink">
              <FontAwesomeIcon icon={faPerson} className="link" onClick={CloseMenu} />
              <span className="navListSpan">Céltár</span>
            </NavLink>
          </div>
          <div className="navListItem">
            <NavLink to="/notyet" className="navLink">
              <FontAwesomeIcon icon={faImage} className="link" onClick={CloseMenu} />
              <span className="navListSpan">Dokutár</span>
            </NavLink>
          </div>
          <div className="navListItem">
            <NavLink to="/notyet" className="navLink">
              <FontAwesomeIcon icon={faLightbulb} className="link" onClick={CloseMenu} />
              <span className="navListSpan">Ötlettár</span>
            </NavLink>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar