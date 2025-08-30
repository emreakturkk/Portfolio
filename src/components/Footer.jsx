import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

export default function Footer({ darkMode, toggleDarkMode }) {
  return (
    <motion.footer
      className="bg-gray-900 dark:bg-gray-800 text-gray-300 dark:text-gray-200 py-8 transition-colors duration-300 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Emre Aktürk. Tüm Hakları Saklıdır.
        </p>

        {/* Sosyal ve Tema */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/emreakturkk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white dark:hover:text-gray-100 transition-colors"
            aria-label="GitHub Profilim"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/emreaktürk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white dark:hover:text-gray-100 transition-colors"
            aria-label="LinkedIn Profilim"
          >
            <FaLinkedin className="text-xl" />
          </a>

          {/* Footer Dark Mode Toggle */}
          {toggleDarkMode && (
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              aria-label="Tema değiştir"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        Bu site React.js ve Tailwind CSS ile geliştirilmiştir.
      </div>
    </motion.footer>
  );
}
