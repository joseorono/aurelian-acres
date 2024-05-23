import AutoBuySection from './game/key/auto-buy-section';
import ClickerArea from './game/key/clicker-area';
import HeadlinesMarquee from './game/misc/headlines-marquee';
import PlayerNameView from './game/misc/player-name-view';
import ResourceIndicator from './game/misc/resource-indicator';

interface IMainGameAreaProps {
  className?: string;
}

const MainGameArea: React.FC<IMainGameAreaProps> = ({ className = '' }) => {
  return (
    <div id="mainGameArea" className={'flex flex-col ' + className}>
      <PlayerNameView />
      <ResourceIndicator />
      <HeadlinesMarquee />

      <ClickerArea className="flex-auto" />
      <AutoBuySection />
    </div>
  );
};

export default MainGameArea;
