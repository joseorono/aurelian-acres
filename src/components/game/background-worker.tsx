import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { GAME_TICK_MS } from '~/constants/defaults';
import { resourcesAtom } from '~/store/atoms';

export default function BackgroundWorker() {
  // save the game tick as a state using useState
  // use the useEffect hook to update the game tick every 1000ms
  // use the setInterval function to update the game tick every 1000ms
  // return the LoopingProgressBar component with the durationInMs prop set to 1000

  const resources = useAtomValue(resourcesAtom);
  useEffect(() => {
    console.log('BackgroundWorker mounted');
    const interval = setInterval(() => {
      // Update the game tick

      // Update the value of resources in every DOM element with labelForGold, labelForGrain, and labelForStone
      document.querySelectorAll('.labelForGold').forEach((el) => {
        console.log('Found labelForGold');
        el.textContent = resources.gold.toString();
      });
      document.querySelectorAll('.labelForGrain').forEach((el) => {
        el.textContent = resources.grain.toString();
      });
      document.querySelectorAll('.labelForStone').forEach((el) => {
        el.textContent = resources.stone.toString();
      });
    }, GAME_TICK_MS);

    return () => {
      console.log('BackgroundWorker unmounted');
      clearInterval(interval);
    };
  }, [resources]);

  return (
    <>
      <div className="hidden">{/* Useful Debug Info*/}</div>
    </>
  );
}

