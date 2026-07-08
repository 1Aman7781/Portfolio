import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SectionHeader } from './About';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

const contactCards = [
  { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'from-green-500 to-emerald-500' },
  { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'from-indigo-500 to-blue-500' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Aman-Raj-Kushwaha', href: personalInfo.linkedin, color: 'from-blue-600 to-blue-500' },
  { icon: FaGithub, label: 'GitHub', value: '1Aman7781', href: personalInfo.github, color: 'from-gray-700 to-gray-600' },
  { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: null, color: 'from-pink-500 to-rose-500' },
];

export default function Contact() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send (replace with actual API call / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border
    ${isDark
      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-indigo-500/60 focus:bg-white/8'
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-400 focus:bg-white'
    }`;

  return (
    <section id="contact" className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          isDark={isDark}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Form */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className={`p-8 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-all duration-200
                    ${status === 'sent'
                      ? 'bg-green-500 shadow-lg shadow-green-500/25'
                      : 'bg-linear-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50'
                    }
                    ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === 'sent' ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <FaPaperPlane size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right — Contact Info */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="space-y-4"
          >
            <div className="mb-6">
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
              </p>
            </div>

            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}
                  whileHover={{ x: 6 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group
                    ${isDark
                      ? 'bg-white/5 border-white/10 hover:border-indigo-500/30'
                      : 'bg-gray-50 border-gray-200 hover:border-indigo-300 hover:bg-white'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center flex-shrink- shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-xs font-medium mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{card.label}</div>
                    <div className={`text-sm font-semibold truncate ${isDark ? 'text-gray-200' : 'text-gray-800'} ${card.href ? 'group-hover:text-indigo-400 transition-colors' : ''}`}>
                      {card.value}
                    </div>
                  </div>
                </motion.div>
              );

              return card.href ? (
                <a key={i} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
