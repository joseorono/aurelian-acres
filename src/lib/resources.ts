import BUILDINGS from '~/constants/buildings';
import WORKERS from '~/constants/workers';
import { Integer } from '~/types/number-types';

export function getBuildingById(id: number): buildingData | null {
  // Handle the case where the building is not found
  return BUILDINGS.find((building) => building.id === id) ?? null;
}

export function getWorkerById(id: number): workersData | null {
  // Handle the case where the worker is not found
  return WORKERS.find((worker) => worker.id === id) ?? null;
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
  if (res.gold < BUILDINGS[0].costGold || res.grain < BUILDINGS[0].costGrain || res.stone < BUILDINGS[0].costStone) {
    return null;
  }

  // Use for loop to go through the buildings array backwards and check if the player can afford the building
  // Return the first building that the player can afford
  for (let i = BUILDINGS.length - 1; i >= 0; i--) {
    if (canAffordBuilding(BUILDINGS[i].id, res)) {
      return BUILDINGS[i].id;
    }
  }

  // Return null if no building is affordable
  return null;
}
