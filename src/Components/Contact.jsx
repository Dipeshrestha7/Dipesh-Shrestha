import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Dhalmal, Kathmandu, Nepal', onClick: openMap },
  ];

  const whyInfo = [
    { title: "Fast Response", desc: "I respond quickly and professionally to every inquiry." },
    { title: "Quality Work", desc: "Clean, elegant UI and efficient code for every project." },
    { title: "Friendly Communication", desc: "Easy to discuss ideas and collaborate with." }
  ];

  return (
    <div className="relative bg-black min-h-screen py-12 sm:py-24 px-4 sm:px-6 lg:px-12 text-gray-200 font-sans overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-center mb-6 sm:mb-8">
          Contact Me
        </h1>
        <p className="text-center text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 px-2">
          A passionate developer from Nepal focused on building clean, modern and interactive digital experiences.
        </p>
      </motion.div>

      {/* Contact Section */}
      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto lg:mb-20 mb-16">
        {/* Mobile: Vertical stack, Desktop: Grid with triangle layout */}
        <div className="flex flex-col  sm:grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              onClick={item.onClick}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className={`
                group flex flex-col items-center p-4 sm:p-6 rounded-xl bg-gray-800/30 backdrop-blur-md border border-gray-700/50
                shadow-lg hover:shadow-purple-500/20 cursor-pointer text-center w-full max-w-[280px] sm:max-w-none
                sm:min-w-[200px]
                ${idx === 1 ? 'sm:translate-y-16 sm:z-10' : ''}
              `}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && item.onClick()}
            >
              <div className="text-2xl sm:text-3xl text-purple-400 mb-2 sm:mb-3 group-hover:rotate-12 transition-transform">{item.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-1">{item.label}</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-tight sm:leading-normal">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Section */}
      <div className="relative z-10 max-w-4xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-purple-300 lg:mb-20 mb-8">
          Why Contact Me?
        </h2>

        {/* Mobile: Vertical stack, Desktop: Grid */}
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center sm:-mt-8">
          {whyInfo.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="flex flex-col items-center p-4 sm:p-6 rounded-xl bg-gray-800/20 backdrop-blur-md border border-gray-700/30
                shadow-md hover:shadow-cyan-500/20 cursor-default text-center w-full max-w-[280px] sm:max-w-none
                sm:min-w-[200px]"
            >
              <h3 className="text-base sm:text-lg text-cyan-300 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;