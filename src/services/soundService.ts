/* this is carl's domain */
import { sound } from '@pixi/sound';
import { betweenZeroAndOne, getRandomlyVariedValue } from '~/lib/math';

export enum SoundsList {
  backgroundMusic = 'backgroundMusic',
  coinClick = 'coinClick',
}

class SoundService {
  private static instance: SoundService;
  // We should probably expose the pixi sound object to the rest of the app as an attribute of this class
  // In JavaScript, objects and arrays are passed by reference, so this will not create a new object
  public static soundApi = sound;

  public audioPreloaded: boolean;
  public isPreloading: boolean;

  constructor() {
    if (!SoundService.instance) {
      console.log('created new instance of sound service');
      this.audioPreloaded = false;
      this.isPreloading = false;
      this.preloadAudios();
      SoundService.instance = this;
    }
    return SoundService.instance;
  }

  isAudioPreloaded() {
    return this.audioPreloaded;
  }

  shouldPreload(): boolean {
    return !this.isAudioPreloaded && !this.isPreloading;
  }

  async preloadAudios(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log('audioPreloaded => ', this.audioPreloaded);
      if (!this.shouldPreload()) {
        console.log('sound service is already loaded');
        return;
      }
      try {
        this.isPreloading = true;
        sound.add(
          {
            [SoundsList.backgroundMusic]: 'assets/audio/halo.mp3',
            [SoundsList.coinClick]: 'assets/audio/coin.mp3',
          },
          {
            preload: true,
            loaded: (_) => {
              this.audioPreloaded = true;
              this.isPreloading = false;
              console.log('sound service loaded successfully');
              console.log('audioPreloaded => ', this.audioPreloaded);
              return resolve(true);
            },
          },
        );
      } catch (error) {
        console.error('error loading sound service ==> ', error);
        return reject(false);
      }
    });
  }

  playSound(alias: SoundsList, volume: number = 1, variance: number = 0) {
    volume = betweenZeroAndOne(volume, 'volume');
    variance = betweenZeroAndOne(variance, 'variance');

    sound.play(alias, {
      volume: getRandomlyVariedValue(volume, variance),
    });
  }

  startMusic(alias: SoundsList, volume: number = 1) {
    volume = betweenZeroAndOne(volume, 'volume');
    sound.play(alias, {
      volume: volume,
      loop: true,
    });
  }

  stopMusic(alias: SoundsList) {
    sound.stop(alias);
  }

  setGlobalVolume(volume: number) {
    volume = betweenZeroAndOne(volume, 'volume');
    sound.volumeAll = volume;
  }

  muteAll() {
    sound.muteAll();
  }

  unmuteAll() {
    sound.unmuteAll();
  }
}

export const soundService = new SoundService();

