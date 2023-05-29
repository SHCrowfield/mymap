
import Header from "../../components/header/Header"
import Modal from "../../components/modal/Modal"
import Navbar from "../../components/navbar/Navbar"
import CompetenceMenuList from "../../components/competenceMenuList/CompetenceMenuList"
import "./Competence.css"
import { useEffect, useState } from "react"
import { personalityTest, orientationTest } from "../../data"
import VerticalTimeLine from "../../components/verticalTimeline/VerticalTimeLine"
import underconst from "../../images/underconst.png"

const Competence = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');


  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value);
    console.log(selectedOption1);
  }

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value);
    console.log(selectedOption2);
  }

  const handleOption3Change = (e) => {
    setSelectedOption3(e.target.value);
    console.log(selectedOption3);
  }

  const handleOption4Change = (e) => {
    setSelectedOption4(e.target.value);
    console.log(selectedOption4);
  }
  const handleOption5Change = (e) => {
    setSelectedOption5(e.target.value);
    console.log(selectedOption5);
  }

  const [selected, setSelected] = useState("personality");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "personality",
      title: "Személyiségtesztek",
    },
    {
      id: "orientation",
      title: "Pályaorientációs tesztek",
    },
    {
      id: "experience",
      title: "Tapasztalatok",
    },
    {
      id: "skill",
      title: "Készségek",
    },
    {
      id: "equipment",
      title: "Eszközök",
    },
  ];

  useEffect(() => {

    switch (selected) {
      case "personality":
        setData(personalityTest);
        break;
      case "orientation":
        setData(orientationTest);
        break;
      default:
        setData(personalityTest);
    }

  }, [selected])

  return (
    <div>
      <div>
        <Navbar /><Header />
        <div className="personTestContainer">
          <h1>Kompetenciatár</h1>
          <ul className="competenceMenu">
            {list.map(item => (
              <CompetenceMenuList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
            ))}
          </ul>
          {(selected === "personality" || selected === "orientation") ? (
            <div className="btnLook">
              {data.map(d => (
                <div className="item" onClick={() => setIsOpen(true)}>
                  <img src={d.img} alt="" className="itemImg" />
                  <h3>{d.title}</h3>
                </div>
              ))}
            </div>
          ) : selected === "experience" ? (
            <VerticalTimeLine />
          ) : selected === "skill" ? (
            <p><img src={underconst} alt="" /></p>
          ) : selected === "equipment" ? (
            <p><img src={underconst} alt="" /></p>
          ) : ""
          }
        </div>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <form className="test">
            <h1>Szamuráj vagy reptéri dolgozó?</h1>
            <span className="question">Kozsó igéző tekintete vagy Gyuri bácsi mosolya?</span>
            <div className="answers">
              <fieldset id="group1" className="groups">
                <div className="valasz">
                  <input type="radio"
                    value="option1"
                    name="group1"
                    checked={selectedOption1 === 'option1'}
                    onChange={handleOption1Change}
                  />
                  <span className="answer">Elveszek bennük</span>
                </div>

                <div className="valasz">
                  <input type="radio"
                    value="option2"
                    name="group1"
                    checked={selectedOption1 === 'option2'}
                    onChange={handleOption1Change}
                  />
                  <span className="answer">Az a mosoly...</span>
                </div>
              </fieldset>
            </div>

            <span className="question">Ki legyen a párod?</span>
            <div className="answers">
              <fieldset id="group2" className="groups">
                <div className="valasz">
                  <input type="radio"
                    value="option3"
                    name="group2"
                    checked={selectedOption2 === 'option3'}
                    onChange={handleOption2Change}
                  />
                  <span className="answer">A Tincs</span>
                </div>
                <div className="valasz">
                  <input type="radio"
                    value="option4"
                    name="group2"
                    checked={selectedOption2 === 'option4'}
                    onChange={handleOption2Change}
                  />
                  <span className="answer">Klárika</span>
                </div>
              </fieldset>
            </div>

            <span className="question">Nemzetiségre inkább...</span>
            <div className="answers">
              <fieldset id="group3" className="groups">
                <div className="valasz">
                  <input type="radio"
                    value="option5"
                    name="group3"
                    checked={selectedOption3 === 'option5'}
                    onChange={handleOption3Change}
                  />
                  <span className="answer">Szomorú szamuráj</span>
                </div>
                <div className="valasz">
                  <input type="radio"
                    value="option6"
                    name="group3"
                    checked={selectedOption3 === 'option6'}
                    onChange={handleOption3Change}
                  />
                  <span className="answer">Ez a föld a senki földje</span>
                </div>
              </fieldset>
            </div>

            <span className="question">Hogyan viszonyulsz mások megismeréséhez?</span>
            <div className="answers">
              <fieldset id="group4" className="groups">
                <div className="valasz">
                  <input type="radio"
                    value="option7"
                    name="group4"
                    checked={selectedOption4 === 'option7'}
                    onChange={handleOption4Change}
                  />
                  <span className="answer">Éreztem, nem tévedtem, a sors akarta így, nem a véletlen</span>
                </div>
                <div className="valasz">
                  <input type="radio"
                    value="option8"
                    name="group4"
                    checked={selectedOption4 === 'option8'}
                    onChange={handleOption4Change}
                  />
                  <span className="answer">Találd ki gyorsan a gondolatom</span>
                </div>
              </fieldset>
            </div>
            <span className="question">Szerintem is...</span>
            <div className="answers">
              <fieldset id="group5" className="groups">
                <div className="valasz">
                  <input type="radio"
                    value="option9"
                    name="group5"
                    checked={selectedOption5 === 'option9'}
                    onChange={handleOption5Change}
                  />
                  <span className="answer">Ihn nikho! Mahna nikho mha nahna e rei!</span>
                </div>
                <div className="valasz">
                  <input type="radio"
                    value="option10"
                    name="group5"
                    checked={selectedOption5 === 'option10'}
                    onChange={handleOption5Change}
                  />
                  <span className="answer">Mamama mama maria</span>
                </div>
              </fieldset>
            </div>
          </form>
        </Modal>
      </div>
    </div >

  )
}

export default Competence