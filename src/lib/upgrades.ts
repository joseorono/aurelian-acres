import { LEVELS, LEVELS_COUNT } from '~/constants/upgrades';
import { playerResources } from '~/types/game-data-types';

export function canAffordNextLevel(currentLevel: number, res: playerResources): boolean {
  // Exit early
  if (currentLevel + 1 >= LEVELS_COUNT) {
    return false;
  }

  if (
    res.gold >= LEVELS[currentLevel + 1].costGold &&
    res.grain >= LEVELS[currentLevel + 1].costGrain &&
    res.stone >= LEVELS[currentLevel + 1].costStone
  ) {
    return true;
  }

  return false;
}
