import TownDisplay from '~/components/town-display';
import GenericLoader from '../../loader/generic-loader';
import { Suspense } from 'react';

import EventDisplay from '~/components/dialogs/event-display';
import TownNameView from '../misc/town-name-view';
import PopulationView from '../misc/population-view';

interface IFirstSidePaneProps {
  className?: string;
}

const FirstSidePane: React.FC<IFirstSidePaneProps> = ({ className = '' }) => {
  return (
    <section className={className}>
      <div className="townName SectionHeader p-4 text-center text-white">
        <TownNameView />
        <PopulationView />
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
