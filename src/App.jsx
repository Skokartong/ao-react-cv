import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import jsonData from "./Components/Experience/experience.json";
import Header from "./Components/Header/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/experience"
          element={
            <Experience
              programmingSkills={jsonData.backendSkills}
              personalSkills={jsonData.frontendSkills}
              education={jsonData.education}
              experience={jsonData.experience}
            />
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
