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
        <Featured />
        <h1 className="homeTitle">Törtet törtel úgy osztunk, hogy a reciprokával szorzunk.</h1>
        <PropertyList />
        <h1 className="homeTitle">Az an sorozat generátorfüggvénye akkor egy racionális törtfüggvény, melynek x=0 nem gyüke, ha az an sorozat kielégít egy állandó együthatójú homogén lineáris rekurziót.</h1>
        <FeaturedProperties />
        <MailList/>
      </div>
    </div>

  )
}

export default Home