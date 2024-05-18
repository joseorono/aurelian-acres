
type buildingData = {
    name: string;
    description: string;
    costGold: number;
    costGrain: number;
    costStone: number;
    incomeGold: number;
    incomeGrain: number;
    incomeStone: number;

};

export buildings: buildingData = {

    'farm': {
        name: 'Farm',
        description: 'Produces grain',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 0,
        incomeGrain: 10,
        incomeStone: 0,
    },
    'mine': {
        name: 'Mine',
        description: 'Produces stone',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 0,
        incomeGrain: 0,
        incomeStone: 10,
    },
    'market': {
        name: 'Market',
        description: 'Produces gold',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 10,
        incomeGrain: 0,
        incomeStone: 0,
    },
    'castle': {
        name: 'Castle',
        description: 'Produces gold, grain and stone',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 10,
        incomeGrain: 10,
        incomeStone: 10,
    },
    'barracks': {
        name: 'Barracks',
        description: 'Produces soldiers',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 0,
        incomeGrain: 0,
        incomeStone: 0,
    },
    'church': {
        name: 'Church',
        description: 'Produces priests',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 0,
        incomeGrain: 0,
        incomeStone: 0,
    },
    'blacksmith': {
        name: 'Blacksmith',
        description: 'Produces weapons',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 0,
        incomeGrain: 0,
        incomeStone: 0,
    },
    'tavern': {
        name: 'Tavern',
        description: 'Produces alcohol',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 0,
        incomeGrain: 0,
        incomeStone: 0,
    },
    'library': {
        name: 'Library',
        description: 'Produces knowledge',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 0,
        incomeGrain: 0,
        incomeStone: 0,
    },
    'lumbermill': {
        name: 'Lumbermill',
        description: 'Produces wood',
        costGold: 0,
        costGrain: 0,
        costStone: 0,
        incomeGold: 0,
        incomeGrain: 0,
        incomeStone: 0,
    },
    

} 
