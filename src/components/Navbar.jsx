import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Hakkımda", href: "#about" },
  { name: "Projeler", href: "#projects" },
  { name: "İletişim", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 lg:px-20 py-4">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold text-gray-900 dark:text-white"
          whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
        >
          Emre Aktürk
        </motion.a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun className="text-yellow-400 transition-colors" /> : <FiMoon className="transition-colors" />}
          </motion.button>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-800 shadow-lg w-full absolute left-0 top-full"
            >
              <div className="px-6 py-4 flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  onClick={toggleDarkMode}
                  className="flex items-center w-full py-2 text-gray-600 dark:text-gray-300"
                  whileTap={{ scale: 0.95 }}
                >
                  {darkMode ? <FiSun className="mr-2 text-yellow-400" /> : <FiMoon className="mr-2" />}
                  {darkMode ? "Açık Tema" : "Koyu Tema"}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
