import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddCourse from "../components/AddCourse";



const CreateCoursePage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-white">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]" id="loginsection">
          <AddCourse />
        </div>
      </div>
      
      
      <div className="flex bg-black sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;