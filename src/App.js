
import {Routes, Route} from "react-router-dom";

import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Landlords from "./pages/Landlords"

const App = () => {
  return (
    <div className="App">

    <Routes>

<Route exact path="/" element={<Home/>} />
<Route exact path="/tenants" element={<Find/>} />
<Route exact path="/lanlords" element={<Landlords/>} />



    </Routes>
     
    </div>
  );
};

export default App;
