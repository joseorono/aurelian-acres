// From https://pixelarticons.com/
// https://github.com/halfmage/pixelarticons

const ChatPixelIcon: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
  return (
    <svg
      color={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2h-2z" fill="currentColor" />
    </svg>
  );
};

export default ChatPixelIcon;
