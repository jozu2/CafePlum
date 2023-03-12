import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Cake from "./Pages/Home page/Cake/Cake";
import Home from "./MainComponent/Home";
import Footer from "./Component/Footer/index.jsx";
import Donuts from "./Pages/Home page/Donuts/Donuts";
import Espresso from "./Pages/Home page/Espresso/Espresso";
import MilkTea from "./Pages/Home page/MilkTea/MilkTea";
import Waffles from "./Pages/Home page/Waffles/Waffles";
import Pie from "./Pages/Home page/Pie/Pie";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cake" element={<Cake />} />
        <Route path="Donut" element={<Donuts />} />
        <Route path="Espresso" element={<Espresso />} />
        <Route path="MilkTea" element={<MilkTea />} />
        <Route path="Waffles" element={<Waffles />} />
        <Route path="Pie" element={<Pie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
