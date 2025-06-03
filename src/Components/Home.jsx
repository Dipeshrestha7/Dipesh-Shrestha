import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import backgroundImage from '../assets/Background.jpg';
import backgroundImage2 from '../assets/Background2.jpg';

function Home() {
  return (
    <div className='bg-black'>
      <div className='flex flex-col h-screen text-white'>

        <img
          className='hidden md:block h-[30rem] w-[50rem] rounded-[6rem_0_0_3rem] mt-[4rem] ml-[13rem] shadow-2xl shadow-purple-950 hover:shadow-purple-800'
          src={backgroundImage}
          alt=""
        />

        <img
          className='hidden md:block absolute object-cover h-[30rem] w-[20rem] rounded-[0_3rem_6rem_0] mt-[4rem] ml-[65rem] shadow-2xl shadow-purple-950 hover:shadow-purple-800'
          src={backgroundImage2}
          alt=""
        />

        <h1 className='absolute text-2xl sm:text-3xl md:text-5xl top-[14rem] sm:top-[18rem] md:top-[23rem] left-4 sm:left-[10rem] md:left-[18rem] font-bold mb-4 '>
          Welcome to My Portfolio
        </h1>

        <p className='absolute text-sm sm:text-base md:text-lg top-[18rem] sm:top-[23rem] md:top-[28rem] left-4 sm:left-[10rem] md:left-[18rem] mb-8'>
          Explore my projects, skills, and experiences.
        </p>

        <NavLink to="projects">
          <button
            className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 sm:px-5 sm:py-3 absolute 
                       top-[26rem] sm:top-[30rem] md:top-[38rem] 
                       left-4 sm:left-[12rem] md:left-[22rem] 
                       bg-[linear-gradient(to_right,_white_50%,_transparent_50%)] bg-[length:200%_100%] 
                       bg-right-bottom hover:bg-left-bottom transition-all duration-400 ease-in-out 
                       border-2 border-purple-950 hover:text-black shadow-xl  shadow-purple-800 hover:border-2 hover:border-color-black hover:shadow-xl hover:shadow-white ">
            <span>Get Started</span>
            <span className="text-base sm:text-lg hover:animate-ping">
              <FaArrowRight />
            </span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
