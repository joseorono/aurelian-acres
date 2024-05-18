
import HeadingTest  from '~/components/heading-test';

import { useCounterStore } from '~/store/useCounterStore';


function CounterExample() {
    const counterStore = useCounterStore();

    return (
    
    <div className='text-center mx-auto w-1/2'>
        <HeadingTest />
      <div className="my-3 p-2 text-center text-2xl">
        Count is
        <div className="text-center text-5xl">{counterStore.count}</div>
      </div>

      <p className="text-center">
        <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={() => counterStore.increase()}>
          +
        </button>
        <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'  onClick={() => counterStore.decrease()}>
          -
        </button>
      </p>

    </div>
  )
}


export default CounterExample



