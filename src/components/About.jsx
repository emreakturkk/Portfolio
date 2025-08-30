import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPassport,
  SiEjs,
} from "react-icons/si";

const technologies = [
  { icon: SiHtml5, name: "HTML5", color: "text-[#E44D26]" },
  { icon: SiCss3, name: "CSS3", color: "text-[#2965F1]" },
  { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
  { icon: SiReact, name: "React.js", color: "text-[#61DAFB]" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
  { icon: SiExpress, name: "Express.js", color: "text-gray-700 dark:text-gray-300" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#336791]" },
  { icon: SiGit, name: "Git", color: "text-[#F05032]" },
  { icon: SiGithub, name: "GitHub", color: "text-gray-800 dark:text-gray-200" },
  { icon: SiPassport, name: "Passport.js", color: "text-[#34E27A]" },
  { icon: SiEjs, name: "EJS", color: "text-[#A91E50]" },
];

function About() {
  return (
    <motion.section
      id="about"
      className="py-24 bg-white dark:bg-gray-950 font-sans transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-white">
          Hakkımda
        </h2>
        <p className="text-lg leading-relaxed mb-16 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Merhaba! Ben <span className="font-semibold text-indigo-600 dark:text-indigo-400">Emre Aktürk</span>, 
          Modern web teknolojileri ve yazılım geliştirme alanında uzmanlaşma yolunda ilerleyen bir Junior Full-Stack Developer’ım.
          Frontend ve backend teknolojilerini bir arada kullanarak kullanıcı odaklı, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.
          Aynı zamanda IT altyapısı, sistem yönetimi ve ağ teknolojileri konularında da kendimi sürekli geliştirerek tam donanımlı bir teknoloji profesyoneli olmayı hedefliyorum.
          Hedefim, teknik bilgi ve problem çözme becerilerimi birleştirerek modern, yenilikçi ve sürdürülebilir çözümler üretmek.
        </p>

        <h3 className="text-3xl font-semibold mb-12 text-gray-900 dark:text-white">
          Kullandığım Teknolojiler
        </h3>

        <div className="flex flex-wrap justify-center gap-12">
          {technologies.map(({ icon: Icon, name, color }, index) => (
            <motion.div
              key={name}
              className="flex flex-col items-center w-28 min-w-[100px] p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.15, rotate: 3, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 20, delay: index * 0.1 }}
            >
              <Icon className={`text-5xl ${color}`} />
              <p className="mt-4 text-gray-800 dark:text-gray-200 font-medium text-center">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
