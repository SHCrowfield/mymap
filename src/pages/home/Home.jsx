import "./Home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperies/FeaturedProperties";
import MailList from "../../components/mailList/MailList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">

        <input type="text" placeholder="Search" className="search" />
        <ul className="list">
          <li className="listItem">John</li>
          <li className="listItem">Jane</li>
          <li className="listItem">Mike</li>
        </ul>
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