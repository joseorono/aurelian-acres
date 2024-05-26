import MainGameArea from '~/components/game/panes/main-game-area';
import FirstSidePane from '~/components/game/panes/first-side-pane';
import SecondSidePane from './panes/second-side-pane';

export default function GameScreen() {
  return (
    <>
      <div id="app" vaul-drawer-wrapper="" className="flex h-svh w-full">
        <MainGameArea className="h-svh w-2/6 justify-items-start" />
        <FirstSidePane className="flex h-svh w-2/6 flex-col justify-items-start" />
        <SecondSidePane className="flex h-svh w-2/6 flex-col justify-items-start overflow-scroll" />
      </div>
    </>
  );
}

