import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaServer, FaTools, FaBrain } from 'react-icons/fa';
import { skillCategories } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SectionHeader } from './About';

const iconMap = { FaCode, FaReact, FaServer, FaTools, FaBrain };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
};

// Skill level mapping for visual indicator
const skillLevels = {
  'React.js': 90, 'Tailwind CSS': 88, 'JavaScript': 85, 'HTML5': 92, 'CSS3': 88,
  'Node.js': 78, 'Express.js': 75, 'MongoDB': 72, 'C++': 80, 'C': 75,
  'Python': 70, 'SQL': 72, 'Git': 85, 'GitHub': 85, 'DSA': 72,
  'OOP': 80, 'DBMS': 70, 'Firebase Auth': 68, 'VS Code': 90,
  'Operating Systems': 65, 'Computer Networks': 65,
};

export default function Skills() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState(null);

  const displayed = activeCategory
    ? skillCategories.filter(c => c.category === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="My Tech Stack"
          subtitle="Technologies and tools I work with to build modern web applications."
          isDark={isDark}
        />

        {/* Category Filter */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${!activeCategory
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : isDark ? 'bg-white/5 text-gray-400 hover:text-white border border-white/10' : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
              }`}
          >
            All
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category === activeCategory ? null : cat.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === cat.category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                  : isDark ? 'bg-white/5 text-gray-400 hover:text-white border border-white/10' : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((cat, ci) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.category}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={ci}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border transition-all duration-300
                  ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200'}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                    {Icon && <Icon size={18} className="text-white" />}
                  </div>
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{cat.category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + si * 0.04 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`group relative px-3 py-1.5 rounded-lg text-sm font-medium cursor-default transition-all duration-200
                        ${isDark
                          ? 'bg-white/8 text-gray-300 border border-white/10 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/10'
                          : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50'
                        }`}
                    >
                      {skill}
                      {/* Tooltip with level */}
                      {skillLevels[skill] && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                          {skillLevels[skill]}%
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar for category */}
                <div className="mt-5">
                  <div className={`h-1 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.round(cat.skills.reduce((a, s) => a + (skillLevels[s] || 70), 0) / cat.skills.length)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: ci * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
