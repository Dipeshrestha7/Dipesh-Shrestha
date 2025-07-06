import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Bounce + fade + slide variant for heading
const bounceUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: 'spring',
      stiffness: 150,
      damping: 10,
    },
  },
};

// Smooth fade + slide variant for other elements
const fadeUpSmooth = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

// Container variant for staggering children
const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      ease: 'easeInOut',
    },
  },
};

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
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

  const skills = [
    {
      title: 'HTML',
      desc: 'Structuring web content with semantic clarity and accessibility.',
    },
    {
      title: 'CSS',
      desc: 'Crafting visually appealing and responsive layouts.',
    },
    {
      title: 'Tailwind CSS',
      desc: 'Building consistent UIs with a utility-first approach.',
    },
    {
      title: 'PHP',
      desc: 'Creating dynamic web applications with server-side logic.',
    },
    {
      title: 'React.js',
      desc: 'Building scalable and interactive interfaces using components.',
    },
    {
      title: 'MySQL',
      desc: 'Managing and querying structured data efficiently.',
    },
  ];

  return (
    <motion.section
      className="relative min-h-screen py-16 px-4 sm:px-8 font-sans text-gray-100 overflow-hidden"
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
      style={{
        background:
          'linear-gradient(270deg, #000000, #1a1a1a, #000000)',
        backgroundSize: '600% 600%',
      }}
    >
      {/* Floating blobs behind content */}
      {blobs.map(({ size, color, style, factorX, factorY }, i) => (
        <motion.div
          key={i}
          className={`${color} absolute rounded-full mix-blend-screen blur-xl opacity-80 shadow-lg pointer-events-none`}
          style={{
            width: size * 1.2,
            height: size * 1.2,
            ...style,
            zIndex: 0,
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

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerStagger}
        className="relative z-10 max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
      >
        {/* Heading */}
        <motion.h1
          variants={bounceUp}
          className="mb-8 text-5xl font-bold text-center text-yellow-400 tracking-tight"
        >
          About Me
        </motion.h1>

        {/* Introduction Text */}
        <motion.p
          variants={fadeUpSmooth}
          className="mb-10 text-lg leading-relaxed text-gray-300 text-justify md:text-xl"
        >
          Hello! I'm currently pursuing a{' '}
          <span className="font-semibold text-gray-100">
            Bachelor of Computer Applications (BCA)
          </span>{' '}
          at{' '}
          <span className="font-semibold text-gray-100">
            Tribhuvan University
          </span>
          , affiliated through{' '}
          <span className="font-semibold text-gray-100">
            Universal College
          </span>
          . I'm passionate about crafting impactful digital experiences and
          continuously learning new technologies to address real-world problems.
        </motion.p>

        {/* Skill Section Heading */}
        <motion.div variants={fadeUpSmooth}>
          <h2 className="mb-6 border-b border-gray-600 pb-2 text-center text-3xl font-semibold text-yellow-300">
            Web Development Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="grid gap-5 text-base sm:grid-cols-2"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUpSmooth}
              className="rounded-xl bg-gray-700 p-5 transition-colors duration-300 hover:bg-gray-600 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="mb-1 block text-lg font-semibold text-yellow-300">
                {skill.title}
              </span>
              <p className="text-sm text-gray-200">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
