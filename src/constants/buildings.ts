type buildingData = {
  name: string;
  description: string;
  costGold: number;
  costGrain: number;
  costStone: number;
  goldPerSecond: number;
  grainPerSecond: number;
  stonePerSecond: number;
  //TODO: unlock requirements?
};

const buildings: buildingData[] = [
  {
    name: 'Fields',
    description: 'Wheat, barley, and millet. Everything a roman citizen (and the rest) needs. ',
    costGold: 10,
    costGrain: 0,
    costStone: 0,
    goldPerSecond: 0,
    grainPerSecond: 15,
    stonePerSecond: 0,
  },
  {
    name: 'Quarry',
    description: 'Procure stone for your province',
    costGold: 10,
    costGrain: 0,
    costStone: 0,
    goldPerSecond: 0,
    grainPerSecond: 0,
    stonePerSecond: 15,
  },
  {
    name: 'Bakery',
    description: 'Bread is an essential part of the roman diet.',
    costGold: 50,
    costGrain: 300,
    costStone: 750,
    goldPerSecond: 30,
    grainPerSecond: 0,
    stonePerSecond: 0,
  },
  {
    name: 'Forum',
    description: 'Commerce, politics and a social space. The center of day-to-day roman life.',
    costGold: 2500,
    costGrain: 0,
    costStone: 3500,
    goldPerSecond: 75,
    grainPerSecond: 30,
    stonePerSecond: 50,
  },
  {
    name: 'Smithy',
    description: 'From household goods to weapons and war machinery, roman smithies are the best in the world.',
    costGold: 10000,
    costGrain: 0,
    costStone: 8000,
    goldPerSecond: 200,
    grainPerSecond: 0,
    stonePerSecond: 75,
  },
  {
    name: 'Castra',
    description: 'The barracks, a place to safely house your troops before any campaign.',
    costGold: 35000,
    costGrain: 0,
    costStone: 15000,
    goldPerSecond: 700,
    grainPerSecond: 0,
    stonePerSecond: 150,
  },
  {
    name: 'Temple',
    description: 'Place of worship for a deity of choice. Pray, make an offering. Perhaps the gods will answer.',
    costGold: 150000,
    costGrain: 30000,
    costStone: 0,
    goldPerSecond: 2200,
    grainPerSecond: 100,
    stonePerSecond: 250,
  },
];

export default buildings;
