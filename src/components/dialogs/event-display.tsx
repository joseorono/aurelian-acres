import { GLOBAL_EVENTS } from '~/constants/events';
import { getRandomEvent } from '~/lib/events-logic';
import { eventData } from '~/types/game-data-types';

const EventDisplay = (event: Nullable<eventData>) => {
  // If no event is passed, get a random one
  if (!event) {
    event = getRandomEvent(GLOBAL_EVENTS);
  }
  return (
    <div>
      <h1>{JSON.stringify(event)}</h1>
    </div>
  );
};

export default EventDisplay;
