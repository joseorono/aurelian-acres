interface ILoopingProgressBarProps {
  durationInMs: number;
}

export default function LoopingProgressBar(props: ILoopingProgressBarProps) {
  let durationInMs = Math.floor(props.durationInMs);
  return (
    <div className="h-[17px] w-full overflow-hidden border-b-[3px] bg-black">
      <div data-durationms={durationInMs} className="loopFakeProgressBar h-full bg-white"></div>
    </div>
  );
}
