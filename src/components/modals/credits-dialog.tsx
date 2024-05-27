import { useSetAtom } from 'jotai';
import { SoundNames, soundService } from '~/services/sound-service';
import { isModalOpenAtom } from '~/store/atoms';

export default function CreditsDialog() {
  const setIsModalOpen = useSetAtom(isModalOpenAtom);

  const handleClose = () => {
    soundService.playSound(SoundNames.closeModal);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="text-large flex flex-col justify-center gap-2 overflow-y-auto">
        <h1 className="text-3xl">CREDITS</h1>

        <>
          <h1 className="text-3xl" id="licences-and-credits">
            Licences and Credits
          </h1>
          <h2 className="text-2xl" id="special-thanks">
            Special Thanks
          </h2>
          <p>Huge thanks to our friend Aquiles for testing the game and giving us pointers to improve it!</p>
          <h2 className="text-2xl" id="visual-assets-licences-and-credits">
            Visual Assets - Licences and Credits
          </h2>
          <ul>
            <li>
              Navbar background (navbarbg.png) and dirt_tile.png edited from 16*16 Block Textures by
              ARoachIFoundOnMyPillow. Creative Commons 0.{' '}
              <a href="https://opengameart.org/content/1616-block-textures">Source</a>.
            </li>
          </ul>
          <h3 className="text-xl" id="buildings-and-town-display-background-">
            Buildings and town display background:
          </h3>
          <ul>
            <li>
              <a href="https://kenney.nl/assets/cartography-pack">Cartography Pack by KenneyNL</a> CC0
            </li>
          </ul>
          <h3 className="text-xl" id="workers-">
            Workers:
          </h3>
          <ul>
            <li>
              <a href="https://game-icons.net/1x1/lorc/crested-helmet.html">Legionary by Lorc</a> CC BY 3.0
            </li>
            <li>
              <a href="https://game-icons.net/1x1/lorc/slavery-whip.html">Slave by Lorc</a> CC BY 3.0
            </li>
            <li>
              <a href="https://game-icons.net/1x1/lorc/cash.html">Merchant by Lorc</a> CC BY 3.0 -
              <a href="https://game-icons.net/1x1/delapouite/blacksmith.html">Blacksmith by Delapouite</a> CC BY 3.0
            </li>
            <li>
              <a href="https://game-icons.net/1x1/delapouite/sun-priest.html">Priest by Delapouite</a> CC BY 3.0
            </li>
            <li>
              (Citizen by Delapouite)[
              <a href="https://game-icons.net/1x1/delapouite/person.html">
                https://game-icons.net/1x1/delapouite/person.html
              </a>
              ] CC BY 3.0
            </li>
            <li>
              <a href="https://game-icons.net/1x1/delapouite/miner.html">Baker</a> CC BY 3.0, Delapouite
            </li>
          </ul>
          <h3 className="text-xl" id="misc">
            Misc
          </h3>
          <ul>
            <li>
              <a href="https://opengameart.org/content/rpg-crafting-material-icons">materials by BizmasterStudios</a> CC
              BY 4.0
            </li>
            <li>
              <a href="https://opengameart.org/content/gold-cointoken">coin, BizmasterStudios</a> CC BY 4.0
            </li>
            <li>
              <a href="https://opengameart.org/content/imaginary-crops">Crops by Scaydi</a>: CC BY 4.0
            </li>
            <li>
              Abstract background with a vintage paper design{' '}
              <a href="https://www.freepik.com/free-vector/abstract-background-with-vintage-paper-design_18073291.htm">
                Image by kjpargeter
              </a>
            </li>
          </ul>
          <h2 className="text-2xl" id="audio-assets-licences-and-credits-">
            Audio Assets - Licences and Credits:
          </h2>
          <h3 className="text-xl" id="sound-effects-">
            Sound Effects:
          </h3>
          <p>
            Whip Crack, used when buy a slave. Creative Commons 0, by JayRom01&nbsp;
            <a href="https://freesound.org/people/JayRom01/sounds/615761/">
              https://freesound.org/people/JayRom01/sounds/615761/
            </a>
          </p>
          <p>
            Close modal sound, Creative Commons 0, modusmogulus&nbsp;
            <a href="https://freesound.org/people/modusmogulus/sounds/735897/">
              https://freesound.org/people/modusmogulus/sounds/735897/
            </a>
          </p>
          <p>
            Really clean Clicking Sound Creative Commons 0, modusmogulus&nbsp;
            <a href="https://freesound.org/people/BiORNADE/sounds/735804/">
              https://freesound.org/people/BiORNADE/sounds/735804/
            </a>
          </p>
          <p>
            Pickaxe, for miners and quarry, pickaxe 1/4 CC Attribution 4.0, TechspiredMinds&nbsp;
            <a href="https://freesound.org/people/TechspiredMinds/sounds/728756/">
              https://freesound.org/people/TechspiredMinds/sounds/728756/
            </a>
          </p>
          <p>
            chicken sound for farmers and farm 01130 chicken hen 2.wav CC Attribution 4.0, Robinhood76&nbsp;
            <a href="https://freesound.org/people/Robinhood76/sounds/75726/">
              https://freesound.org/people/Robinhood76/sounds/75726/
            </a>
          </p>
          <p>
            fire crackling for bakers and bakery Fire_Crackle_2.wav Creative Commons 0, KieranKeegan&nbsp;
            <a href="https://freesound.org/people/KieranKeegan/sounds/422741/">
              https://freesound.org/people/KieranKeegan/sounds/422741/
            </a>
          </p>
          <p>
            coin pouch for mercator Pouch of Gold Coins, Rummaging Through.wav, Creative Commons 0, The_Frisbee_of_Peace
            &nbsp;
            {/* <a href="https://freesound.org/people/The_Frisbee_of_Peace/sounds/575576/">
              https://freesound.org/people/The_Frisbee_of_Peace/sounds/575576/
            </a> */}
          </p>
          <p>
            blacksmith hammer for smithy and blacksmith Blacksmith Hammer, Creative Commons 0, Kastenfrosch&nbsp;
            <a href="https://freesound.org/people/Kastenfrosch/sounds/521972/">
              https://freesound.org/people/Kastenfrosch/sounds/521972/
            </a>
          </p>
          <p>
            Marching, for legionary and castra Marching 3.wav CC Attribution 4.0, WebbFilmsUK&nbsp;
            <a href="https://freesound.org/people/WebbFilmsUK/sounds/200322/">
              https://freesound.org/people/WebbFilmsUK/sounds/200322/
            </a>
          </p>
          <p>
            Amen for priests and temple, amen.wav, CC Attribution 4.0, ERH&nbsp;
            <a href="https://freesound.org/people/ERH/sounds/29933/">https://freesound.org/people/ERH/sounds/29933/</a>
          </p>
          <p>
            Crowd for forum Crowd.wav CC Attribution 4.0, Haykrich&nbsp;
            <a href="https://freesound.org/people/Haykrich/sounds/401560/">
              https://freesound.org/people/Haykrich/sounds/401560/
            </a>
          </p>
          <p>
            grass for fields Rustling Grass 4.wav, Creative Commons 0, morganpurkis&nbsp;
            <a href="https://freesound.org/people/morganpurkis/sounds/396016/">
              https://freesound.org/people/morganpurkis/sounds/396016/
            </a>
          </p>
          <p>
            level up sound Medieval Fanfare.aiff, CC Attribution 3, tobyk&nbsp;
            <a href="https://freesound.org/people/tobyk/sounds/26198/">
              https://freesound.org/people/tobyk/sounds/26198/
            </a>
          </p>
          <p>
            game over sound 02362 fanfare announce a.wav CC Attribution 4.0, Robinhood76&nbsp;
            <a href="https://freesound.org/people/Robinhood76/sounds/123435/">
              https://freesound.org/people/Robinhood76/sounds/123435/
            </a>
          </p>
          <h3 className="text-xl" id="fanfares-sound-to-play-when-the-play-button-is-clicked-before-game-starts-">
            Fanfares (Sound to Play when the PLAY button is clicked, before game starts)
          </h3>
          <p>
            Fanfare, for playing when a New Game starts, CC Attribution 4.0, zagi2&nbsp;
            <a href="https://freesound.org/people/zagi2/sounds/193934/">
              https://freesound.org/people/zagi2/sounds/193934/
            </a>
          </p>
          <h3 className="text-xl" id="music-">
            MUSIC:
          </h3>
          <p>
            Background Music: "An Arcadian sound, an ancient harpist, a mythological atmosphere." Attribution
            NonCommercial 4.0&nbsp;
            <a href="https://freesound.org/people/cormi/sounds/169035/">
              https://freesound.org/people/cormi/sounds/169035/
            </a>
          </p>
          <h3 className="text-xl" id="links-to-licences-">
            LINKS TO LICENCES:
          </h3>
          <p>
            CC BY 4.0 Deed&nbsp;
            <a href="https://creativecommons.org/licenses/by/4.0/deed.en">
              https://creativecommons.org/licenses/by/4.0/deed.en
            </a>
          </p>
          <p>
            CC0 1.0 Deed&nbsp;
            <a href="https://creativecommons.org/publicdomain/zero/1.0/">
              https://creativecommons.org/publicdomain/zero/1.0/
            </a>
          </p>
        </>
      </div>
    </>
  );
}
