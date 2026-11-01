import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { teamMembers } from '../data/websiteData';

export default function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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
    <section id="team" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow ambient */}
      <div className="glow-blob top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              EXPERT ENGINEERS & DESIGNERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Meet the <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300">
            A multidisciplinary team of product architects, AI engineers, and full-stack builders dedicated to digital excellence.
          </p>
        </div>

        {/* Team Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative glass-panel rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl bg-[#090d18]/90"
            >
              {/* Subtle hover backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Profile Image with Zoom Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-slate-700/80 bg-slate-900">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent opacity-70" />

                  {/* Role Tag Floating Badge */}
                  <div className="absolute bottom-3 left-3 right-3 glass-panel p-2 rounded-xl border border-cyan-500/30 text-center">
                    <div className="text-xs font-bold text-white">{member.name}</div>
                    <div className="text-[10px] text-cyan-400 font-mono">{member.role}</div>
                  </div>
                </div>

                {/* Specialty */}
                <p className="text-xs font-mono text-slate-400 mb-4 leading-relaxed">
                  {member.specialty}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">CONNECT</span>
                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

