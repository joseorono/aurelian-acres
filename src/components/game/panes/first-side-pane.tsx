import TownDisplay from '~/components/town-display';
import GenericLoader from '../../loader/generic-loader';
import { Suspense } from 'react';
import { useAtomValue } from 'jotai';
import { workersAtom } from '~/store/atoms';
import { BASE_CITIZEN_COUNT } from '~/constants/defaults';

interface IFirstSidePaneProps {
  className?: string;
}

const FirstSidePane: React.FC<IFirstSidePaneProps> = ({ className = '' }) => {
  const workers = useAtomValue(workersAtom);
  return (
    <section className={className}>
      <div>
        <div className="p-4 text-center text-white">
          <h1 className="text-3xl">The Town</h1>
          <p>Population: {Object.values(workers).reduce((a, b) => a + b, 0) + BASE_CITIZEN_COUNT}</p>
        </div>
        <Suspense fallback={<GenericLoader />}>
          <TownDisplay />
        </Suspense>
      </div>
      <div className="flex flex-auto flex-col items-center justify-center bg-gray-800">
        <h1 className="text-3xl text-white">The SidePane</h1>
      </div>
    </section>
  );
};

export default FirstSidePane;
