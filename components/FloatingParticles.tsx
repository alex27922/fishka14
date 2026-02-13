'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

/**
 * FloatingParticles — Sparkles reacting to mouse (pastel palette)
 */
export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const count = 25;
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        size: Math.random() * 12 + 8,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 5,
      }))
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-romantic-dusty-pink/30"
          style={{
            left: `${20 + (p.id * 3) % 60}%`,
            top: `${15 + (p.id * 7) % 70}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            x: [0, p.x + mouse.x, 0],
            y: [0, p.y + mouse.y, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
