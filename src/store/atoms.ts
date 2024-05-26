import { atomWithStorage } from 'jotai/utils';
import { withImmer } from 'jotai-immer';
import { atom } from 'jotai';

import {
  UpgradeKeys,
  buildingCount,
  clickerVisualModifiers,
  eventData,
  playerResources,
  workerCount,
} from '~/types/game-data-types';
import { IModal } from '~/types/dialog-props';
import { NOTHING_EVENT } from '~/constants/events';
import { getRandomRomanName, getRandomRomanTownName } from '~/lib/utils';

//music atoms
export const isMutedAtom = atomWithStorage<boolean>('isMuted', false);
export const volumeAtom = atomWithStorage<number>('volume', 1);
//player atoms
export const playerNameAtom = atomWithStorage<string>('playerName', getRandomRomanName());
export const townNameAtom = atomWithStorage<string>('townName', getRandomRomanTownName());
export const playerLevelAtom = atomWithStorage<number>('playerLevel', 0);
export const playerUpgradeAtom = atomWithStorage<UpgradeKeys>('playerUpgrade', 'default');
export const firstTimeAtom = atomWithStorage<boolean>('firstTime', true);
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

export const visualModifiersAtom = withImmer(
  atomWithStorage<clickerVisualModifiers>('visualModifiers', {
    rainingCoins: false,
    isNight: false,
    goldenOverlay: false,
    isFlood: false,
    bountifulHarvest: false,
  }),
);

export const eraserAtom = atom(null, (_, set, __) => {
  set(buildingsAtom, {
    fields: 0,
    quarry: 0,
    bakery: 0,
    forum: 0,
    smithy: 0,
    castra: 0,
    temple: 0,
  });
  set(workersAtom, {
    slave: 0,
    agricola: 0,
    miner: 0,
    baker: 0,
    mercator: 0,
    blacksmith: 0,
    legionary: 0,
    priest: 0,
  });
  set(resourcesAtom, {
    gold: 0,
    grain: 0,
    stone: 0,
  });
  set(visualModifiersAtom, {
    rainingCoins: false,
    isNight: false,
    goldenOverlay: false,
    isFlood: false,
    bountifulHarvest: false,
  });
  set(firstTimeAtom, true);
});

export const eventsAtom = withImmer(atomWithStorage<eventData>('event', NOTHING_EVENT));
