import { soundAsset } from '@pixi/sound';
import { useAtom, useAtomValue } from 'jotai';
import { canAffordNextLevel } from '~/lib/upgrades';
import { SoundNames, soundService } from '~/services/sound-service';
import { playerLevelAtom, resourcesAtom } from '~/store/atoms';

export default function PlayerLevelUpgrades() {
  const [playerLevel, setPlayerLevel] = useAtom(playerLevelAtom);
  const [resources, setResources] = useAtom(resourcesAtom);

  const canUpgrade = canAffordNextLevel(playerLevel, resources);

  const handleUpgrade = () => {
    console.log('handle buy');

    if (!canUpgrade) {
      return;
    }

    setPlayerLevel(playerLevel + 1);
    setResources({ ...resources, gold: resources.gold - 100 });
    soundService.playSound(SoundNames.upgrade, Math.min(soundService.globalVolume - 0.3, 0));
  };

  return (
    <div className="bg-blue-noise flex items-center justify-center p-4 text-center">
      <h1 className="text-3xl text-white">Your Level: {playerLevel}</h1>

      <button
        className="store__buyButton mt-2 w-full uppercase"
        type="button"
        disabled={!canUpgrade}
        onClick={() => handleUpgrade()}
      >
        Level Up
      </button>
    </div>
  );
}
