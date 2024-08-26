import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen flex items-center justify-center home-div">
        <img
          src="/public/images/HTS_Logo_Red-small.png"
          alt=""
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-13 h-18"
        />

        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-13 h-18 py-20">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Home;
