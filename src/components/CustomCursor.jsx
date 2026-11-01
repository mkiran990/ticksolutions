import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch/mobile device to disable custom cursor
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-hover') ||
        target.getAttribute('data-cursor') === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small Core Dot */}
      <motion.div
        className="cursor-dot bg-cyan-400 dark:bg-cyan-400 rounded-full fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
        style={{ width: 8, height: 8 }}
      />

      {/* Larger Halo Ring */}
      <motion.div
        className="cursor-dot border border-cyan-400/50 bg-cyan-500/10 dark:border-cyan-400/40 dark:bg-cyan-400/10 rounded-full fixed pointer-events-none z-[9998] blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.8)' : 'rgba(56, 189, 248, 0.3)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.15)' : 'rgba(56, 189, 248, 0.05)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
    </>
  );
}
