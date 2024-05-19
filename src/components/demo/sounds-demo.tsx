import { useEffect } from 'react';
import { SoundService, Sound } from '~/services/SoundService';

export default function SoundsDemo() {
  const sounds = new SoundService();

  useEffect(() => {
    sounds.preloadAudios();
  }, []);
  return (
    <>
      <h1>Sounds test</h1>
      <button className="btn btn-primary" onClick={() => sounds.playSound(Sound.coinClick, 0.8, 0.7)}>
        play coin sound
      </button>
      <button className="btn btn-primary" onClick={() => sounds.startMusic(Sound.backgroundMusic, 1)}>
        play trademarked background music
      </button>
      <button className="btn btn-primary" onClick={() => sounds.stopMusic(Sound.backgroundMusic)}>
        stop trademarked background music
      </button>
    </>
  );
}
