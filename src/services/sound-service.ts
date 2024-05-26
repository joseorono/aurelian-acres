/* this is carl's domain */
import { sound } from '@pixi/sound';
import { betweenZeroAndOne, getRandomlyVariedValue } from '~/lib/math';

export enum SoundNames {
  backgroundMusic1 = 'backgroundMusic1',
  backgroundMusic2 = 'backgroundMusic2',
  fanfare = 'fanfare',
  buyMiner = 'buyMiner',
  buySlave = 'buySlave',
  closeModal = 'closeModal',
  click = 'click',
  coinClick = 'coinClick',
  upgrade = 'upgrade',
}

const soundFiles = {
  [SoundNames.backgroundMusic1]: 'assets/audio/bgm1.mp3',
  [SoundNames.backgroundMusic2]: 'assets/audio/bgm2.wav',
  [SoundNames.fanfare]: 'assets/audio/fanfare.wav',
  [SoundNames.buyMiner]: 'assets/audio/buyMiner.wav',
  [SoundNames.buySlave]: 'assets/audio/buySlave.wav',
  [SoundNames.closeModal]: 'assets/audio/closeModal.mp3',
  [SoundNames.click]: 'assets/audio/click.mp3',
  [SoundNames.coinClick]: 'assets/audio/coin.mp3',
  [SoundNames.upgrade]: 'assets/audio/upgrade.mp3',
};

class SoundService {
  private static instance: SoundService;

  // We should probably expose the pixi sound object to the rest of the app as an attribute of this class
  // In JavaScript, objects and arrays are passed by reference, so this will not create a new object
  public static soundApi = sound;

  public audioLoaded: boolean;
  public isPreloading: boolean;
  public globalVolume: number; //between 0 and 1;

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

  isMuted(): boolean {
    return sound.context.muted;
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
            this.audioLoaded = true;
            this.isPreloading = false;
            console.log('sound service loaded successfully');
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
    //sets current sounds volume
    sound.volumeAll = volume;
    //sets following sounds maximum volume;
    sound.context.volume = volume;
  }

  muteAll() {
    sound.muteAll();
  }

  unmuteAll() {
    sound.unmuteAll();
  }
}

export const soundService = new SoundService();

