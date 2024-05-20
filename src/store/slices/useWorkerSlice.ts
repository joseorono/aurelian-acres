import { StateCreator } from 'zustand';
import { workerKeys, workerMap, workerCount } from '~/types/game-data-types';
import { WORKERS } from '~/constants/workers';

interface WorkerState {
  workerCount: workerCount;
}

interface WorkerActions {
  increaseWorker: (key: workerKeys, value: number) => void;
  decreaseWorker: (key: workerKeys, value: number) => void;
  getActiveIncome: () => {
    goldPerClick: number;
    grainPerClick: number;
    stonePerClick: number;
  };
}

export type WorkerSlice = WorkerState & WorkerActions;
export const CreateWorkerSlice: StateCreator<WorkerSlice> = (set, get) => ({
  workerCount: {
    slave: 0,
    agricola: 0,
    miner: 0,
    baker: 0,
    mercator: 0,
    blacksmith: 0,
    legionary: 0,
    priest: 0,
  },
  increaseWorker: (key: workerKeys, value: number) =>
    set(() => ({ workerCount: { ...get().workerCount, [key]: get().workerCount[key] + value } })),
  decreaseWorker: (key: workerKeys, value: number) =>
    set(() => ({
      workerCount: {
        ...get().workerCount,
        [key]: get().workerCount[key] - value < 0 ? 0 : get().workerCount[key] - value,
      },
    })),
  getActiveIncome: () => {
    let workers = get().workerCount;
    let workersArray = Object.entries(workers);
    let accumulatedGoldPerClick = 0;
    let accumulatedGrainPerClick = 0;
    let accumulatedStonePerClick = 0;
    for (let [key, value] of workersArray) {
      if (value == 0) continue;
      accumulatedGoldPerClick += WORKERS[key as keyof workerMap].goldPerClick * value;
      accumulatedGrainPerClick += WORKERS[key as keyof workerMap].grainPerClick * value;
      accumulatedStonePerClick += WORKERS[key as keyof workerMap].stonePerClick * value;
    }
    return {
      goldPerClick: accumulatedGoldPerClick,
      grainPerClick: accumulatedGrainPerClick,
      stonePerClick: accumulatedStonePerClick,
    };
  },
});

