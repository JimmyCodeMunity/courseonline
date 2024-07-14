import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [coursename, setCoursename] = useState("");
  const [courselink, setCourselink] = useState("");
  const [displayimage, setDisplaylink] = useState("");
  const [description,setDescription] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCourse = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(coursename,courselink,displayimage)
    try {
      const response = await axios.post(
        "https://coursell.vercel.app/api/v1/courses/addcourse",{coursename,courselink,displayimage,description}
      );
      const success = response.data;
      if (success) {
        console.log("course created successfully");
        alert("Course created successfully");
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("error creating course");
      setLoading(false)
    }
  };
  return (
    <section className="pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Add Course <span class="text-yellow-600"></span>
          </div>
          <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Create New Course!!
          </div>
          <form class="flex flex-col gap-3" onSubmit={handleCourse}>
            <div class="block relative">
              <label
                for="email"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                CourseName
              </label>
              <input
                value={coursename}
                onChange={(e) => setCoursename(e.target.value)}
                type="text"
                id="email"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div class="block relative">
              <label
                for="email"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Course Video Link
              </label>
              <input
                value={courselink}
                onChange={(e) => setCourselink(e.target.value)}
                type="text"
                id="email"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div class="block relative">
              <label
                for="password"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Course Display Image
              </label>
              <input
                value={displayimage}
                onChange={(e) => setDisplaylink(e.target.value)}
                type="text"
                id="password"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div class="block relative">
              <label
                for="password"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Course Notes
              </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                id="password"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div>
              
            </div>
            {loading ? (
              <button
                type="submit"
                class="bg-yellow-600 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Creating Course...
              </button>
            ) : (
              <button
                type="submit"
                class="bg-yellow-600 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Create Course
              </button>
            )}
          </form>
          <div class="text-sm text-center mt-[1.6rem]">
            Already have an account?{" "}
            <a class="text-sm text-yellow-600" href="/login">
              Sign up for free!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCourse;
