export interface IPixelIconProps {
  className?: string;
  size?: number;
  fill?: string;
}

export type TextSequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>);
export type TextSequence = Array<TextSequenceElement>;
