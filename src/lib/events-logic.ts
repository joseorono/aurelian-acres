import { eventData } from '~/types/game-data-types';

export function getRandomEvent(EVENTS: Array<eventData>): eventData {
  if (!EVENTS) {
    throw new Error('EMPTY_EVENTS: No events passed.');
  }

  // Calculate the sum of all probabilities
  const totalWeight = EVENTS.reduce((acc, event) => acc + event.probability, 0);

  // Generate a random number between 0 and totalWeight
  // This will be used to select a random event
  let random = Math.random() * totalWeight;

  // Iterate through the events and select one based on the random number
  for (let event of EVENTS) {
    if (random < event.probability) {
      return event;
    }
    random -= event.probability;
  }

  // In case something goes wrong, return the first one
  // This technically should never happen, but this failsafe has no runtime cost
  return EVENTS[0];
}
