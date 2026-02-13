'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PasswordGate from '@/components/PasswordGate';
import ValentineHero from '@/components/ValentineHero';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingParticles from '@/components/FloatingParticles';
import HeartsOnClick from '@/components/HeartsOnClick';
import LoadingScreen from '@/components/LoadingScreen';
import MusicToggle from '@/components/MusicToggle';
import { valentineConfig } from '@/config/valentine.config';

type AppState = 'loading' | 'gate' | 'transition' | 'main';

export default function Home() {
  const [state, setState] = useState<AppState>(
    valentineConfig.effects.loadingScreen ? 'loading' : 'gate'
  );
  const [showCursorEffect, setShowCursorEffect] = useState(false);

  const handleLoadingComplete = useCallback(() => setState('gate'), []);
  const handlePasswordSuccess = useCallback(() => {
    setState('transition');
    setTimeout(() => setState('main'), 1200);
  }, []);

  useEffect(() => {
    setShowCursorEffect(valentineConfig.effects.cursorEffect);
  }, []);

  return (
    <>
      <div className={showCursorEffect ? 'romantic-cursor' : ''}>
        <AnimatedBackground variant={state === 'gate' ? 'gate' : 'main'} />

        <AnimatePresence mode="wait">
          {state === 'loading' && valentineConfig.effects.loadingScreen && (
            <LoadingScreen onComplete={handleLoadingComplete} />
          )}
          {state === 'gate' && (
            <PasswordGate onSuccess={handlePasswordSuccess} />
          )}
          {state === 'transition' && <TransitionOverlay />}
          {state === 'main' && <MainContent />}
        </AnimatePresence>

        {valentineConfig.effects.floatingParticles && state === 'main' && (
          <FloatingParticles />
        )}
        {valentineConfig.effects.heartsOnClick && state === 'main' && (
          <HeartsOnClick />
        )}
        {state === 'main' && <MusicToggle />}
      </div>
    </>
  );
}

function TransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-gradient-to-br from-romantic-cream via-romantic-blush to-romantic-lavender"
      initial={{ opacity: 0, filter: 'blur(0px)' }}
      animate={{
        opacity: [0, 1, 1, 0],
        filter: ['blur(0px)', 'blur(2px)', 'blur(8px)', 'blur(12px)'],
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <motion.div
        className="text-7xl text-rose-500 drop-shadow-[0_0_40px_rgba(244,63,94,0.9)]"
        animate={{ scale: [0.8, 1.4, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 1.2 }}
      >
        ♥
      </motion.div>
    </motion.div>
  );
}

function MainContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ValentineHero />
    </motion.div>
  );
}
