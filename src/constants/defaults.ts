// Aca ponemos los valores por defecto de las variables que vamos a usar en la aplicacion
/*

Incluyen los valores iniciales de los recursos (0), los valores iniciales de los recursos por segundo (0), 
y los valores iniciales de los costos de los recursos (0)

Valores por default para las opciones como el volumen y si reproducir o no la musica.

*/

type progressToggles = {};

type gameStateSnapshot = {
  musicVolume: number;
  soundVolume: number;
  playMusic: boolean;
  playSound: boolean;
  gold: number;
  stone: number;
  grain: number;
  goldPerSecond: number;
  stonePerSecond: number;
  grainPerSecond: number;
  goldPerClick: number;
  stonePerClick: number;
  grainPerClick: number;
  bonusMultiplier: number;

  progressToggles: progressToggles;
};

const DEFAULT_VALUES: gameStateSnapshot = {
  // Audio Options
  playMusic: true,
  playSound: true,
  soundVolume: 1,
  musicVolume: 1,

  // Resources
  gold: 0,
  stone: 0,
  grain: 0,

  // Passive Income
  goldPerSecond: 0,
  stonePerSecond: 0,
  grainPerSecond: 0,

  // Active Income
  goldPerClick: 1,
  stonePerClick: 0,
  grainPerClick: 0,

  // Bonuses
  bonusMultiplier: 0,

  // Progress Toggles
  progressToggles: {},
} as const;

export const DEFAULT_TOWNDISPLAY_ROWS = 20;
export const DEFAULT_TOWNDISPLAY_COLUMNS = 40;
// Used for probability calculations. Must be float between 0 and 1.
// super low bc we dont have many buildings in the tests
export const TOWN_DENSITY_BIAS = 0.05;

export default DEFAULT_VALUES;

