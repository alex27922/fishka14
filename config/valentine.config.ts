/**
 * Valentine's Day Gift Configuration
 * Customize all content, photos, captions, and behavior here.
 */

export type PhotoItem = string | { src: string; caption?: string };

export const valentineConfig = {
  // Password for the gate screen
  password: 'fishka',

  // Main romantic headline (displayed in center of main page)
  headline: 'Настенька, З 14 Лютого, Рібка моя! ❤️',

  // Animation speed multipliers (higher = faster)
  animationSpeed: {
    conveyorRow1: 2,
    conveyorRow2: 1.7,
    conveyorRow3: 1.6,
    conveyorRow4: 2,
  },

  // Photos from /public — add captions with { src, caption } for hover
  photos: {
    row1: [
      { src: '/018C7177-C5A7-4A5E-8AAE-19FC82596E52_1_105_c.jpeg', caption: 'Люблю тебя каждый день еще больше!' },
      { src: '/074E03BA-9901-4CE1-80D4-0A271F8EFCBB_1_105_c.jpeg', caption: 'Моя красотка 🫵' },
      { src: '/11B0841C-3C50-42A5-B822-344F668F0E98_1_105_c.jpeg', caption: 'Любовь моя 💖' },
      { src: '/1CDD4B33-A46A-4497-9A6C-64CDDA02F424_1_105_c.jpeg', caption: 'Моя рыбка 🐟' },
    ],
    row2: [
      { src: '/309361F1-7CA8-4EDD-8DF9-4EBC0DC11F28_1_105_c.jpeg', caption: 'Сладкая!' },
      { src: '/382A83F0-E1B8-4D79-9A2C-01BB92EC3E62_1_105_c.jpeg', caption: 'Булочка моя' },
      { src: '/38E53314-5BD8-48A4-916F-0F7983B3B4C3_1_105_c.jpeg', caption: 'Я ценю тебя' },
      { src: '/40B5E77B-B6D4-4E66-A8BF-EB0FA90E2322_1_105_c.jpeg', caption: 'Ты нужна мне!' },
    ],
    row3: [
      { src: '/45AFB965-D7A0-4D23-911C-6B538E11B7A5_1_105_c.jpeg', caption: 'Влюблен в тебя!' },
      { src: '/5FB899B6-67B2-4242-A3CF-34CE53691E5C_1_105_c.jpeg', caption: 'Моя малышка 💖' },
      { src: '/64CB0825-22EC-4A35-8568-B4D8414B5F4C_1_105_c.jpeg', caption: 'Маленькааая!' },
      { src: '/6B5862EB-3FD3-4CFD-B598-79A6FE5B4463_1_105_c.jpeg', caption: 'Бублик мой' },
    ],
    row4: [
      { src: '/6F88E7B8-A4F5-4C4D-AEF1-427FB1E4BDB7_1_105_c.jpeg', caption: 'Моя future wify 💖' },
      { src: '/A29171DE-A446-402E-A278-660DCA495E97_1_105_c.jpeg', caption: 'Кися! ' },
      { src: '/ADBFDF28-7CEC-493B-B026-FC35E7666D20_1_105_c.jpeg', caption: 'Зайка любимая!' },
      { src: '/160AEF39-E617-4887-9D70-0C31D0F57F90_1_105_c.jpeg', caption: 'Моя нежность' },
    ],
  },

  // Secret message modal (bottom link)
  secretMessage: {
    triggerText: 'Жми сюда ❤️',
    message: `Рыбочка моя, я тебя очень люблю и поздравляю тебя с этим днём!!
    столько всего мы уже пройшли вместе, и я безумно щаслив быть влюбленным в тебя каждый день!
    хочу что бы эта любовь длилась вечно!
    Я тебя люблю! 
    С днем всех влюбленных!
    ❤️`,
  },

  // Optional: Background music URL (leave empty to disable)
  backgroundMusicUrl: '',

  // Enable/disable effects
  effects: {
    floatingParticles: true,
    heartsOnClick: true,
    secretMessage: true,
    parallax: true,
    cursorEffect: true,
    loadingScreen: true,
  },
} as const;

export type ValentineConfig = typeof valentineConfig;
