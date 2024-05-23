//This will be called like this
// <BigClickyButton modifiers={visualModifiers} />

import { clickerVisualModifiers } from '~/types/game-data-types';

export default function BigClickyButton(props: { modifiers: clickerVisualModifiers }) {
  const { rainingCoins, isNight, goldenOverlay, isFlood, bountifulHarvest } = props.modifiers;

  return (
    <button
      className={`
            big-clicky-button
            ${rainingCoins ? 'raining-coins' : ''}
            ${isNight ? 'is-night' : ''}
            ${goldenOverlay ? 'golden-overlay' : ''}
            ${isFlood ? 'is-flood' : ''}
            ${bountifulHarvest ? 'bountiful-harvest' : ''}
        `}
    >
      Click Me
    </button>
  );
}
