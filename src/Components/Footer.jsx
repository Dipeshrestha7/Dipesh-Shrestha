import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        
        <div className="flex space-x-4 text-2xl">
          <Link to="/facebook">
            <RiFacebookCircleFill className="hover:text-blue-500 transition cursor-pointer" />
          </Link>
          <Link to="/instagram">
            <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
          </Link>
          <Link to="/github">
            <FaGithub className="hover:text-gray-400 transition cursor-pointer" />
          </Link>
          <Link to="/linkedin">
            <FaLinkedin className="hover:text-blue-400 transition cursor-pointer" />
          </Link>
        </div>

        <p className="text-orange-300 text-lg font-semibold">Dipesh Shrestha</p>

        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
