import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <RiFacebookCircleFill />, link: "https://www.facebook.com/dipesh.shrestha.328280", color: "hover:text-blue-500" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/dipeshrestha_7/", color: "hover:text-pink-500" },
    { icon: <FaGithub />, link: "https://github.com/Dipeshrestha7", color: "hover:text-gray-400" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dipesh-shrestha-678a64243/", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="relative bg-black   text-gray-200 py-10 overflow-hidden">

      {/* Floating blobs */}
      <motion.div
        className="absolute top-10 left-10 w-56 h-56 bg-purple-700/30 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-48 h-48 bg-cyan-600/30 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center space-y-6">

        {/* Social Icons */}
        <div className="flex space-x-6 text-3xl">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-colors cursor-pointer ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Name */}
        <motion.p
          className="text-purple-400 text-lg font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dipesh Shrestha
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} All rights reserved.
        </motion.p>

        {/* Scroll to Top Button */}
        {showTopBtn && (
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 bg-purple-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-purple-500 transition-colors"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </div>
    </footer>
  );
}

export default Footer;
