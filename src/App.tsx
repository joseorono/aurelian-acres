import CounterExample from '~/components/demo/counter-example';
import ToasterDemo from '~/components/demo/toaster-demo';

import { Toaster } from 'react-hot-toast';

import '~/index.css';
import AlertPixelIcon from '~/icons/AlertPixelIcon';
import HeadlinesMarquee from '~/components/headlines-marquee';
import SoundsDemo from './components/demo/sounds-demo';
import LoopingProgressBar from './components/ui/loopingProgressBar';
import CheckDoublePixelIcon from './icons/CheckDoubleIcon';
import WarningPixelIcon from './icons/WarningPixelIcon';
import LightBulbPixelIcon from './icons/LightBulbPixelIcon';

function App() {
  const toastClasses = 'pixel-rounded font-bold text-xl mx-2 w-11/12 md:w-fit min-w-[200px]';

  return (
    <>
      <div className="p-8">
        <CounterExample />
      </div>

      <SoundsDemo></SoundsDemo>

      <div id="app">
        <HeadlinesMarquee />
        <div className="w-32">
          <LoopingProgressBar durationInMs={1000} />
        </div>
        <ToasterDemo />
        <AlertPixelIcon size={48} fill="white" />
      </div>

      <Toaster
        gutter={12}
        toastOptions={{
          position: 'bottom-center',

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },

          // Styling
          className: toastClasses,

          success: {
            icon: <CheckDoublePixelIcon size={24} fill="#fff" />,
            style: {
              background: '#4BB543',
              color: '#fff',
            },
          },
          error: {
            icon: <WarningPixelIcon size={24} fill="#fff" />,
            style: {
              background: '#d32f2f',
              color: '#fff',
            },
          },
          custom: {
            icon: <LightBulbPixelIcon size={24} fill="#fff" />,
            className: toastClasses,
            style: {
              background: '#333',
              color: '#fff',
              textShadow: '1px 1px 2px #000',
            },
          },
        }}
      />
    </>
  );
}

export default App;
