import { StateCreator } from 'zustand';
import { buildingKeys, buildingMap, buildingCount } from '~/types/game-data-types';
import { BUILDINGS } from '~/constants/buildings';
interface BuildingState {
  buildingCount: buildingCount;
}

interface BuildingActions {
  increaseBuilding: (key: buildingKeys, value: number) => void;
  decreaseBuilding: (key: buildingKeys, value: number) => void;
  getPassiveIncome: () => {
    goldPerSecond: number;
    grainPerSecond: number;
    stonePerSecond: number;
  };
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

  getPassiveIncome: () => {
    let buildings = get().buildingCount;
    let buildingsArray = Object.entries(buildings);
    let accumulatedGoldPerSecond = 0;
    let accumulatedGrainPerSecond = 0;
    let accumulatedStoneGoldPerSecond = 0;
    for (let [key, value] of buildingsArray) {
      if (value == 0) continue;
      accumulatedGoldPerSecond += BUILDINGS[key as keyof buildingMap].goldPerSecond * value;
      accumulatedGrainPerSecond += BUILDINGS[key as keyof buildingMap].grainPerSecond * value;
      accumulatedStoneGoldPerSecond += BUILDINGS[key as keyof buildingMap].stonePerSecond * value;
      console.log(key, value);
    }

    return {
      goldPerSecond: accumulatedGoldPerSecond,
      grainPerSecond: accumulatedGrainPerSecond,
      stonePerSecond: accumulatedStoneGoldPerSecond,
    };
  },
});

