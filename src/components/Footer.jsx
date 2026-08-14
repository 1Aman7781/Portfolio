import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: personalInfo.leetcode, label: 'LeetCode' },
  { icon: SiGeeksforgeeks, href: personalInfo.gfg, label: 'GeeksforGeeks' },
];

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`relative pt-16 pb-8 border-t ${isDark ? 'bg-gray-950 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold gradient-text font-mono">&lt;Aman /&gt;</span>
            <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Frontend Developer passionate about building beautiful, performant web experiences.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(s => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200
                      ${isDark ? 'bg-white/10 text-gray-400 hover:text-white hover:bg-indigo-500/30' : 'bg-gray-200 text-gray-600 hover:text-indigo-600 hover:bg-indigo-100'}`}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    className={`text-sm cursor-pointer transition-colors duration-200
                      ${isDark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${personalInfo.email}`} className={`text-sm transition-colors duration-200 ${isDark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className={`text-sm transition-colors duration-200 ${isDark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>
                  {personalInfo.phone}
                </a>
              </li>
              <li className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
          <p className={`text-sm flex items-center gap-1.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Aman Raj Kushwaha
          </p>

          {/* Back to top */}
          <Link to="home" smooth duration={800}>
            <motion.button
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-indigo-500/25 cursor-pointer"
            >
              <FaArrowUp size={13} />
              Back to Top
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
