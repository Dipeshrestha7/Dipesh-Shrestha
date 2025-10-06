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
      className="bg-black ml-2 mr-2 md:p-6 sticky top-0 z-50 shadow-lg"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between">
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

        {/* Social Icons + Menu */}
        <div className="flex items-center space-x-4 text-white text-xl md:text-2xl">
          {/* Social Icons (desktop only) */}
          <div className="hidden md:flex justify-center space-x-4">
            {[
              {
                icon: <RiFacebookCircleFill />,
                color: "hover:text-blue-500",
                link: "https://www.facebook.com/dipesh.shrestha.328280",
              },
              {
                icon: <FaInstagram />,
                color: "hover:text-pink-600",
                link: "https://www.instagram.com/dipeshrestha_7/",
              },
              {
                icon: <FaGithub />,
                color: "hover:text-gray-400",
                link: "https://github.com/Dipeshrestha7",
              },
              {
                icon: <FaLinkedin />,
                color: "hover:text-blue-400",
                link: "https://www.linkedin.com/in/dipesh-shrestha-678a64243/",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.color} relative transition duration-300`}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  textShadow: "0px 0px 8px rgba(255,255,255,0.6)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Hamburger (mobile only) */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row justify-center gap-x-8 pt-4 text-md">
        {navItems.map((item) => (
          <li key={item}>
            <NavLink
              to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-purple-500 border-b-2 border-purple-500"
                    : "text-white hover:text-purple-400"
                } relative font-medium tracking-wide transition-all duration-300 pb-1`
              }
            >
              <motion.span
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  color: "#a855f7",
                  textShadow: "0px 0px 8px rgba(168,85,247,0.8)",
                }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative"
              >
                {item}
              </motion.span>
            </NavLink>
          </li>
        ))}
      </ul>

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
