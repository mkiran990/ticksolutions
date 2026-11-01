import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TechOrbitSection from './components/TechOrbitSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ProcessTimeline from './components/ProcessTimeline';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('tick_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('tick_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--bg-text-primary)] transition-colors duration-300 relative">
      {/* Custom Spring Follower Cursor */}
      <CustomCursor />

      {/* Modern Glassmorphism Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <ServicesSection />
        <TechOrbitSection />
        <PortfolioSection />
        <AboutSection />
        <ProcessTimeline />
        <TeamSection />
        <ContactSection />
      </main>

      {/* Pulsing Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
