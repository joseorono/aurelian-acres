export default function ResourceIndicator() {
  return (
    <div className="bg-blue-noise p-2 py-3 text-center text-2xl">
      Current resources
      <div className="text-center text-5xl">
        {' '}
        <div className="text-center text-2xl">
          🪙: <span className="labelForGold">0</span>, 🌾: <span className="labelForGrain">0</span>, 🪨:{' '}
          <span className="labelForStone">0</span>
        </div>
      </div>
    </div>
  );
}
