//This will be called like this
// <BigClickyButton modifiers={visualModifiers} />

import { useAtom, useAtomValue } from 'jotai';
import { calculateActiveIncome } from '~/lib/resources';
import { SoundNames, soundService } from '~/services/sound-service';
import { workersAtom, playerUpgradeAtom, playerLevelAtom, resourcesAtom } from '~/store/atoms';
import { clickerVisualModifiers } from '~/types/game-data-types';
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
      src="/assets/biggest-coin.png"
      id="big-clicky-button"
      className={'mx-auto block w-full max-w-[60%] cursor-pointer select-auto ' + addClasses}
      onDrag={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onMouseDown={() => {
        soundService.playSound(SoundNames.coinClick, 0.6, 0.7);
        setResource((resourcesDraft) => {
          Object.assign(resourcesDraft, {
            gold: resourcesDraft.gold + activeIncome.goldPerClick,
            grain: resourcesDraft.grain + activeIncome.grainPerClick,
            stone: resourcesDraft.stone + activeIncome.stonePerClick,
          });
        });
      }}
    />
  );
}
