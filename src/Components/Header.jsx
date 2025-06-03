import React from 'react'
import { NavLink } from 'react-router-dom';
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

function Header() {
  return (
    <nav className='bg-gray-900 p-8 sticky '>
      <div className='flex justify-between items-center '>
        <div className='flex flex-row space-x-2  text-2xl text-white'>
          <NavLink className="hover:text-blue-500" to="https://www.facebook.com"><RiFacebookCircleFill /></NavLink>
          <NavLink className="hover:text-pink-600" to="https://www.instagram.com"><FaInstagram /></NavLink>
          <NavLink className="hover:text-gray-500" to="https://github.com/Dipeshrestha7"><FaGithub /></NavLink>
          <NavLink className="hover:text-blue-500" to="https://www.linkedin.com/in/dipesh-shrestha-678a64243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYX%2B8CKtjTJiKecEo3s%2BJDQ%3D%3D"><FaLinkedin /></NavLink>
        </div>

        <h1 className='text-purple-600 font-extrabold text-4xl pr-24'>Dipesh Shrestha</h1>

        <div className='text-white flex  text-2xl'>
          <MdDarkMode />
        </div>
      </div>

      <ul className='flex flex-row justify-items-center justify-center gap-x-7 pt-10 text-md'>
        <li>
          <NavLink className={({ isActive }) => `${isActive ? 'text-purple-900 border-b-2 border-purple-900' : 'text-white'} hover:text-purple-600 hover:border-b-2 hover:border-purple-600`} to="">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => `${isActive ? 'text-purple-900 border-b-2 border-purple-900' : 'text-white'} hover:text-purple-600 hover:border-b-2 hover:border-purple-600`} to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => `${isActive ? 'text-purple-900 border-b-2 border-purple-900' : 'text-white'} hover:text-purple-600 hover:border-b-2 hover:border-purple-600`} to="projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => `${isActive ? 'text-purple-900 border-b-2 border-purple-900' : 'text-white'} hover:text-purple-600 hover:border-b-2 hover:border-purple-600`} to="contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => `${isActive ? 'text-purple-900 border-b-2 border-purple-900' : 'text-white'} hover:text-purple-600 hover:border-b-2 hover:border-purple-600`} to="services">
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
