import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:text-white hover:bg-gray-700' },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-white hover:bg-blue-600' },
  { icon: SiLeetcode, href: personalInfo.leetcode, label: 'LeetCode', color: 'hover:text-white hover:bg-orange-500' },
  { icon: SiGeeksforgeeks, href: personalInfo.gfg, label: 'GeeksforGeeks', color: 'hover:text-white hover:bg-green-600' },
];

export default function FloatingWidgets() {
  const { isDark } = useTheme();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop — Floating Social Sidebar (left) */}
      <div className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center gap-3 z-40" aria-label="Social links">
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{ x: 4, scale: 1.15 }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200
                ${isDark ? 'bg-gray-800/80 text-gray-400 border border-white/10' : 'bg-white text-gray-500 border border-gray-200 shadow-sm'}
                ${s.color}`}
            >
              <Icon size={17} />
            </motion.a>
          );
        })}
        {/* Vertical line */}
        <div className={`w-px h-20 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`} aria-hidden="true" />
      </div>

      {/* Desktop — Back to Top (right side) */}
      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden lg:block fixed right-6 bottom-8 z-40"
          >
            <Link to="home" smooth duration={800}>
              <motion.button
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 cursor-pointer"
              >
                <FaArrowUp size={16} />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile — Bottom Floating Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-2xl
          ${isDark ? 'bg-gray-800/90 border border-white/10 backdrop-blur-xl' : 'bg-white/90 border border-gray-200 backdrop-blur-xl shadow-gray-300/50'}`}
        aria-label="Mobile social links"
      >
        {socials.map(s => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200
                ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
            >
              <Icon size={17} />
            </motion.a>
          );
        })}

        <AnimatePresence>
          {showTop && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <Link to="home" smooth duration={800}>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  aria-label="Back to top"
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center ml-1 cursor-pointer"
                >
                  <FaArrowUp size={14} />
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
