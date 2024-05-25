import { useAtomValue } from 'jotai';
import { BASE_CITIZEN_COUNT } from '~/constants/defaults';
import { workersAtom } from '~/store/atoms';

export default function PopulationView() {
  const workers = useAtomValue(workersAtom);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-4 text-white">
      <h1 className="text-3xl">The Town</h1>
      <p>Population: {Object.values(workers).reduce((a, b) => a + b, 0) + BASE_CITIZEN_COUNT}</p>
    </div>
  );
}
