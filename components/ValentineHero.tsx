'use client';

import RomanticText from './RomanticText';
import PhotoConveyorRow from './PhotoConveyorRow';
import { valentineConfig } from '@/config/valentine.config';

/**
 * ValentineHero — Main artistic layout with conveyors and center text
 */
export default function ValentineHero() {
  const { photos, headline, animationSpeed } = valentineConfig;

  return (
    <main className="relative min-h-screen flex flex-col justify-center">
      {/* Photo conveyors — layered above and below center text */}
      <div className="space-y-2 md:space-y-4">
        <PhotoConveyorRow
          photos={photos.row1}
          direction="left"
          speed={40 / animationSpeed.conveyorRow1}
        />
        <PhotoConveyorRow
          photos={photos.row2}
          direction="right"
          speed={50 / animationSpeed.conveyorRow2}
        />
      </div>

      {/* Center romantic headline */}
      <RomanticText text={headline} />

      {/* Lower conveyors */}
      <div className="space-y-2 md:space-y-4">
        <PhotoConveyorRow
          photos={photos.row3}
          direction="left"
          speed={45 / animationSpeed.conveyorRow3}
        />
        <PhotoConveyorRow
          photos={photos.row4}
          direction="right"
          speed={55 / animationSpeed.conveyorRow4}
        />
      </div>
    </main>
  );
}
