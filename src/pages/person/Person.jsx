import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./Person.css"
import pp from "./pp.png"

function Person() {
    return (
        <div><Navbar /><Header type="list" />
            <div className="personContainer">
                <div className="leftSide">
                    <img src={pp} alt="" className="personImg" />
                    <div className="personData">
                        <h1>Pályakezdő Péter, 23</h1>
                        <h2>Barátoknak csak Peti</h2>
                        <h2>Kertészmérnök BSC, Miskolc</h2>
                    </div>
                </div>
                <div className="centerSide">
                    <div className="personData">
                        <h1>Bio</h1>
                        <h2>Kertészmérnöknek tanultam, de
                            kedvenc időtöltésem a fotózás és
                            videóklippek forgatása.</h2>

                    </div>
                    <div className="personData">
                        <h1>Quote</h1>
                        <h2>Ne várj a pillanatra, hanem csináld meg
                            te magad!</h2>

                    </div>
                    <div className="personData">
                        <h1>Motivations (goals)</h1>
                        <h2>Világot látni, és mindig új kihívásokat
                            keresni</h2>

                    </div>
                    <div className="personData">
                        <h1>Jobs to be Done</h1>
                        <h2>Elhelyezkedni kertészmérnökként és
                            parkok, kertek tervezésével foglalkozni
                            egy vállalkozásnál. Fotó tanfolyamokon
                            részt venni és képszerkesztést tanulni</h2>

                    </div>
                </div>
                <div className="rightSide">

                    <div className="personData">
                        <h1>PFactors influencing
                            buying decisions</h1>
                        <h2>Felhasználó barát, könnyű használat

                            Látványos és áttekinthető</h2>

                    </div>
                    <div className="personData">
                        <h1>Gains from my
                            product</h1>
                        <h2>Több téren is hasznosítható

                            Megbízható, napra kész információk
                            beszerzése</h2>

                    </div>
                    <div className="personData">
                        <h1>Communication</h1>
                        <h2>Socal media

                            Facebook, Instagram, Tiktok

                            Influenszer posztok és videók, rövid
                            videók az oldal használatáról</h2>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Person