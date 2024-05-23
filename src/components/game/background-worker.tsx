import { useEffect } from 'react';
import { GAME_TICK_MS } from '~/constants/defaults';

export default function BackgroundWorker() {
  // save the game tick as a state using useState
  // use the useEffect hook to update the game tick every 1000ms
  // use the setInterval function to update the game tick every 1000ms
  // return the LoopingProgressBar component with the durationInMs prop set to 1000

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the game tick
    }, GAME_TICK_MS);

    return () => clearInterval(interval);
  }, []);

  return <div className="hidden">{/* Useful Debug Info*/}</div>;
}
