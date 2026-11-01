import React from 'react';
import { Zap, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { companyInfo } from '../data/websiteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-800/80 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                TICK <span className="text-cyan-400">SOLUTIONS</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.tagline} We build high-performance web applications, mobile platforms, and AI systems for ambitious enterprises.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* Quick Sitemap Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm">
              {['Services', 'Technologies', 'Portfolio', 'About', 'Process', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              LAB HEADQUARTERS
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {companyInfo.address}
            </p>
            <div className="pt-2 text-xs font-mono text-cyan-400">
              {companyInfo.contactEmail}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. Built for high digital scale.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors px-3 py-1.5 rounded-lg border border-slate-800 hover:border-cyan-500/40"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
