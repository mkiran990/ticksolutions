import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for highlight
      const sections = ['hero', 'services', 'tech', 'work', 'about', 'process', 'team', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Technologies', href: '#tech', id: 'tech' },
    { name: 'Portfolio', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Team', href: '#team', id: 'team' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-lg shadow-cyan-950/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-[#090d16] dark:bg-[#090d16] rounded-[11px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg tracking-tight flex items-center gap-1.5">
              TICK <span className="text-cyan-400 dark:text-cyan-400 font-extrabold">SOLUTIONS</span>
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-400 tracking-widest uppercase font-mono -mt-1">
              Digital Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 dark:text-cyan-400'
                    : 'text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#38bdf8]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-2.5 rounded-xl border border-slate-700/50 bg-slate-900/40 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all duration-200"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          {/* Start Project CTA Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-slate-700/50 bg-slate-900/40 text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-slate-800/80 px-4 pt-3 pb-6 mt-2 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2.5 text-base font-medium rounded-lg text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full text-center py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  Start Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
