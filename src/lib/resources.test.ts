import { expect, test } from 'vitest';
import * as resources from './resources';
import { BUILDINGS_ARRAY } from '~/constants/buildings';
import { buildingCount, playerResources, workerCount } from '~/types/game-data-types';
import { WORKERS_ARRAY, WORKERS_COUNT } from '~/constants/workers';

const lowResources: playerResources = { gold: 100, grain: 300, stone: 750 };
const absurdResources: playerResources = { gold: 153_000, grain: 3000324, stone: 15000 };

const lowWorkers: workerCount = {
  agricola: 0,
  slave: 0,
  miner: 0,
  baker: 0,
  mercator: 0,
  blacksmith: 0,
  legionary: 0,
  priest: 0,
};
const maxWorkers: workerCount = {
  agricola: 20,
  slave: 20,
  miner: 20,
  baker: 20,
  mercator: 20,
  blacksmith: 20,
  legionary: 20,
  priest: 20,
};

const lowBuildings: buildingCount = {
  fields: 0,
  quarry: 0,
  forum: 0,
  smithy: 0,
  castra: 0,
  temple: 0,
  bakery: 0,
};
const maxBuildings: buildingCount = {
  fields: 20,
  quarry: 20,
  forum: 20,
  smithy: 20,
  castra: 20,
  temple: 20,
  bakery: 20,
};
test('getBuildingById returns the correct building', () => {
  BUILDINGS_ARRAY.forEach((building) => {
    let result = resources.getBuildingById(building.id);
    expect(result).toEqual(building);
  });
});

test("You shouldn't be able to afford a building that doesn't exist, even with a fortune", () => {
  let result = resources.canAffordBuilding(-1, absurdResources);
  expect(result).toBeFalsy();
  result = resources.canAffordBuilding(124334, absurdResources);
  expect(result).toBeFalsy();
});

test('canAffordBuilding first 3 buildings on low budget', () => {
  BUILDINGS_ARRAY.forEach((building) => {
    let resultLowResources = resources.canAffordBuilding(building.id, lowResources);

    if (building.id > 3) {
      expect(resultLowResources).toBe(false);
    } else {
      expect(resultLowResources).toBe(true);
    }
  });
});

test('canAffordBuilding all buildings on high budget', () => {
  BUILDINGS_ARRAY.forEach((building) => {
    let resultHighResources = resources.canAffordBuilding(building.id, absurdResources);
    expect(resultHighResources).toBe(true);
  });
});

test('getBestAffordableBuilding returns the 2nd cheapest building', () => {
  let result = resources.getBestAffordableBuilding(lowResources, lowBuildings);
  expect(result).toBe(3);
});

test("getBestAffordableBuilding returns null when there's not recourses", () => {
  let result = resources.getBestAffordableBuilding({ gold: 0, grain: 0, stone: 0 }, lowBuildings);
  expect(result).toBeNull();
});

test("getBestAffordableWorker returns null when there's not recourses", () => {
  let result = resources.getBestAffordableWorker({ gold: 0, grain: 0, stone: 0 }, lowWorkers);
  expect(result).toBeNull();
});

test('getBestAffordableWorker: Can buy all worker with absurd resources', () => {
  let result = resources.getBestAffordableWorker(absurdResources, lowWorkers);
  expect(result).toBe(WORKERS_ARRAY[WORKERS_COUNT - 1].id);
});

test('getBestAffordableWorker: Is same as CanAffordWorker last worker with absurd resources', () => {
  let result1 = resources.canAffordWorker(WORKERS_ARRAY[WORKERS_COUNT - 1].id, absurdResources);
  expect(result1).toBe(true);
  let result2 = resources.getBestAffordableWorker(absurdResources, lowWorkers);
  expect(result2).toBe(WORKERS_ARRAY[WORKERS_COUNT - 1].id);
});
