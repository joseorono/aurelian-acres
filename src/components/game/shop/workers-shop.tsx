import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import toast from 'react-hot-toast';
import { CONST_MAX_BUILDING_TYPE } from '~/constants/defaults';
import { WORKERS } from '~/constants/workers';
import { canAffordWorker, hasAllShopItems, playBuildingSound } from '~/lib/resources';
import { getFormattedNumber } from '~/lib/utils';
import { buildingsAtom, isModalOpenAtom, resourcesAtom, setContentAtom, workersAtom } from '~/store/atoms';
import { priceData, workerKeys } from '~/types/game-data-types';
import { Coin, Stone, Wheat } from '~/icons/resourceIcons';
import { useEffect } from 'react';
import CongratsDialog from '~/components/modals/congrats-dialog';
import { SoundNames, soundService } from '~/services/sound-service';

export default function WorkersShop() {
  const [workersCount, setworkersCount] = useAtom(workersAtom);
  const buildingsCount = useAtomValue(buildingsAtom);
  // this one is for testing, ideally this  atom should be passed through props
  const [resources, setResources] = useAtom(resourcesAtom);
  const openModal = useSetAtom(setContentAtom);

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

  useEffect(() => {
    if (hasAllShopItems(buildingsCount, workersCount)) {
      soundService.playSound(SoundNames.gameOver);
      openModal({
        title: 'Congratulations',
        content: <CongratsDialog />,
      });
    }
  }, [buildingsCount, workersCount]);

  return (
    <>
      <div className="building-store-wrapper">
        {Object.entries(WORKERS).map(([workerName, workerData]) => {
          const workerKey = workerName as workerKeys;
          const workerCount = workersCount[workerKey];
          const canAfford = canAffordWorker(workerData.id, resources);
          const maxCapacity = workerCount >= CONST_MAX_BUILDING_TYPE;
          return (
            <div
              key={workerData.id}
              className={`store__entry card worker-${workerData.name} flex flex-row justify-around gap-2 p-2`}
            >
              <div className="flex-column flex-auto basis-2/4">
                <h2 className="store__unitName">{workerData.name}</h2>
                <h3 className="store__unitDescription">{workerData.description}</h3>
                <p className="store__currentCount">
                  <b>Current amount: </b> {workerCount}
                </p>
                {/* Cost and Income */}
                <div className="flex gap-2">
                  <div className="store__unitCost">
                    <b className="text-lg">Cost:</b>
                    <div className="flex justify-between gap-2">
                      <span className="qty self-end">{getFormattedNumber(workerData?.costGold)}</span>
                      <span className="icon">
                        <Coin />
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="qty self-end">{getFormattedNumber(workerData?.costGrain)}</span>
                      <span className="icon">
                        <Wheat />
                      </span>
                    </div>
                    <div className="flex justify-between  gap-2">
                      <span className="qty self-end">{getFormattedNumber(workerData?.costStone)}</span>
                      <span className="icon">
                        <Stone />
                      </span>
                    </div>
                    <br></br>
                  </div>
                  <div className="store__unitCost mt-1">
                    <b className="text-lg">Income:</b>
                    <div className="flex flex-col">
                      <div className="flex justify-between gap-2">
                        <span className="qty self-end">{getFormattedNumber(workerData?.goldPerClick)}</span>
                        <span className="icon">
                          <Coin />
                        </span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="qty self-end">{getFormattedNumber(workerData?.grainPerClick)}</span>
                        <span className="icon">
                          <Wheat />
                        </span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="qty self-end">{getFormattedNumber(workerData?.stonePerClick)}</span>
                        <span className="icon">
                          <Stone />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex h-[100px] items-center justify-center border-2 border-solid border-white">
                  <img
                    src={`/assets/town-view-tiles/workers/${workerData.name.toLowerCase()}.png`}
                    alt={workerData.name}
                    style={{ width: '100px', height: '100px' }}
                    className={'mx-auto my-auto max-h-[60%] max-w-[60%]'}
                  />
                </div>
                <button
                  className="store__buyButton"
                  type="button"
                  disabled={maxCapacity || !canAfford}
                  onClick={() => handleBuy(workerKey, workerCount, 1, workerData)}
                >
                  BUY
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
