// From https://pixelarticons.com/
// https://github.com/halfmage/pixelarticons

import { IPixelIconProps } from '~/types/component-props';

const CheckDoublePixelIcon: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
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
        d="M15 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2v-2h2v2H9zm-2 2v-2h2v2H7zm-2 0h2v2H5v-2zm-2-2h2v2H3v-2zm0 0H1v-2h2v2zm8 2h2v2h-2v-2zm4-2v2h-2v-2h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm2-2h-2v2h2V8zm0 0h2V6h-2v2z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckDoublePixelIcon;

// Podria ser Algo asi para que sea mas performant luego
//import AlertIcon from  "/node_modules/iconspixel/sadasdas.svg";
