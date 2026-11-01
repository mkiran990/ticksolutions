import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Hello TICK Solutions! I would like to discuss a digital project.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip Popover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 glass-panel px-4 py-2.5 rounded-2xl border border-emerald-500/40 text-xs font-semibold text-slate-100 shadow-2xl bg-[#091512]/95 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Chat with TICK Solutions Team 💬</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        aria-label="Chat on WhatsApp"
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-shadow group"
      >
        {/* Pulsing ring aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-white/10 group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </div>
  );
}
