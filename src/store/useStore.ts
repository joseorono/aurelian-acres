import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import DEFAULT_VALUES from '~/constants/defaults';

import { CounterSlice, CreateCounterSlice } from './slices/useCounterSlice';

//El type que se pasa a create es la union de todos los slices con &
// Agregar aquí los slices que se creen en el proyecto
export type GameStore = CounterSlice;

// Esta es la Store principal que necesita tener el middleware, los slices no necesitan tener el middleware
export const useStore = create<GameStore>()(
  devtools(
    persist(
      (...set) => ({
        // We spread ALL the slices here
        ...CreateCounterSlice(...set), // This slice is just for testing, we could comment it out later
      }),
      {
        // Options
        name: 'romeidle-game-state',
        version: 1, // a migration will be triggered if the version in the storage mismatches this one
        onRehydrateStorage: (state: GameStore) => {
          console.log('Hydration starts');
          console.log('state: ', state);

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
