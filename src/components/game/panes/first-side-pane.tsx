import TownDisplay from '~/components/town-display';
import GenericLoader from '../../loader/generic-loader';
import { Suspense } from 'react';
import { useAtomValue } from 'jotai';
import { workersAtom } from '~/store/atoms';
import { BASE_CITIZEN_COUNT } from '~/constants/defaults';
import EventDisplay from '~/components/dialogs/event-display';

interface IFirstSidePaneProps {
  className?: string;
}

const FirstSidePane: React.FC<IFirstSidePaneProps> = ({ className = '' }) => {
  const workers = useAtomValue(workersAtom);
  return (
    <section className={className}>
      <div className="townName SectionHeader p-4 text-center text-white">
        <h1 className="text-3xl">The Town</h1>
        <p>Population: {Object.values(workers).reduce((a, b) => a + b, 0) + BASE_CITIZEN_COUNT}</p>
      </div>
      <div className="flex flex-auto flex-col items-center justify-center bg-gray-800">
        <EventDisplay />
      </div>
      <div className="SectionHeader p-4 text-center text-white">MAP</div>
      <Suspense fallback={<GenericLoader />}>
        <TownDisplay />
      </Suspense>
    </section>
  );
};

export default FirstSidePane;
