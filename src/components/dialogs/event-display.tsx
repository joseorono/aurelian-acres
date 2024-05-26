import { GAME_TICK_MS } from '~/constants/defaults';
import { GLOBAL_EVENTS, EVENT_PROBABILITY } from '~/constants/events';
import { useEffect } from 'react';
import { getRandomEvent } from '~/lib/events-logic';
import { buildingCount, workerCount } from '~/types/game-data-types';
import NewspaperHeadline from '~/components/game/misc/newspaper-headline';
import { eventsAtom, buildingsAtom, resourcesAtom, workersAtom } from '~/store/atoms';
import { useSetAtom, useAtom } from 'jotai';
import toast from 'react-hot-toast';

interface IPropsEventDisplay {
  className?: string;
}

const EventDisplay = ({ className = '' }: IPropsEventDisplay) => {
  // If no event is passed, get a random
  const [event, setEvent] = useAtom(eventsAtom);

  //Write
  const setWorkers = useSetAtom(workersAtom);
  const setBuildings = useSetAtom(buildingsAtom);
  const setResources = useSetAtom(resourcesAtom);
  //Event trigger
  useEffect(() => {
    console.log('Event worker mounted');
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

        toast.custom(newEvent.name);
        setEvent(newEvent);
      }
    }, GAME_TICK_MS);

    return () => {
      console.log('Event BackgroundWorker unmounted');
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex flex-auto flex-col justify-center bg-scroll p-4 text-gray-700">
      <NewspaperHeadline headline={event.name} />
      <div className="break-words">
        <p className="my-2">{event.description}</p>

        {event.resourceMultiplier && (
          <>
            <div className="mx-auto mt-6 w-full max-w-[400px]">
              {/*
                    <h1 className="mb-4 text-lg text-red-700">Resources Multiplier:</h1>
                    */}
              <div className="pixel-rounded flex justify-around bg-brown-800 p-1 py-2 text-lg text-white">
                <div>x{event.resourceMultiplier.gold} 🪙</div>
                <div>x{event.resourceMultiplier.grain} 🌾</div>
                <div>x{event.resourceMultiplier.stone} 🪨</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventDisplay;
