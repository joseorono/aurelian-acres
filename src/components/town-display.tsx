import { workersAtom, buildingsAtom } from '~/store/atoms';
import { useAtomValue } from 'jotai';
import { auxObjectMap } from '~/lib/utils';
import { buildingCount, townTilesMatrix, workerCount } from '~/types/game-data-types';
import { generateTownDisplayMatrix, getDisplayTileForKey } from '~/lib/town-display-logic';
import { DEFAULT_TOWNDISPLAY_COLUMNS, DEFAULT_TOWNDISPLAY_ROWS } from '~/constants/defaults';
import { useGesture } from '@use-gesture/react';
import { useRef } from 'react';

function TownDisplay() {
  const containerStyles = {
    cursor: 'grab',
    touchAction: 'none',
  };

  const workers = useAtomValue(workersAtom);
  const buildings = useAtomValue(buildingsAtom);
  let currentZoom = 1;

  const calcZoom = (y: number) => {
    // Do ref null checks first
    if (containerRef.current === null || wrapperRef.current === null) {
      console.warn('TownDisplay: Refs are null');
      return currentZoom;
    }

    /*
    console.log('==========================================================');
    // Log all the widths
    console.log('parent width: ', wrapperRef.current?.clientWidth);
    console.log('child bounding width: ', containerRef.current?.getBoundingClientRect().width);
    console.log('child client width: ', containerRef.current?.clientWidth);
    console.log('child offset width: ', containerRef.current?.offsetWidth);
    console.log('parent overflow width: ', wrapperRef.current?.scrollWidth);

    // Now al the heights
    console.log('parent height: ', wrapperRef.current?.clientHeight);
    console.log('child bounding height: ', containerRef.current?.getBoundingClientRect().height);
    console.log('parent overflow height: ', wrapperRef.current?.scrollHeight);
    */
    // PREVENT ZOOMING OUT TOO MUCH
    // Before we set the new zoom, we need to check that the containerRef elem isn't smaller than the wrapperRef elem, but width and height
    if (containerRef.current?.getBoundingClientRect().width < wrapperRef.current?.clientWidth && y > 0) {
      console.warn('TownDisplay: Zoom out prevented. Container horizontally smaller than wrapper');
      /*
      console.log(
        'prevented zoom out: container ',
        containerRef.current?.clientWidth,
        ' wrapper ',
        wrapperRef.current?.clientWidth,
        ' scrolling width parent ',
        wrapperRef.current?.scrollWidth,
      );
      */
      return currentZoom;
    }

    if (
      containerRef.current?.getBoundingClientRect().height < wrapperRef.current?.getBoundingClientRect().height &&
      y > 0
    ) {
      console.warn('TownDisplay: Zoom out prevented. Container vertically smaller than wrapper');
      console.log(
        ' parent height ',
        wrapperRef.current?.clientHeight,
        ' container height ',
        containerRef.current?.getBoundingClientRect().height,
      );
      return currentZoom;
    }

    // if y is neg, zoom in, else zoom out
    let newZoom = y < 0 ? Math.min(2, currentZoom + 0.1) : Math.max(currentZoom - 0.1, 0.5);

    currentZoom = newZoom;
    return newZoom;
  };

  const renderableWorkerPerType = 10;
  const renderableBuildingPerType = 12;
  const matrixHeight: number = DEFAULT_TOWNDISPLAY_ROWS;
  const matrixWidth: number = DEFAULT_TOWNDISPLAY_COLUMNS;

  // ToDo: Test that this is Reactive. I really *hope* this updates reactively
  // it does!
  const workersCount: workerCount = workers;
  const buildingsCount: buildingCount = buildings;

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGesture(
    {
      onDrag: ({ event, offset: [x, y] }) => {
        console.log('dragging');
        // event.preventDefault();

        console.log('Drag: ', x, y);
        wrapperRef.current?.scroll(x, y);
      },
      onWheel: ({ event, direction: [x, y] }) => {
        console.log('Wheel: ', x, y);
        currentZoom = calcZoom(y);
        // @ts-ignore
        document.querySelector('.townDisplay').style.transform = 'scale(' + currentZoom + ')';
      },
      onPinch: ({ event, offset: [d] }) => {
        console.log('Pinch: ', d);
        currentZoom = Math.min(Math.max(0.5, d), 2);
        // @ts-ignore
        document.querySelector('.townDisplay').style.transform = 'scale(' + currentZoom + ')';
      },
    },
    {
      target: containerRef,
      drag: {
        bounds: {
          // Offset wont ever go past these values
          // scrollWidth/Height should be the max possible scroll
          // in an overflowed element
          left: 0,
          top: 0,
          right: containerRef.current?.scrollWidth,
          bottom: containerRef.current?.scrollHeight,
        },
      },
      pinch: { eventOptions: { passive: true }, scaleBounds: { min: 0.5, max: 2 } },
    },
  );

  return (
    <>
      <div
        ref={wrapperRef}
        style={containerStyles}
        className="townDisplay__wrapper relative h-[50svh] max-h-[480px] min-h-[200px] w-full overflow-auto bg-cover"
      >
        <div className="townDisplay w-full overflow-visible" ref={containerRef}>
          {
            // Render the matrix
            matrix.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-row justify-items-start">
                {row.map((tileKey, tileIndex) => (
                  <div key={tileIndex} className="townTile">
                    {getDisplayTileForKey(tileKey)}
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
