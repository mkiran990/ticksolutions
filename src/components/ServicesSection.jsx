import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Smartphone,
  BrainCircuit,
  CloudLightning,
  Cpu,
  Palette,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../data/websiteData';

// Icon Map helper
const iconComponents = {
  Code2,
  Smartphone,
  BrainCircuit,
  CloudLightning,
  Cpu,
  Palette
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  // Staggered scroll-reveal container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 1.02, 0.47, 0.98] }
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow */}
      <div className="glow-blob top-1/3 right-10 w-96 h-96 bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              OUR CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            High-Impact <span className="text-gradient">Digital Services</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            We build resilient, future-ready digital solutions engineered for speed, scale, and high conversion.
          </p>
        </div>

        {/* Interactive Service Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {servicesData.map((service) => {
            const IconComponent = iconComponents[service.iconName] || Code2;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative glass-panel p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl hover:shadow-cyan-500/10"
                onClick={() => setSelectedService(service)}
              >
                {/* Subtle Hover Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-xl bg-gradient-to-br ${service.accentColor} p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-[#0b101c] rounded-[11px] flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-cyan-400 group-hover:rotate-6 transition-transform duration-300" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-md">
                      0{service.id === 'web-development' ? '1' : service.id === 'mobile-apps' ? '2' : service.id === 'ai-solutions' ? '3' : service.id === 'cloud-infrastructure' ? '4' : service.id === 'custom-software' ? '5' : '6'}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Arrow Footer CTA */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-sm font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>Explore Capabilities</span>
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal Popup for Service Details */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative bg-[#0a0e1a]/95"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  {React.createElement(iconComponents[selectedService.iconName] || Code2, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-2xl font-bold text-slate-100">{selectedService.title}</h3>
              </div>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <h4 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-3 font-mono">
                Key Technical Features
              </h4>
              <div className="space-y-3 mb-8">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 text-sm font-medium rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 flex items-center gap-2"
                >
                  Request Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
