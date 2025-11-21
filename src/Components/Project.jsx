import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Project() {
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
    { size: 72, color: "bg-blue-500", style: { bottom: "15%", right: "10%" }, factorX: -25, factorY: 15 },
    { size: 96, color: "bg-indigo-500", style: { top: "50%", left: "40%" }, factorX: 40, factorY: -30 },
    { size: 64, color: "bg-slate-600", style: { bottom: "20%", left: "30%" }, factorX: 20, factorY: 25 },
  ];

  const technologies = [
    {
      id: 1,
      title: "Vendure",
      description: "Headless e-commerce platform with GraphQL API, Admin UI, and customizable plugin architecture for scalable online stores.",
      image: "https://vendure.io/images/logos/vendure-logo-dark.png",
      gradient: "from-purple-600 to-blue-600",
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Strapi",
      description: "Open-source headless CMS for building customizable APIs with role-based access control and media management.",
      image: "https://strapi.io/assets/strapi-logo-dark.svg",
      gradient: "from-indigo-600 to-purple-600",
      category: "CMS"
    },
    {
      id: 3,
      title: "PostgreSQL",
      description: "Advanced relational database system with robust performance, ACID compliance, and extensive indexing capabilities.",
      image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      gradient: "from-blue-600 to-cyan-600",
      category: "Database"
    },
    {
      id: 4,
      title: "Vercel",
      description: "Cloud platform for frontend frameworks with edge network deployment, CI/CD, and optimal performance optimization.",
      image: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      gradient: "from-gray-700 to-slate-600",
      category: "Deployment"
    },
  ];

  const projects = [
    { 
      title: "Legal Practice Platform", 
      description: "Professional law firm website with case management integration, and secure document handling.",
      link: "http://sabin.procomnepal.com/", 
      technologies: ["React", "Strapi", "PostgreSQL"],
      status: "Live"
    },
    { 
      title: "Educational Management System", 
      description: "Comprehensive school administration platform with student tracking, grade management, and parent communication modules.",
      link: "#", 
      technologies: ["Next.js", "PostgreSQL", "Strapi"],
      status: "In Development"
    },
    { 
      title: "E-commerce Solution", 
      description: "Full-stack online retail platform with inventory management, payment processing, and customer analytics.",
      link: "#", 
      technologies: ["Vendure", "React", "TypeScript"],
      status: "Planning"
    },
    { 
      title: "Healthcare Portal", 
      description: "Multilingual healthcare application with patient management, appointment scheduling, and medical records system.",
      link: "https://thehealth.procomnepal.com/", 
      technologies: ["React", "i18n", "Responsive UI"],
      status: "Live"
    },
  ];

  return (
    <div className="relative bg-black text-gray-100 min-h-screen px-6 md:px-20 py-16 overflow-hidden">

      {/* Subtle background elements */}
      {blobs.map(({ size, color, style, factorX, factorY }, i) => (
        <motion.div
          key={i}
          className={`${color} rounded-full mix-blend-screen blur-3xl opacity-40 absolute pointer-events-none`}
          style={{ width: size * 1.5, height: size * 1.5, ...style }}
          animate={{ x: mousePos.x * factorX, y: mousePos.y * factorY }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
        />
      ))}

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
          Technology Stack & Portfolio
        </h1>
        <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
          Enterprise-grade technologies and production-ready projects built with modern architecture patterns and best practices.
        </p>
      </motion.header>

      {/* Technology Stack Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-4">Core Technologies</h2>
          <p className="text-slate-400 text-lg">Robust tools and frameworks powering scalable solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} blur-lg rounded-2xl opacity-50`}></div>
                    <img
                      src={tech.image}
                      className="relative w-20 h-20 rounded-xl object-contain bg-slate-800 p-3"
                      alt={tech.title}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-slate-200">{tech.title}</h3>
                      <span className="text-xs font-medium px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg">Real-world applications demonstrating technical expertise and business value</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:bg-slate-900/50">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-slate-400">{project.status}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-200 mb-3 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-lg leading-relaxed mb-4 max-w-3xl">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                        <span>View Project</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 border border-slate-700/50">
          <h3 className="text-3xl font-bold text-slate-200 mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can build something extraordinary together using modern technologies and proven methodologies.
          </p>
          <NavLink to="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Start a Conversation
          </NavLink>
        </div>
      </motion.section>

    </div>
  );
}

export default Project;