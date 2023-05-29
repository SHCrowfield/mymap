import { useState } from "react"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./Registration.css"

function Registration() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [phone, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('Magyarország');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [postcode, setPostcode] = useState('');
    const [active] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [listId, setListId] = useState('');
    const [changeId, setChangeId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const reg = { identifier, password, firstname, lastname, phone, email, address: { country, city, street, postcode }, active };
        setIsPending(true);
        console.log(reg);

        //Mentés
        fetch('api/admin/customers/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reg)

        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    const handleList = () => {
        //Listázás
        fetch('api/admin/customers/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    const handleListId = () => {
        //Listázás ID alapján
        fetch(`api/admin/customers/${listId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Dunno what happened');
                }
                return response.json();
            })
            .then(data => {console.log(data)
            })
.catch(error => {
                console.error('Valami baj  vót: ', error);
            });
    }
    //módosít
    const changeData = (e) => {
        e.preventDefault();
        const reg = { identifier, password, firstname, lastname, phone, email, address: { country, city, street, postcode }, active };
        setIsPending(true);
        console.log(reg);

        fetch(`api/admin/customers/${changeId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reg)

        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Dunno what happened');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Valami baj  vót: ', error);
            });
    }

    const handleDelete = () => {
        //Törlés
        fetch(`api/admin/customers/${deleteId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }

        }).then(response => {
            if (!response.ok) {
                throw new Error('Dunno what happened');
            }
            return 'Jó volt';
        })
            .then(data => {
                console.log('Sikeresen törölve: ', data);
            })
            .catch(error => {
                console.error('Valami baj  vót: ', error);
            })
    }

    return (
        <div><Navbar /><Header />
            <div className="regContainer">
                <div className="reg">
                    <span className="label">Bejelentkezés</span>
                    <form className="login">
                        <label>Felhasználónév: </label>
                        <input className ="input" type="text" name="username" />
                        <label>Jelszó: </label>
                        <input className ="input" type="password" name="password" />

                        <button className="btn">Bejelentkezés</button>
                    </form>
                    <hr />
                    <form className="registration">
                        <span className="label">Regisztráció</span>
                        <label>Felhasználónév:</label>
                        <input className ="input"
                            type="text"
                            required
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            name="username" />
                        <label>Jelszó: </label>
                        <input className ="input" type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" />
                        <label>Keresztnév: </label>
                        <input className ="input" type="text"
                            required
                            value={firstname}
                            onChange={(e) => setFname(e.target.value)}
                            name="fname" />
                        <label>Vezetéknév:</label>
                        <input className ="input" type="text"
                            required
                            value={lastname}
                            onChange={(e) => setLname(e.target.value)}
                            name="lname" />
                        <label>Telefonszám:</label>
                        <input className ="input" type="tel"
                            required
                            value={phone}
                            onChange={(e) => setTel(e.target.value)}
                            name="phone" />
                        <label>Email:</label>
                        <input className ="input" type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email" />
                        <label>Ország: </label>
                        <input className ="input" type="text"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            name="country" />
                        <label>Város: </label>
                        <input className ="input" type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            name="city" />
                        <label>Utca:</label>
                        <input className ="input" type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                            name="street" />
                        <label>Irányítószám: </label>
                        <input className ="input" type="text"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                            required
                            name="postcode" />

                        <button className="btn" onClick={handleSubmit}>Regisztráció</button>
                        <input className ="input" type="number" value={changeId} onChange={e => setChangeId(e.target.value)} />
                        <button className="btn" onClick={changeData}>Módosít</button>
                        <div>
                            <input className ="input" type="number" value={deleteId} onChange={e => setDeleteId(e.target.value)} />
                            <button className="btn" onClick={handleDelete}>Törölni</button>
                            <button className="btn" onClick={handleList}>Listázni</button><br />
                            <label>Listázás ID alapján: </label>
                            <input className ="input" type="number" value={listId} onChange={e => setListId(e.target.value)} />
                            <button className="btn" onClick={handleListId}>Adatok listázása</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration