import React, { useState } from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const LoginPage = () => {
    
  return (
    <div className="flex-1 w-full overflow-hidden bg-white">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]" id="">
          <Navbar />
        </div>
      </div>
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]" id="loginsection">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
