/**
 * This file contains all the functions logically needed for generating and calculating the status of the town.
 */

import { additionalTiles, buildingCount, tilesKey, townTilesMatrix, workerCount } from '~/types/game-data-types';
import { getRandomElement, shuffleArray } from './utils';
import { TOWN_DENSITY_BIAS } from '~/constants/defaults';

//Buildings
import temple from '@/assets/town-view-tiles/buildings/temple.png';
import castra from '@/assets/town-view-tiles/buildings/castra.png';
import fields from '@/assets/town-view-tiles/buildings/fields.png';
import forum from '@/assets/town-view-tiles/buildings/forum.png';
import quarry from '@/assets/town-view-tiles/buildings/quarry.png';
import smithy from '@/assets/town-view-tiles/buildings/smithy.png';
import bakery from '@/assets/town-view-tiles/buildings/bakery.png';

//Workers
import mercator from '@/assets/town-view-tiles/workers/mercator.png';
import blacksmith from '@/assets/town-view-tiles/workers/blacksmith.png';
import legionary from '@/assets/town-view-tiles/workers/legionary.png';
import slave from '@/assets/town-view-tiles/workers/slave.png';
import agricola from '@/assets/town-view-tiles/workers/agricola.png';
import miner from '@/assets/town-view-tiles/workers/miner.png';
import baker from '@/assets/town-view-tiles/workers/baker.png';
import priest from '@/assets/town-view-tiles/workers/baker.png';

//Decor
import tree from '@/assets/town-view-tiles/decor/tree.png';
import citizen from '@/assets/town-view-tiles/decor/citizen.png';

// En el futuro ponemos paths a imagenes aqui y usamos imagenes dentro del componente
export const spritesForTiles: Record<tilesKey, RenderableElement | Array<RenderableElement>> = {
  slave: <img src={slave} alt="slave" />,
  agricola: <img src={agricola} alt="agricola" />,
  miner: <img src={miner} alt="miner" />,
  baker: <img src={baker} alt="baker" />,
  fields: <img src={fields} alt="fields" />,
  quarry: <img src={quarry} alt="quarry" />,
  bakery: <img src={bakery} alt="bakery" />,
  forum: <img src={forum} alt="forum" />,
  smithy: <img src={smithy} alt="smithy" />,
  castra: <img src={castra} alt="castra" />,
  temple: <img src={temple} alt="temple" />,
  mercator: <img src={mercator} alt="mercator" />,
  blacksmith: <img src={blacksmith} alt="blacksmith" />,
  legionary: <img src={legionary} alt="legionary" />,
  priest: <img src={priest} alt="priest" />,
  road: '🟫',
  citizen: <img src={citizen} alt="citizen" />,
  tree: <img src={tree} alt="tree" />,
} as const;

// ToDo: Unit-Test this. This populates the matrix with workers and buildings..
export function getRandomFillerTile(chanceOfEmpty: number = 0.6): Nullable<additionalTiles> {
  // chanceOfEmpty is super low bc we dont have many buildings in the tests
  // By default, there's an 80% chance of an empty tile
  // I won't be adding roads until we implement pathfinding/random walk or some sorta walkable-map generation algorithm

  return Math.random() < chanceOfEmpty
    ? null // null if the random number is less than the chance of empty
    : (['citizen', 'tree'][Math.ceil(Math.random() * 2)] as additionalTiles);
}

export function generateEmptyMatrix(rows: number, columns: number): townTilesMatrix {
  // return Array(rows) // Generate the matrix
  //   .fill(Array(columns).fill(null)); // Create the empty rows

  //declare matrix
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    // Create an inner array for each row filled with nulls
    const innerArray = Array(columns).fill(null);
    matrix.push(innerArray);
  }

  return matrix;
}

export function getDisplayTileForKey(key: Nullable<tilesKey>): RenderableElement {
  // If there's no key, simply return whatever tile we used by default or maybe nothing.
  if (key == null) {
    return null; // Can change later
  }

  // This is a sanity check to make sure the key exists in the spritesForTiles object
  // This technically should never happen, unless Typescript is being weird
  // Disable if this is a performance bottleneck
  if (!(key in spritesForTiles)) {
    console.error(`Tile key ${key} not found in spritesForTiles`);
    return null;
  }

  const selectedSprite = spritesForTiles[key];
  // It can be a single sprite or an array of sprites..
  if (Array.isArray(selectedSprite)) {
    return getRandomElement(selectedSprite);
  } else {
    return selectedSprite;
  }
}

export function getShuffledArrayOfTiles(buildings: buildingCount, workers: workerCount): tilesKey[] {
  // Flatten the resources into an array of tiles

  // Just push it all into a single array and return it
  const resourcesArray: tilesKey[] = [];
  for (const [key, value] of Object.entries(buildings)) {
    resourcesArray.push(...Array(value).fill(key as tilesKey));
  }
  for (const [key, value] of Object.entries(workers)) {
    resourcesArray.push(...Array(value).fill(key as tilesKey));
  }

  // Shuffle the array so the tiles are in a random order and return it
  return shuffleArray(resourcesArray);
}

export function generateTownDisplayMatrix(
  rows: number,
  columns: number,
  buildings: buildingCount,
  workers: workerCount,
): townTilesMatrix {
  /* 
    NOTE:

    This function at this point generates a random matrix of tiles with the given dimensions.
    - Functionally, that's the map we're showing in the town display component.
    - We're currently not doing anything fancy like pathfinding or anything like that yet.

    Possible Future Improvements:

    Maybe we could start randomly but add incrementally to the map too by making the previous 
    state an optional argument??... that sounds too complex for the current GameJam's deadline
    
    Doing that would kinda turn this function into a Reducer, and make it possible to memoize this. 
  */

  /*
    ======================================
         Guard Clauses and Type Checks
    ======================================
  */

  // Make sure the dimensions are Integers
  rows = Math.floor(rows);
  columns = Math.floor(columns);
  const matrixArea = rows * columns;

  // Make sure all buildings and workers can fit in the matrix
  // This is a sanity check, it should never happen unless the matrix is too small
  // Add the number of all buildings and workers, and check if it's greater than the number of tiles in the matrix
  // Disable if this is a performance bottleneck
  if (
    matrixArea <
    Object.values(buildings).reduce((a, b) => a + b, 0) + Object.values(workers).reduce((a, b) => a + b, 0)
  ) {
    const errorMsg = `TOWNDISPLAY OVERFLOW ERROR: Not enough space in the matrix for all buildings and workers.`;
    console.error(errorMsg, `Buildings: ${JSON.stringify(buildings)}`, `Workers: ${JSON.stringify(workers)}`);
    throw new Error(errorMsg);
    //return generateEmptyMatrix(rows, columns);
  }

  /*
    ============================================================
    Actual Logic for Matrix Generation
    ============================================================
  */

  // Generate empty Matrix with the given dimensions
  let matrix = generateEmptyMatrix(rows, columns);

  // Get a shuffled array of tiles to populate the matrix
  const pendingTiles = getShuffledArrayOfTiles(buildings, workers);

  // ToDo: Test this. This populates the matrix with workers and buildings..
  // This is where all the logic for generating the town display matrix goes

  // Populate the matrix with the tiles
  let nextTile: Nullable<tilesKey> = null;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // If there are no more tiles to place, break out of the loop

      // ToDo: Read this, see if I commited any logical mistakes. Test it.
      // Make sure not to use up all the space before placing all the tiles
      if (pendingTiles.length < matrixArea - (i * columns + j)) {
        // There is available space for a filler tile...
        // 60-40 chance of getting a random tile or a filler tile, changes with TOWN_DENSITY_BIAS
        if (pendingTiles) {
          nextTile = (Math.random() < TOWN_DENSITY_BIAS ? pendingTiles.pop() : getRandomFillerTile()) || null;
        } else {
          nextTile = getRandomFillerTile();
        }
      } else {
        nextTile = pendingTiles.pop() as Nullable<tilesKey>;
      }

      // Place the tile in the matrix
      matrix[i][j] = nextTile;
    }
  }

  return matrix;
}

