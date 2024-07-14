import React from "react";

import { Link } from "react-router-dom";
import * as Icon from "react-feather";

const Hero = () => {
  return (
    <section className="bg-white w-full flex-1" id="hero">
      <div className="flex md:flex-row item-start justify-between flex-col py-6 sm:py-16">
        <div className="flex flex-1 justify-center items-start flex-col xl:px-0 sm:px-16 px-3">
          <div className="sm:py-5">
            <div>
            
              <a
                href="#id"
                className="border border-black border-2xl p-1 px-4 rounded-2xl text-gray-500 flex justify-center items-center space-x-3"
              >
                Buy Course <Icon.ChevronRight color="black" size={20} />{" "}
              </a>
            </div>
          </div>

          <div className="items-center justify-between w-full">
            <h1 className="text-black font-poppins flex-1 font-normal ss:text-[50px] text-[20px] ss:leading-[60px] leading-[75px]">
              Online Learning
              <br className="hidden sm:block" />{" "}
              <span className="text-black">now on your</span>
              <br className="hidden sm:block" />
            </h1>
          </div>

          <h1 className="text-yellow-600 font-poppins font-semibold text-[40px] ss:leading-[100px] ss:text-[68px]">
            FingerTips
          </h1>
          <p className="md:max-w-[500px] font-poppins text-white relative font-normal text-dimWhite text-[18px] leading-[30px]">
            Grow in Tech,Upskill in your Knowledge <span> </span>
            <br className="md:hidden block" />
            and get a first class developer Experience
          </p>
          <div
           
          >
            <div className="w-full flex-1 md:block hidden">
              <Link
                to="/"
                className="bg-yellow-600 md:my-8 my-4 space-y-2 justify-center items-center flex h-12 md:w-40 w-full rounded-xl p-3 text-black front-poppins font-semibld"
              >
                Get Started
                <Icon.ChevronRight color="black" size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 pt-16 md:hidden">
              <Link
                to="/"
                className="bg-black md:my-8 my-4 space-y-2 justify-center items-center flex h-12 md:w-40 w-full rounded-xl p-3 text-black front-poppins font-semibld"
              >
                Get Started
                <Icon.ChevronRight color="black" size={20} />
              </Link>
            </div>

        
          <div
             // Set animation duration
            className="animate-fade-left flex-1 flex h-full justify-center items-center md:my-10 relative hidden md:block"
          >
            <img
              alt="hero"
              src="../images/stu1.png"
              className="animate__flash w-[50%] h-[50%] relative z-[5]"
            />
            <div className="absolute z-[0] w-[70%] h-[55%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[100%] h-[100%] rounded-full bottom-40 white__gradient" />
            <div className="absolute z-[0] w-[70%] h-[50%] right-20 bottom-20 blue__gradient" />
          </div>
      </div>
    </section>
  );
};

export default Hero;