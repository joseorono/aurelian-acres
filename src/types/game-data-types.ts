export type playerResources = {
  gold: number;
  grain: number;
  stone: number;
};

export type priceData = {
  costGold: number;
  costGrain: number;
  costStone: number;
};

export type passiveIncomeData = {
  goldPerSecond: number;
  grainPerSecond: number;
  stonePerSecond: number;
};

export type activeIncomeData = {
  goldPerClick: number;
  grainPerClick: number;
  stonePerClick: number;
};
/* 
======================================
            Buildings 
======================================
*/

export type buildingData = {
  id: number;
  name: string;
  description: string;
  goldPerSecond: number;
  grainPerSecond: number;
  stonePerSecond: number;
  //TODO: unlock requirements?
} & priceData;

export type buildingKeys = 'fields' | 'quarry' | 'bakery' | 'forum' | 'smithy' | 'castra' | 'temple';

export type buildingMap = {
  [key in buildingKeys]: buildingData;
};

export type buildingCount = {
  [key in buildingKeys]: number;
};

/* 
======================================
            Workers 
======================================
*/

export type workerData = {
  id: number;
  name: string;
  description: string;
  goldPerClick: number;
  grainPerClick: number;
  stonePerClick: number;
} & priceData;

export type workerKeys = 'slave' | 'agricola' | 'miner' | 'baker' | 'mercator' | 'blacksmith' | 'legionary' | 'priest';

export type workerMap = {
  [key in workerKeys]: workerData;
};

export type workerCount = {
  [key in workerKeys]: number;
};

/* 
======================================
        Upgrades   
======================================
*/

export type playerLevelData = {
  baseMultiplier: number;
} & priceData;

export type upgradeData = {
  id: number;
  name: string;
  description: string;
  goldMultiplier: number;
  grainMultiplier: number;
  stoneMultiplier: number;
} & priceData;

export type UpgradeKeys =
  | 'default'
  | 'goldenEagleStandard'
  | 'ceresBlessing'
  | 'templeOfJupiter'
  | 'aqueductExpansion'
  | 'vulcansForge'
  | 'roadExpansion'
  | 'forumMarketplace'
  | 'fieldOfMars'
  | 'pantheonRenovation'
  | 'apollosOracle';

export type upgradeMap = Record<UpgradeKeys, upgradeData>;

export type upgradeCount = {
  [key in UpgradeKeys]: number;
};

/* 
======================================
        Town Builder View
======================================
*/

export type additionalTiles = 'road' | 'citizen' | 'tree';

export type tilesKey = buildingKeys | workerKeys | additionalTiles;

export type townTilesMatrix = Array<Array<tilesKey | null>>;

/* 
======================================
            Modifiers
======================================
*/

export interface clickerVisualModifiers {
  rainingCoins: boolean; // Raining coins animation
  isNight: boolean; // Diferent background image for night
  goldenOverlay: boolean; // Golden overlay over the background of the component
  isFlood: boolean; // Waves on the bottom of the component
  bountifulHarvest: boolean; // raining wheat animation
}
