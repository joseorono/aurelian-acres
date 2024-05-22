import { StateCreator } from 'zustand';
import { clickerVisualModifiers } from '~/types/game-data-types';

interface EventState {
  visualModifiers: clickerVisualModifiers;
}

interface EventActions {}

export type EventSlice = EventState & EventActions;

export const CreateEventSlice: StateCreator<EventSlice> = (set) => ({
  visualModifiers: {
    rainingCoins: false,
    isNight: false,
    goldenOverlay: false,
    isFlood: false,
    bountifulHarvest: false,
  },
  // Set Modifier by Key
  setMultipliers: (values: clickerVisualModifiers) => set(() => ({ visualModifiers: values })),
});
