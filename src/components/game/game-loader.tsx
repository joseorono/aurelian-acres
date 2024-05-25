import { useState, useEffect, useRef } from 'react';
import { loaderService } from '~/services/loader-service';
import '~/css/pixelated-button.css';
import GameScreen from './game-screen';
import LoopingProgressBar from './misc/loopingProgressBar';
import { useAtomValue, useSetAtom } from 'jotai';
import { isMutedAtom, volumeAtom } from '~/store/atoms';
import { soundService } from '~/services/sound-service';

export default function GameLoader() {
  // TODO: Implement a loading screen that when done, displays a big PLAY button
  // Clicking the game button will start the game, displaying the GameScreen component
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // stupid name but should be true when everything is loading and user clicks Play
  const [ready, setReady] = useState(false);
  const savedVolume = useAtomValue(volumeAtom);
  const isMuted = useAtomValue(isMutedAtom);

  useEffect(() => {
    loaderService
      .preloadEverything()
      .then((_) => {
        setLoading(false);
        // this should work but it doesnt!!!!!!!!!!
        //fuck!
        soundService.setGlobalVolume(savedVolume);
        isMuted ? soundService.muteAll() : soundService.unmuteAll();
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
    // i cant put MainGameArea inside innerView or the styles of the wrappers will break everything
    // if (!loading && ready) {
    //   return <MainGameArea />;
    // }
  }

  return !ready ? (
    <div className="flex h-svh w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">{innerView()}</div>
    </div>
  ) : (
    <GameScreen />
  );
}

