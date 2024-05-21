import { StateCreator } from 'zustand';
import { workerKeys, workerCount } from '~/types/game-data-types';

interface WorkerState {
  workerCount: workerCount;
}

interface WorkerActions {
  increaseWorker: (key: workerKeys, value: number) => void;
  decreaseWorker: (key: workerKeys, value: number) => void;
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
});

