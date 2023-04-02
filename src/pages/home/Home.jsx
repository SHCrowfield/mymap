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
        {/*<Featured />
        <PropertyList />
        <FeaturedProperties />
        <MailList/>*/}
      </div>
    </div>

  )
}

export default Home