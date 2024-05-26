import { useSetAtom } from 'jotai';
import SoundBar from '~/components/soundBar';
import GithubPixelIcon from '~/icons/GithubPixelIcon';
import { setContentAtom } from '~/store/atoms';
import CreditsDialog from '../modals/credits-dialog';

export default function GameNavbar() {
  const setIsModalOpen = useSetAtom(setContentAtom);

  const handleShowCredits = () => {
    console.log('Display the Credits modal');
    setIsModalOpen({
      title: 'Credits',
      content: <CreditsDialog />,
      onClose: (val) => console.log(`modal closed. Here's the value we cooked up => ${val}`),
    });
  };
  return (
    <div className="h-navbar navbar min-h-0 bg-base-100 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <a onClick={() => handleShowCredits()}>Credits</a>
            </li>
            <li>
              <a href="https://github.com/joseorono/idle-roman-game/">
                <GithubPixelIcon />
              </a>
            </li>
            <li>
              <a>Authors</a>
              <ul className="p-2">
                <li>
                  <a href="https://github.com/joseorono">JanJozefo</a>
                </li>
                <li>
                  <a href="https://github.com/Charlemagnes">Charlemagnes</a>
                </li>
                <li>
                  <a href="https://github.com/eangulom">Edd</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost !m-0 !ml-4 h-auto !border-0 !p-0">
          <img className="logoNav" src="/assets/logo.png" alt="Aurelian Acres" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="https://github.com/joseorono/idle-roman-game/">
              <GithubPixelIcon />
            </a>
          </li>
          <li>
            <a onClick={() => handleShowCredits()}>Credits</a>
          </li>
          <li>
            <details>
              <summary>Creators</summary>
              <ul className="p-2">
                <li>
                  <a href="https://github.com/joseorono">JanJozefo</a>
                </li>
                <li>
                  <a href="https://github.com/Charlemagnes">Charlemagnes</a>
                </li>
                <li>
                  <a href="https://github.com/eangulom">Edd</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <SoundBar />
      </div>
    </div>
  );
}

