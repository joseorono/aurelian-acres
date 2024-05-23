import AutoBuySection from './game/key/auto-buy-section';
import ClickerArea from './game/key/clicker-area';
import PlayerNameView from './game/misc/player-name-view';

interface IMainGameAreaProps {
  className?: string;
}

const MainGameArea: React.FC<IMainGameAreaProps> = ({ className = '' }) => {
  return (
    <div id="mainGameArea" className={'flex flex-col ' + className}>
      <PlayerNameView />
      <ClickerArea className="flex-auto" />
      <AutoBuySection />
    </div>
  );
};

export default MainGameArea;
