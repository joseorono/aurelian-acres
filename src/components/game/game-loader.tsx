import { useState, useEffect } from 'react';
import { loaderService } from '~/services/loader-service';
import '~/css/pixelated-button.css';
import GameScreen from './game-screen';
import LoopingProgressBar from '~/components/game/misc/loopingProgressBar';
import { SoundNames, soundService } from '~/services/sound-service';
import { auxSleepFor } from '~/lib/utils';
import { useAtom, useSetAtom } from 'jotai';
import { firstTimeAtom, setContentAtom } from '~/store/atoms';
import TutorialDialog from '../modals/tutorial-dialog';

export default function GameLoader() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // stupid name but should be true when everything is loading and user clicks Play
  const [ready, setReady] = useState(false);
  const setIsModalOpen = useSetAtom(setContentAtom);
  const [isFirstTime, setIsFirstTime] = useAtom(firstTimeAtom);

  const onSetReady = () => {
    setReady(true);
    soundService.asyncPlaySouund(SoundNames.fanfare).then(async () => {
      if (isFirstTime === true) {
        setIsFirstTime(false);
        setIsModalOpen({
          title: 'Tutorial',
          content: <TutorialDialog />,
          onClose: (val) => console.log(`modal closed. Here's the value we cooked up => ${val}`),
        });
      }
      await auxSleepFor(4000);
      soundService.startMusic(SoundNames.backgroundMusic2);
    });
  };

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
          <img id="loaderLogo" src="/assets/logo_aurelian.png" className="z-1" />
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
        <>
          <img id="loaderLogo" src="/assets/logo_aurelian.png" className="z-1" />
          <button
            onClick={onSetReady}
            className="pixel-xl-corners mx-auto w-11/12 max-w-[280px] bg-red-500 p-4 text-5xl text-white hover:bg-red-700"
          >
            Play!
          </button>
        </>
      );
    }
    // i cant put MainGameArea inside innerView or the styles of the wrappers will break everything
    // if (!loading && ready) {
    //   return <MainGameArea />;
    // }
  }

  return !ready ? (
    <div className="splashScreen flex h-svh w-full items-center justify-center">
      <div className="splashScreen__bg"></div>
      <div className="flex flex-col items-center justify-center">{innerView()}</div>
    </div>
  ) : (
    <GameScreen />
  );
}
