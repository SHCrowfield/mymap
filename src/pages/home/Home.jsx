import "./Home.css"
import { Users } from "../../users"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperies/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import { useState } from "react";
import Table from "../../components/table/Table";

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

        <input type="text" placeholder="Search" className="search" onChange={(e) => setQuery(e.target.value)} />
        <Table data={search(Users)} />

        {/*<Featured />
        <PropertyList />
        <FeaturedProperties />
        <MailList/>*/}
        <div className="background">
          <span className="myMap">MyMAP</span>
          <img src="https://thumbs.dreamstime.com/z/old-new-life-highway-signs-road-sign-pointing-to-choices-arrows-51231821.jpg" alt="" className="backImg" />
        </div>
      </div>
    </div>

  )
}

export default Home