import { GLOBAL_EVENTS, NOTHING_EVENT } from '~/constants/events';
import { getRandomEvent } from '~/lib/events-logic';
import { eventData } from '~/types/game-data-types';
import NewspaperHeadline from '../game/misc/newspaper-headline';
import { eventsAtom } from '~/store/atoms';
import { useAtomValue } from 'jotai';

interface IPropsEventDisplay {
  className?: string;
}

const EventDisplay = ({ className = '' }: IPropsEventDisplay) => {
  // If no event is passed, get a random
  const event = useAtomValue(eventsAtom);

  return (
    <div className="flex flex-auto flex-col justify-center bg-scroll p-4 text-gray-700">
      <NewspaperHeadline headline={event.name} />
      <div className="break-all text-sm">{JSON.stringify(event)}</div>
    </div>
  );
};

export default EventDisplay;
