import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./Person.css"
import pp from "./pp.png"
import bb from "./bb.png"

function Person() {

    const user = {

        uImg: pp,
        nev: "Pályakezdő Péter",
        kor: "23",
        bnev: "Barátoknak csak Peti",
        szak: "Kertészmérnök BSC",
        lakhely: "Miskolc",
        bio: "Kertészmérnöknek tanultam, dekedvenc időtöltésem a fotózás és videóklippek forgatása.",
        quote: "Ne várj a pillanatra, hanem csináld meg te magad!",
        motivations: "Világot látni, és mindig új kihívásokat keresni",
        jobs: "Elhelyezkedni kertészmérnökként és parkok, kertek tervezésével foglalkozni egy vállalkozásnál. Fotó tanfolyamokon részt venni és képszerkesztést tanulni"
    };

    const user1 = {

        uImg: bb,
        nev: "Bizonytalan Bence",
        kor: "18",
        bnev: "",
        szak: "",
        lakhely: "Veszprém",
        bio: "18 éves vagyok, informatikusnak tanulok Veszprémbe lakom, de mindig is vágyam volt Bp-en élni Még nem tudom, hogy tovább tanuljak-e, de buli lehet egyetemistának lenni",
        quote: "Mindenkinek megvan a saját útja, és ezt az utat sajnos mindenkinek magának kell megkeresnie.",
        motivations: "Sikeres szeretnék lenni és sok pénzt keresni, megtalálni azt a munkát amit szívesen csinálnék",
        jobs: ""
    };


    return (
        <div><Navbar /><Header/>
            <div className="personContainer">
                <div className="leftSide">
                    <img src={user.uImg} alt="" className="personImg" />
                    <div className="personData">
                        <h1>{user.nev}, {user.kor}</h1>
                        <h2>{user.bnev}</h2>
                        <h2>{user.szak} {user.lakhely} </h2>
                    </div>
                </div>
                <div className="centerSide">
                    <div className="personData">
                        <h1>Bio</h1>
                        <h2>{user.bio}</h2>

                    </div>
                    <div className="personData">
                        <h1>Quote</h1>
                        <h2>{user.quote}</h2>

                    </div>

                </div>
                <div className="rightSide">
                <div className="personData">
                        <h1>Motiváció</h1>
                        <h2>{user.motivations}</h2>

                    </div>
                    <div className="personData">
                        <h1>Amit szeretnék</h1>
                        <h2>{user.jobs}</h2>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Person