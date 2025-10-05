import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto.jpg';
import About from './Project';

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const blobs = [
    { size: 96, color: 'bg-purple-600', style: { top: '10%', left: '10%' }, factorX: 30, factorY: 20 },
    { size: 72, color: 'bg-pink-500', style: { bottom: '15%', right: '10%' }, factorX: -25, factorY: 15 },
    { size: 96, color: 'bg-blue-500', style: { top: '50%', left: '40%' }, factorX: 40, factorY: -30 },
    { size: 64, color: 'bg-indigo-500', style: { bottom: '20%', left: '30%' }, factorX: 20, factorY: 25 },
    { size: 80, color: 'bg-violet-400', style: { top: '30%', right: '30%' }, factorX: -35, factorY: -25 },
    { size: 66, color: 'bg-blue-400', style: { top: '30%', right: '30%' }, factorX: -35, factorY: -25 },
    { size: 70, color: 'bg-purple-400', style: { top: '30%', right: '30%' }, factorX: -35, factorY: -25 },
    { size: 60, color: 'bg-pink-400', style: { top: '30%', right: '30%' }, factorX: -35, factorY: -25 },
  ];

  return (
    <div className="relative overflow-hidden bg-black h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 text-white">

      {/* Floating blobs */}
      {blobs.map(({ size, color, style, factorX, factorY }, i) => (
        <motion.div
          key={i}
          className={`${color} rounded-full mix-blend-screen blur-xl opacity-80 absolute shadow-lg pointer-events-none`}
          style={{
            width: size * 1.2,
            height: size * 1.2,
            ...style,
          }}
          animate={{
            x: mousePos.x * factorX,
            y: mousePos.y * factorY,
          }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-around -mt-12 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-7 z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-400 font-semibold">
            <span className='text-white'>Hello, I'm</span> <br /> Dipesh Shrestha
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Welcome <br /> to My Portfolio
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-xl">
            Explore my projects, skills, and experiences.
          </p>

          <NavLink to="/projects">
            <button
              className="flex items-center justify-center gap-3 rounded-xl px-6 py-4
                         bg-[linear-gradient(to_right,_white_50%,_transparent_50%)] bg-[length:200%_100%]
                         bg-right-bottom hover:bg-left-bottom transition-all duration-400 ease-in-out
                         border-2 border-purple-950 hover:text-black shadow-xl shadow-purple-800
                         hover:border-black hover:shadow-white text-white font-semibold text-lg"
            >
              <span>Get Started</span>
              <span className="text-xl hover:animate-ping">
                <FaArrowRight />
              </span>
            </button>
          </NavLink>
        </div>

        {/* Right - Image */}
        <div className="mt-10 md:mt-0 md:ml-12 z-10">
          <img
            className="rounded-full w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-4 border-purple-600 shadow-2xl"
            src={myPhoto}
            alt="Dipesh Shrestha"
          />
        </div>
      </motion.div>

    </div>
      
  );
}

export default Home;