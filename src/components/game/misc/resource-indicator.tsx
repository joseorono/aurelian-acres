import '~/css/resource-display.css';

export default function ResourceIndicator() {
  return (
    <div className="bg-blue-noise p-2 py-3 text-center text-2xl">
      Current resources:
      <div className="text-center text-5xl">
        {' '}
        <div className="flex flex-row justify-center gap-2 text-center text-2xl">
          <div className="pixel-rounded resource-display p-2 px-3">
            <span>🪙</span>: <span className="labelForGold">0</span>
          </div>
          <div className="pixel-rounded resource-display p-2 px-3">
            <span>🌾</span> : <span className="labelForGrain">0</span>
          </div>
          <div className="pixel-rounded resource-display p-2 px-3">
            <span>🪨</span>: <span className="labelForStone">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
