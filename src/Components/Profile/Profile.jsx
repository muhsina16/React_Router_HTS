import "./profile.css";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full border-4 border-gray-300"
          src="/public/images/HTS_Logo_Red-small.png"
          alt=""
        />

        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-2">
            HTS is a leading provider of innovative solutions in the tech
            industry.<br></br> We specialize in creating cutting-edge software
            products that help businesses thrive in a digital world.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mt-6 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-700">
                Web Development
              </h4>
              <p className="text-gray-600 mt-2">
                Building responsive, high-quality websites and applications.
              </p>
              <h4 className="text-lg font-medium text-gray-700">
                cloud Solutions
              </h4>
              <p className="text-gray-600 mt-2">
                Providing scalable cloud solutions for businesses of all sizes.
              </p>
            </div>
          </div>
          <div />
        </div>
      </div>
    </>
  );
};

export default Profile;
