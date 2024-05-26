import { useAtom } from 'jotai';
import toast from 'react-hot-toast';
import { CONST_MAX_BUILDING_TYPE } from '~/constants/defaults';
import { WORKERS } from '~/constants/workers';
import { canAffordWorker, playBuildingSound } from '~/lib/resources';
import { resourcesAtom, workersAtom } from '~/store/atoms';
import { priceData, workerKeys } from '~/types/game-data-types';
export default function WorkersShop() {
  const [workersCount, setworkersCount] = useAtom(workersAtom);
  // this one is for testing, ideally this  atom should be passed through props
  const [resources, setResources] = useAtom(resourcesAtom);

  const handleBuy = (workerName: workerKeys, workerCount: number, amount: number, cost: priceData | null) => {
    console.log('handle buy');

    if (cost === null) {
      console.error('trying to buy building with 0 cost. Shouldnt be possible');
      return;
    }

    toast.success(`Bought ${amount} ${workerName}(s)!`);

    //adding amount in case we implement buying in increments (ex 10 at a time)
    // increase building by amount
    setworkersCount({ ...workersCount, [workerName]: workerCount + amount });
    // decrease resources by cost * amount
    setResources({
      gold: resources.gold - cost.costGold * amount,
      stone: resources.stone - cost.costStone * amount,
      grain: resources.grain - cost.costGrain * amount,
    });
    playBuildingSound(workerName);
  };

  return (
    <>
      <div className="building-store-wrapper">
        {Object.entries(WORKERS).map(([workerName, workerData]) => {
          const workerKey = workerName as workerKeys;
          const workerCount = workersCount[workerKey];
          const canAfford = canAffordWorker(workerData.id, resources);
          const maxCapacity = workerCount >= CONST_MAX_BUILDING_TYPE;
          return (
            <div key={workerData.id} className={`store__entry card  worker-${workerData.name} flex flex-row p-2`}>
              <div className="mr-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white">
                <img
                  src={`public/assets/town-view-tiles/workers/${workerData.name}.png`}
                  alt={workerData.name}
                  style={{ width: '100px', height: '100px' }}
                  className={'mx-auto my-auto max-h-[60%] max-w-[60%]'}
                />
              </div>
              <div className="flex-column basis-2/4">
                <h2 className="store__unitName">{workerData.name}</h2>
                <h3 className="store__unitDescription">{workerData.description}</h3>
                <p className="store__currentCount">
                  <b>Current amount: </b> {workerCount}
                </p>
                <div className="store__unitCost">
                  <b>Cost: </b> {workerData?.costGold}🪙 / {workerData?.costGrain}🌾 / {workerData?.costStone}🪨
                </div>
              </div>
              <button
                className="store__buyButton"
                type="button"
                disabled={maxCapacity || !canAfford}
                onClick={() => handleBuy(workerKey, workerCount, 1, workerData)}
              >
                BUY
              </button>
              {/* <button
                className="ml-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white"
                type="button"
                // disabled={maxCapacity || !canAfford}
                onClick={() => handleBuy(workerKey, workerCount, -1, workerInfo)}
              >
                (debug) SELL!?
              </button> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
