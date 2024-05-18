import { useRef, useState } from 'react';
import CounterExample from './components/counter-example';

import './index.css';

function App() {
  return (
    <>
      <div className="p-8">
        <CounterExample />
      </div>

      <div id="app">
        <h1>Game Template</h1>
      </div>
    </>
  );
}

export default App;
