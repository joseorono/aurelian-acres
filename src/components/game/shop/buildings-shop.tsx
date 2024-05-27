import { useAtom } from 'jotai';
import toast from 'react-hot-toast';
import { BUILDINGS } from '~/constants/buildings';
import { CONST_MAX_BUILDING_TYPE } from '~/constants/defaults';
import { canAffordBuilding, playBuildingSound } from '~/lib/resources';
import { getFormattedNumber } from '~/lib/utils';
import { buildingsAtom, resourcesAtom } from '~/store/atoms';
import { buildingKeys, priceData } from '~/types/game-data-types';
import { Coin, Stone, Wheat } from '~/icons/resourceIcons';

export default function BuildingsShop() {
  const [buildingsCount, setBuildingsCount] = useAtom(buildingsAtom);
  // this one is for testing, ideally this  atom should be passed through props
  const [resources, setResources] = useAtom(resourcesAtom);

  const handleBuy = (buildingName: buildingKeys, buildingCount: number, amount: number, cost: priceData | null) => {
    console.log('handle buy');

    if (cost === null) {
      console.error('trying to buy building with 0 cost. Shouldnt be possible');
      return;
    }

    toast.success(`Bought ${amount} ${buildingName}(s)`);

    //adding amount in case we implement buying in increments (ex 10 at a time)
    // increase building by amount
    setBuildingsCount({ ...buildingsCount, [buildingName]: buildingCount + amount });
    // decrease resources by cost * amount
    setResources({
      gold: resources.gold - cost.costGold * amount,
      stone: resources.stone - cost.costStone * amount,
      grain: resources.grain - cost.costGrain * amount,
    });
    playBuildingSound(buildingName);
  };

  return (
    <>
      <div className="building-store-wrapper">
        {Object.entries(BUILDINGS).map(([buildingName, buildingData]) => {
          const buildingKey = buildingName as buildingKeys;
          const buildingCount = buildingsCount[buildingKey];
          const canAfford = canAffordBuilding(buildingData.id, resources);
          const maxCapacity = buildingCount >= CONST_MAX_BUILDING_TYPE;
          return (
            <div key={buildingData.id} className={`store__entry building-${buildingData.name} flex flex-row p-2`}>
              <div className="flex-column flex-auto  basis-2/4">
                <h2 className="store__unitName">{buildingData.name}</h2>
                <h3 className="store__unitDescription">{buildingData.description}</h3>
                <p className="store__currentCount">Current amount: {buildingCount}</p>
                {/* Cost and Income */}
                <div className="flex gap-5">
                  <div className="store__unitCost">
                    <b className="text-lg">Cost:</b>
                    <div className="flex justify-between gap-2">
                      <span className="qty">{getFormattedNumber(buildingData?.costGold)}</span>
                      <span className="icon">
                        <Coin />
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="qty">{getFormattedNumber(buildingData?.costGrain)}</span>
                      <span className="icon">
                        <Wheat />
                      </span>
                    </div>
                    <div className="flex justify-between  gap-2">
                      <span className="qty">{getFormattedNumber(buildingData?.costStone)}</span>
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
                        <span className="qty">{getFormattedNumber(buildingData?.goldPerSecond)}</span>
                        <span className="icon">
                          <Coin />
                        </span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="qty">{getFormattedNumber(buildingData?.grainPerSecond)}</span>
                        <span className="icon">
                          <Wheat />
                        </span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="qty">{getFormattedNumber(buildingData?.stonePerSecond)}</span>
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
                    src={`public/assets/town-view-tiles/buildings/${buildingData.name}.png`}
                    alt={buildingData.name}
                    style={{ width: '100px', height: '100px' }}
                    className={'mx-auto my-auto max-h-[60%] max-w-[60%]'}
                  />
                </div>
                <button
                  className="store__buyButton"
                  type="button"
                  disabled={maxCapacity || !canAfford}
                  onClick={() => handleBuy(buildingKey, buildingCount, 1, buildingData)}
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
