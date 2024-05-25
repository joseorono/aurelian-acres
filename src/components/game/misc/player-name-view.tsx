import { useAtomValue, useSetAtom } from 'jotai';
import PlayerNameChangerDialog from '~/components/modals/player-name-changer-dialog';
import { playerNameAtom, setContentAtom } from '~/store/atoms';

<h1 className="text-3xl">The Town</h1>;

export default function TownNameView() {
  const playerName = useAtomValue(playerNameAtom);
  const setIsModalOpen = useSetAtom(setContentAtom);
  return (
    <div className="SectionHeader">
      <button
        type="button"
        onClick={() =>
          setIsModalOpen({
            title: 'Change name',
            subtitle: 'Change the name of your emperor',
            content: <PlayerNameChangerDialog />,
            onClose: (val) => console.log(`modal closed. Here's the value we cooked up => ${val}`),
          })
        }
      >
        <h1 className="text-3xl text-white">{playerName}</h1>
      </button>
    </div>
  );
}

