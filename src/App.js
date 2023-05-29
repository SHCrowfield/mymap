import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Notyet from './pages/notyet/Notyet';
import Home from "./pages/home/Home";
import Person from "./pages/person/Person";
import Registration from "./pages/registration/Registration";
import Competence from "./pages/competence/Competence";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/person" element={<Person />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/notyet" element={<Notyet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
