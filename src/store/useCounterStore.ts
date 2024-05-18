import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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

type CounterStateAndActions = CounterState & CounterActions;

export const useCounterStore = create<CounterStateAndActions>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
        setTo: (value: number) => set(() => ({ count: value })),
        sum: (value: number) => set((state) => ({ count: state.count + value })),
      }),
      {
        // Options
        name: 'romeidle-counter-state',
        version: 1, // a migration will be triggered if the version in the storage mismatches this one
        onRehydrateStorage: (state: CounterStateAndActions) => {
          console.log('Hydration starts');

          // optional
          return (state, error) => {
            // First argument would be "state", but we don't need it
            if (error) {
              // Handle errors if needed
              console.error('an error happened during hydration', error);
              console.log('Failed state:', state);
            } else {
              // post-hydration logic, we could recompute some derived state here or trigger side-effects
              console.log('hydration finished');
            }
          };
        },
      },
    ),
  ),
);
