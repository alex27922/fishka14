'use client';

import { motion } from 'framer-motion';

interface RomanticTextProps {
  text: string;
}

/**
 * RomanticText — Cinematic headline with glow and breathing animation
 */
export default function RomanticText({ text }: RomanticTextProps) {
  return (
    <motion.div
      className="relative z-20 flex items-center justify-center px-4 py-12 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.h1
        className="font-romantic text-4xl md:text-6xl lg:text-7xl text-center
                   bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200
                   bg-clip-text text-transparent text-glow
                   drop-shadow-2xl"
        animate={{
          textShadow: [
            '0 0 20px rgba(233, 30, 140, 0.5), 0 0 40px rgba(244, 114, 182, 0.3)',
            '0 0 30px rgba(233, 30, 140, 0.7), 0 0 50px rgba(244, 114, 182, 0.4)',
            '0 0 20px rgba(233, 30, 140, 0.5), 0 0 40px rgba(244, 114, 182, 0.3)',
          ],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
}
