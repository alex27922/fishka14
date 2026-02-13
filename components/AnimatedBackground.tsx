'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'gate' | 'main';
}

/**
 * AnimatedBackground — Dreamy pastel atmosphere
 */
export default function AnimatedBackground({ variant = 'gate' }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Soft pastel base */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          variant === 'gate'
            ? 'bg-gradient-to-br from-romantic-cream via-romantic-blush to-romantic-lavender'
            : 'bg-gradient-to-br from-romantic-cream via-romantic-blush/80 to-romantic-peach/50'
        }`}
      />

      {/* Vivid floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(248, 100, 180, 0.8) 0%, rgba(248, 187, 217, 0.5) 40%, transparent 70%)',
          top: '20%',
          left: '10%',
        }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(201, 169, 212, 0.9) 0%, rgba(225, 213, 231, 0.6) 40%, transparent 70%)',
          top: '60%',
          right: '15%',
        }}
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 182, 193, 0.9) 0%, rgba(255, 218, 185, 0.6) 40%, transparent 70%)',
          bottom: '20%',
          left: '30%',
        }}
        animate={{ x: [0, 30, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(92,74,90,0.03)_100%)]" />
    </div>
  );
}
