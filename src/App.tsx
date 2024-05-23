import { Toaster } from 'react-hot-toast';

import '~/index.css';

import CheckDoublePixelIcon from './icons/CheckDoubleIcon';
import WarningPixelIcon from './icons/WarningPixelIcon';
import LightBulbPixelIcon from './icons/LightBulbPixelIcon';

import { useEffect } from 'react';
import MouseTracker from '~/components/effects/mouse-tracker';

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
      <div id="app" vaul-drawer-wrapper="">
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
      </div>
    </>
  );
}

export default App;
