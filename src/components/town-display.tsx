import { useStore } from '~/store/useStore';

import { auxObjectMap } from '~/lib/utils';
import { buildingCount, townTilesMatrix, workerCount } from '~/types/game-data-types';
import { generateTownDisplayMatrix, getDisplayTileForKey } from '~/lib/town-display-logic';
import { DEFAULT_TOWNDISPLAY_COLUMNS, DEFAULT_TOWNDISPLAY_ROWS } from '~/constants/defaults';
import { useGesture } from '@use-gesture/react';
import { useEffect, useRef } from 'react';

function TownDisplay() {
  const containerStyles = {
    cursor: 'grab',
    touchAction: 'none',
  };

  let currentZoom = 1;

  const calcZoom = (y: number) => {
    // if y is neg, zoom in

    const newZoom = y < 0 ? Math.min(2, currentZoom + 0.1) : Math.max(currentZoom - 0.1, 0.5);
    currentZoom = newZoom;
    return newZoom;
  };

  const renderableWorkerPerType = 10;
  const renderableBuildingPerType = 12;
  const matrixHeight: number = DEFAULT_TOWNDISPLAY_ROWS;
  const matrixWidth: number = DEFAULT_TOWNDISPLAY_COLUMNS;

  // ToDo: Test that this is Reactive. I really *hope* this updates reactively
  // it does!
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

  // gesture events
  const containerRef = useRef<HTMLDivElement>(null);
  // useGesture->onWheel wouldn't let me prevent default, even if i set passive as false in the event options
  useEffect(() => {
    const preventDefaultScrollEvent = (ev: WheelEvent) => {
      ev.preventDefault();
    };
    containerRef.current?.addEventListener('wheel', preventDefaultScrollEvent, { passive: false });
    return () => containerRef.current?.removeEventListener('wheel', preventDefaultScrollEvent);
  }, []);

  const bind = useGesture({
    onDrag: ({ event, offset: [x, y] }) => {
      event.preventDefault();
      if (containerRef.current !== null) {
        console.log('Drag: ', x, y);
        containerRef.current.scroll(x, y);
      }
    },
    onWheel: ({ event, direction: [x, y] }) => {
      //zoom here
      console.log('Wheel: ', x, y);
      currentZoom = calcZoom(y);
      // @ts-ignore
      document.querySelector('.townDisplay').style.zoom = currentZoom;
    },
  });

  return (
    <>
      {/*  Yes, I'm literally setting it to double the Nintendo DS' resolution. I don't even know anymore */}
      <div className="townDisplay__wrapper relative max-h-[50svh] min-h-[200px] w-full">
        <div
          {...bind()}
          className="townDisplay h-100 absolute max-h-full w-full overflow-auto"
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
      </div>
    </>
  );
}

export default TownDisplay;

