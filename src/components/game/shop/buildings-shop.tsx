import { useAtom } from 'jotai';
import toast from 'react-hot-toast';
import { BUILDINGS } from '~/constants/buildings';
import { CONST_MAX_BUILDING_TYPE } from '~/constants/defaults';
import { canAffordBuilding, getBuildingCost, playBuildingSound } from '~/lib/resources';
import { buildingsAtom, resourcesAtom } from '~/store/atoms';
import { buildingKeys, priceData } from '~/types/game-data-types';

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
          const buildingCost = getBuildingCost(buildingData.id);
          const buildingCount = buildingsCount[buildingKey];
          const canAfford = canAffordBuilding(buildingData.id, resources);
          const maxCapacity = buildingCount >= CONST_MAX_BUILDING_TYPE;
          return (
            <div key={buildingData.id} className={`store__entry building-${buildingData.name} flex flex-row p-2`}>
              <div className="mr-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white">
                buildIcon
              </div>
              <div className="flex-column basis-2/4">
                <h2 className="store__unitName">{buildingData.name}</h2>
                <h3 className="store__unitDescription">{buildingData.description}</h3>
                <p className="store__currentCount">current amount: {buildingCount}</p>
                <p>
                  <b>Cost:</b> {buildingCost?.costGold}🪙 / {buildingCost?.costGrain}🌾 / {buildingCost?.costStone}🪨
                </p>
              </div>
              <button
                className="ml-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white"
                type="button"
                disabled={maxCapacity || !canAfford}
                onClick={() => handleBuy(buildingKey, buildingCount, 1, buildingCost)}
              >
                BUY
              </button>
              {/* <button
                className="ml-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white"
                type="button"
                // disabled={maxCapacity || !canAfford}
                onClick={() => handleBuy(buildingKey, buildingCount, -1, buildingCost)}
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
