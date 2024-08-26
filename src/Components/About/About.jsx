import "./about.css";
import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center  text-center ">
        <div className="mt-5">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ABOUT US</h1>
          <p className="text-lg text-gray-600">
            HTS is a leading distributor for <br></br> Sonicwall, Yealink,
            Avaya, Cisco, 3CX and Unifi. <br></br> We have won best partner
            awards from all these vendors for many consecutive years.<br></br>{" "}
            Please call us for more details.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
