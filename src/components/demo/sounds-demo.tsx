import { Suspense, useEffect } from 'react';
import { SoundsList, soundService } from '~/services/SoundService';

export default function SoundsDemo() {
  useEffect(() => {
    if (soundService.shouldPreload()) {
      console.log('is gonna preload bro');
      soundService.preloadAudios();
    }
  }, []);

  return (
    <>
      <Suspense fallback={<SoundLoaderDemo />}>
        <h1>Sounds test</h1>
        <button className="btn btn-primary" onClick={() => soundService.playSound(SoundsList.coinClick, 0.8, 0.7)}>
          play coin sound
        </button>
        <button className="btn btn-primary" onClick={() => soundService.startMusic(SoundsList.backgroundMusic, 1)}>
          play trademarked background music
        </button>
        <button className="btn btn-primary" onClick={() => soundService.stopMusic(SoundsList.backgroundMusic)}>
          stop trademarked background music
        </button>
      </Suspense>
    </>
  );
}

export function SoundLoaderDemo() {
  return <div>Loading</div>;
}

