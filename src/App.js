import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`app ${theme}`}>
      <Router>
        <NavBar theme={theme} />
        <Routes>
          <Route path="/" element={<Intro theme={theme} />} />
          <Route path="/about-me" element={<AboutMe theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </Router>
    </div>
  );
};

export default App;
