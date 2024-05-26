import { useSetAtom } from 'jotai';
import { isModalOpenAtom } from '~/store/atoms';

export default function CreditsDialog() {
  const setIsModalOpen = useSetAtom(isModalOpenAtom);

  return (
    <>
      <div className="justify-center">
        <h1>CREDITS</h1>
        <h2>
          Made by{' '}
          <a href="https://github.com/joseorono" target="_blank">
            Jose Oroño
          </a>
          ,{' '}
          <a href="https://github.com/eangulom" target="_blank">
            Eduardo Angulo
          </a>{' '}
          &{' '}
          <a href="https://github.com/Charlemagnes" target="_blank">
            Carlos Sierra
          </a>
        </h2>
        <hr className="m-2 border border-black" />
        <h1>ASSETS USED:</h1>
        <ul>
          <li>this thing by this guy</li>
          <li>this other thing by this guy</li>
          <li>this last thing by this guy</li>
        </ul>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <button type="button" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </div>
    </>
  );
}
