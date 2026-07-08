import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { projects } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SectionHeader } from './About';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

const techColors = {
  'React.js': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
  'MongoDB': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Express.js': 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  'Tailwind CSS': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'Socket.IO': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Firebase': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Stripe': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Context API': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'JavaScript': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

const techColorsLight = {
  'React.js': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Node.js': 'bg-green-50 text-green-700 border-green-200',
  'MongoDB': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Express.js': 'bg-gray-100 text-gray-700 border-gray-200',
  'Tailwind CSS': 'bg-sky-50 text-sky-700 border-sky-200',
  'Socket.IO': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Firebase': 'bg-orange-50 text-orange-700 border-orange-200',
  'Stripe': 'bg-violet-50 text-violet-700 border-violet-200',
  'Context API': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'JavaScript': 'bg-yellow-50 text-yellow-700 border-yellow-200',
};

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section id="projects" className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of projects I've built — from concept to deployment."
          isDark={isDark}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              whileHover={{ y: -8 }}
              className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col
                ${isDark
                  ? 'bg-white/5 border-white/10 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10'
                  : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100'
                }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div
                  className="absolute inset-0 hidden items-center justify-center"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                >
                  <div className="text-center">
                    <HiCode size={48} className="text-indigo-400 mx-auto mb-2" />
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{project.title}</span>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className={`px-2 py-0.5 rounded-md text-xs font-medium border
                        ${isDark
                          ? (techColors[t] || 'bg-white/5 text-gray-400 border-white/10')
                          : (techColorsLight[t] || 'bg-gray-50 text-gray-600 border-gray-200')
                        }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium flex-1 justify-center transition-colors duration-200
                      ${isDark
                        ? 'bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white border border-white/10'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                      }`}
                  >
                    <FaGithub size={15} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
