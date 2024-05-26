import { useState } from 'react';
import BuildingsShop from '../shop/buildings-shop';
import WorkersShop from '../shop/workers-shop';
import { SoundNames, soundService } from '~/services/sound-service';

const VALID_SHOP_TABS = ['workers', 'buildings'] as const;
type ShopTab = (typeof VALID_SHOP_TABS)[number];

export default function SecondSidePane({ className = '' }) {
  const [currentTab, setTab] = useState<ShopTab>('workers');

  const isWorkersTab = currentTab === 'workers';

  const handleTabChange = (tab: ShopTab) => {
    soundService.playSound(SoundNames.coinClick, 0.2, 0.1);
    setTab(tab);
  };

  return (
    <div className={className}>
      <div className="SectionHeader ">Store</div>

      <div className="store-wrapper">
        <div role="tablist" className="tabs tabs-bordered my-2">
          <a
            role="tab"
            onMouseDown={() => handleTabChange('workers')}
            className={'tab h-auto !p-1 !text-xl leading-none ' + (isWorkersTab ? 'tab-active font-bold' : '')}
          >
            Workers
          </a>
          <a
            role="tab"
            onMouseDown={() => handleTabChange('buildings')}
            className={'tab h-auto !p-1 !text-xl leading-none  ' + (isWorkersTab ? '' : 'tab-active font-bold')}
          >
            Buildings
          </a>
        </div>
        <div className={isWorkersTab ? '!hidden' : ''}>
          <BuildingsShop />
        </div>
        <div className={isWorkersTab ? '' : '!hidden'}>
          <WorkersShop />
        </div>
      </div>
    </div>
  );
}
