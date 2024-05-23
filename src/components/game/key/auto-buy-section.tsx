import LoopingProgressBar from '../misc/loopingProgressBar';

export default function AutoBuySection() {
  return (
    <div className="flex bg-slate-800">
      <div id="availableWorker" className="flex-auto bg-green-700 pt-4">
        Best Worker
      </div>
      <div id="availableBuilding" className="flex flex-auto flex-col bg-blue-700 pt-4">
        <div className="flex-auto">
          <div>Best Building</div>
          <div>Building Cost</div>
        </div>
        <LoopingProgressBar durationInMs={1000} />
      </div>
    </div>
  );
}
