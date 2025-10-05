import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto.jpg';

function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const blobs = [
    { size: 100, color: 'bg-purple-600', style: { top: '15%', left: '10%' }, factorX: 30, factorY: 20 },
    { size: 80, color: 'bg-pink-500', style: { bottom: '20%', right: '15%' }, factorX: -25, factorY: 15 },
    { size: 120, color: 'bg-blue-500', style: { top: '50%', left: '40%' }, factorX: 40, factorY: -30 },
    { size: 70, color: 'bg-indigo-500', style: { bottom: '25%', left: '25%' }, factorX: 20, factorY: 25 },
  ];

  return (
    <div className="relative overflow-hidden bg-black min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 text-white">

      {/* Floating Blobs */}
      {blobs.map(({ size, color, style, factorX, factorY }, i) => (
        <motion.div
          key={i}
          className={`${color} rounded-full mix-blend-screen blur-xl opacity-80 absolute shadow-lg pointer-events-none`}
          style={{
            width: size * 1.2,
            height: size * 1.2,
            ...style,
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

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl flex flex-col md:flex-row items-center gap-12 my-24"
      >
        {/* Left Image */}
        <motion.img
          src={myPhoto}
          alt="Dipesh Shrestha"
          className="rounded-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover border-4 border-purple-500 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
        />

        {/* Right Content */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-400">About Me</h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            I am <span className="text-purple-300 font-semibold">Dipesh Shrestha</span>, a dedicated Web Developer currently pursuing my 
            <span className="text-pink-400 font-semibold"> Bachelor of Computer Applications (BCA)</span> at Tribhuvan University. 
            My passion lies in building dynamic, user-friendly web applications with modern tools and technologies.  
            Over time, I’ve gained hands-on experience with both <span className="text-blue-400">frontend</span> and <span className="text-green-400">backend</span> systems. 
          </p>
        </div>
      </motion.div>

            {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-24 px-6"
      >
        <h2 className="text-4xl text-center font-bold text-yellow-400 mb-12">
          Web Development Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Skill 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-yellow-300 mb-2">HTML</h3>
            <p className="text-gray-300 leading-relaxed">
              Structuring web content with semantic clarity and accessibility.
            </p>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-2">CSS</h3>
            <p className="text-gray-300 leading-relaxed">
              Crafting visually appealing and responsive layouts.
            </p>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-pink-400 mb-2">Tailwind CSS</h3>
            <p className="text-gray-300 leading-relaxed">
              Building consistent UIs with a utility-first approach.
            </p>
          </motion.div>

          {/* Skill 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-green-400 mb-2">PHP</h3>
            <p className="text-gray-300 leading-relaxed">
              Creating dynamic web applications with server-side logic.
            </p>
          </motion.div>

          {/* Skill 5 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-2">React.js</h3>
            <p className="text-gray-300 leading-relaxed">
              Building scalable and interactive interfaces using components.
            </p>
          </motion.div>

          {/* Skill 6 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">MySQL</h3>
            <p className="text-gray-300 leading-relaxed">
              Managing and querying structured data efficiently.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20"
      >
        <div className="p-6 bg-purple-900/30 rounded-xl shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl font-semibold text-purple-300 mb-2">Frontend</h3>
          <p className="text-gray-300">HTML, CSS, JavaScript, React, TailwindCSS, Figma</p>
        </div>
        <div className="p-6 bg-pink-900/30 rounded-xl shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl font-semibold text-pink-300 mb-2">Backend</h3>
          <p className="text-gray-300">PHP, MySQL, Node.js, Express.js</p>
        </div>
        <div className="p-6 bg-blue-900/30 rounded-xl shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">Databases</h3>
          <p className="text-gray-300">MySQL, PostgreSQL, MongoDB</p>
        </div>
        <div className="p-6 bg-indigo-900/30 rounded-xl shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-2">CMS</h3>
          <p className="text-gray-300">Strapi, WordPress</p>
        </div>
        <div className="p-6 bg-violet-900/30 rounded-xl shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl font-semibold text-violet-300 mb-2">Deployment</h3>
          <p className="text-gray-300">Vercel, Netlify, InfinityFree, cPanel</p>
        </div>
        <div className="p-6 bg-green-900/30 rounded-xl shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Version Control</h3>
          <p className="text-gray-300">Git, GitHub</p>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center my-20"
      >
        <h2 className="text-4xl font-bold text-pink-400 mb-6">Education</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am currently studying <span className="text-purple-300 font-semibold">Bachelor of Computer Applications (BCA)</span> at 
          <span className="text-pink-400 font-semibold"> Tribhuvan University</span>.  
          My coursework focuses on programming, databases, networking, and software engineering, giving me a strong foundation to build real-world applications.
        </p>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl my-20 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-10">Major Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-purple-800/30 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-300 mb-3">E-commerce Website</h3>
            <p className="text-gray-300">Developed a full-stack online store using HTML, CSS, JavaScript, Vendure, Postgresql</p>
          </div>
          <div className="p-6 bg-pink-800/30 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-pink-300 mb-3">Law Website</h3>
            <p className="text-gray-300">Develop a full-stack law website using React.JS, TailwindCSS, Strapi, etc.</p>
          </div>
          <div className="p-6 bg-blue-800/30 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">WearHub</h3>
            <p className="text-gray-300">Created an e-commerce site focused on fashion with TailwindCSS styling and admin panel for product management.</p>
          </div>
          <div className="p-6 bg-green-800/30 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-300 mb-3">The-Health</h3>
            <p className="text-gray-300">A React healthcare app supporting multiple languages (i18n) with services like OPD, ANC, Emergency, and doctor/patient dashboards.</p>
          </div>
        </div>
      </motion.div>

      {/* Future Goals */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center my-24"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6">Future Goals</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          My goal is to grow as a full-stack developer and contribute to impactful projects.  
          I am especially interested in exploring <span className="text-blue-300">cloud computing</span>, 
          <span className="text-pink-300"> AI integration</span>, and scalable systems that improve lives.  
          With tools like <span className="text-purple-300 font-semibold">Strapi, PostgreSQL, and modern deployment platforms like Vercel</span>, 
          I aim to design applications that are reliable, secure, and accessible to everyone.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
