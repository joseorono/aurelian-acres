//auxObjectMap

import { expect, test } from 'vitest';
import * as utils from './utils';
import { workerCount } from '~/types/game-data-types';

// shuffleArray Tests

test('shuffleArray: Return is same length', () => {
  let arr = [1, 2, 3, 4, 5];
  let result = utils.shuffleArray(arr);
  expect(result.length).toBe(arr.length);
});

test('shuffleArray: Return is a permutation', () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a'];
  let result = utils.shuffleArray(arr);
  expect(result.sort()).toEqual(arr.sort());
});

// auxObjectMap Tests

const noWorkers: workerCount = {
  slave: 0,
  agricola: 0,
  miner: 0,
  baker: 0,
  mercator: 0,
  blacksmith: 0,
  legionary: 0,
  priest: 0,
};

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

const absurdWorkers: workerCount = {
  slave: 100,
  agricola: 100,
  miner: 100,
  baker: 100,
  mercator: 100,
  blacksmith: 100,
  legionary: 100,
  priest: 100,
};

test('auxObjectMap: Runs callback correctly.', () => {
  let resultHigh = utils.auxObjectMap(absurdWorkers, (count: number) => Math.min(count, 3));
  expect(resultHigh).toEqual({
    slave: 3,
    agricola: 3,
    miner: 3,
    baker: 3,
    mercator: 3,
    blacksmith: 3,
    legionary: 3,
    priest: 3,
  });

  // Check that all the values are 0
  let resultLow = utils.auxObjectMap(lowWorkers, (count: number) => Math.min(count, 3));
  expect(resultLow).toEqual(lowWorkers);
});

test('auxObjectMap: Return Object has all the same keys as input', () => {
  let result = utils.auxObjectMap(absurdWorkers, (count: number) => count);
  expect(Object.keys(result).sort()).toEqual(Object.keys(absurdWorkers).sort());
});
