import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const containerRef = useRef(null);

  // Click handlers
  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=dipstha061@gmail.com",
      "_blank"
    );
  };

  const callPhone = () => {
    window.location.href = "tel:9869144570";
  };

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Dhalmal,+Tokha-3,+Kathmandu,+Nepal",
      "_blank"
    );
  };

  

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'dipstha061@gmail.com', onClick: openGmail },
    { icon: <FaPhone />, label: 'Phone', value: '9869144570', onClick: callPhone },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Dhalmal, Tokha-3, Kathmandu, Nepal', onClick: openMap },
  ];

  const whyInfo = [
    { title: "Fast Response", desc: "I respond quickly and professionally to every inquiry." },
    { title: "Quality Work", desc: "Clean, elegant UI and efficient code for every project." },
    { title: "Friendly Communication", desc: "Easy to discuss ideas and collaborate with." }
  ];

  return (
    <div className="relative bg-black min-h-screen py-24 px-6 sm:px-12 text-gray-200 font-sans overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-center mb-8">
          Contact Me
        </h1>
        <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          A passionate developer from Nepal focused on building clean, modern and interactive digital experiences.
        </p>
      </motion.div>

      {/* Contact Section - Nodes Only */}
      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto mb-20">
        {/* Content nodes aligned in layout */}
        <div className="grid sm:grid-cols-3 gap-10 relative h-[200px] items-start justify-items-center">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              onClick={item.onClick}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="group flex flex-col items-center p-6 rounded-xl bg-gray-800/30 backdrop-blur-md border border-gray-700/50
                shadow-lg hover:shadow-purple-500/20 cursor-pointer text-center min-w-[200px]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && item.onClick()}
              style={{ 
                position: 'relative', 
                top: idx === 1 ? '100px' : '0', // Offset for triangle layout
                zIndex: idx === 1 ? 5 : 1 
              }}
            >
              <div className="text-3xl text-purple-400 mb-3 group-hover:rotate-12 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-1">{item.label}</h3>
              <p className="text-gray-300 text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Section - Nodes Only */}
      <div className="relative z-10 max-w-4xl mx-auto mb-16">
        <h2 className="text-center text-3xl font-bold text-purple-300 mb-8">Why Contact Me?</h2>

        {/* Content nodes aligned in layout */}
        <div className="grid sm:grid-cols-3 gap-8 relative h-[150px] items-end justify-items-center">
          {whyInfo.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="flex flex-col items-center p-6 rounded-xl bg-gray-800/20 backdrop-blur-md border border-gray-700/30
                shadow-md hover:shadow-cyan-500/20 cursor-default text-center min-w-[200px] -mb-8"
              style={{ position: 'relative', zIndex: 5 }}
            >
              <h3 className="text-lg text-cyan-300 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Contact;