import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { companyInfo } from '../data/websiteData';


export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Web App Development',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Hello TICK Solutions team! I am interested in building a project with your team.'
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Glow Ambient Blobs */}
      <div className="glow-blob top-10 left-10 w-[500px] h-[500px] bg-cyan-500/15" />
      <div className="glow-blob bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Big CTA Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              LET'S COLLABORATE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Let's Build <span className="text-gradient">Something Amazing.</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-300 dark:text-slate-300 font-normal leading-relaxed">
            Have an idea, business problem, or enterprise project? Let's turn it into a high-performance digital solution.
          </p>
        </div>

        {/* Large Quick Action Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group glass-panel p-6 rounded-2xl border border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-between shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-white flex items-center gap-2">
                  WhatsApp Chat
                </div>
                <div className="text-xs text-emerald-400 font-mono">Start an instant conversation</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-2 transition-transform" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={companyInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="group glass-panel p-6 rounded-2xl border border-blue-500/40 hover:border-blue-400 bg-blue-950/20 hover:bg-blue-950/40 transition-all duration-300 flex items-center justify-between shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-white flex items-center gap-2">
                  LinkedIn
                </div>
                <div className="text-xs text-blue-400 font-mono">Connect with our team</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Contact Form & Direct Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-[#090d18]/90 space-y-6">
              <h3 className="text-xl font-bold text-slate-100 border-b border-slate-800 pb-4">
                Direct Contact Points
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">EMAIL US</div>
                  <a href={`mailto:${companyInfo.contactEmail}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-400">
                    {companyInfo.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">CALL OUR LAB</div>
                  <a href={`tel:${companyInfo.phone}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-400">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">HEADQUARTERS</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {companyInfo.address}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Response Time SLA</span>
                <span className="text-emerald-400 font-bold">&lt; 2 Hours guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl bg-[#090e1c]/95">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Inquiry Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out to TICK Solutions. An engineering lead will review your requirements and respond within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-100">Send Us Your Requirements</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">SERVICE TYPE</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 text-sm"
                    >
                      <option>Web App Development</option>
                      <option>Mobile App Development</option>
                      <option>AI & Machine Learning Solutions</option>
                      <option>Cloud Infrastructure & DevOps</option>
                      <option>Custom Enterprise Software</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">PROJECT OVERVIEW *</label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project goals, timeline, and key requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Transmit Project Brief
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
