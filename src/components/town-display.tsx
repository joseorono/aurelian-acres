import { useStore } from '~/store/useStore';

import { auxObjectMap } from '~/lib/utils';
import { buildingCount, townTilesMatrix, workerCount } from '~/types/game-data-types';
import { generateTownDisplayMatrix, getDisplayTileForKey } from '~/lib/town-display-logic';
import { DEFAULT_TOWNDISPLAY_COLUMNS, DEFAULT_TOWNDISPLAY_ROWS } from '~/constants/defaults';
import { useDrag } from '@use-gesture/react';
import { useRef } from 'react';

function TownDisplay() {
  //  const gameStore = useStore();

  const containerStyles = {
    cursor: 'grab',
    touchAction: 'none',
  };

  const renderableWorkerPerType = 10;
  const renderableBuildingPerType = 12;
  const matrixHeight: number = DEFAULT_TOWNDISPLAY_ROWS;
  const matrixWidth: number = DEFAULT_TOWNDISPLAY_COLUMNS;

  // ToDo: Test that this is Reactive. I really *hope* this updates reactively
  const workersCount: workerCount = useStore((state) => state.workerCount);
  const buildingsCount: buildingCount = useStore((state) => state.buildingCount);

  // Determine how many buildings and to render, limiting them to a certain number
  const buildingsToRender = auxObjectMap(buildingsCount, (count: number) =>
    Math.min(count, renderableBuildingPerType),
  ) as buildingCount;
  const workersToRender = auxObjectMap(workersCount, (count: number) =>
    Math.min(count, renderableWorkerPerType),
  ) as workerCount;

  // This matrix is generated every time the component is rendered, but is too volatile and big to be memoized
  // Objects and Arrays are passed by reference, so there's little to no performance hit here
  let matrix: townTilesMatrix = generateTownDisplayMatrix(
    matrixHeight,
    matrixWidth,
    buildingsToRender,
    workersToRender,
  );

  // dragging behavior
  const containerRef = useRef<HTMLDivElement>(null);
  const bind = useDrag(({ event, offset: [x, y] }) => {
    event.preventDefault();
    if (containerRef.current !== null) {
      containerRef.current.scroll(x, y);
    }
  });

  return (
    <>
      {/*  Yes, I'm literally setting it to double the Nintendo DS' resolution. I don't even know anymore */}
      <div
        className="townDisplay h-1/2 max-h-[200px] max-w-[512px] overflow-scroll"
        {...bind()}
        ref={containerRef}
        style={containerStyles}
      >
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

