// From https://pixelarticons.com/
// https://github.com/halfmage/pixelarticons

import { IPixelIconProps } from '~/types/component-props';

const BookPixelIcon: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
  return (
    <svg
      color={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BookPixelIcon;

// Podria ser Algo asi para que sea mas performant luego
//import AlertIcon from  "/node_modules/iconspixel/sadasdas.svg";
