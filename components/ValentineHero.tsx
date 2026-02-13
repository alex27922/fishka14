'use client';

import RomanticText from './RomanticText';
import PhotoConveyorRow from './PhotoConveyorRow';
import SecretMessage from './SecretMessage';
import { valentineConfig } from '@/config/valentine.config';

/**
 * ValentineHero — Main layout with conveyors, center text, and secret message
 */
export default function ValentineHero() {
  const { photos, headline, animationSpeed } = valentineConfig;

  return (
    <main className="relative min-h-screen flex flex-col justify-center">
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

      <RomanticText text={headline} />

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

      {valentineConfig.effects.secretMessage && <SecretMessage />}
    </main>
  );
}
