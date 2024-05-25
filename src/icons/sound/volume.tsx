import { IPixelIconProps } from '~/types/component-props';

export const VolumeMute: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      {' '}
      <path
        d="M13 2h-2v2H9v2H7v2H3v8h4v2h2v2h2v2h2V2zM9 18v-2H7v-2H5v-4h2V8h2V6h2v12H9zm10-6.777h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2z"
        fill="currentColor"
      />{' '}
    </svg>
  );
};

export const VolumeNone: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      {' '}
      <path
        d="M15 2h2v20h-2v-2h-2v-2h2V6h-2V4h2V2zm-4 6V6h2v2h-2zm-2 2h2V8H7v8h4v2h2v-2h-2v-2H9v-4z"
        fill="currentColor"
      />{' '}
    </svg>
  );
};

export const VolumeLow: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      {' '}
      <path
        d="M15 2h-2v2h-2v2H9v2H5v8h4v2h2v2h2v2h2V2zm-4 16v-2H9v-2H7v-4h2V8h2V6h2v12h-2zm6-8h2v4h-2v-4z"
        fill="currentColor"
      />{' '}
    </svg>
  );
};

export const VolumeMed: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      {' '}
      <path
        d="M11 2h2v20h-2v-2H9v-2h2V6H9V4h2V2zM7 8V6h2v2H7zm0 8H3V8h4v2H5v4h2v2zm0 0v2h2v-2H7zm10-6h-2v4h2v-4zm2-2h2v8h-2V8zm0 8v2h-4v-2h4zm0-10v2h-4V6h4z"
        fill="currentColor"
      />{' '}
    </svg>
  );
};

export const VolumeHigh: React.FC<IPixelIconProps> = ({ size = 24, className = '', fill = '#fff' }) => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      {' '}
      <path
        d="M11 2H9v2H7v2H5v2H1v8h4v2h2v2h2v2h2V2zM7 18v-2H5v-2H3v-4h2V8h2V6h2v12H7zm6-8h2v4h-2v-4zm8-6h-2V2h-6v2h6v2h2v12h-2v2h-6v2h6v-2h2v-2h2V6h-2V4zm-2 4h-2V6h-4v2h4v8h-4v2h4v-2h2V8z"
        fill="currentColor"
      />{' '}
    </svg>
  );
};
