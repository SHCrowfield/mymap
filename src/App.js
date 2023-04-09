import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import List from "./pages/list/List";
import Hotel from './pages/hotel/Hotel';
import Home from "./pages/home/Home";
import Person from "./pages/person/Person";
import Registration from "./pages/registration/Registration";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mymap" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/mymap/person" element={<Person />} />
        <Route path="/mymap/hotels" element={<List />} />
        <Route path="/mymap/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
