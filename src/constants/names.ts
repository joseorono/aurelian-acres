export type RomanNameParts = {
  givenNames: string[];
  familyNames: string[];
  cognomina: string[];
};

export const ROMAN_NAMES: RomanNameParts = {
  givenNames: ['Gaius', 'Lucius', 'Marcus', 'Publius', 'Quintus', 'Titus', 'Tiberius', 'Decimus', 'Sextus', 'Gnaeus'],
  familyNames: [
    'Iosephus',
    'Carolus',
    'Eduardus',
    'Aurelius',
    'Julius',
    'Claudius',
    'Cornelius',
    'Fabius',
    'Aemilius',
    'Valerius',
    'Sergius',
    'Antonius',
    'Flavius',
    'Brutus',
  ],
  cognomina: ['Caesar', 'Cicero', 'Scipio', 'Nero', 'Augustus', 'Brutus', 'Cassius', 'Gracchus', 'Maximus', 'Severus'],
} as const;
