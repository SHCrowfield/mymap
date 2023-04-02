import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBed, faBook, faCalendarDays, faImage, faLightbulb, faPerson, faUser
} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { Link } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1

  });


  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            
            <Link to="/mymap/person" className="link"><FontAwesomeIcon icon={faUser} /></Link>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBook} />
            <span></span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPerson} />
            <span></span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faImage} />
            <span></span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faLightbulb} />
            <span></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header