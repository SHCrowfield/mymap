import "./Home.css"
import { Users } from "../../users"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";


import { useState } from "react";

import background from '../../images/background.png'

const Home = () => {
  const [query, setQuery] = useState("");

  const keys = ["first_name"/*, "last_name", "email"*/]


  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">

        {/*<input type="text" placeholder="Search" className="search" onChange={(e) => setQuery(e.target.value)} />
        <Table data={search(Users)} />*/}


        <div className="background">
          <img src={background} alt="" className="backImg" />
        </div>
      </div>
    </div>

  )
}

export default Home