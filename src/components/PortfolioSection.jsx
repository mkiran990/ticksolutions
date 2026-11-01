import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, ArrowRight, X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioProjects } from '../data/websiteData';


export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'Web & Mobile App', 'AI & Data Engine', 'Cloud & DevOps'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background glow */}
      <div className="glow-blob top-1/4 left-10 w-96 h-96 bg-indigo-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                SELECTED CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Featured <span className="text-gradient">Digital Showcase</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300">
              Explore recent digital products engineered by TICK Solutions across SaaS, property tech, AI analytics, and telehealth.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Layouts Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.21, 1.02, 0.47, 0.98] }}
                className="group relative glass-panel rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden shadow-2xl bg-[#090d18]/90"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>

                  {/* Left (or Right) Content Info */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-3 py-1 rounded-full uppercase">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-400 font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-slate-800/80">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-xs text-slate-400 font-medium">{m.label}</span>
                          <span className="text-lg font-bold text-cyan-400">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* View Project Action */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 pt-2"
                    >
                      <span>View Full Case Study & Live Preview</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                    </button>
                  </div>

                  {/* Browser Window Frame Mockup */}
                  <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative glass-panel rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-[#050811] group-hover:shadow-cyan-500/10 transition-shadow">
                      {/* Window Controls Bar */}
                      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-500/80" />
                          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <span className="w-3 h-3 rounded-full bg-green-500/80" />
                          <span className="text-[11px] font-mono text-slate-400 ml-2">https://{project.id}.ticksolutions.com</span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                          TICK SHOWCASE
                        </div>
                      </div>

                      {/* Project Image Preview with Zoom Effect */}
                      <div className="relative overflow-hidden aspect-video group/img cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <img
                          src={project.previewImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Floating Overlay Badge */}
                        <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 rounded-xl text-xs font-semibold text-white backdrop-blur-md border border-cyan-500/40 flex items-center gap-2 shadow-lg opacity-90 group-hover:opacity-100">
                          <ExternalLink className="w-4 h-4 text-cyan-400" />
                          Interactive Preview
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel w-full max-w-4xl rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl relative bg-[#090e1c]/95 my-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800 px-3 py-1 rounded-full uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mt-3">{selectedProject.title}</h3>
                  <p className="text-sm font-mono text-slate-400">{selectedProject.subtitle}</p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-700 max-h-[350px]">
                  <img src={selectedProject.previewImage} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-100">Project Overview</h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.detailedOverview}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="text-xl font-bold text-cyan-400">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 text-sm font-medium rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProject(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                  >
                    Build Similar Solution <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
