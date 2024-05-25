const nameArray = ['Lucius', 'Augustus', 'Aurelius', 'Iosephus', 'Carolus', 'Eduardus'];
import { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { isModalOpenAtom, townNameAtom } from '~/store/atoms';

export default function TownNameChangerDialog() {
  const [nameAtomVal, setNameAtom] = useAtom(townNameAtom);
  const setIsModalOpen = useSetAtom(isModalOpenAtom);
  const [name, setName] = useState(nameAtomVal);

  const randomName = () => {
    console.log('calling func');
    setName(nameArray[Math.floor(Math.random() * nameArray.length)]);
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
