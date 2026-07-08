import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCertificate, FaTrophy } from 'react-icons/fa';
import { achievements } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SectionHeader } from './About';

const iconMap = { FaCode, FaCertificate, FaTrophy };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

export default function Achievements() {
  const { isDark } = useTheme();

  return (
    <section id="achievements" className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Achievements & Certifications"
          subtitle="Milestones and recognitions from my learning journey."
          isDark={isDark}
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative p-8 rounded-2xl border overflow-hidden transition-all duration-300 group
                  ${isDark
                    ? 'bg-white/5 border-white/10 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-xl hover:border-indigo-300'
                  }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} aria-hidden="true" />

                <div className="relative flex items-start gap-5">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {Icon && <Icon size={28} className="text-white" />}
                  </div>

                  <div className="flex-1">
                    <div className="gradient-text text-3xl font-extrabold mb-1">{item.stat}</div>
                    <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                    <p className={`text-sm font-medium mb-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{item.subtitle}</p>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-bl ${item.color} opacity-5 rounded-bl-full`} aria-hidden="true" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
