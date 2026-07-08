import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SectionHeader } from './About';

const iconMap = { FaUniversity, FaSchool, FaGraduationCap };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

export default function Education() {
  const { isDark } = useTheme();

  return (
    <section id="education" className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Academic Background"
          subtitle="My educational journey and academic achievements."
          isDark={isDark}
        />

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} aria-hidden="true" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const Icon = iconMap[edu.icon];
              return (
                <motion.div
                  key={edu.id}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3 sm:left-5 top-6 w-6 h-6 rounded-full bg-linear-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                    {Icon && <Icon size={11} className="text-white" />}
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`p-6 rounded-2xl border transition-all duration-300
                      ${isDark
                        ? 'bg-white/5 border-white/10 hover:border-indigo-500/30'
                        : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200'
                      }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
                        <p className={`font-medium mb-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{edu.institution}</p>
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{edu.duration}</span>
                      </div>
                      <div className={`px-4 py-2 rounded-xl text-center min-w-20
                        ${isDark ? 'bg-linear-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20' : 'bg-indigo-50 border border-indigo-200'}`}>
                        <div className={`text-lg font-extrabold gradient-text`}>{edu.score.split(':')[1]?.trim() || edu.score}</div>
                        <div className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {edu.score.includes('CGPA') ? 'CGPA' : 'Score'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
