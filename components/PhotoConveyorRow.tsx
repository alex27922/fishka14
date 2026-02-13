'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { PhotoItem } from '@/config/valentine.config';

interface PhotoConveyorRowProps {
  photos: readonly PhotoItem[];
  direction?: 'left' | 'right';
  speed?: number;
}

function normalizePhoto(item: PhotoItem): { src: string; caption?: string } {
  return typeof item === 'string' ? { src: item } : item;
}

/**
 * PhotoConveyorRow — Infinite looping horizontal photo carousel
 * Hover shows caption (mini-memory) when configured
 */
export default function PhotoConveyorRow({
  photos,
  direction = 'left',
  speed = 30,
}: PhotoConveyorRowProps) {
  const items = photos.map(normalizePhoto);
  const doubledItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {doubledItems.map((item, index) => (
          <motion.div
            key={`${item.src}-${index}`}
            className="group relative flex-shrink-0 w-64 h-48 md:w-80 md:h-60 rounded-2xl overflow-hidden
                       shadow-lg shadow-romantic-charcoal/10"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={item.src}
              alt={item.caption ?? `Memory ${index + 1}`}
              width={320}
              height={240}
              className="object-cover w-full h-full transition-all duration-300
                         group-hover:brightness-95"
              unoptimized
              sizes="(max-width: 768px) 256px, 320px"
            />
            {/* Hover caption overlay — mini-memory */}
            {item.caption && (
              <div
                className="absolute inset-0 flex items-end justify-center p-4
                           bg-gradient-to-t from-romantic-charcoal/80 via-romantic-charcoal/20 to-transparent
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="font-poetic text-white/95 text-sm md:text-base text-center drop-shadow-lg">
                  {item.caption}
                </p>
              </div>
            )}
            {!item.caption && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           bg-gradient-to-t from-romantic-dusty-pink/20 to-transparent pointer-events-none"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
