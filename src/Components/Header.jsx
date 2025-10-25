import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.nav
      className="bg-black/5 backdrop-blur-3xl ml-2 mr-2 md:p-6 sticky top-0 z-50 shadow-lg"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative p-2 w-full">
        <div className="absolute top-0 left-0 w-16 h-[2px] rounded-full bg-gradient-to-r from-purple-500  to-blue-500"></div>
        <div className="absolute top-0 left-0 w-[2px] h-12 rounded-full bg-gradient-to-b from-purple-500  to-blue-500"></div>
        
        <div className="absolute top-0 right-0 w-16 h-[2px] rounded-full bg-gradient-to-l from-purple-500  to-blue-500"></div>
        <div className="absolute top-0 right-0 w-[2.5px] h-12 rounded-full bg-gradient-to-b from-purple-500  to-blue-500"></div>
      
        
        {/* Top Bar */}
        <div className="flex items-center justify-around relative">

          <div className="absolute top-0 left-0 w-8 h-[2px] rounded-full bg-gradient-to-r from-purple-500  to-blue-500"></div>
          <div className="absolute top-0 left-0 w-[2px] h-5 rounded-full bg-gradient-to-b from-purple-500  to-blue-500"></div>
          
          <div className="absolute top-0 right-0 w-8 h-[2px] rounded-full bg-gradient-to-l from-purple-500  to-blue-500"></div>
          <div className="absolute top-0 right-0 w-[2.5px] h-5 rounded-full bg-gradient-to-b from-purple-500  to-blue-500"></div>

          {/* Animated Gradient Name */}
          <motion.h1
            className="font-extrabold text-2xl sm:text-3xl md:text-4xl cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:300%_300%] text-transparent bg-clip-text relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              textShadow: [
                "0px 0px 6px rgba(168,85,247,0.4)",
                "0px 0px 12px rgba(236,72,153,0.5)",
                "0px 0px 8px rgba(59,130,246,0.5)",
              ],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            whileHover={{
              scale: 1.07,
              textShadow: "0px 0px 14px rgba(168,85,247,0.9)",
            }}
          >
            Dipesh Shrestha
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row justify-center gap-x-8 pt-4 text-md ">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `${
                      isActive
                      ? "text-purple-500 border-b-2 border-purple-500"
                      : "text-white hover:text-purple-400"
                    } relative group font-medium tracking-wide transition-all duration-300 pb-1`
                  }
                >
                  <div className="absolute bottom-0 left-0 bg-purple-500 w-0 h-[2.5px] group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 bg-purple-500 w-[2.5px] h-0 group-hover:h-full transition-all duration-300"></div>
                  <motion.span
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      color: "#a855f7",
                      textShadow: "0px 0px 8px rgba(168,85,247,0.8)",
                    }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="relative p-2"
                  >
                    {item}
                  </motion.span>
                  
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-y-4 mt-4 text-center text-md bg-black/80 rounded-lg py-4 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {[...navItems, "Services"].map((item) => (
              <NavLink
                key={item}
                to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `block font-medium transition-all duration-200 ${
                    isActive
                      ? "text-purple-500 bg-purple-900/20 py-2 rounded-md"
                      : "text-white hover:text-purple-400"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <motion.li
                  whileHover={{
                    scale: 1.05,
                    color: "#a855f7",
                    textShadow: "0px 0px 8px rgba(168,85,247,0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item}
                </motion.li>
              </NavLink>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Header;
