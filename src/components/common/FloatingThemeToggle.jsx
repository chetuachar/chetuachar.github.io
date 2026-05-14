import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';
import { motion } from 'framer-motion';
import './FloatingThemeToggle.css';

const FloatingThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <motion.button
      className="floating-theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? (
        <Sun size={24} className="icon-sun" />
      ) : (
        <Moon size={24} className="icon-moon" />
      )}
    </motion.button>
  );
};

export default FloatingThemeToggle;
