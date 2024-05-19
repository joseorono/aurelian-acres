/* this is carl's domain */
import { sound } from '@pixi/sound';
import { betweenZeroAndOne, getRandomlyVariedValue } from '~/lib/math';

export enum SoundNames {
  backgroundMusic = 'backgroundMusic',
  coinClick = 'coinClick',
}

const soundFiles = {
  [SoundNames.backgroundMusic]: 'assets/audio/halo.mp3',
  [SoundNames.coinClick]: 'assets/audio/coin.mp3',
};

class SoundService {
  private static instance: SoundService;

  // We should probably expose the pixi sound object to the rest of the app as an attribute of this class
  // In JavaScript, objects and arrays are passed by reference, so this will not create a new object
  public static soundApi = sound;

  public audioLoaded: boolean;
  public isPreloading: boolean;

  constructor() {
    if (!SoundService.instance) {
      console.log('created new instance of sound service');
      this.audioLoaded = false;
      this.isPreloading = false;
      SoundService.instance = this;
    }
    return SoundService.instance;
  }

  shouldPreload(): boolean {
    return !this.audioLoaded && !this.isPreloading;
  }
  onLoaded() {
    this.audioLoaded = true;
    this.isPreloading = false;
    console.log('sound service loaded successfully');
  }

  async preloadAudios(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log('audioLoaded => ', this.audioLoaded);
      if (!this.shouldPreload()) {
        console.log('sound service is already loaded');
        return;
      }
      try {
        this.isPreloading = true;
        let soundsList: Record<string, string> = {};
        for (const [key, val] of Object.entries(soundFiles)) {
          soundsList[key] = val;
        }
        sound.add(soundsList, {
          preload: true,
          loaded: (_) => {
            this.onLoaded();
            resolve(true);
          },
        });
      } catch (error) {
        console.error('error loading sound service ==> ', error);
        reject(false);
      }
      //  finally {
      //   this.isPreloading = false;
      // }
    });
  }

  playSound(alias: SoundNames, volume: number = 1, variance: number = 0) {
    volume = betweenZeroAndOne(volume, 'volume');
    variance = betweenZeroAndOne(variance, 'variance');

    sound.play(alias, {
      volume: getRandomlyVariedValue(volume, variance),
    });
  }

  startMusic(alias: SoundNames, volume: number = 1) {
    volume = betweenZeroAndOne(volume, 'volume');
    sound.play(alias, {
      volume: volume,
      loop: true,
    });
  }

  stopMusic(alias: SoundNames) {
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

