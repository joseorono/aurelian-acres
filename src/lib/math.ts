import { Integer } from '~/types/number-types';

// random int in range
export function randIntInRange(min: Integer, max: Integer) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// random float in range
export function randFloatInRange(min: Integer, max: Integer) {
  return Math.random() * (max - min) + min;
}

// Generate range (array)
export function generateRange(min: Integer, max: Integer) {
  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
}

// random int in range after time interval
export function randIntInRangeAfterTimeInterval(min: Integer, max: Integer, timeInterval: number) {
  return setInterval(() => {
    console.log(randIntInRange(min, max));
  }, timeInterval);
}
