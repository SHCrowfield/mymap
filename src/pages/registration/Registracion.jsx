import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./Registracion.css"

function Registracion() {
    return (
        <div><Navbar /><Header />
            <div className="regContainer">
                <div>
                <span className="label">Bejelentkezés</span>
                    <label className="login">
                        Felhasználónév: <input name="username" />
                        Jelszó: <input name="password" />
                    </label>
                    <button className="btn">Bejelentkezés</button>
                    <hr />
                    <span className="label">Regisztráció</span>
                    <label className="login">
                        Felhasználónév: <input name="username" />
                        Jelszó: <input name="password" />
                        Név: <input name="name" />
                        email: <input name="email" />
                    </label>
                    <button className="btn">Regisztráció</button>
                </div>
            </div>
        </div>
    )
}

export default Registracion