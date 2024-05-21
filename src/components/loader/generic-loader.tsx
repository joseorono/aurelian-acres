import React, { useEffect, useRef } from 'react';

interface LoadingComponentProps {
  classNames?: string;
}

const GenericLoader: React.FC<LoadingComponentProps> = ({ classNames }) => {
  // This is ugly but using refs prevents re-renders and in-memory variable copying
  const activeIndexRef = useRef(0);
  const pixelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = activeIndexRef.current;
      const nextIndex = currentIndex === 5 ? 0 : currentIndex + 1;
      activeIndexRef.current = nextIndex;

      // Update pixel classes
      if (pixelsRef.current[currentIndex]) {
        pixelsRef.current[currentIndex].classList.remove('bg-opacity-50');
      }
      if (pixelsRef.current[nextIndex]) {
        pixelsRef.current[nextIndex].classList.add('bg-opacity-50');
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center ${classNames}`}>
      <h1 className="mb-1 text-3xl font-bold">Loading...</h1>
      <div className="flex">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) pixelsRef.current[index] = el;
            }}
            className="h-4 w-4 bg-white"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GenericLoader;
