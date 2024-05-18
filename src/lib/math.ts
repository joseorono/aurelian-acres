import { Integer } from '~/types/number-types';

// random int in range
export function randIntInRange(min: Integer, max: Integer) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// random float in range
export function randFloatInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function getRandomlyVariedValue(baseValue: number, variance: number) {
  // Only varies the number downwards
  if (baseValue - variance <= 0) {
    return randFloatInRange(0, 1);
  }
  if (variance === 0) {
    return baseValue;
  }
  return baseValue - variance + randFloatInRange(0, variance);
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
