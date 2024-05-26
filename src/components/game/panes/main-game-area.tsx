import AutoBuySection from '../key/auto-buy-section';
import ClickerArea from '../key/clicker-area';
import HeadlinesMarquee from '~/components/game/misc/headlines-marquee';
import PlayerNameView from '~/components/game/misc/player-name-view';
import ResourceIndicator from '~/components/game/misc/resource-indicator';

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
