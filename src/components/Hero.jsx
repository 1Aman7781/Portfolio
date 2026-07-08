import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { personalInfo, stats } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const TITLES = ['Frontend Developer', 'React.js Developer', 'Full Stack Developer', 'Problem Solver'];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[index];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex(i => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden pt-16 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 font-mono
                ${isDark ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-200'}`}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Hello, I'm
            </motion.h1>

            <motion.h2
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              {personalInfo.name}
            </motion.h2>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="text-xl sm:text-2xl font-semibold mb-6 h-8"
            >
              <TypingText />
            </motion.div>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={5}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-200"
              >
                <HiDownload size={18} />
                Download Resume
              </motion.a>

              <Link to="contact" smooth duration={600} offset={-70}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-200
                    ${isDark
                      ? 'border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10'
                      : 'border-indigo-400 text-indigo-600 hover:bg-indigo-50'
                    }`}
                >
                  <HiMail size={18} />
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={6}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className={`text-center px-5 py-3 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-sm'}`}
                >
                  <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                  <div className={`text-xs font-medium mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
                  padding: '3px',
                  borderRadius: '9999px',
                }}
                aria-hidden="true"
              />

              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Gradient border */}
                <div className="gradient-border p-[0.75] rounded-full glow">
                  <div className={`rounded-full p-1 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                    <img
                      src="/assets/profile.jpg"
                      alt="Aman Raj Kushwaha"
                      className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
                      onError={e => {
                        e.target.src = `https://ui-avatars.com/api/?name=Aman+Raj+Kushwaha&size=400&background=6366f1&color=fff&bold=true`;
                      }}
                    />
                  </div>
                </div>

                {/* Floating badge — React */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className={`absolute -left-6 top-1/4 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl
                    ${isDark ? 'bg-gray-800 text-indigo-400 border border-indigo-500/30' : 'bg-white text-indigo-600 border border-indigo-200 shadow-indigo-100'}`}
                >
                  ⚛️ React.js
                </motion.div>

                {/* Floating badge — Node */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className={`absolute -right-6 bottom-1/4 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl
                    ${isDark ? 'bg-gray-800 text-green-400 border border-green-500/30' : 'bg-white text-green-600 border border-green-200 shadow-green-100'}`}
                >
                  🟢 Node.js
                </motion.div>
              </motion.div>

              {/* Background glow blobs */}
              <div className="absolute inset-0 -z-10 rounded-full bg-indigo-500/20 blur-3xl scale-150" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-indigo-500/40 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-indigo-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
