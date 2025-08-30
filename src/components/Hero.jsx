import React from "react";
import { motion } from "framer-motion";

// Floating Dots Component
const FloatingDots = () => {
  const dots = Array(30).fill(null);
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {dots.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-400 dark:bg-blue-600 opacity-20"
          style={{
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 text-center bg-white dark:bg-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <FloatingDots />

      <div className="relative max-w-2xl z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white"
          whileHover={{ scale: 1.03 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Emre Aktürk
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-8 text-blue-600 dark:text-blue-400"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Junior Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Full Stack geliştirme ve IT alanlarında yetkinliklerimi sürekli geliştiriyor, hem yazılım hem de sistem tarafında güçlü bir kariyer inşa ediyorum.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-800"
            whileHover={{ scale: 1.05 }}
          >
            Projelerime Göz At
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-800"
            whileHover={{ scale: 1.05 }}
          >
            İletişime Geç
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
