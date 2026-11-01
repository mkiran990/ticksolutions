import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Terminal, ShieldCheck, Play, Cpu, CheckCircle } from 'lucide-react';
import TechCanvas from './TechCanvas';
import { heroStats } from '../data/websiteData';

export default function HeroSection() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Framer Motion staggered sequence variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 1.02, 0.47, 0.98] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Canvas */}
      <TechCanvas />

      {/* Decorative Gradient Ambient Blobs */}
      <div className="glow-blob top-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/20" />
      <div className="glow-blob bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Heading & Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 1. Small Company Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <div className="px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-cyan-300 uppercase">
                  TICK SOLUTIONS ✦ CREATIVE TECH STUDIO
                </span>
              </div>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-100"
            >
              We Turn Ideas Into{' '}
              <span className="text-gradient">Digital Solutions.</span>
            </motion.h1>

            {/* 3. Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              We design, engineer, and deploy modern web platforms, mobile applications, and AI integrations tailored for growth-oriented enterprises.
            </motion.p>

            {/* 4. Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group relative inline-flex items-center gap-3 px-7 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Start Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              <a
                href="#work"
                onClick={(e) => scrollToSection(e, 'work')}
                className="group inline-flex items-center gap-2.5 px-6 py-4 text-base font-semibold text-slate-200 rounded-xl glass-panel hover:bg-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20 group-hover:scale-110 transition-transform" />
                <span>Explore Work</span>
              </a>
            </motion.div>

            {/* Hero Quick Metrics */}
            <motion.div
              variants={itemVariants}
              className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80"
            >
              {heroStats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-cyan-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Mockup */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient Background Glow behind Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />

            {/* Main Interactive Visual Frame */}
            <div className="relative glass-panel rounded-2xl p-4 sm:p-6 border border-slate-700/60 shadow-2xl space-y-4">
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">tick-core-v2.6.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SYSTEM ACTIVE
                </div>
              </div>

              {/* Code / Telemetry Simulation */}
              <div className="bg-[#05080e] rounded-xl p-4 font-mono text-xs text-slate-300 leading-relaxed space-y-2 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>// TICK Solutions Architecture Engine</span>
                </div>
                <div className="text-purple-300">
                  <span className="text-pink-400">const</span> project = <span className="text-yellow-300">await</span> tickEngine.<span className="text-blue-400">createSolution</span>({'{'}
                </div>
                <div className="pl-4 text-slate-400">
                  client: <span className="text-emerald-300">"Your Enterprise Idea"</span>,<br />
                  stack: [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Node"</span>, <span className="text-cyan-300">"AI Models"</span>, <span className="text-cyan-300">"Cloud"</span>],<br />
                  status: <span className="text-emerald-400">"DEPLOYED_10X_PERFORMANCE"</span>
                </div>
                <div className="text-purple-300">{'}'});</div>
                <div className="pt-2 text-slate-400 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400">✓ 0 Errors • 100% Test Pass</span>
                  <span className="text-cyan-400">Latency: 14ms</span>
                </div>
              </div>

              {/* Floating Technology Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-panel p-3 rounded-xl border border-cyan-500/40 shadow-xl flex items-center gap-3 bg-[#0d1322]/90"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-100">AI Powered</div>
                  <div className="text-[10px] text-cyan-400 font-mono">LLM & Microservices</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-4 glass-panel p-3 rounded-xl border border-blue-500/40 shadow-xl flex items-center gap-3 bg-[#0d1322]/90"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-100">99.9% Uptime</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Zero-Downtime CI/CD</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
