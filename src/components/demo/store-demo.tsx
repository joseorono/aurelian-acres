const nameArray = ['Lucius', 'Augustus', 'Aurelius', 'Iosephus', 'Carolus', 'Eduardus'];
import { calculateActiveIncome, calculatePassiveIncome } from '~/lib/resources';
import { useAtom, useAtomValue } from 'jotai';
import {
  buildingsAtom,
  workersAtom,
  resourcesAtom,
  playerNameAtom,
  playerUpgradeAtom,
  playerLevelAtom,
} from '~/store/atoms';

function StoreExample() {
  const [buildings, setBuilding] = useAtom(buildingsAtom);
  const [workers, setWorker] = useAtom(workersAtom);
  const [resources, setResource] = useAtom(resourcesAtom);
  const [playerName, setPlayerName] = useAtom(playerNameAtom);
  const playerLevel = useAtomValue(playerLevelAtom);
  const upgrade = useAtomValue(playerUpgradeAtom);
  const passiveIncome = calculatePassiveIncome(buildings, upgrade, playerLevel);
  const activeIncome = calculateActiveIncome(workers, upgrade, playerLevel);
  return (
    <div className="mx-auto w-1/2 text-center">
      <div className="my-3 p-2 text-center text-2xl">
        Name is
        <div className="text-center text-5xl">{playerName}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => setPlayerName(nameArray[Math.floor(Math.random() * nameArray.length)])}
        >
          Random Name
        </button>
      </p>
      <div className="mx-auto w-1/2 text-center">
        <div className="my-3 p-2 text-center text-2xl">
          Current resources
          <div className="text-center text-5xl">
            {' '}
            <div className="text-center text-2xl">
              🪙: {resources.gold}, 🌾: {resources.grain}, 🪨: {resources.stone}
            </div>
          </div>
        </div>
        <p className="text-center">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => {
              setResource((resourcesDraft) => {
                resourcesDraft.gold += 1;
              });
            }}
          >
            More gold
          </button>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => {
              setResource((resourcesDraft) => {
                resourcesDraft.gold -= 1;
              });
            }}
          >
            Less gold
          </button>
        </p>
      </div>
      <div className="my-3 p-2 text-center text-2xl">
        Temples
        <div className="text-center text-5xl">{buildings.temple}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => {
            setBuilding((buildingsDraft) => {
              buildingsDraft.temple += 1;
            });
          }}
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => {
            setBuilding((buildingsDraft) => {
              buildingsDraft.temple - 1 < 0 ? 0 : (buildingsDraft.temple -= 1);
            });
          }}
        >
          -
        </button>
      </p>
      <div className="my-3 p-2 text-center text-2xl">Passive Income:</div>
      <div className="text-center text-2xl">
        {passiveIncome!.goldPerSecond}🪙 per second, {passiveIncome!.grainPerSecond}🌾 per second,{' '}
        {passiveIncome!.stonePerSecond} 🪨 per second
      </div>
      <div className="my-3 p-2 text-center text-2xl">
        Slaves
        <div className="text-center text-5xl">{workers.slave}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => {
            setWorker((workersDraft) => {
              workersDraft.slave += 1;
            });
          }}
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => {
            setWorker((workersDraft) => {
              workersDraft.slave - 1 < 0 ? (workersDraft.slave = 0) : (workersDraft.slave -= 1);
            });
          }}
        >
          -
        </button>
      </p>

      <div className="my-3 p-2 text-center text-2xl">Active Income:</div>
      <div className="text-center text-2xl">
        {activeIncome!.goldPerClick}🪙 per click, {activeIncome!.grainPerClick}🌾 per click,{' '}
        {activeIncome!.stonePerClick} 🪨 per click
      </div>
    </div>
  );
}

export default StoreExample;

