import { Integer } from '~/types/number-types';

// random int in range
export function randIntInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// random float in range
export function randFloatInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function getRandomlyVariedValue(baseValue: number, variance: number = 0) {
  // Only varies the number downwards
  if (variance === 0) {
    return baseValue;
  }
  if (baseValue - variance <= 0) {
    return randFloatInRange(0, baseValue);
  }
  return baseValue - variance + randFloatInRange(0, variance);
}

// Generate range (array)
export function generateRange(min: number, max: number) {
  min = Math.ceil(min) as Integer;
  max = Math.floor(max) as Integer;

  if (min > max) {
    throw new Error('RANGE ERROR: min must be less than or equal to max');
  }

  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
}

// random int in range after time interval
export function randIntInRangeAfterTimeInterval(min: Integer, max: Integer, timeInterval: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randIntInRange(min, max));
    }, timeInterval);
  });
}
