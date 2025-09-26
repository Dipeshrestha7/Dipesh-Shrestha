import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 md:p-6 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-purple-600 font-extrabold text-2xl sm:text-3xl md:text-4xl">
          Dipesh Shrestha
        </h1>

        {/* Right side: Social icons + Dark mode + Hamburger */}
        <div className="flex items-center space-x-4 text-white text-xl md:text-2xl">
          {/* Social Icons (desktop only) */}
          <div className="hidden md:flex justify-center space-x-3 text-xl md:text-2xl text-white">
            <NavLink
              className="hover:text-blue-500"
              to="https://www.facebook.com/dipesh.shrestha.328280"
              target="_blank"
            >
              <RiFacebookCircleFill />
            </NavLink>
            <NavLink
              className="hover:text-pink-600"
              to="https://www.instagram.com/dipeshrestha_7/"
              target="_blank"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              className="hover:text-gray-400"
              to="https://github.com/Dipeshrestha7"
              target="_blank"
            >
              <FaGithub />
            </NavLink>
            <NavLink
              className="hover:text-blue-500"
              to="https://www.linkedin.com/in/dipesh-shrestha-678a64243/"
              target="_blank"
            >
              <FaLinkedin />
            </NavLink>
          </div>

          {/* Dark Mode (desktop only) */}
          <MdDarkMode className="hidden md:block" />

          {/* Hamburger (mobile only) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row justify-center gap-x-7 pt-4 text-md">
        {["Home", "About", "Projects", "Contact", "Services"].map((item) => (
          <li key={item}>
            <NavLink
              to={item.toLowerCase() === "home" ? "/" : item.toLowerCase()}
              className={({ isActive }) =>
                `${isActive
                  ? "text-purple-600 pb-2 border-b-2 border-purple-600"
                  : "text-white"
                } pb-2 transition-all ease-in duration-100 hover:text-purple-600 hover:border-b-2 hover:border-purple-600`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-y-4 mt-4 text-center text-md">
          {["Home", "About", "Projects", "Contact", "Services"].map((item) => (
            <li key={item}>
              <NavLink
                to={item.toLowerCase() === "home" ? "/" : item.toLowerCase()}
                className={({ isActive }) =>
                  `${isActive
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-white"
                  } block pb-2 transition-all ease-in duration-100 hover:text-purple-600 hover:border-b-2 hover:border-purple-600`
                }
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Header;
