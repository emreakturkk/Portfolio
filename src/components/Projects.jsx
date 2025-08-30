import React from "react";
import ProjectCard from "./ProjectCards";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Todo App",
    description: "React ve localStorage kullandığım basit yapılacaklar listesi.",
    techs: ["React", "JavaScript", "CSS"],
    image: "/images/Portfolyo.png",
    github: "https://github.com/emreakturkk/todo-app",
    demo: "https://todo.example.com",
  },
  {
    title: "Portfolio",
    description: "Kişisel portfolyom, React ve Tailwind CSS ile yapıldı.",
    techs: ["React", "Tailwind CSS"],
    image: "/images/Portfolyo.png",
    github: "https://github.com/emreakturkk/portfolio",
  },
  {
    title: "Blog App",
    description: "Kendi blog uygulamam, React ve Tailwind CSS ile yapıldı.",
    techs: ["React", "Tailwind CSS"],
    image: "/images/Portfolyo.png",
    github: "https://github.com/emreakturkk/portfolio",
  },
  {
    title: "Javascript Game",
    description: "Javascript ile yapılan yılan oyunu.",
    techs: ["Javascript", "Tailwind CSS"],
    image: "/images/Portfolyo.png",
    github: "https://github.com/emreakturkk/portfolio",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Başlık */}
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projelerim
        </motion.h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12 rounded-full"></div>

        {/* Grid Yapısı */}
        <div className="grid gap-8 
          grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {projects.map((project, index) => (
          <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20, 
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
    >
        <ProjectCard {...project} />
     </motion.div>
  ))}
  </div>
      </div>
    </motion.section>
  );
}

export default Projects;
