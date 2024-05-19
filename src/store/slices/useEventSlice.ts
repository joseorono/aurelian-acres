import { StateCreator } from 'zustand';
import { clickerVisualModifiers } from '~/types/game-data-types';

interface EventState {
  visualModifiers: clickerVisualModifiers;
}

interface EventActions {}

export type EventSlice = EventState & EventActions;

export const CreateEventSlice: StateCreator<EventSlice> = () => ({
  visualModifiers: {
    rainingCoins: false,
    isNight: false,
    goldenOverlay: false,
    isFlood: false,
    //bountifulHarvest: false, // raining wheat animation
  },
});

