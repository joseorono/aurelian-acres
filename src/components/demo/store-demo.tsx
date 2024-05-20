import { useStore } from '~/store/useStore';
const nameArray = ['Lucius', 'Augustus', 'Aurelius', 'Josephus', 'Carlus', 'Eduardus'];
function StoreExample() {
  const counterStore = useStore();

  return (
    <div className="mx-auto w-1/2 text-center">
      <div className="my-3 p-2 text-center text-2xl">
        Name is
        <div className="text-center text-5xl">{counterStore.playerName}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => counterStore.setPlayerName(nameArray[Math.floor(Math.random() * nameArray.length)])}
        >
          Random Name
        </button>
      </p>
      <div className="my-3 p-2 text-center text-2xl">
        Temples
        <div className="text-center text-5xl">{counterStore.buildingCount.temple}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => counterStore.increaseBuilding('temple', 1)}
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => counterStore.decreaseBuilding('temple', 1)}
        >
          -
        </button>
      </p>
      <div className="my-3 p-2 text-center text-2xl">Passive Income:</div>
      <div className="text-center">
        {counterStore.getPassiveIncome().goldPerSecond}🪙 per second, {counterStore.getPassiveIncome().grainPerSecond}🌾
        per second, {counterStore.getPassiveIncome().stonePerSecond} 🪨 per second
      </div>
      <div className="my-3 p-2 text-center text-2xl">
        Slaves
        <div className="text-center text-5xl">{counterStore.workerCount.slave}</div>
      </div>
      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => counterStore.increaseWorker('slave', 1)}
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => counterStore.decreaseWorker('slave', 1)}
        >
          -
        </button>
      </p>

      <div className="my-3 p-2 text-center text-2xl">Active Income:</div>
      <div className="text-center">
        {counterStore.getActiveIncome().goldPerClick}🪙 per click, {counterStore.getActiveIncome().grainPerClick}🌾 per
        click, {counterStore.getActiveIncome().stonePerClick} 🪨 per click
      </div>
    </div>
  );
}

export default StoreExample;

