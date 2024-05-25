import { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { isModalOpenAtom, playerNameAtom } from '~/store/atoms';
import { getRandomRomanName } from '~/lib/utils';

export default function PlayerNameChangerDialog() {
  const [nameAtom, setNameAtom] = useAtom(playerNameAtom);
  const [name, setName] = useState(nameAtom);
  const setIsModalOpen = useSetAtom(isModalOpenAtom);

  const randomName = () => {
    console.log('Setting random player name.');
    setName(getRandomRomanName());
  };

  const handleNameChange = () => {
    if (name.length <= 0) {
      console.error('name cannot be empty!');
      return;
    }
    setNameAtom(name);
    setIsModalOpen(false);
  };
  return (
    <>
      {/* This component is built using shadcn/ui&apos;s dialog and drawer component, which is built on top of Vaul. */}
      <label className="input input-bordered flex w-[300px] items-center gap-2 text-white">
        <input type="text" className="grow" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={randomName}>Random</button>
      </label>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <button type="button" onClick={handleNameChange}>
          Accept
        </button>
      </div>
    </>
  );
}
