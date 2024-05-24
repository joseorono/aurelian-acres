import { useState, useEffect } from 'react';
import { loaderService } from '~/services/loader-service';
import '~/css/pixelated-button.css';
import GameScreen from './game-screen';
import DebugArea from '../debug-area';
import LoopingProgressBar from './misc/loopingProgressBar';
import MainGameArea from './panes/main-game-area';

export default function GameLoader() {
  // TODO: Implement a loading screen that when done, displays a big PLAY button
  // Clicking the game button will start the game, displaying the GameScreen component
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // stupid name but should be true when everything is loading and user clicks Play
  const [ready, setReady] = useState(false);

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
  }, []);

  function innerView() {
    if (loading) {
      return (
        <>
          <h1 className="text-4xl text-white">Loading...</h1>
          <LoopingProgressBar durationInMs={1000} />
        </>
      );
    }
    if (error) {
      return <div>There was an error loading the game. Please refresh and try again</div>;
    }
    if (!loading && !ready) {
      return (
        <button onClick={() => setReady(true)} className="pixel-btn text-4xl text-white">
          Play!
        </button>
      );
    }
    if (!loading && ready) {
      return <MainGameArea />;
    }
  }

  return (
    <>
      <div className="flex h-svh w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center"></div>
      </div>
      {innerView()}
    </>
  );
}

