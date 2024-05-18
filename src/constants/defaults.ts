// Aca ponemos los valores por defecto de las variables que vamos a usar en la aplicacion
/*

Incluyen los valores iniciales de los recursos (0), los valores iniciales de los recursos por segundo (0), 
y los valores iniciales de los costos de los recursos (0)

Valores por default para las opciones como el volumen y si reproducir o no la musica.

*/

type defaultData = {
    volume: number;
    playMusic: boolean;
    gold: number;
    stone: number;
    grain: number;
    goldPerSecond: number;
    stonePerSecond: number;
    grainPerSecond: number;
    goldPerClick: number;
    stonePerClick: number;
    grainPerClick: number;
    bonusMultiplier: number;
};

const defaultValues: defaultData = {
    volume: 100,
    playMusic: true,
    gold: 0,
    stone: 0,
    grain: 0,
    goldPerSecond: 0,
    stonePerSecond: 0,
    grainPerSecond: 0,
    goldPerClick: 1,
    stonePerClick: 0,
    grainPerClick: 0,
    bonusMultiplier: 0,
};

export default defaultValues;
