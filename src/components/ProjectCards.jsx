import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link, techs = [] }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Görsel */}
      <div className="relative w-full h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* İçerik */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

          {/* Teknoloji etiketleri */}
          {techs.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* İncele butonu */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            İncele <FaExternalLinkAlt className="text-sm" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
