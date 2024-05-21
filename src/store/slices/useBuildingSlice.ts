import { StateCreator } from 'zustand';
import { buildingKeys, buildingCount } from '~/types/game-data-types';
interface BuildingState {
  buildingCount: buildingCount;
}

interface BuildingActions {
  increaseBuilding: (key: buildingKeys, value: number) => void;
  decreaseBuilding: (key: buildingKeys, value: number) => void;
}

export type BuildingSlice = BuildingState & BuildingActions;

export const CreateBuildingSlice: StateCreator<BuildingSlice> = (set, get) => ({
  buildingCount: {
    fields: 0,
    quarry: 0,
    bakery: 0,
    forum: 0,
    smithy: 0,
    castra: 0,
    temple: 0,
  },
  increaseBuilding: (key: buildingKeys, value: number) =>
    set(() => ({ buildingCount: { ...get().buildingCount, [key]: get().buildingCount[key] + value } })),
  decreaseBuilding: (key: buildingKeys, value: number) =>
    set(() => ({
      buildingCount: {
        ...get().buildingCount,
        [key]: get().buildingCount[key] - value < 0 ? 0 : get().buildingCount[key] - value,
      },
    })),
});

