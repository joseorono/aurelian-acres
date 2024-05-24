import GameScreen from './game-screen';

export default function GameLoader() {
  // TODO: Implement a loading screen that when done, displays a big PLAY button
  // Clicking the game button will start the game, displaying the GameScreen component

  return (
    <div className="flex h-svh w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white">Loading...</h1>
        {/*  
            <GameScreen />
            */}
      </div>
    </div>
  );
}
