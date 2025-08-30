import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // 3 saniye göster
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          İletişim
        </h2>

       <div className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
  {/* Form */}
  <form
    className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors"
    onSubmit={handleSubmit}
  >
    <input type="text" placeholder="İsminiz" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
    <input type="email" placeholder="E-mail" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
    <textarea rows="5" placeholder="Mesajınız" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
    <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105">
      Gönder
    </button>
  </form>

  {/* Sosyal Bağlantılar */}
  <div className="flex flex-col justify-center space-y-6">
    <p className="text-gray-700 dark:text-gray-300 text-lg text-center md:text-left">
      Aşağıdaki sosyal medya hesaplarımdan bana ulaşabilirsiniz:
    </p>
    <div className="flex justify-center md:justify-start gap-6">
      <motion.a href="https://github.com/emreakturkk" target="_blank" whileHover={{ scale: 1.2 }} className="text-gray-800 dark:text-gray-200 text-3xl hover:text-blue-600 transition">
        <FaGithub />
      </motion.a>
      <motion.a href="https://linkedin.com/in/emreaktürk" target="_blank" whileHover={{ scale: 1.2 }} className="text-gray-800 dark:text-gray-200 text-3xl hover:text-blue-600 transition">
        <FaLinkedin />
      </motion.a>
    </div>
  </div>
</div>

      </div>

      {/* Toast Bildirimi */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl font-semibold z-50"
          >
            Mesajınız başarıyla gönderildi!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
