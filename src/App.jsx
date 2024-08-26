import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Profile from "./Components/Profile/Profile";
import React from "react";

import Contact from "./Components/Contact/Contact";
import Careers from "./Components/Careers/Careers";
function App() {
  return (
    <>
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Careers" element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
