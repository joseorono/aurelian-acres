import { assetsService, assetList } from './assets-service';
import { soundService } from './sound-service';

class LoaderService {
  private static instance: LoaderService;

  public isLoaded: boolean = false;
  public isPreloading: boolean = false;

  constructor() {
    if (!LoaderService.instance) {
      console.log('created new instance of sound service');
      this.isLoaded = false;
      this.isPreloading = false;
      LoaderService.instance = this;
    }
    return LoaderService.instance;
  }

  preloadEverything = async () => {
    return await Promise.all([assetsService.preloadEveryImage(assetList), soundService.preloadAudios()])
      .then((_) => {
        console.log('Everything has been loaded successfully');
        this.isLoaded = true;
      })
      .catch((error) => console.error('error loading something ==> ', error))
      .finally(() => (this.isPreloading = false));
  };

  shouldPreload(): boolean {
    return !this.isLoaded && !this.isPreloading;
  }
}

export const loaderService = new LoaderService();
