import { useEffect, useState } from 'react';
// import GameScreen from './game-screen';
import { loaderService } from '~/services/loader-service';

export default function GameLoader() {
  // TODO: Implement a loading screen that when done, displays a big PLAY button
  // Clicking the game button will start the game, displaying the GameScreen component
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loaderService
      .preloadEverything()
      .then((_) => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex h-svh w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {loading === true && <h1 className="text-4xl text-white">Loading...</h1>}
        {loading === false && <h1 className="text-4xl text-white">Game loaded!</h1>}
        {/*  
            <GameScreen />
            */}
      </div>
    </div>
  );
}

