import { StateCreator } from 'zustand';
import { playerResources, UpgradeKeys } from '~/types/game-data-types';
interface PlayerState {
  playerName: string;
  baseMultiplier: number;
  resourceCount: playerResources;
  currentUpgrade: UpgradeKeys;
}

interface PlayerActions {
  setPlayerName: (value: string) => void;
  setBaseMultiplier: (value: number) => void;
  increaseResource: (key: keyof playerResources, value: number) => void;
  decreaseResource: (key: keyof playerResources, value: number) => void;
}

export type PlayerSlice = PlayerState & PlayerActions;

export const CreatePlayerSlice: StateCreator<PlayerSlice> = (set, get) => ({
  playerName: 'Lucius',
  resourceCount: {
    gold: 0,
    stone: 0,
    grain: 0,
  },
  baseMultiplier: 1,

  setBaseMultiplier: (value: number) => set(() => ({ baseMultiplier: value })),

  setPlayerName: (value: string) => set(() => ({ playerName: value })),
  increaseResource: (key: keyof playerResources, value: number) =>
    set(() => ({
      resourceCount: {
        ...get().resourceCount,
        [key]: get().resourceCount[key] + value,
      },
    })),

  decreaseResource: (key: keyof playerResources, value: number) =>
    set(() => ({
      resourceCount: {
        ...get().resourceCount,
        [key]: get().resourceCount[key] - value < 0 ? 0 : get().resourceCount[key] - value,
      },
    })),
});

