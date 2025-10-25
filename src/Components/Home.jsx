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
        {/* Left Section */}
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

          {/* Animated Border Button */}
          <NavLink to="/projects">
            <motion.button
              className="relative px-8 py-3 rounded-xl overflow-hidden font-semibold text-white 
                        bg-transparent backdrop-blur-sm border-2 border-transparent 
                        shadow-lg hover:scale-105 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-600"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{
                  backgroundSize: '200% 200%',
                  zIndex: 0,
                }}
              ></motion.div>

              {/* Inner layer (transparent so body color is visible) */}
              <div className="absolute inset-[2px] rounded-xl bg-transparent backdrop-blur-sm z-10"></div>

              {/* Button content */}
              <div className="relative flex items-center justify-center gap-3 z-20">
                <span className="text-lg font-medium">Get Started</span>
                <motion.span
                  className="text-xl"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <FaArrowRight />
                </motion.span>
              </div>
            </motion.button>
          </NavLink>

        </div>

        {/* Right Section - Image */}
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
