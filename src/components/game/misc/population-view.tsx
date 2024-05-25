import { useAtomValue } from 'jotai';
import { BASE_CITIZEN_COUNT } from '~/constants/defaults';
import { workersAtom } from '~/store/atoms';

export default function PopulationView() {
  const workers = useAtomValue(workersAtom);

  return (
    <div className="p-1 text-center text-base">
      <p>Population: {Object.values(workers).reduce((a, b) => a + b, 0) + BASE_CITIZEN_COUNT}</p>
    </div>
  );
}
