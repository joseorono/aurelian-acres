import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CounterState {
  countValue: number;
}

interface CounterActions {
  increaseCounter: () => void;
  decreaseCounter: () => void;
  setCounterTo: (value: number) => void;
  sumToCounter: (value: number) => void;
}

export type CounterSlice = CounterState & CounterActions;

export const CreateCounterSlice: StateCreator<CounterSlice> = (set) => ({
  countValue: 0,
  increaseCounter: () => set((state) => ({ countValue: state.countValue + 1 })),
  decreaseCounter: () => set((state) => ({ countValue: state.countValue - 1 })),
  setCounterTo: (value: number) => set(() => ({ countValue: value })),
  sumToCounter: (value: number) => set((state) => ({ countValue: state.countValue + value })),
});
