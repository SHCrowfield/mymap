import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer"> 
            <Link to="/mymap" className="logo">.Mymap</Link>
            <div className="navItems">
                <button className="navButton">Regisztráció</button>
                <button className="navButton">Belépés</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar