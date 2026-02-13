'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhotoConveyorRowProps {
  photos: readonly string[];
  direction?: 'left' | 'right';
  speed?: number;
}

/**
 * PhotoConveyorRow — Infinite looping horizontal photo carousel
 * Each row scrolls at different speed and direction
 */
export default function PhotoConveyorRow({
  photos,
  direction = 'left',
  speed = 30,
}: PhotoConveyorRowProps) {
  // Duplicate photos for seamless loop
  const doubledPhotos = [...photos, ...photos];

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
        {doubledPhotos.map((src, index) => (
          <motion.div
            key={`${src}-${index}`}
            className="relative flex-shrink-0 w-64 h-48 md:w-80 md:h-60 rounded-2xl overflow-hidden
                       shadow-lg shadow-black/30"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt={`Memory ${index + 1}`}
              width={320}
              height={240}
              className="object-cover w-full h-full transition-all duration-300 
                         group-hover:brightness-110"
              unoptimized
              sizes="(max-width: 768px) 256px, 320px"
            />
            {/* Hover glow overlay */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300
                         bg-gradient-to-t from-pink-500/20 to-transparent pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
