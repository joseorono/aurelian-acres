import LoopingProgressBar from '~/components/game/misc/loopingProgressBar';

export default function AutoBuySection() {
  return (
    <div className="flex bg-slate-800">
      <div
        id="availableWorker"
        className="border-1 flex-auto cursor-pointer border-slate-600 bg-gradient-to-b from-red-600 to-red-900 p-4"
      >
        Best Worker
      </div>
      <div id="availableBuilding" className="flex flex-auto flex-col bg-blue-800">
        <div className="flex-auto bg-gradient-to-b from-blue-600 to-blue-800 p-4">
          <div>Best Building</div>
          <div>Building Cost</div>
        </div>
        <LoopingProgressBar durationInMs={1000} />
      </div>
    </div>
  );
}
