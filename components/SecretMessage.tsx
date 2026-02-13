'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { valentineConfig } from '@/config/valentine.config';

/**
 * SecretMessage — Bottom link that opens a love letter modal
 */
export default function SecretMessage() {
  const [isOpen, setIsOpen] = useState(false);
  const { triggerText, message } = valentineConfig.secretMessage;

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20
                   px-6 py-3 rounded-2xl glass
                   text-romantic-charcoal/90 hover:text-romantic-dusty-pink
                   font-poetic text-base md:text-lg font-medium
                   transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        {triggerText}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-romantic-charcoal/40 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
              role="button"
              tabIndex={0}
              aria-label="Close modal"
            />
            <motion.div
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                         md:max-w-lg md:w-full md:max-h-[80vh]
                         glass rounded-3xl p-8 md:p-12 overflow-y-auto z-50
                         shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-poetic text-romantic-charcoal text-base md:text-lg leading-relaxed whitespace-pre-line">
                {message}
              </p>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="mt-8 w-full py-3 rounded-xl bg-romantic-dusty-pink/30
                           text-romantic-charcoal font-ui text-sm font-medium
                           hover:bg-romantic-dusty-pink/50 transition-colors"
              >
                Закрити
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
