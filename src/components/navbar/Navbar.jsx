import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer"> 
            <Link to="/mymap" className="logo">.Mymap</Link>
            <div className="navItems">
            <span className="logo"><button className="navButton">Bejelentkezés/Regisztráció</button></span>
 
            </div>
        </div>
    </div>
  )
}

export default Navbar