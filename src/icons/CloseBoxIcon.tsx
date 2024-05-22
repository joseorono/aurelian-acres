// From https://pixelarticons.com/
// https://github.com/halfmage/pixelarticons

import { IPixelIconProps } from '~/types/component-props';

const CloseBoxPixelIcon: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
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
        d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-8 4H9V7H7v2h2v2h2v2H9v2H7v2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2v-2h2V9h2V7h-2v2h-2v2h-2V9z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CloseBoxPixelIcon;
