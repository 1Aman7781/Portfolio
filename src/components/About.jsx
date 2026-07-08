import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaServer, FaCode, FaLayerGroup } from 'react-icons/fa';
import { aboutCards, personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const iconMap = { FaReact, FaServer, FaCode, FaLayerGroup };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

function SectionHeader({ title, subtitle, isDark }) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
        className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
          className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export { SectionHeader };

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Who Am I?"
          subtitle="A passionate developer who loves turning ideas into elegant digital experiences."
          isDark={isDark}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left — Bio */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm <span className="gradient-text">Aman Raj Kushwaha</span>
            </h3>
            <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {personalInfo.description}
            </p>
            <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Currently pursuing B.Tech in Computer Science at Raj Kumar Goel Institute of Technology (2022–2026),
              I'm focused on building production-ready applications and sharpening my DSA skills.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Noida, UP' },
                { label: 'Email', value: 'amanrajkushwaha31oct@gmail.com' },
                { label: 'Degree', value: 'B.Tech CSE' },
                { label: 'Availability', value: 'Open to Work' },
              ].map(item => (
                <div key={item.label} className={`p-3 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className={`text-xs font-medium mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</div>
                  <div className={`text-sm font-semibold truncate ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image / Visual */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="relative flex justify-center"
          >
            <div className={`relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden ${isDark ? 'bg-linear-to-br from-indigo-500/20 to-purple-500/20 border border-white/10' : 'bg-linear-to-br from-indigo-100 to-purple-100 border border-indigo-200'}`}>
              <img
                src="/assets/profile.jpg"
                alt="Aman Raj Kushwaha"
                className="w-full h-full object-cover"
                onError={e => {
                  e.target.src = `https://ui-avatars.com/api/?name=Aman+Raj&size=400&background=6366f1&color=fff&bold=true`;
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-indigo-900/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-6 rounded-2xl border transition-all duration-300 group
                  ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/40 hover:bg-white/8' : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm hover:shadow-indigo-100'}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon size={22} className="text-white" />}
                </div>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{card.title}</h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
