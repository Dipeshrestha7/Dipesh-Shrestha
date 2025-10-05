import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'dipstha061@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '9869144570' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Gorkha, Nepal' },
  ];

  return (
    <div className="relative bg-black min-h-screen py-16 px-6 sm:px-12 text-gray-200 font-sans overflow-hidden">
      
      {/* Floating Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-700/30 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-600/30 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto bg-gray-900/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-gray-700"
      >
        <h1 className="text-4xl font-extrabold text-purple-400 mb-8 border-b pb-2 border-cyan-500 text-center">
          Contact Me
        </h1>

        <p className="mb-10 text-lg text-gray-300 text-center">
          Feel free to reach out for projects, collaborations, or a friendly chat!
        </p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-purple-400 text-2xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-1">{item.label}</h3>
              <p className="text-gray-300">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="block mb-2 font-medium text-cyan-400" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <label className="block mb-2 font-medium text-cyan-400" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-4 rounded-xl bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <label className="block mb-2 font-medium text-cyan-400" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message..."
              className="w-full p-4 rounded-xl bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-400 hover:bg-purple-500 text-black font-semibold px-6 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
