import { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { isModalOpenAtom, townNameAtom } from '~/store/atoms';
import { getRandomRomanTownName } from '~/lib/utils';
import toast from 'react-hot-toast';
import { SoundNames, soundService } from '~/services/sound-service';

export default function TownNameChangerDialog() {
  const [nameAtomVal, setNameAtom] = useAtom(townNameAtom);
  const setIsModalOpen = useSetAtom(isModalOpenAtom);
  const [name, setName] = useState(nameAtomVal);

  const randomName = () => {
    console.log('Setting Random Town Name.');
    setName(getRandomRomanTownName());
  };

  const handleNameChange = () => {
    if (name.length <= 0) {
      console.error('name cannot be empty!');
      return;
    }
    setNameAtom(name);
    toast.success('The Town has a new name!');
    soundService.playSound(SoundNames.closeModal);

    setIsModalOpen(false);
  };
  return (
    <>
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

