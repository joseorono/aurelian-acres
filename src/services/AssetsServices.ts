// No sé si sea lo más optimo, pero se me ocurre que se podrían pre-cargar los assets de la siguiente manera:
// const preloadin = await preloadAll(['img1.jpg', 'img2.jpg'])

export const assetList: string[] = [
  '/fonts/Minimal3x5.ttf',
  '/fonts/Minimal5x5Monospaced.ttf',
  '/fonts/Minimal5x7.ttf',
  '/favicon.png',
  // Add more assets here
];

export const preloadAsset = (src: string) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });

export const preloadAll = (srcs: string[]) => Promise.all(srcs.map(preloadAsset));
