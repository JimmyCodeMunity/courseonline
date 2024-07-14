import React from 'react'
import Navbar from '../components/Navbar'
import CourseDetails from '../components/CourseDetails'
import Footer from '../components/Footer'

const ViewCourse = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-white">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <CourseDetails />
      

      <div className="flex bg-black sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ViewCourse
