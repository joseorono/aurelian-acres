import { useAtomValue, useSetAtom } from 'jotai';
import PlayerNameChangerDialog from '~/components/modals/player-name-changer-dialog';
import { playerNameAtom, setContentAtom } from '~/store/atoms';

<h1 className="text-3xl">The Town</h1>;

export default function TownNameView() {
  const playerName = useAtomValue(playerNameAtom);
  const setIsModalOpen = useSetAtom(setContentAtom);

  // const dialogContent = <NameChangerDialog />;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-4 text-white">
      <button
        type="button"
        onClick={() =>
          setIsModalOpen({
            title: 'this is the SECOND modal lets see whats up',
            content: <PlayerNameChangerDialog />,
            onClose: (val) => console.log(`modal closed. Here's the value we cooked up => ${val}`),
          })
        }
      >
        <h1 className="text-3xl">{playerName}</h1>
      </button>
    </div>
  );
}

