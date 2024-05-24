//This will be called like this
// <BigClickyButton modifiers={visualModifiers} />

import { useAtom, useAtomValue } from 'jotai';
import { calculateActiveIncome } from '~/lib/resources';
import { workersAtom, playerUpgradeAtom, playerLevelAtom, resourcesAtom } from '~/store/atoms';
import { clickerVisualModifiers } from '~/types/game-data-types';

import spriteClicker from '@/assets/star.png';

function visualModifiersToClasses(modifiers: clickerVisualModifiers): string {
  return `
    big-clicky-button 
    ${modifiers.rainingCoins ? 'raining-coins ' : ''}
    ${modifiers.isNight ? 'is-night ' : ''}
    ${modifiers.goldenOverlay ? 'golden-overlay ' : ''}
    ${modifiers.isFlood ? 'is-flood ' : ''}
    ${modifiers.bountifulHarvest ? 'bountiful-harvest ' : ''}
  `;
}

export default function BigClickyButton(props: { modifiers: clickerVisualModifiers }) {
  //const { rainingCoins, isNight, goldenOverlay, isFlood, bountifulHarvest } = props.modifiers;
  const [, setResource] = useAtom(resourcesAtom);
  const workers = useAtomValue(workersAtom);
  const upgrade = useAtomValue(playerUpgradeAtom);
  const playerLevel = useAtomValue(playerLevelAtom);

  const activeIncome = calculateActiveIncome(workers, upgrade, playerLevel);
  const addClasses = visualModifiersToClasses(props.modifiers);

  return (
    <img
      src={spriteClicker}
      id="big-clicky-button"
      className={'mx-auto block w-full max-w-[75%] cursor-pointer' + addClasses}
      onClick={() => {
        setResource((resourcesDraft) => {
          Object.assign(resourcesDraft, {
            gold: resourcesDraft.gold + activeIncome.goldPerClick + 1,
            grain: resourcesDraft.grain + activeIncome.grainPerClick,
            stone: resourcesDraft.stone + activeIncome.stonePerClick,
          });
        });
      }}
    />
  );
}

