import LoopingProgressBar from '~/components/game/misc/loopingProgressBar';
import { useAtom } from 'jotai';

import { getBestAffordableBuilding, getBestAffordableWorker, handleBuy } from '~/lib/resources';
import { resourcesAtom, workersAtom, buildingsAtom } from '~/store/atoms';
import { Coin, Stone, Wheat } from '~/icons/resourceIcons';

export default function AutoBuySection() {
  const [resources, setResources] = useAtom(resourcesAtom);
  const [workers, setWorkers] = useAtom(workersAtom);
  const [buildings, setBuildings] = useAtom(buildingsAtom);
  const bestAffordableBuilding = getBestAffordableBuilding(resources, buildings);
  const bestAffordableWorker = getBestAffordableWorker(resources, workers);
  return (
    <div className="flex  flex-row  bg-slate-800">
      <div id="availableWorker" className="flex flex-auto basis-1/2 flex-col bg-red-800">
        {bestAffordableWorker ? (
          <div
            className="border-1 flex-auto cursor-pointer border-slate-600 bg-gradient-to-b from-red-600 to-red-900 p-4"
            onClick={() =>
              handleBuy(
                bestAffordableWorker.name.toLowerCase(),
                workers,
                1,
                bestAffordableWorker,
                setWorkers,
                setResources,
                resources,
              )
            }
          >
            <div>Best Worker: {bestAffordableWorker?.name}</div>
            <div>
              Cost: {bestAffordableWorker.costGold} <Coin className="inline" />
              {bestAffordableWorker.costGrain} <Wheat className="inline" />
              {bestAffordableWorker.costStone} <Stone className="inline" />
            </div>
          </div>
        ) : (
          <div
            className="border-1 flex-auto cursor-pointer border-slate-600 bg-gradient-to-b from-red-600 to-red-900 p-4 text-lg"
            onClick={() => {}}
          >
            <div>Can't afford any workers</div>
          </div>
        )}
      </div>
      <div id="availableBuilding" className="flex flex-auto basis-1/2 flex-col bg-blue-800">
        {bestAffordableBuilding ? (
          <div
            className="flex-auto cursor-pointer bg-gradient-to-b from-blue-600 to-blue-800 p-4 text-primary-foreground"
            onClick={() =>
              handleBuy(
                bestAffordableBuilding.name.toLowerCase(),
                buildings,
                1,
                bestAffordableBuilding,
                setBuildings,
                setResources,
                resources,
              )
            }
          >
            <div>Best Building: {bestAffordableBuilding?.name}</div>
            <div>
              Cost: {bestAffordableBuilding.costGold} <Coin className="inline" /> {bestAffordableBuilding.costGrain}{' '}
              <Wheat className="inline" />
              {bestAffordableBuilding.costStone} <Stone className="inline" />
            </div>
          </div>
        ) : (
          <div
            className="flex-auto cursor-pointer bg-gradient-to-b from-blue-600 to-blue-800 p-4 text-lg text-primary-foreground"
            onClick={() => {}}
          >
            <div>Can't afford any buildings</div>
            {/* <div>Building Cost: {bestAffordableBuilding.}</div> */}
          </div>
        )}
        <LoopingProgressBar durationInMs={1000} />
      </div>
    </div>
  );
}
