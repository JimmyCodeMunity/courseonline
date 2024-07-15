import axios from "axios";
import React, { useEffect, useState } from "react";

const Courses = () => {
    const [courses,setCourses] = useState([]);
    const [loading,setLoading] = useState(false);



    useEffect(()=>{
        getCourses();
    },[]); //fetch courses only when component mounts

    const getCourses = async()=>{
        setLoading(true);
        try {
            const response = await axios.get('https://coursell.vercel.app/api/v1/courses/allcourses');
            const data = response.data;
            setCourses(data);
            setLoading(false)
            
        } catch (error) {
            console.error(error);
            setLoading(false);

            
        }
    }
  return (
    <div>
      <div>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />

        <div class="antialiased text-gray-900 ">
          <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            {
                loading &&(
                    <p className="text-green-500">loading courses.....</p>
                )
                }
            <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Courses
            </h2>

            <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Pick a course today
            </p>
          </div>
          <div class="bg-gray-200 p-8 flex flex-wrap md:flex-row flex-col items-center w-full justify-between md:space-x-3 space-y-3">
            {courses.map((shoe) => {
              return (
                <a href={`/viewcourse/${shoe._id}`} class="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                  {/* <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>--> */}
                  <img
                    class="h-60 w-full object-cover object-end"
                    src={shoe.displayimage}
                    alt={shoe.displayimage}
                  />
                  <div class="p-6">
                    <div class="flex items-baseline">
                      <div class="ml-2 text-gray-600 text-xs lowercase font-semibold tracking-wide">
                        {shoe.description}
                      </div>
                    </div>
                    <h4 class="mt-2 font-semibold text-lg leading-tight truncate">
                      {shoe.coursename}
                    </h4>

                    <div class="mt-1">
                      {/* <span>kshs.{shoe.price}</span> */}
                      <span class="text-gray-600 text-sm"></span>
                    </div>
                    <div class="mt-2 flex items-center">
                      <div class="text-teal-600 font-semibold">
                        <span>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <span></span>
                        </span>
                        <span class="ml-2 text-gray-600 text-sm">
                          34 reviews
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
