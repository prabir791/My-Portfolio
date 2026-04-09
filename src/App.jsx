import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Skill from "./Pages/Skill";
import Weather from "./Pages/Weather";



const App = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-b from-black via-blue-950 to-black text-white">
      <Navbar />
     <div className="flex-1 flex items-center justify-center overflow-auto">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
     </div>
      <Footer />
    </div>
  );
};

export default App;
