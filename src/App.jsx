import React from 'react';
import { useTheme } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <FloatingWidgets />
      </div>
    </div>
  );
}
