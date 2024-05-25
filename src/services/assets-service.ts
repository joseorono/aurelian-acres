// No sé si sea lo más optimo, pero se me ocurre que se podrían pre-cargar los assets de la siguiente manera:
// const preloadin = await preloadEveryImage(['img1.jpg', 'img2.jpg'])

export const assetList: string[] = [
  // '/fonts/Minimal3x5.ttf',
  // '/fonts/Minimal5x5Monospaced.ttf',
  // '/fonts/Minimal5x7.ttf',
  '/favicon.png',
  // Add more assets here
];

class AssetsService {
  private static instance: AssetsService;
  public isPreloading: boolean;
  public assetsLoaded: boolean;

  constructor() {
    if (!AssetsService.instance) {
      console.log('created new instance of AssetsService');
      this.isPreloading = false;
      this.assetsLoaded = false;
      AssetsService.instance = this;
    }
    return AssetsService.instance;
  }

  shouldPreload(): boolean {
    return !this.assetsLoaded && !this.isPreloading;
  }

  preloadImage = (src: string) =>
    new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });

  preloadEveryImage = async (srcs: string[]) => {
    if (!this.shouldPreload()) {
      console.log('assets service is already loaded');
      return;
    }
    this.isPreloading = true;
    await Promise.all(srcs.map(this.preloadImage))
      .then((_) => {
        console.log('all assets loaded successfully');
        this.assetsLoaded = true;
      })
      .catch((error) => console.error('error loading sound service ==> ', error))
      .finally(() => (this.isPreloading = false));
  };
}

export const assetsService = new AssetsService();

