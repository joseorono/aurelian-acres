// From https://pixelarticons.com/
// https://github.com/halfmage/pixelarticons

import { IPixelIconProps } from '~/types/component-props';

const WarningPixelIcon: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
  return (
    <svg
      color={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path d="M3 3h16v2H5v14h14v2H3V3zm18 0h-2v18h2V3zM11 15h2v2h-2v-2zm2-8h-2v6h2V7z" fill="currentColor" />
    </svg>
  );
};

export default WarningPixelIcon;
