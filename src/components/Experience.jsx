import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { experience } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SectionHeader } from './About';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Work Experience"
          subtitle="Projects and roles that have shaped my development journey."
          isDark={isDark}
        />

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} aria-hidden="true" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-3 sm:left-5 top-6 w-6 h-6 rounded-full bg-linear-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                  <FaBriefcase size={11} className="text-white" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300
                    ${isDark
                      ? 'bg-white/5 border-white/10 hover:border-indigo-500/30'
                      : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200'
                    }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                      <p className="gradient-text font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium
                        ${isDark ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-200'}`}>
                        {exp.type}
                      </span>
                      {exp.duration && <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{exp.duration}</span>}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((point, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + pi * 0.08 }}
                        className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        <FaCheckCircle size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech used */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs font-medium
                          ${isDark ? 'bg-white/8 text-gray-300 border border-white/10' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
