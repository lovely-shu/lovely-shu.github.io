import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Brand from "./page/Brand";
import Room from "./page/Room";
import Location from "./page/Location";
import Business from "./page/Business";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/room" element={<Room />} />
        <Route path="/location" element={<Location />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </>
  );
}

export default App;
