import { useAtom, useAtomValue } from 'jotai';
import { WORKERS } from '~/constants/workers';
import { canAffordBuilding, getBuildingCost } from '~/lib/resources';
import { resourcesAtom, workersAtom } from '~/store/atoms';
import { priceData, workerKeys } from '~/types/game-data-types';

export default function WorkersShop() {
  const [workersCount, setworkersCount] = useAtom(workersAtom);
  // this one is for testing, ideally this  atom should be passed through props
  const resources = useAtomValue(resourcesAtom);

  const handleBuy = (buildId: number, amount: number, cost: priceData | null) => {
    console.log('handle buy');
    if (cost === null) {
      console.error('trying to buy worker with 0 cost. Shouldnt be possible');
    }
    //adding amount in case we implement buying in increments (ex 10 at a time)
    //TODO: increase worker by amount
    //TODO: decrease resources by cost * amount
  };

  return (
    <>
      <div className="building-store-wrapper">
        {Object.entries(WORKERS).map(([workerName, workerData]) => {
          const workerCost = getBuildingCost(workerData.id);
          const workerCount = workersCount[workerName as workerKeys];
          const canAfford = canAffordBuilding(workerData.id, resources);
          return (
            <div key={workerData.id} className={`building-${workerData.name} flex flex-row p-2`}>
              <div className="mr-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white">
                buildIcon
              </div>
              <div className="flex-column basis-2/4">
                <h2>{workerData.name}</h2>
                <h3>{workerData.description}</h3>
                <div className="flex-row">
                  <small>current: {workerCount}</small>
                  <small>
                    cost: {workerCost?.costGold}🪙 / {workerCost?.costGrain}🌾 / {workerCost?.costStone}🪨
                  </small>
                </div>
              </div>
              <button
                className="ml-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white"
                type="button"
                disabled={!canAfford}
                onClick={() => handleBuy(workerData.id, 1, workerCost)}
              >
                BUY
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
