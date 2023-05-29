import './Notyet.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import underconst from "../../images/underconst.png";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='notyetContainer'><img src={underconst} alt="" /></div>
    </div>
  )
}

export default Hotel