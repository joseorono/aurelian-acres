import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ROMAN_NAMES } from '~/constants/names';

export const noop = () => {};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray(argArray: any[]) {
  // Durstenfeld shuffle array
  let array = argArray.slice(); // Copy the array, don't mutate the original
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function auxSleepFor(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, Math.floor(ms)));
}

export function auxObjectMap(object: Record<string, any>, mapFn: (arg: any) => any): Record<string, any> {
  return Object.keys(object).reduce(function (result: any, key: any) {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}

export function getRandomElement<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

export function getRandomRomanName(type: 'full' | 'first' | null = null): string {
  switch (type) {
    case 'full':
      const givenName = getRandomElement(ROMAN_NAMES.givenNames);
      const familyName = getRandomElement(ROMAN_NAMES.familyNames);
      const cognomen = getRandomElement(ROMAN_NAMES.cognomina);
      return `${givenName} ${familyName} ${cognomen}`;
    case 'first':
      return getRandomElement(ROMAN_NAMES.givenNames);
    default: // Just a formality
      return getRandomElement(ROMAN_NAMES.givenNames);
  }
}

export function getRandomRomanTownName(): string {
  const prefix = getRandomElement(['Colonia ', 'Nova ', 'Polis ', '', '']);
  const root = getRandomElement([
    'Roma',
    'Tiber',
    'Flavius',
    'Luna',
    'Caesarea',
    'Nerva',
    'Traiana',
    'Valeria',
    'Agrippina',
    'Maxima',
  ]);
  return `${prefix}${root}`;
}
