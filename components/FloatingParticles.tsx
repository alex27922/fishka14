'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  x: number;
  y: number;
}

/**
 * FloatingParticles — Sparkles floating independently
 */
export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = 25;
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 14 + 10,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 5,
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-rose-500 select-none"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
            textShadow: '0 0 15px rgba(248,187,217,0.6), 0 0 30px rgba(244,63,94,0.4)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, p.x, 0],
            y: [0, p.y, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
