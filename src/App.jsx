import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Tema kontrolü
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Tema uygulama ve transition
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("transition-colors", "duration-500");
    html.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500 w-full overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="relative z-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
    </div>
  );
}

export default App;
