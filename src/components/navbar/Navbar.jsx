import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">.Mymap</span>
            <div className="navItems">
                <button className="navButton">Regisztráció</button>
                <button className="navButton">Belépés</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar