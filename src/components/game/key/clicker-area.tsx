import { clickerVisualModifiers } from '~/types/game-data-types';
import BigClickyButton from './big-clicky-button';
import { FC } from 'react';
import { cn } from '~/lib/utils';
// Receives className as a prop

interface IClickerAreaProps {
  className?: string;
}

const ClickerArea: FC<IClickerAreaProps> = ({ className = '' }) => {
  // This state will be passed to the BigClickyButton component
  let visualModifiers: clickerVisualModifiers = {
    rainingCoins: false, // Raining coins animation
    isNight: false, // Diferent background image for night
    goldenOverlay: false, // Golden overlay over the background of the component
    isFlood: false, // Waves on the bottom of the component
    bountifulHarvest: false, // raining wheat animation
  };

  // In the future this returns a big div with a button that says "Click Me" in the middle, and containers with justify content between above and below
  return (
    <div className={cn('flex flex-auto items-center justify-center bg-gray-800', className)}>
      <BigClickyButton modifiers={visualModifiers} />
    </div>
  );
};

export default ClickerArea;
