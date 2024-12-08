"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <motion.button
      className="relative flex items-center w-16 h-8 p-1 bg-gray-200 dark:bg-gray-600 rounded-full focus:outline-none"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <motion.div
        className={`absolute left-2 text-yellow-500 ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
        animate={{
          opacity: isDarkMode ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <FaSun size={18} />
      </motion.div>

      {/* Moon Icon */}
      <motion.div
        className={`absolute right-2 text-blue-500 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
        animate={{
          opacity: isDarkMode ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <FaMoon size={18} />
      </motion.div>

      {/* Toggle Circle */}
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md"
        animate={{
          x: isDarkMode ? 0 : 32, // Moves the toggle smoothly
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.button>
  );
};

export default ThemeSwitcher;
