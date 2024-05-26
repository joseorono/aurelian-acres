import MainGameArea from '~/components/game/panes/main-game-area';
import FirstSidePane from '~/components/game/panes/first-side-pane';
import SecondSidePane from './panes/second-side-pane';
import GameNavbar from './game-navbar';

export default function GameScreen() {
  return (
    <>
      <div id="app" vaul-drawer-wrapper="">
        <GameNavbar />
        <div id="game" className="h-game flex w-full">
          <MainGameArea className="w-2/6 justify-items-start" />
          <FirstSidePane className="flex w-2/6 flex-col justify-items-start" />
          <SecondSidePane className="flex w-2/6 flex-col justify-items-start" />
        </div>
      </div>
    </>
  );
}
