/**
 * Valentine's Day Gift Configuration
 * Customize all content, photos, and behavior here.
 */

export const valentineConfig = {
  // Password for the gate screen
  password: 'fishka',

  // Main romantic headline (displayed in center of main page)
  headline: 'З 14 Лютого, Рібка моя! ❤️',

  // Animation speed multipliers (higher = faster)
  animationSpeed: {
    conveyorRow1: 1,
    conveyorRow2: 0.7,
    conveyorRow3: 1.2,
    conveyorRow4: 0.85,
  },

  // Photo URLs for the conveyor rows
  // Add your own photo URLs here — each row will loop these images
  photos: {
    row1: [
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop',
    ],
    row2: [
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop',
    ],
    row3: [
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop',
    ],
    row4: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop',
    ],
  },

  // Optional: Background music URL (leave empty to disable)
  backgroundMusicUrl: '',

  // Enable/disable effects
  effects: {
    floatingParticles: true,
    parallax: true,
    cursorEffect: true,
    loadingScreen: true,
  },
} as const;

export type ValentineConfig = typeof valentineConfig;
