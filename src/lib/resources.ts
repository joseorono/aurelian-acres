import { BUILDINGS, BUILDINGS_ARRAY, BUILDINGS_COUNT } from '~/constants/buildings';
import { WORKERS, WORKERS_ARRAY, WORKERS_COUNT } from '~/constants/workers';
import { UPGRADES } from '~/constants/upgrades';
import {
  buildingData,
  playerResources,
  priceData,
  workerData,
  buildingCount,
  UpgradeKeys,
  activeIncomeData,
  buildingKeys,
  workerCount,
  passiveIncomeData,
  workerKeys,
} from '~/types/game-data-types';

export function getBuildingById(id: number): buildingData | null {
  // Handle the case where the building is not found
  return BUILDINGS_ARRAY.find((building: buildingData) => building.id === id) ?? null;
}

export function getWorkerById(id: number): workerData | null {
  // Handle the case where the worker is not found
  return WORKERS_ARRAY.find((worker: workerData) => worker.id === id) ?? null;
}

export function getBuildingCost(id: number): priceData | null {
  const building = getBuildingById(id);
  if (!building) return null;
  return {
    costGold: building.costGold,
    costGrain: building.costGrain,
    costStone: building.costStone,
  };
}

export function getWorkerCost(id: number): priceData | null {
  const worker = getWorkerById(id);
  if (!worker) return null;
  return {
    costGold: worker.costGold,
    costGrain: worker.costGrain,
    costStone: worker.costStone,
  };
}

export function canAffordBuilding(id: number, res: playerResources): boolean {
  const cost = getBuildingCost(id);
  if (!cost) return false;
  return res.gold >= cost.costGold && res.grain >= cost.costGrain && res.stone >= cost.costStone;
}

export function canAffordWorker(id: number, res: playerResources): boolean {
  const cost = getWorkerCost(id);
  if (!cost) return false;
  return res.gold >= cost.costGold && res.grain >= cost.costGrain && res.stone >= cost.costStone;
}

export function getBestAffordableBuilding(res: playerResources): number | null {
  // This function assumes that the BUILDINGS array is sorted by profitability in ascending order

  // Is the player broke???
  if (res.gold == 0) {
    return null;
  }

  // Don't bother checking if the player can't afford the cheapest building
  if (
    res.gold < BUILDINGS_ARRAY[0].costGold ||
    res.grain < BUILDINGS_ARRAY[0].costGrain ||
    res.stone < BUILDINGS_ARRAY[0].costStone
  ) {
    return null;
  }

  // Use for loop to go through the buildings array backwards and check if the player can afford the building
  // Return the first building that the player can afford
  for (let i = BUILDINGS_COUNT - 1; i >= 0; i--) {
    if (canAffordBuilding(BUILDINGS_ARRAY[i].id, res)) {
      return BUILDINGS_ARRAY[i].id;
    }
  }

  // Return null if no building is affordable
  return null;
}

export function getBestAffordableWorker(res: playerResources): number | null {
  // This function assumes that the BUILDINGS array is sorted by profitability in ascending order

  // Is the player broke???
  if (res.gold == 0) {
    return null;
  }

  // Don't bother checking if the player can't afford the cheapest building
  if (
    res.gold < WORKERS_ARRAY[0].costGold ||
    res.grain < WORKERS_ARRAY[0].costGrain ||
    res.stone < WORKERS_ARRAY[0].costStone
  ) {
    return null;
  }

  // Use for loop to go through the buildings array backwards and check if the player can afford the building
  // Return the first building that the player can afford
  for (let i = WORKERS_COUNT - 1; i >= 0; i--) {
    if (canAffordWorker(WORKERS_ARRAY[i].id, res)) {
      return WORKERS_ARRAY[i].id;
    }
  }

  // Return null if no building is affordable
  return null;
}

export function calculatePassiveIncome(buildings: buildingCount, upgradeKey: UpgradeKeys): passiveIncomeData | null {
  // Declare variables to store calculated values
  let accumulatedGoldPerSecond = 0;
  let accumulatedGrainPerSecond = 0;
  let accumulatedStoneGoldPerSecond = 0;

  // Iterate buildings to calculate income per each building
  for (const key in buildings) {
    if (buildings[key as keyof buildingCount] == 0) continue;
    accumulatedGoldPerSecond += BUILDINGS[key as buildingKeys].goldPerSecond * buildings[key as keyof buildingCount];
    accumulatedGrainPerSecond += BUILDINGS[key as buildingKeys].grainPerSecond * buildings[key as keyof buildingCount];
    accumulatedStoneGoldPerSecond +=
      BUILDINGS[key as buildingKeys].stonePerSecond * buildings[key as keyof buildingCount];
  }

  return {
    goldPerSecond: accumulatedGoldPerSecond * UPGRADES[upgradeKey].goldMultiplier,
    grainPerSecond: accumulatedGrainPerSecond * UPGRADES[upgradeKey].grainMultiplier,
    stonePerSecond: accumulatedStoneGoldPerSecond * UPGRADES[upgradeKey].stoneMultiplier,
  };
}

export function calculateActiveIncome(workers: workerCount, upgradeKey: UpgradeKeys): activeIncomeData | null {
  // Declare variables to store calculated values
  let accumulatedGoldPerClick = 0;
  let accumulatedGrainPerClick = 0;
  let accumulatedStoneGoldPerClick = 0;

  // Iterate workers to calculate income per each building
  for (const key in workers) {
    if (workers[key as keyof workerCount] == 0) continue;
    accumulatedGoldPerClick += WORKERS[key as workerKeys].goldPerClick * workers[key as keyof workerCount];
    accumulatedGrainPerClick += WORKERS[key as workerKeys].grainPerClick * workers[key as keyof workerCount];
    accumulatedStoneGoldPerClick += WORKERS[key as workerKeys].stonePerClick * workers[key as keyof workerCount];
  }

  return {
    goldPerClick: accumulatedGoldPerClick * UPGRADES[upgradeKey].goldMultiplier,
    grainPerClick: accumulatedGrainPerClick * UPGRADES[upgradeKey].grainMultiplier,
    stonePerClick: accumulatedStoneGoldPerClick * UPGRADES[upgradeKey].stoneMultiplier,
  };
}

