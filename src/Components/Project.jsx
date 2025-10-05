import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    { size: 96, color: "bg-purple-600", style: { top: "10%", left: "10%" }, factorX: 30, factorY: 20 },
    { size: 72, color: "bg-pink-500", style: { bottom: "15%", right: "10%" }, factorX: -25, factorY: 15 },
    { size: 96, color: "bg-blue-500", style: { top: "50%", left: "40%" }, factorX: 40, factorY: -30 },
    { size: 64, color: "bg-indigo-500", style: { bottom: "20%", left: "30%" }, factorX: 20, factorY: 25 },
    { size: 80, color: "bg-violet-400", style: { top: "30%", right: "30%" }, factorX: -35, factorY: -25 },
  ];

  const projects = [
    { title: "Law Website", desc: "A professional website for a law firm.", link: "http://sabin.procomnepal.com/", color: "bg-purple-800/40" },
    { title: "School Website", desc: "School management system website.", link: "#", color: "bg-pink-800/40" },
    { title: "E-commerce Website", desc: "Full-stack online shop project.", link: "#", color: "bg-blue-800/40" },
    { title: "The-Health", desc: "Frontend of a healthcare React app with multilingual support and responsive UI.", link: "https://thehealth.procomnepal.com/", color: "bg-green-800/40" },
  ];

  return (
    <div className="relative bg-black text-gray-100 min-h-screen px-6 md:px-20 py-16 overflow-hidden">

      {/* Floating blobs */}
      {blobs.map(({ size, color, style, factorX, factorY }, i) => (
        <motion.div
          key={i}
          className={`${color} rounded-full mix-blend-screen blur-xl opacity-80 absolute shadow-lg pointer-events-none`}
          style={{ width: size * 1.2, height: size * 1.2, ...style }}
          animate={{ x: mousePos.x * factorX, y: mousePos.y * factorY }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      ))}

      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1 }} className="text-center mb-20">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          My Projects
        </h1>
      </motion.section>

      {/* Vendure Section */}
      <motion.section initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.4 }} className="grid md:grid-cols-2 gap-10 items-center mb-24">
        <img src="https://vendure.io/images/logos/vendure-logo-dark.png" alt="Vendure" className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" />
        <div>
          <h2 className="text-3xl font-bold text-pink-400">Vendure</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Vendure is the backbone of my e-commerce applications. It provides a powerful <span className="text-pink-500">Admin Dashboard</span>, <span className="text-pink-500">GraphQL APIs</span>, and <span className="text-pink-500">plugin system</span>. I use Vendure with PostgreSQL for reliable data handling.
          </p>
        </div>
      </motion.section>

      {/* Strapi Section */}
      <motion.section initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.4 }} className="grid md:grid-cols-2 gap-10 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold text-purple-400">Strapi</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            With Strapi, I manage content like blogs, pages, and product descriptions. Being a <span className="text-purple-500">headless CMS</span>, Strapi integrates seamlessly with React/Next.js frontends.
          </p>
        </div>
        <img src="https://strapi.io/assets/strapi-logo-dark.svg" alt="Strapi" className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" />
      </motion.section>

      {/* PostgreSQL Section */}
      <motion.section initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.4 }} className="grid md:grid-cols-2 gap-10 items-center mb-24">
        <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="PostgreSQL" className="w-64 mx-auto rounded-full shadow-lg hover:rotate-6 transition-transform duration-500" />
        <div>
          <h2 className="text-3xl font-bold text-green-400">PostgreSQL</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            For the database layer, I use PostgreSQL because of its stability, performance, and ability to handle complex queries. It powers both Strapi and Vendure, ensuring <span className="text-green-500">reliability</span> and <span className="text-green-500">scalability</span>.
          </p>
        </div>
      </motion.section>

      {/* Vercel Section */}
      <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.4 }} className="text-center mb-24">
        <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="Vercel" className="w-32 mx-auto mb-6 hover:scale-110 transition-transform duration-500" />
        <h2 className="text-3xl font-bold text-blue-400">Vercel</h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I deploy all my projects on Vercel. It provides lightning-fast hosting, seamless GitHub integration, and <span className="text-blue-500">automatic CI/CD</span>.
        </p>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.4 }} className="max-w-6xl mx-auto my-20">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">Featured Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${project.color} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300">{project.desc}</p>
              <span className="mt-4 inline-block text-sm text-gray-400 underline hover:text-white">View Project</span>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default About;
