import { GLOBAL_EVENTS, NOTHING_EVENT } from '~/constants/events';
import { getRandomEvent } from '~/lib/events-logic';
import { eventData } from '~/types/game-data-types';
import NewspaperHeadline from '../game/misc/newspaper-headline';

interface IPropsEventDisplay {
  initialEvent?: Nullable<eventData>;
  className?: string;
}

const EventDisplay = ({ initialEvent = null, className = '' }: IPropsEventDisplay) => {
  // If no event is passed, get a random
  let event = initialEvent;
  if (!event) {
    event = NOTHING_EVENT;
  }
  return (
    <div>
      <NewspaperHeadline headline={event.name} />
      <h1>{JSON.stringify(event)}</h1>
    </div>
  );
};

export default EventDisplay;
