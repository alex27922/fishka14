'use client';

import { motion } from 'framer-motion';

interface RomanticTextProps {
  text: string;
}

/**
 * RomanticText — Hero headline with breathing glow and subtle float
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
                   bg-gradient-to-r from-romantic-charcoal via-romantic-dusty-pink to-romantic-charcoal
                   bg-clip-text text-transparent text-glow
                   drop-shadow-2xl"
        animate={{
          opacity: [0.9, 1, 0.9],
          scale: [1, 1.02, 1],
          y: [0, -3, 0],
          textShadow: [
            '0 0 30px rgba(248, 100, 180, 0.6), 0 0 60px rgba(248, 187, 217, 0.5), 0 0 90px rgba(201, 169, 212, 0.3)',
            '0 0 50px rgba(248, 100, 180, 0.9), 0 0 80px rgba(248, 187, 217, 0.7), 0 0 120px rgba(201, 169, 212, 0.5)',
            '0 0 30px rgba(248, 100, 180, 0.6), 0 0 60px rgba(248, 187, 217, 0.5), 0 0 90px rgba(201, 169, 212, 0.3)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
}
