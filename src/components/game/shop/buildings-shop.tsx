import { useAtom, useAtomValue } from 'jotai';
import { BUILDINGS } from '~/constants/buildings';
import { canAffordBuilding, getBuildingCost } from '~/lib/resources';
import { buildingsAtom, resourcesAtom } from '~/store/atoms';
import { buildingKeys, priceData } from '~/types/game-data-types';

export default function BuildingsShop() {
  const [buildingsCount, setBuildingsCount] = useAtom(buildingsAtom);
  // this one is for testing, ideally this  atom should be passed through props
  const resources = useAtomValue(resourcesAtom);

  const handleBuy = (buildId: number, amount: number, cost: priceData | null) => {
    console.log('handle buy');

    if (cost === null) {
      console.error('trying to buy building with 0 cost. Shouldnt be possible');
    }
    //adding amount in case we implement buying in increments (ex 10 at a time)
    //TODO: increase building by amount
    //TODO: decrease resources by cost * amount
  };

  return (
    <>
      <div className="building-store-wrapper">
        {Object.entries(BUILDINGS).map(([buildingName, buildingData]) => {
          const buildingCost = getBuildingCost(buildingData.id);
          const buildingCount = buildingsCount[buildingName as buildingKeys];
          const canAfford = canAffordBuilding(buildingData.id, resources);
          return (
            <div key={buildingData.id} className={`building-${buildingData.name} flex flex-row p-2`}>
              <div className="mr-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white">
                buildIcon
              </div>
              <div className="flex-column basis-2/4">
                <h2>{buildingData.name}</h2>
                <h3>{buildingData.description}</h3>
                <div className="flex-row">
                  <small>current amount: {buildingCount}</small>
                  <small>
                    cost: {buildingCost?.costGold}🪙 / {buildingCost?.costGrain}🌾 / {buildingCost?.costStone}🪨
                  </small>
                </div>
              </div>
              <button
                className="ml-2 flex h-[100px] basis-1/4 items-center justify-center border-2 border-solid border-white"
                type="button"
                disabled={!canAfford}
                onClick={() => handleBuy(buildingData.id, 1, buildingCost)}
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
