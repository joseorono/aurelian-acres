import { useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { GAME_TICK_MS } from '~/constants/defaults';
import { EVENT_PROBABILITY, GLOBAL_EVENTS } from '~/constants/events';
import { getRandomEvent } from '~/lib/events-logic';
import { calculatePassiveIncome } from '~/lib/resources';
import {
  resourcesAtom,
  buildingsAtom,
  playerUpgradeAtom,
  playerLevelAtom,
  eventsAtom,
  workersAtom,
} from '~/store/atoms';
import { buildingCount, workerCount } from '~/types/game-data-types';
export default function BackgroundWorker() {
  // save the game tick as a state using useState
  // use the useEffect hook to update the game tick every 1000ms
  // use the setInterval function to update the game tick every 1000ms
  // return the LoopingProgressBar component with the durationInMs prop set to 1000

  //Read-write
  const [resources, setResources] = useAtom(resourcesAtom);
  const [buildings, setBuildings] = useAtom(buildingsAtom);

  //Read
  const playerLevel = useAtomValue(playerLevelAtom);
  const upgrade = useAtomValue(playerUpgradeAtom);

  //Write
  const setWorkers = useSetAtom(workersAtom);
  const setEvent = useSetAtom(eventsAtom);

  // Add the passive income to the resources
  useEffect(() => {
    console.log('Passive income BackgroundWorker mounted');
    const passiveIncome = calculatePassiveIncome(buildings, upgrade, playerLevel);
    const interval = setInterval(() => {
      setResources((resourcesDraft) => {
        resourcesDraft.gold += passiveIncome.goldPerSecond;
        resourcesDraft.grain += passiveIncome.grainPerSecond;
        resourcesDraft.stone += passiveIncome.stonePerSecond;
      });
    }, GAME_TICK_MS);

    return () => {
      console.log('Passive income BackgroundWorker unmounted');
      clearInterval(interval);
    };
  }, [buildings, upgrade, playerLevel]);

  // Update the resource labels
  useEffect(() => {
    console.log('Resource BackgroundWorker mounted');
    const interval = setInterval(() => {
      // Update the game tick

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
    }, GAME_TICK_MS);

    return () => {
      console.log('BackgroundWorker unmounted');
      clearInterval(interval);
    };
  }, []);

  //Event trigger
  useEffect(() => {
    console.log('Event BackgroundWorker mounted');
    const interval = setInterval(() => {
      if (Math.random() < EVENT_PROBABILITY) {
        console.log('Event triggered');
        // Generate random event
        const newEvent = getRandomEvent(GLOBAL_EVENTS);

        // We check for every multiplier object and then multiply the pertinent value by the corresponding multiplier
        if (newEvent.resourceMultiplier) {
          setResources((resourcesDraft) => {
            resourcesDraft.gold = Math.floor(resourcesDraft.gold * (newEvent?.resourceMultiplier?.gold ?? 1));
            resourcesDraft.grain = Math.floor(resourcesDraft.grain * (newEvent?.resourceMultiplier?.grain ?? 1));
            resourcesDraft.stone = Math.floor(resourcesDraft.stone * (newEvent?.resourceMultiplier?.stone ?? 1));
          });
        }
        if (newEvent.buildingMultiplier) {
          setBuildings((buildingsDraft) => {
            for (const key in newEvent.buildingMultiplier) {
              buildingsDraft[key as keyof buildingCount] = Math.floor(
                buildingsDraft[key as keyof buildingCount] * newEvent.buildingMultiplier[key as keyof buildingCount],
              );
            }
          });
        }

        if (newEvent.workerMultiplier) {
          setWorkers((workersDraft) => {
            for (const key in newEvent.workerMultiplier) {
              workersDraft[key as keyof workerCount] = Math.floor(
                workersDraft[key as keyof workerCount] * newEvent.workerMultiplier[key as keyof workerCount],
              );
            }
          });
        }
        setEvent(newEvent);
      }
    }, GAME_TICK_MS);

    return () => {
      console.log('Event BackgroundWorker unmounted');
      clearInterval(interval);
    };
  }, []);
  return <div className="hidden">{/* Useful Debug Info*/}</div>;
}

