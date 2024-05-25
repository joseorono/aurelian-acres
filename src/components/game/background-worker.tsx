import { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { GAME_TICK_SECONDS } from '~/constants/defaults';
import { calculatePassiveIncome } from '~/lib/resources';
import { resourcesAtom, buildingsAtom, playerUpgradeAtom, playerLevelAtom } from '~/store/atoms';
export default function BackgroundWorker() {
  // save the game tick as a state using useState
  // use the useEffect hook to update the game tick every 1000ms
  // use the setInterval function to update the game tick every 1000ms
  // return the LoopingProgressBar component with the durationInMs prop set to 1000

  //Write
  const setResources = useSetAtom(resourcesAtom);

  //Read
  const buildings = useAtomValue(buildingsAtom);
  const playerLevel = useAtomValue(playerLevelAtom);
  const upgrade = useAtomValue(playerUpgradeAtom);

  // Add the passive income to the resources
  useEffect(() => {
    const passiveIncome = calculatePassiveIncome(buildings, upgrade, playerLevel);
    setResources((resourcesDraft) => {
      resourcesDraft.gold += passiveIncome.goldPerSecond * GAME_TICK_SECONDS;
      resourcesDraft.grain += passiveIncome.grainPerSecond * GAME_TICK_SECONDS;
      resourcesDraft.stone += passiveIncome.stonePerSecond * GAME_TICK_SECONDS;
    });
  }, []);

  // Update the resource labels
  useEffect(() => {
    // Update the value of resources in every DOM element with labelForGold, labelForGrain, and labelForStone
    setResources((resourcesDraft) => {
      document.querySelectorAll('.labelForGold').forEach((el) => {
        el.textContent = resourcesDraft.gold.toString();
      });
      document.querySelectorAll('.labelForGrain').forEach((el) => {
        el.textContent = resourcesDraft.grain.toString();
      });
      document.querySelectorAll('.labelForStone').forEach((el) => {
        el.textContent = resourcesDraft.stone.toString();
      });
    });
  }, []);

  return <div className="hidden">{/* Useful Debug Info*/}</div>;
}

