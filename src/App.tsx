import { Toaster } from 'react-hot-toast';

import '~/index.css';

import CheckDoublePixelIcon from './icons/CheckDoubleIcon';
import WarningPixelIcon from './icons/WarningPixelIcon';
import LightBulbPixelIcon from './icons/LightBulbPixelIcon';

import { useEffect } from 'react';
import MouseTracker from '~/components/effects/mouse-tracker';
import DebugArea from './components/debug-area';
import MainGameArea from './components/game/panes/main-game-area';
import FirstSidePane from './components/game/panes/first-side-pane';
import ResponsiveNotice from './components/responsive-notice';
import BackgroundWorker from './components/game/background-worker';
import Modal from './components/Modal';

function App() {
  const toastClasses = 'pixel-rounded font-bold text-xl mx-2 w-11/12 md:w-fit min-w-[200px]';

  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    document.addEventListener('gestureend', handler);
    return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
      document.removeEventListener('gestureend', handler);
    };
  }, []);

  return (
    <>
      <MouseTracker />
      <ResponsiveNotice />
      <BackgroundWorker />
      <Modal />

      <div id="app" vaul-drawer-wrapper="" className="flex h-svh w-full">
        <MainGameArea className="h-svh w-2/6" />
        <FirstSidePane className="flex h-svh w-2/6 flex-col" />
        <div className="flex h-svh w-2/6 flex-col" />
        <DebugArea />
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
