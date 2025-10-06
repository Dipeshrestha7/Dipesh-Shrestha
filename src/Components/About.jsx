import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpg";

function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const blobs = [
    { size: 100, color: "bg-purple-600", style: { top: "15%", left: "10%" }, factorX: 30, factorY: 20 },
    { size: 80, color: "bg-pink-500", style: { bottom: "20%", right: "15%" }, factorX: -25, factorY: 15 },
    { size: 120, color: "bg-blue-500", style: { top: "50%", left: "40%" }, factorX: 40, factorY: -30 },
    { size: 70, color: "bg-indigo-500", style: { bottom: "25%", left: "25%" }, factorX: 20, factorY: 25 },
  ];

  return (
    <div className="relative overflow-hidden bg-black min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 text-white">
      
      {/* Floating Blobs */}
      {blobs.map(({ size, color, style, factorX, factorY }, i) => (
        <motion.div
          key={i}
          className={`${color} rounded-full mix-blend-screen blur-xl opacity-80 absolute pointer-events-none`}
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
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        />
      ))}

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl flex flex-col md:flex-row items-center gap-12 my-24"
      >
        {/* Left Image */}
        <motion.img
          src={myPhoto}
          alt="Dipesh Shrestha"
          className="rounded-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover border-4 border-purple-500 shadow-2xl"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
        />

        {/* Right Content */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-400">About Me</h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            I am <span className="text-purple-300 font-semibold">Dipesh Shrestha</span>, a dedicated Web Developer currently pursuing my{" "}
            <span className="text-pink-400 font-semibold">Bachelor of Computer Applications (BCA)</span> at Tribhuvan University.
            My passion lies in building dynamic, user-friendly web applications with modern tools and technologies.
            Over time, I’ve gained hands-on experience with both <span className="text-blue-400">frontend</span> and{" "}
            <span className="text-green-400">backend</span> systems.
          </p>
        </div>
      </motion.div>

      {/* Web Development Skills */}
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
          {[
            { title: "HTML", color: "text-yellow-300", desc: "Structuring web content with semantic clarity and accessibility." },
            { title: "CSS", color: "text-purple-400", desc: "Crafting visually appealing and responsive layouts." },
            { title: "Tailwind CSS", color: "text-pink-400", desc: "Building consistent UIs with a utility-first approach." },
            { title: "PHP", color: "text-green-400", desc: "Creating dynamic web applications with server-side logic." },
            { title: "React.js", color: "text-yellow-400", desc: "Building scalable and interactive interfaces using components." },
            { title: "MySQL", color: "text-blue-400", desc: "Managing and querying structured data efficiently." },
          ].map(({ title, color, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <h3 className={`text-xl font-bold ${color} mb-2`}>{title}</h3>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skill Categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20"
      >
        {[
          { title: "Frontend", color: "bg-purple-900/30", text: "text-purple-300", desc: "HTML, CSS, JavaScript, React, TailwindCSS, Figma" },
          { title: "Backend", color: "bg-pink-900/30", text: "text-pink-300", desc: "PHP, MySQL, Node.js, Express.js" },
          { title: "Databases", color: "bg-blue-900/30", text: "text-blue-300", desc: "MySQL, PostgreSQL, MongoDB" },
          { title: "CMS", color: "bg-indigo-900/30", text: "text-indigo-300", desc: "Strapi, WordPress" },
          { title: "Deployment", color: "bg-violet-900/30", text: "text-violet-300", desc: "Vercel, Netlify, InfinityFree, cPanel" },
          { title: "Version Control", color: "bg-green-900/30", text: "text-green-300", desc: "Git, GitHub" },
        ].map(({ title, color, text, desc }, i) => (
          <div
            key={i}
            className={`p-6 ${color} rounded-xl shadow-md hover:scale-105 transform transition duration-300`}
          >
            <h3 className={`text-2xl font-semibold ${text} mb-2`}>{title}</h3>
            <p className="text-gray-300">{desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center my-20"
      >
        <h2 className="text-4xl font-bold text-pink-400 mb-6">Education</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am currently studying <span className="text-purple-300 font-semibold">Bachelor of Computer Applications (BCA)</span> at{" "}
          <span className="text-pink-400 font-semibold">Tribhuvan University</span>.  
          My coursework focuses on programming, databases, networking, and software engineering, giving me a strong foundation to build real-world applications.
        </p>
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl my-20 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-10">Major Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: "E-commerce Website", color: "bg-purple-800/30", text: "text-purple-300", desc: "Developed a full-stack online store using HTML, CSS, JavaScript, Vendure, PostgreSQL." },
            { title: "Law Website", color: "bg-pink-800/30", text: "text-pink-300", desc: "Developed a full-stack law website using React.js, TailwindCSS, and Strapi." },
            { title: "WearHub", color: "bg-blue-800/30", text: "text-blue-300", desc: "Created an e-commerce site focused on fashion with TailwindCSS styling and admin panel for product management." },
            { title: "The-Health", color: "bg-green-800/30", text: "text-green-300", desc: "A React healthcare app supporting i18n with OPD, ANC, Emergency, and dashboards." },
          ].map(({ title, color, text, desc }, i) => (
            <div key={i} className={`p-6 ${color} rounded-xl shadow-md hover:scale-105 transition duration-300`}>
              <h3 className={`text-2xl font-semibold ${text} mb-3`}>{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
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
          I am especially interested in exploring <span className="text-blue-300">cloud computing</span>,{" "}
          <span className="text-pink-300">AI integration</span>, and scalable systems that improve lives.  
          With tools like <span className="text-purple-300 font-semibold">Strapi, PostgreSQL, and modern deployment platforms like Vercel</span>, 
          I aim to design applications that are reliable, secure, and accessible to everyone.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
