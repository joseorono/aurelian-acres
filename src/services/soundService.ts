/* this is carl's domain */
import { sound } from '@pixi/sound';
import { getRandomlyVariedValue } from '~/lib/math';

export enum Sound {
  backgroundMusic = 'backgroundMusic',
  coinClick = 'coinClick',
}

export class SoundService {
  private static instance: SoundService;
  // We should probably expose the pixi sound object to the rest of the app as an attribute of this class
  // In JavaScript, objects and arrays are passed by reference, so this will not create a new object
  public static soundApi = sound;

  private audioPreloaded: boolean;
  private isPreloading: boolean;

  constructor() {
    if (!SoundService.instance) {
      console.log('created new instance of sound service');
      this.audioPreloaded = false;
      this.isPreloading = false;
      SoundService.instance = this;
    }
    return SoundService.instance;
  }

  isAudioPreloaded() {
    return this.audioPreloaded;
  }

  async preloadAudios(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.audioPreloaded || this.isPreloading) {
        console.log('sound service is already loaded');
        return resolve(true);
      }
      this.isPreloading = true;
      try {
        sound.add(
          {
            [Sound.backgroundMusic]: 'assets/audio/halo.mp3',
            [Sound.coinClick]: 'assets/audio/coin.mp3',
          },
          {
            preload: true,
            loaded: (_) => {
              this.audioPreloaded = true;
              this.isPreloading = false;
              console.log('sound service loaded successfully');
              console.log(this.audioPreloaded);
              console.log(this.isPreloading);
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

  playSound(alias: Sound, volume: number = 1, variance: number = 0) {
    this.betweenZeroAndOne('volume', volume);
    this.betweenZeroAndOne('variance', variance);

    sound.play(alias, {
      volume: getRandomlyVariedValue(volume, variance),
    });
  }

  startMusic(alias: Sound, volume: number = 1) {
    this.betweenZeroAndOne('volume', volume);
    sound.play(alias, {
      volume: volume,
      loop: true,
    });
  }

  stopMusic(alias: Sound) {
    sound.stop(alias);
  }

  setGlobalVolume(volume: number) {
    this.betweenZeroAndOne('volume', volume);
    sound.volumeAll = volume;
  }

  muteAll() {
    sound.muteAll();
  }

  unmuteAll() {
    sound.unmuteAll();
  }

  private betweenZeroAndOne(arg: string, value: number) {
    if (value > 1) {
      throw new Error(`${arg} must be a value between 0 and 1`);
    }
    return;
  }
}
