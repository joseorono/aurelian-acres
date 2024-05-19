import { Suspense, useEffect, useState } from 'react';
import { SoundNames, soundService } from '~/services/sound-service';

export default function SoundsDemo() {
  const [isMuted, setIsMuted] = useState(false);
  useEffect(() => {
    if (soundService.shouldPreload()) {
      soundService.preloadAudios().then((val) => console.log('preload promise response ', val));
    }
    setIsMuted(soundService.isMuted());
  }, []);

  const setMuted = () => {
    !isMuted ? soundService.muteAll() : soundService.unmuteAll();
    setIsMuted(!isMuted);
  };

  return (
    <>
      <Suspense fallback={<SoundLoaderDemo />}>
        <h1>Sounds test</h1>
        <button className="btn btn-primary" onClick={() => soundService.playSound(SoundNames.coinClick, 0.8, 0.7)}>
          play coin sound
        </button>
        <button className="btn btn-primary" onClick={() => soundService.startMusic(SoundNames.backgroundMusic, 1)}>
          play trademarked background music
        </button>
        <button className="btn btn-primary" onClick={() => soundService.stopMusic(SoundNames.backgroundMusic)}>
          stop trademarked background music
        </button>
        <button className="btn btn-primary" onClick={setMuted}>
          {!isMuted ? 'mute' : 'unmute'}
        </button>
        <button className="btn btn-primary" onClick={() => soundService.setGlobalVolume(0.1)}>
          set global volume to 10%
        </button>
        <button className="btn btn-primary" onClick={() => soundService.setGlobalVolume(1)}>
          set global volume to 100%
        </button>
      </Suspense>
    </>
  );
}

export function SoundLoaderDemo() {
  return <div>Loading</div>;
}

