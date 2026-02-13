'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'gate' | 'main';
}

/**
 * AnimatedBackground — Dreamy romantic background with floating lights and gradients
 */
export default function AnimatedBackground({ variant = 'gate' }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Base gradient */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          variant === 'gate'
            ? 'bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#4a1942]'
            : 'bg-gradient-to-br from-[#0f0520] via-[#1a0a2e] to-[#2d1b4e]'
        }`}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #e91e8c 0%, transparent 70%)',
          top: '20%',
          left: '10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)',
          top: '60%',
          right: '15%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)',
          bottom: '20%',
          left: '30%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle sparkle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />

      {/* Ambient noise texture (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
