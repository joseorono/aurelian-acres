import { atomWithStorage } from 'jotai/utils';
import { withImmer } from 'jotai-immer';
import {
  UpgradeKeys,
  buildingCount,
  clickerVisualModifiers,
  playerResources,
  workerCount,
} from '~/types/game-data-types';
import { atom } from 'jotai';
import { IModal } from '~/types/dialog-props';

export const playerNameAtom = atomWithStorage<string>('playerName', 'Lucius');
export const playerLevelAtom = atomWithStorage<number>('playerLevel', 0);
export const playerUpgradeAtom = atomWithStorage<UpgradeKeys>('playerUpgrade', 'default');
// atoms for the modal
export const isModalOpenAtom = atom<boolean>(false);
export const modalContentAtom = atom<IModal>({ title: '', subtitle: '', content: null, onClose: () => {} });
export const setContentAtom = atom(null, (_, set, newContent: IModal) => {
  //when you set new content, show modal immediately
  set(modalContentAtom, newContent);
  set(isModalOpenAtom, true);
});

export const buildingsAtom = withImmer(
  atomWithStorage<buildingCount>('buildings', {
    fields: 0,
    quarry: 0,
    bakery: 0,
    forum: 0,
    smithy: 0,
    castra: 0,
    temple: 0,
  }),
);

export const workersAtom = withImmer(
  atomWithStorage<workerCount>('workers', {
    slave: 0,
    agricola: 0,
    miner: 0,
    baker: 0,
    mercator: 0,
    blacksmith: 0,
    legionary: 0,
    priest: 0,
  }),
);
export const resourcesAtom = withImmer(
  atomWithStorage<playerResources>('resources', {
    gold: 0,
    grain: 0,
    stone: 0,
  }),
);

export const eventsAtom = withImmer(
  atomWithStorage<clickerVisualModifiers>('visualModifiers', {
    rainingCoins: false,
    isNight: false,
    goldenOverlay: false,
    isFlood: false,
    bountifulHarvest: false,
  }),
);

// import { buildingKeys, buildingCount } from '~/types/game-data-types';
// interface BuildingState {
//   buildingCount: buildingCount;
// }

// interface BuildingActions {
//   increaseBuilding: (key: buildingKeys, value: number) => void;
//   decreaseBuilding: (key: buildingKeys, value: number) => void;
// }

// export type BuildingSlice = BuildingState & BuildingActions;

// export const CreateBuildingSlice: StateCreator<BuildingSlice> = (set, get) => ({
//   buildingCount: {
//     fields: 0,
//     quarry: 0,
//     bakery: 0,
//     forum: 0,
//     smithy: 0,
//     castra: 0,
//     temple: 0,
//   },
//   increaseBuilding: (key: buildingKeys, value: number) =>
//     set(() => ({ buildingCount: { ...get().buildingCount, [key]: get().buildingCount[key] + value } })),
//   decreaseBuilding: (key: buildingKeys, value: number) =>
//     set(() => ({
//       buildingCount: {
//         ...get().buildingCount,
//         [key]: get().buildingCount[key] - value < 0 ? 0 : get().buildingCount[key] - value,
//       },
//     })),
// });

