import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap, Globe2, Target, Users2, Award } from 'lucide-react';

export default function AboutSection() {
  const corePillars = [
    {
      icon: Zap,
      title: "Sub-Second Speed",
      desc: "Every web app and mobile layout is optimized for instant response times and 95+ Lighthouse audits."
    },
    {
      icon: ShieldCheck,
      title: "Zero Downtime",
      desc: "Robust containerized microservices and automated failover architecture guarantee maximum SLA."
    },
    {
      icon: Target,
      title: "Product-Driven Engineering",
      desc: "We don't just write code — we engineer solutions that directly move business revenue metrics."
    },
    {
      icon: Globe2,
      title: "Global Delivery",
      desc: "24/7 continuous engineering, seamless cross-time zone communication, and clear weekly demos."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow Ambient */}
      <div className="glow-blob bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Big Typography Graphic Composition */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              WHO WE ARE
            </span>
          </motion.div>

          {/* Styled Large Display Text Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] text-slate-100 space-y-1 select-none"
          >
            <div>WE BUILD <span className="text-cyan-400">DIGITAL</span></div>
            <div className="text-gradient">SOLUTIONS</div>
            <div className="text-slate-400 text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-normal normal-case font-extrabold mt-3">
              for real-world scale.
            </div>
          </motion.div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Left Visual Cards Block */}
          <div className="lg:col-span-6 relative">
            <div className="relative glass-panel rounded-3xl p-8 border border-slate-700/80 shadow-2xl bg-[#090e1c]/90 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">TICK MANIFESTO</span>
                <span className="text-xs font-mono text-slate-400">EST. 2024</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic">
                "We believe exceptional software is the strongest competitive advantage a business can possess."
              </blockquote>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                TICK Solutions was founded by engineers and product strategists obsessed with crafting software that feels effortless. We combine cutting-edge frontend frameworks, resilient cloud backends, and practical AI integrations to turn ambitious concepts into scalable digital products.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-bold">
                    100%
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-100">Code Ownership</div>
                    <div className="text-slate-400">IP Transfer Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
