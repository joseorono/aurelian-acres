import MainGameArea from '~/components/game/panes/main-game-area';
import FirstSidePane from '~/components/game/panes/first-side-pane';

export default function GameScreen() {
  return (
    <>
      <MainGameArea className="h-svh w-2/6" />
      <FirstSidePane className="flex h-svh w-2/6 flex-col" />
      <div id="lastPane" className="flex h-svh w-2/6 flex-col">
        <p className="text-center">LAST PANE</p>
      </div>
    </>
  );
}
