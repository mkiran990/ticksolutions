import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ArrowRight, Layers, Terminal, Rocket, Search, Code2 } from 'lucide-react';
import { processSteps } from '../data/websiteData';

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = [Search, Layers, Code2, Rocket];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background glow */}
      <div className="glow-blob top-1/2 left-10 w-96 h-96 bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              ENGINEERING METHODOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Streamlined <span className="text-gradient">4-Step Process</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300">
            From initial concept blueprinting to production launch, we maintain complete transparency and rapid two-week delivery sprints.
          </p>
        </div>

        {/* Timeline Bar Navigation (Desktop) */}
        <div className="relative mb-16 hidden md:block">
          {/* Base Background Connecting Line */}
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-slate-800 -translate-y-1/2 rounded-full z-0" />

          {/* Active Highlight Line Beam */}
          <motion.div
            className="absolute top-1/2 left-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 -translate-y-1/2 rounded-full z-0"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeStepIndex / (processSteps.length - 1)) * 82 + 5}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          {/* Step Nodes Row */}
          <div className="relative z-10 flex justify-between items-center px-4">
            {processSteps.map((step, idx) => {
              const IconComp = stepIcons[idx] || Search;
              const isActive = idx === activeStepIndex;
              const isPast = idx <= activeStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative flex flex-col items-center focus:outline-none cursor-pointer`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/40 scale-110 border-2 border-cyan-300'
                      : isPast
                      ? 'bg-cyan-950 border border-cyan-500/50 text-cyan-400'
                      : 'glass-panel text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className={`text-xs font-mono font-bold mt-3 tracking-widest ${
                    isActive ? 'text-cyan-400' : 'text-slate-400'
                  }`}>
                    {step.step}
                  </span>
                  <span className="text-sm font-semibold text-slate-200 mt-1 max-w-[120px] text-center">
                    {step.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Content Spotlight Box */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/30 shadow-2xl bg-[#090e1c]/90 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Step Number & Title */}
            <div className="md:col-span-4 space-y-3 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
              <span className="text-4xl font-black font-mono text-cyan-400">
                {processSteps[activeStepIndex].step}
              </span>
              <h3 className="text-2xl font-bold text-slate-100">
                {processSteps[activeStepIndex].title}
              </h3>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                <CheckCircle className="w-3.5 h-3.5" /> Stage Active
              </div>
            </div>

            {/* Description & Deliverable */}
            <div className="md:col-span-8 space-y-6">
              <p className="text-base text-slate-300 leading-relaxed">
                {processSteps[activeStepIndex].desc}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Deliverable</div>
                  <div className="text-sm font-bold text-cyan-300 mt-0.5">
                    {processSteps[activeStepIndex].deliverable}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-800 text-slate-300 disabled:opacity-40 hover:bg-slate-800"
                >
                  ← Previous Step
                </button>
                <span className="text-xs font-mono text-slate-400">
                  Step {activeStepIndex + 1} of {processSteps.length}
                </span>
                <button
                  disabled={activeStepIndex === processSteps.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(processSteps.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 disabled:opacity-40 hover:bg-cyan-500/30"
                >
                  Next Step →
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
