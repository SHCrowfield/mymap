import './Notyet.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='notyetContainer'>Not Yet...</div>
    </div>
  )
}

export default Hotel