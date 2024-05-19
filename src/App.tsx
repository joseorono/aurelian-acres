import CounterExample from '~/components/demo/counter-example';
import ToasterDemo from '~/components/demo/toaster-demo';

import { Toaster } from 'react-hot-toast';

import '~/index.css';
import SoundsDemo from './components/demo/sounds-demo';

function App() {
  return (
    <>
      <div className="p-8">
        <CounterExample />
      </div>

      <SoundsDemo></SoundsDemo>

      <div id="app">
        <ToasterDemo />
      </div>

      {/* configure global toast settings, like theme */}
      <Toaster
        toastOptions={{
          position: 'bottom-center',

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },

          // Styling
          className: '',

          success: {
            style: {
              background: '#030e18',
              color: '#fff',
              fontWeight: '500',
            },
          },
          error: {
            style: {
              background: '#d32f2f',
              color: '#fff',
              fontWeight: '500',
            },
          },
        }}
      />
    </>
  );
}

export default App;

