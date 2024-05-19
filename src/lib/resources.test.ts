import { expect, test } from 'vitest';
import * as resources from './resources';
import { BUILDINGS_ARRAY } from '~/constants/buildings';
import { playerResources } from '~/types/game-data-types';
import { WORKERS_ARRAY, WORKERS_COUNT } from '~/constants/workers';

const lowResources: playerResources = { gold: 100, grain: 300, stone: 750 };
const absurdResources: playerResources = { gold: 153_000, grain: 3000324, stone: 15000 };

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
  let result = resources.getBestAffordableBuilding(lowResources);
  expect(result).toBe(3);
});

test("getBestAffordableBuilding returns null when there's not recourses", () => {
  let result = resources.getBestAffordableBuilding({ gold: 0, grain: 0, stone: 0 });
  expect(result).toBeNull();
});

test("getBestAffordableWorker returns null when there's not recourses", () => {
  let result = resources.getBestAffordableWorker({ gold: 0, grain: 0, stone: 0 });
  expect(result).toBeNull();
});

test('getBestAffordableWorker: Can buy all worker with absurd resources', () => {
  let result = resources.getBestAffordableWorker(absurdResources);
  expect(result).toBe(WORKERS_ARRAY[WORKERS_COUNT - 1].id);
});

test('getBestAffordableWorker: Is same as CanAffordWorker last worker with absurd resources', () => {
  let result1 = resources.canAffordWorker(WORKERS_ARRAY[WORKERS_COUNT - 1].id, absurdResources);
  expect(result1).toBe(true);
  let result2 = resources.getBestAffordableWorker(absurdResources);
  expect(result2).toBe(WORKERS_ARRAY[WORKERS_COUNT - 1].id);
});
