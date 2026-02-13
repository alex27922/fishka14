'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { valentineConfig } from '@/config/valentine.config';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!valentineConfig.backgroundMusicUrl) return;
    audioRef.current = new Audio(valentineConfig.backgroundMusicUrl);
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current || !valentineConfig.backgroundMusicUrl) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  if (!valentineConfig.backgroundMusicUrl) return null;

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-24 right-6 z-30 w-14 h-14 rounded-full glass flex items-center justify-center
                 text-romantic-charcoal hover:text-romantic-dusty-pink hover:scale-110 transition-transform"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </motion.button>
  );
}
