import '~/css/resource-display.css';
import { Coin, Stone, Wheat } from '~/icons/resourceIcons';

export default function ResourceIndicator() {
  return (
    <div className="bg-blue-noise p-2 py-3 text-center text-2xl">
      Current resources:
      <div className="text-center text-2xl">
        <div className="mx-auto mt-2 flex w-full max-w-[400px] flex-row flex-wrap justify-center gap-2 text-center text-2xl">
          <div className="pixel-rounded resource-display flex  min-w-[130px] max-w-full flex-auto items-center p-2">
            <span className="labelForGold mr-2 flex-auto self-end text-right">0</span>
            <span>
              <Coin size={32} />
            </span>
          </div>
          <div className="pixel-rounded resource-display flex  min-w-[130px] max-w-full flex-auto items-center p-2">
            <span className="labelForGrain mr-2 flex-auto self-end text-right">0</span>
            <span>
              <Wheat size={32} />
            </span>
          </div>
          <div className="pixel-rounded resource-display flex  max-w-full flex-auto items-center p-2">
            <span className="labelForStone mr-2 flex-auto self-end text-right">0</span>
            <span>
              <Stone size={32} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
