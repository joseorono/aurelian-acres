import HeadingTest from '~/components/heading-test';

import { useCounterStore } from '~/store/useCounterStore';

function CounterExample() {
  const counterStore = useCounterStore();

  return (
    <div className="mx-auto w-1/2 text-center">
      <HeadingTest />
      <div className="my-3 p-2 text-center text-2xl">
        Count is
        <div className="text-center text-5xl">{counterStore.count}</div>
      </div>

      <p className="text-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => counterStore.increase()}
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => counterStore.decrease()}
        >
          -
        </button>
      </p>
    </div>
  );
}

export default CounterExample;
