type playerResources = {
  gold: number;
  grain: number;
  stone: number;
};

type priceData = {
  costGold: number;
  costGrain: number;
  costStone: number;
};

type buildingData = {
  id: number;
  name: string;
  description: string;
  goldPerSecond: number;
  grainPerSecond: number;
  stonePerSecond: number;
  //TODO: unlock requirements?
} & priceData;

type workersData = {
  id: number;
  name: string;
  description: string;
  goldPerClick: number;
  grainPerClick: number;
  stonePerClick: number;
} & priceData;

interface clickerVisualModifiers {
  rainingCoins: boolean;
  isNight: boolean;
  goldenOverlay: boolean;
  isFlood: boolean;
}
