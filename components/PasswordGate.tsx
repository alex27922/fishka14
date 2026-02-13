'use client';

import {
  FormEvent,
  useState,
} from 'react';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { valentineConfig } from '@/config/valentine.config';

interface PasswordGateProps {
  onSuccess: () => void;
}

/**
 * PasswordGate — Fullscreen romantic password entrance
 * Hint references "little fish" / cute nickname without revealing password
 */
export default function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setIsSubmitting(true);
    setError(false);

    // Simulate a brief moment for UX
    setTimeout(() => {
      const isValid = password.toLowerCase().trim() === valentineConfig.password.toLowerCase();
      if (isValid) {
        onSuccess();
      } else {
        setError(true);
        setIsSubmitting(false);
      }
    }, 300);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="glass rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
          delay: 0.2,
        }}
      >
        {/* Romantic hint — references "little fish" / our nickname */}
        <p className="text-center text-pink-200/90 text-lg md:text-xl font-elegant mb-6 leading-relaxed">
          Рібка моя, введи секретне слово... (password = f....a)
          <br />
          <span className="text-soft-lavender/90 text-base">
            Як ми називаємо одне одного?
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Введи слово..."
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 
                         text-white placeholder-pink-200/50 text-lg font-elegant
                         focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50
                         transition-all duration-300"
              autoComplete="off"
              autoFocus
            />
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-2 text-rose-300 text-sm text-center"
                >
                  Спробуй ще раз, булка
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 
                       text-white font-elegant text-lg font-semibold
                       shadow-lg shadow-pink-500/30
                       hover:shadow-pink-400/40 hover:scale-[1.02]
                       active:scale-[0.98]
                       disabled:opacity-70 disabled:cursor-not-allowed
                       transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                Чекай...
              </motion.span>
            ) : (
              'Відкрити ❤️'
            )}
          </motion.button>
        </form>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-8 text-pink-400/30 text-2xl">
          {['♥', '♦', '♥'].map((heart, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
