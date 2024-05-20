// De Carlos

import HeadingTest from '~/components/heading-test';

import { useStore } from '~/store/useStore';

import { auxObjectMap } from '~/lib/utils';
import { buildingCount, buildingKeys, tilesKeys, workerCount, workerKeys } from '~/types/game-data-types';

// ToDo: Poner los emojis que faltan
// En el futuro ponemos paths a imagenes aqui y usamos imagenes dentro del componente
const spritesForTiles: Record<tilesKeys, string> = {
  slave: '👷',
  agricola: '👨‍🌾',
  miner: '⛏️',
  baker: '👩‍',
  fields: '🌾',
  quarry: '🪨',
  bakery: '🍞',
  forum: '',
  smithy: '',
  castra: '',
  temple: '',
  mercator: '',
  blacksmith: '',
  legionary: '',
  priest: '',
};

function getDisplayTileForKey(key: Nullable<tilesKeys>) {
  // If there's no key, simply return whatever tile we used by default or maybe nothing.
  if (key == null) {
    return null; // Can change later
  }

  return spritesForTiles[key];
}

function TownDisplay() {
  //  const gameStore = useStore();

  const renderableWorkerPerType = 6;
  const renderableBuildingPerType = 3;
  const matrixHeight: number = 7;
  const matrixWidth: number = 10;
  // ToDo: Test that this is Reactive. I really *hope* this updates reactively
  const workersCount: workerCount = useStore((state) => state.workerCount);
  const buildingsCount: buildingCount = useStore((state) => state.buildingCount);

  // Determine how many buildings and to render, limiting them to a certain number
  const buildingsToRender = auxObjectMap(buildingsCount, (count: number) => Math.min(count, renderableBuildingPerType));
  const workersToRender = auxObjectMap(workersCount, (count: number) => Math.min(count, renderableWorkerPerType));

  // ToDo: Generate a matrix of buildings and workers to render in random places, maybe
  // Or maybe start randomly but add a incrementally too it?? But that is more complex
  // Aqui estaria toda la logica interesante para generar el orden
  // Tenemos que generar un matrix donde todas las filas tenga el mismo numero de elementos.

  // Generate empty Matrix with the right dimensions
  let matrix: Array<Array<tilesKeys | null>> = Array(matrixHeight) // Generate the matrix
    .fill(Array(matrixWidth).fill(null)); // Create the empty rows

  // Populate the matrix with workers and building
  // Este valor estatico loco borrarlo
  matrix = [
    ['slave', 'agricola', 'fields', 'quarry', 'bakery', 'forum'],
    ['miner', 'baker', 'mercator', 'fields', 'quarry', 'bakery'],
    ['blacksmith', 'legionary', 'priest', 'fields', 'quarry', 'bakery'],
  ];

  // ToDo: Arreglar el type mess aqui dentro
  return (
    <>
      <div id="townDisplay">
        {
          // Render the matrix
          matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row justify-items-start">
              {row.map((tileKey, tileIndex) => (
                <div key={tileIndex} className="flex flex-col items-center justify-items-center">
                  <div className="townTile text-2xl">{getDisplayTileForKey(tileKey)}</div>
                </div>
              ))}
            </div>
          ))
        }
      </div>
    </>
  );
}

export default TownDisplay;

