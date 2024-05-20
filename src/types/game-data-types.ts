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
        Town Builder View
======================================
*/

export type tilesKey = buildingKeys | workerKeys;

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
  //bountifulHarvest: boolean; // raining wheat animation
}
