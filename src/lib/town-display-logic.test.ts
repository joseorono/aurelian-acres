import { expect, test } from 'vitest';

import * as townDisplayLogic from './town-display-logic';
import { buildingCount, tilesKey, workerCount } from '~/types/game-data-types';
import { DEFAULT_TOWNDISPLAY_COLUMNS, DEFAULT_TOWNDISPLAY_ROWS } from '~/constants/defaults';

const matrixHeight: number = DEFAULT_TOWNDISPLAY_ROWS;
const matrixWidth: number = DEFAULT_TOWNDISPLAY_COLUMNS;

const lowWorkers: workerCount = {
  slave: 1,
  agricola: 1,
  miner: 1,
  baker: 1,
  mercator: 1,
  blacksmith: 1,
  legionary: 1,
  priest: 1,
};

const lowBuildings: buildingCount = {
  fields: 1,
  quarry: 1,
  bakery: 1,
  forum: 1,
  smithy: 1,
  castra: 1,
  temple: 1,
};

// generateEmptyMatrix Test

test('generateEmptyMatrix: Returns an array', () => {
  let matrix = townDisplayLogic.generateEmptyMatrix(3, 3);
  expect(Array.isArray(matrix)).toBe(true);
});

test('generateEmptyMatrix: Returns a matrix with the correct dimensions', () => {
  let matrix = townDisplayLogic.generateEmptyMatrix(matrixHeight, matrixWidth);

  expect(matrix.length).toBe(matrixHeight);
  expect(matrix[0].length).toBe(matrixWidth);
});

test('generateEmptyMatrix: Returns a matrix with all elements null', () => {
  let matrix = townDisplayLogic.generateEmptyMatrix(matrixHeight, matrixWidth);

  expect(matrix.flat().every((x) => x === null)).toBe(true);
});

// getShuffledArrayOfTiles test
test('getShuffledArrayOfTiles: should return an array', () => {
  let shuffledArray = townDisplayLogic.getShuffledArrayOfTiles(lowBuildings, lowWorkers);

  expect(Array.isArray(shuffledArray)).toBe(true);
});

test('getShuffledArrayOfTiles: should be shuffled', () => {
  // Just push it all into a single array and return it
  const unshuffledArray: tilesKey[] = [];
  for (const [key, value] of Object.entries(lowBuildings)) {
    unshuffledArray.push(...Array(value).fill(key as tilesKey));
  }
  for (const [key, value] of Object.entries(lowWorkers)) {
    unshuffledArray.push(...Array(value).fill(key as tilesKey));
  }

  let shuffledArray = townDisplayLogic.getShuffledArrayOfTiles(lowBuildings, lowWorkers);

  expect(JSON.stringify(unshuffledArray) === JSON.stringify(shuffledArray)).toBe(false);
});

// generateTownDisplayMatrix Test
test('generateTownDisplayMatrix: Returns an array.', () => {
  let matrix = townDisplayLogic.generateTownDisplayMatrix(matrixHeight, matrixWidth, lowBuildings, lowWorkers);
  expect(Array.isArray(matrix)).toBe(true);
});

test("generateTownDisplayMatrix: throw when it can't fit all elements", () => {
  expect(() => {
    townDisplayLogic.generateTownDisplayMatrix(3, 3, lowBuildings, lowWorkers);
  }).toThrow();
});

test('generateTownDisplayMatrix: Returns a matrix with the correct dimensions', () => {
  const matrix = townDisplayLogic.generateTownDisplayMatrix(matrixHeight, matrixWidth, lowBuildings, lowWorkers);

  expect(matrix.length).toBe(matrixHeight);
  expect(matrix[0].length).toBe(matrixWidth);
});

test('generateTownDisplayMatrix: Returns a matrix with the correct number of workers and buildings', () => {
  const matrix = townDisplayLogic.generateTownDisplayMatrix(matrixHeight, matrixWidth, lowBuildings, lowWorkers);

  //the matrix has no RenderableElement, you get those when calling getDisplayTileForKey() on the component template
  // const workersCount = matrix.flat().filter((tile: RenderableElement) => tile in lowWorkers).length;
  // const buildingsCount = matrix.flat().filter((tile: RenderableElement) => tile in lowBuildings).length;

  const workersCount = matrix.flat().filter((v) => v != null && v in lowWorkers).length;
  const buildingsCount = matrix.flat().filter((v) => v != null && v in lowBuildings).length;

  expect(workersCount).toBe(Object.values(lowWorkers).reduce((acc, val) => acc + val));
  expect(buildingsCount).toBe(Object.values(lowBuildings).reduce((acc, val) => acc + val));
});

