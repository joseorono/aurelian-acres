import GenericLoader from '~/components/loader/generic-loader';
import DialogDemo from '~/components/demo/dialog-demo';
import DialogDemo2 from '~/components/demo/dialog-demo-2';

import AlertPixelIcon from '~/icons/AlertPixelIcon';
import HeadlinesMarquee from '~/components/game/misc/headlines-marquee';
import SoundsDemo from '~/components/demo/sounds-demo';
import LoopingProgressBar from '~/components/game/misc/loopingProgressBar';

import CounterExample from '~/components/demo/counter-example';
import StoreExample from '~/components/demo/store-demo';
import ToasterDemo from '~/components/demo/toaster-demo';

export default function DebugArea() {
  return (
    <>
      <div className="p-8">
        <CounterExample />
      </div>

      <div className="p-8">
        <StoreExample />
      </div>

      {/* <SoundsDemo></SoundsDemo> */}

      <div id="app">
        <div className="w-32">
          <LoopingProgressBar durationInMs={1000} />
        </div>
        <ToasterDemo />
        <AlertPixelIcon size={48} fill="white" />
      </div>
      <div className="p-4">
        <DialogDemo />
        <DialogDemo2 />
        <SoundsDemo />
      </div>
      <GenericLoader />
    </>
  );
}
