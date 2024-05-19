import { StateCreator } from 'zustand';
import { playerResources } from '~/types/game-data-types';

interface PlayerState {
  playerName: string;
  resourceCount: playerResources;
}

interface PlayerActions {
  setPlayerName: (value: string) => void;
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
  setPlayerName: (value: string) => set(() => ({ playerName: value })),
  increaseResource: (key: keyof playerResources, value: number) => {
    let res = get();
    res.resourceCount[key] = res.resourceCount[key] + value;
    set(res);
  },

  decreaseResource: (key: keyof playerResources, value: number) => {
    let res = get();
    res.resourceCount[key] = res.resourceCount[key] + value == 0 ? 0 : res.resourceCount[key] - value;
    set(res);
  },
});

