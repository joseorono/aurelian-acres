
import { useStore } from '~/store/useStore';
import HeadingTest  from '~/components/heading-test';
import { increaseFromOutsideReact } from '~/store/useStore';
//import { increaseFromOutsideReact } from '~/store/useStore';

function CounterExample() {
  const { count, inc } = useStore()
  return (
    
    <div className='text-center mx-auto w-1/2'>
        <HeadingTest />
        <span>{count}</span>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={inc}>
            +
            </button>
        <button 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
            onClick={increaseFromOutsideReact}
        >
            + from outside React
        </button>
    </div>
  )
}


export default CounterExample

