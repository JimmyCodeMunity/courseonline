import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

const RegisterScreen = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-white">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]" id="">
          <Navbar />
        </div>
      </div>
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]" id="loginsection">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
