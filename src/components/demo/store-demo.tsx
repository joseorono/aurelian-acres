import { useStore } from '~/store/useStore';
const nameArray = ['Lucius', 'Augustus', 'Aurelius', 'Iosephus', 'Carolus', 'Eduardus'];
import { calculateActiveIncome, calculatePassiveIncome } from '~/lib/resources';
function StoreExample() {
  const gameStore = useStore();
  const passiveIncome = calculatePassiveIncome(useStore().buildingCount, gameStore.currentUpgrade);
  const activeIncome = calculateActiveIncome(useStore().workerCount, gameStore.currentUpgrade);

  return (
    <div className="mx-auto w-1/2 text-center">
      <div className="my-3 p-2 text-center text-2xl">
        Name is
        <div className="text-center text-5xl">{gameStore.playerName}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => gameStore.setPlayerName(nameArray[Math.floor(Math.random() * nameArray.length)])}
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
              🪙: {gameStore.resourceCount.gold}, 🌾: {gameStore.resourceCount.grain}, 🪨:{' '}
              {gameStore.resourceCount.stone}
            </div>
          </div>
        </div>
        <p className="text-center">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => gameStore.increaseResource('gold', 1)}
          >
            More gold
          </button>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => gameStore.decreaseResource('gold', 1)}
          >
            Less gold
          </button>
        </p>
      </div>
      <div className="my-3 p-2 text-center text-2xl">
        Temples
        <div className="text-center text-5xl">{gameStore.buildingCount.temple}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => gameStore.increaseBuilding('temple', 1)}
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => gameStore.decreaseBuilding('temple', 1)}
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
        <div className="text-center text-5xl">{gameStore.workerCount.slave}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => gameStore.increaseWorker('slave', 1)}
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => gameStore.decreaseWorker('slave', 1)}
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

