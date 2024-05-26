import '~/css/resource-display.css';

export default function ResourceIndicator() {
  return (
    <div className="bg-blue-noise p-2 py-3 text-center text-2xl">
      Current resources:
      <div className="text-center text-2xl">
        {' '}
        <div className="mx-auto mt-2 flex w-full max-w-[400px] flex-row flex-wrap justify-center gap-2 text-center text-2xl">
          <div className="pixel-rounded resource-display flex  min-w-[130px] max-w-full flex-auto p-2 px-3 pt-4">
            <span>🪙</span>: <span className="labelForGold flex-auto text-right">0</span>
          </div>
          <div className="pixel-rounded resource-display flex  min-w-[130px] max-w-full flex-auto p-2 px-3 pt-4">
            <span>🌾</span> : <span className="labelForGrain flex-auto text-right">0</span>
          </div>
          <div className="pixel-rounded resource-display flex  max-w-full flex-auto p-2 px-3 pt-4">
            <span>🪨</span>: <span className="labelForStone flex-auto text-right">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
