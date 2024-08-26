import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Profile from "../Profile/Profile";
import Contact from "../Contact/Contact";
import Careers from "../Careers/Careers";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-opacity-75 p-4 flex space-x-8 text-white text-lg">
        <NavLink
          className="bg-indigo-500 active:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>
        <NavLink
          className="bg-indigo-500 active:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          to="/About"
        >
          {" "}
          About{" "}
        </NavLink>
        <NavLink
          className="bg-indigo-500 active:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          to="/Profile"
        >
          {" "}
          Profile{" "}
        </NavLink>
        <NavLink
          className="bg-indigo-500 active:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          to="/Careers"
        >
          {" "}
          Careers{" "}
        </NavLink>
        <NavLink
          className="bg-indigo-500 active:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          to="/Contact"
        >
          {" "}
          Contact{" "}
        </NavLink>
      </div>
    </>
  );
};
export default Navbar;
