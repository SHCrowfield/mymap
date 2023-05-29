import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
faBook, faImage, faLightbulb, faPerson, faUser, faHome
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { NavLink } from "react-router-dom";



const Header = () => {

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
          <NavLink to="/" className={(navData) => (navData.isActive ? "akt" : 'link')}>
              <FontAwesomeIcon icon={faHome} className="icon" />
            </NavLink>
          </div>
          <div className="headerListItem">
          <NavLink to="/person" className={(navData) => (navData.isActive ? "akt" : 'link')}>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </NavLink>
          </div>
          <div className="headerListItem">
          <NavLink to="/notyet" className={(navData) => (navData.isActive ? "akt" : 'link')}>
              <FontAwesomeIcon icon={faBook} className="icon" />
            </NavLink>
          </div>
          <div className="headerListItem">
          <NavLink to="/competence" className={(navData) => (navData.isActive ? "akt" : 'link')}>
          <FontAwesomeIcon icon={faPerson} className="icon" />
          </NavLink>
          </div>
          <div className="headerListItem">
          <NavLink to="/notyet" className={(navData) => (navData.isActive ? "akt" : 'link')}>
              <FontAwesomeIcon icon={faImage} className="icon" />
            </NavLink>
          </div>
          <div className="headerListItem">
          <NavLink to="/notyet" className={(navData) => (navData.isActive ? "akt" : 'link')}>
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
            </NavLink>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Header