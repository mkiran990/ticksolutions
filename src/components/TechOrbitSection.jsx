import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Layers, Server, Code, FileCode, Cloud, Box, Database, HardDrive, Brain, Network, Atom, Check } from 'lucide-react';
import { techStack } from '../data/websiteData';

// Icon Map helper
const iconMap = {
  Atom,
  Layers,
  Server,
  Code,
  FileCode,
  Sparkles,
  Cloud,
  Box,
  Database,
  HardDrive,
  Brain,
  Network
};

export default function TechOrbitSection() {
  const [activeTech, setActiveTech] = useState(techStack[0]);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'AI / Data', 'Cloud'];

  const filteredTech = activeCategory === 'All'
    ? techStack
    : techStack.filter(item => item.category.includes(activeCategory) || (activeCategory === 'Frontend' && item.category === 'Styling'));

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow ambient */}
      <div className="glow-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              MODERN TECH ECOSYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Engineered with <span className="text-gradient">Next-Gen Frameworks</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300">
            We deploy production-grade software using battle-tested languages, high-throughput microservices, and AI models.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Orbit Visualization Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Interactive Orbit Visualizer */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[420px]">
            {/* Concentric Orbital Rings */}
            <div className="absolute w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full border border-cyan-500/20 animate-pulse" />
            <div className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full border border-indigo-500/20" />

            {/* Central TICK Solutions Core Node */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-20 w-28 h-28 rounded-2xl glass-panel border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 flex flex-col items-center justify-center p-3 text-center bg-[#090e1a]/90 cursor-pointer"
            >
              <Zap className="w-8 h-8 text-cyan-400 animate-bounce" />
              <span className="font-heading font-extrabold text-xs text-white tracking-wider mt-1">
                TICK CORE
              </span>
            </motion.div>

            {/* Orbiting Tech Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {filteredTech.slice(0, 10).map((tech, idx) => {
                const angle = (idx * (360 / Math.min(filteredTech.length, 10))) * (Math.PI / 180);
                const radius = 150; // Orbit distance
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const IconComponent = iconMap[tech.icon] || Code;
                const isSelected = activeTech.name === tech.name;

                return (
                  <motion.button
                    key={tech.name}
                    style={{ x, y }}
                    whileHover={{ scale: 1.25 }}
                    onClick={() => setActiveTech(tech)}
                    className={`pointer-events-auto absolute p-3 rounded-xl border transition-all duration-300 shadow-xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-cyan-500 text-white border-cyan-300 shadow-cyan-500/50 scale-110 z-30'
                        : 'glass-panel text-slate-300 border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 z-10 bg-[#0c111e]/90'
                    }`}
                    title={tech.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Tech Spotlight Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl p-7 border border-cyan-500/30 shadow-2xl bg-[#0a0f1d]/90 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
                    {activeTech.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <Check className="w-3.5 h-3.5" /> Production Ready
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    {React.createElement(iconMap[activeTech.icon] || Code, { className: 'w-7 h-7' })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">{activeTech.name}</h3>
                    <p className="text-xs text-slate-400 font-mono">{activeTech.desc}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  At TICK Solutions, we harness {activeTech.name} to deliver enterprise-grade performance, strict type safety, and effortless scalability for client applications.
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Architecture Fit: Enterprise / SaaS</span>
                  <span className="text-cyan-400 font-bold">100% Verified</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Continuous Animated Marquee Strip */}
        <div className="mt-20 overflow-hidden py-4 border-y border-slate-800/80 relative">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
            {techStack.concat(techStack).map((item, idx) => {
              const IconComp = iconMap[item.icon] || Code;
              return (
                <div key={idx} className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                  <IconComp className="w-4 h-4 text-cyan-400" />
                  <span>{item.name}</span>
                  <span className="text-slate-600 font-mono ml-4">•</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
