import { eventData } from '~/types/game-data-types';

export const GLOBAL_EVENTS: Array<eventData> = [
  {
    id: 1,
    probability: 0.05,
    name: 'Bountiful Harvest',
    description: 'The village experiences an exceptionally good harvest season.',
    resourceMultiplier: { gold: 1, grain: 1.3, stone: 1 },
  },
  {
    id: 2,
    probability: 0.15,
    name: 'Trade Caravan',
    description: 'A trade caravan passes through, bringing wealth to the village.',
    resourceMultiplier: { gold: 1.3, grain: 1.1, stone: 1.05 },
  },
  {
    id: 3,
    probability: 0.1,
    name: 'New Settlers',
    description: 'New settlers arrive, increasing the village’s workforce and economy.',
    resourceMultiplier: { gold: 1.15, grain: 1.15, stone: 1.1 },
    workerMultiplier: {
      slave: 1.1,
      agricola: 1.1,
      miner: 1,
      baker: 1,
      mercator: 1,
      blacksmith: 1,
      legionary: 1,
      priest: 1,
    },
  },
  {
    id: 4,
    probability: 0.1,
    name: 'Bandit Raid',
    description: 'Bandits raid the village, stealing resources.',
    resourceMultiplier: { gold: 0.85, grain: 0.8, stone: 0.95 },
  },
  {
    id: 5,
    probability: 0.1,
    name: 'Drought',
    description: 'A severe drought reduces the village’s grain production.',
    resourceMultiplier: { gold: 1, grain: 0.7, stone: 1 },
  },
  {
    id: 6,
    probability: 0.1,
    name: 'Earthquake',
    description: 'An earthquake damages buildings and infrastructure.',
    resourceMultiplier: { gold: 0.95, grain: 1, stone: 0.8 },
    buildingMultiplier: {
      bakery: 0.85,
      castra: 0.85,
      fields: 0.85,
      quarry: 0.85,
      forum: 0.85,
      smithy: 0.85,
      temple: 0.85,
    },
  },
  {
    id: 7,
    probability: 0.05,
    name: 'Festival',
    description: 'A successful festival boosts morale and trade.',
    resourceMultiplier: { gold: 1.25, grain: 1.1, stone: 1 },
  },
  {
    id: 8,
    probability: 0.05,
    name: 'Invention',
    description: 'An inventor in the village creates a tool that increases productivity.',
    resourceMultiplier: { gold: 1, grain: 1.25, stone: 1.1 },
  },
  {
    id: 9,
    probability: 0.1,
    name: 'Flood',
    description: 'A flood devastates the village, causing significant losses.',
    resourceMultiplier: { gold: 0.85, grain: 0.7, stone: 0.9 },
    buildingMultiplier: {
      bakery: 0.9,
      castra: 0.9,
      fields: 0.9,
      quarry: 0.9,
      forum: 0.9,
      smithy: 0.9,
      temple: 0.9,
    },
    workerMultiplier: {
      agricola: 0.9,
      baker: 0.9,
      blacksmith: 0.9,
      legionary: 0.9,
      miner: 0.9,
      priest: 0.9,
      slave: 0.9,
      mercator: 0.9,
    },
  },
  {
    id: 10,
    probability: 0.2,
    name: 'Peace Treaty',
    description: 'A peace treaty with neighboring tribes allows for increased trade and security.',
    resourceMultiplier: { gold: 1.4, grain: 1.2, stone: 1.1 },
    workerMultiplier: {
      agricola: 1,
      baker: 1,
      blacksmith: 1,
      legionary: 1,
      miner: 1,
      priest: 1,
      slave: 1,
      mercator: 1.15,
    },
  },
] as const;

// A simple joke event that does nothing. A reference to the "Nothing Happens" meme.
export const NOTHING_EVENT: eventData = {
  id: 0,
  probability: 0.1,
  name: 'Local Bachelor: Nothing Ever Happens',
  description:
    'Local men are baffled by the lack of events in the village. Nothing ever happens here. We need more hustle and bustle.',
};

export const EVENT_PROBABILITY: number = 0.01;

