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
    { size: 100, color: "bg-purple-600/20", style: { top: "15%", left: "10%" }, factorX: 30, factorY: 20 },
    { size: 80, color: "bg-blue-500/20", style: { bottom: "20%", right: "15%" }, factorX: -25, factorY: 15 },
    { size: 120, color: "bg-indigo-600/20", style: { top: "50%", left: "40%" }, factorX: 40, factorY: -30 },
    { size: 70, color: "bg-slate-600/20", style: { bottom: "25%", left: "25%" }, factorX: 20, factorY: 25 },
  ];

  const technicalSkills = [
    { 
      category: "Frontend Development", 
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion","GSAP","React i18n"],
      icon: "💻",
      color: "from-purple-600 to-blue-600"
    },
    { 
      category: "Backend & Databases", 
      skills: ["PHP", "Node.js", "Express.js", "MySQL", "PostgreSQL", "RESTful APIs"],
      icon: "⚙️",
      color: "from-blue-600 to-cyan-600"
    },
    { 
      category: "Tools & Platforms", 
      skills: ["Git & GitHub", "Strapi CMS", "Vercel", "Figma"],
      icon: "🛠️",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const projects = [
    { 
      title: "E-commerce Platform", 
      description: "Full-stack online store with Vendure, PostgreSQL, and modern React frontend",
      technologies: ["React", "Vendure", "PostgreSQL", "TypeScript"],
      status: "Completed",
      category: "Full Stack"
    },
    { 
      title: "Legal Practice Management", 
      description: "Professional law firm website with case management and client portal features",
      technologies: ["React", "Strapi", "Tailwind CSS", "REST API"],
      status: "Live",
      category: "Frontend + CMS"
    },
    { 
      title: "Healthcare Application", 
      description: "Multilingual React healthcare app with patient management and dashboard systems",
      technologies: ["React", "i18n", "Responsive UI"],
      status: "Live",
      category: "Frontend"
    },
    { 
      title: "Fashion E-commerce", 
      description: "E-commerce platform specializing in fashion with admin panel and inventory management",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      status: "Completed",
      category: "Full Stack"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-black min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 text-white">
      
      {/* Subtle Background Elements */}
      {blobs.map(({ size, color, style, factorX, factorY }, i) => (
        <motion.div
          key={i}
          className={`${color} rounded-full mix-blend-screen blur-3xl opacity-30 absolute pointer-events-none`}
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
            damping: 25,
          }}
        />
      ))}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl flex flex-col lg:flex-row items-center gap-16 my-28"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50"></div>
          <img
            src={myPhoto}
            alt="Dipesh Shrestha - Web Developer"
            className="relative rounded-2xl w-72 h-72 lg:w-80 lg:h-80 object-cover border-4 border-slate-700 shadow-2xl"
          />
        </motion.div>

        {/* Introduction Content */}
        <div className="flex flex-col space-y-8 flex-1">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-200 to-purple-300 bg-clip-text text-transparent mb-4">
              Dipesh Shrestha
            </h1>
            <div className="text-xl text-slate-400 font-medium mb-6">
              Full Stack Developer & Computer Science Student
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a passionate web developer currently pursuing my <span className="text-purple-300 font-semibold">Bachelor of Computer Applications (BCA)</span> at Tribhuvan University. 
              With a strong foundation in both frontend and backend technologies, I specialize in building scalable, 
              user-centric web applications.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise spans modern JavaScript frameworks, database design, and API development, 
              with a focus on creating efficient and maintainable codebases.
            </p>
          </div>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">2+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">15+</div>
              <div className="text-slate-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">10+</div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
          </div> */}
        </div>
      </motion.section>

      {/* Technical Expertise */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-28 w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-200 mb-4">Technical Expertise</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive skills across modern web development technologies and platforms
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-slate-200 mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-28 w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-200 mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world applications demonstrating technical proficiency and problem-solving capabilities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900/30 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 h-full hover:bg-slate-900/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-200 mb-4 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education & Goals */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-20 w-full"
      >
        <div className="grid gap-12 md:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-4">Education</h3>
            <div className="space-y-3">
              <div className="text-lg font-medium text-purple-300">Bachelor of Computer Applications (BCA)</div>
              <div className="text-slate-400">Tribhuvan University</div>
              <div className="text-slate-500 text-sm">Currently Enrolled</div>
            </div>
            <p className="text-slate-300 mt-4 leading-relaxed">
              Comprehensive coursework in software engineering, database systems, algorithms, 
              and web technologies providing strong theoretical foundations.
            </p>
          </motion.div>

          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-4">Career Vision</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Focused on mastering cloud-native architectures, AI integration, and building 
              scalable systems that solve real-world challenges.
            </p>
            <div className="space-y-2">
              {[
                "Advanced Cloud Platforms (AWS, Azure)",
                "Machine Learning Integration",
                "Microservices Architecture",
                "System Design & Scalability"
              ].map((goal, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;