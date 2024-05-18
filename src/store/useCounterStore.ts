import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState: CounterState = {
  count: 0,
};

type CounterState = {
  count: number;
};

type CounterActions = {
  increase: () => void;
  decrease: () => void;
  setTo: (value: number) => void;
  sum: (value: number) => void;
};

export const useCounterStore = create<CounterState & CounterActions>()(
  devtools((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    setTo: (value: number) => set(() => ({ count: value })),
    sum: (value: number) => set((state) => ({ count: state.count + value })),
  })),
);
