'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Heart {
  id: number;
  x: number;
  y: number;
}

/**
 * HeartsOnClick — Click anywhere to spawn a heart that floats up and fades
 * Uses document listener so it doesn't block hover on photos/captions
 */
export default function HeartsOnClick() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleClick = useCallback((e: MouseEvent) => {
    const id = nextId;
    setHearts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setNextId((n) => n + 1);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1500);
  }, [nextId]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="fixed text-2xl text-romantic-dusty-pink pointer-events-none z-10"
            style={{
              left: heart.x,
              top: heart.y,
              transform: 'translate(-50%, -50%)',
              textShadow: '0 0 12px rgba(232, 180, 184, 0.8), 0 0 24px rgba(248, 187, 217, 0.5)',
            }}
            initial={{ opacity: 1, scale: 0.5, y: 0 }}
            animate={{
              opacity: 0,
              scale: 1.2,
              y: -80,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            ♥
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
