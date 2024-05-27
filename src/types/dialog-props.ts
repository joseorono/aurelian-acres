import { ReactNode } from 'react';

export interface IModal {
  title?: string;
  subtitle?: string;
  content: ReactNode;
  backgroundDismiss?: boolean;
  disableButtons?: boolean;
  containerClasses?: string;
  onClose?: (value: any | null) => void;
  buttons?: modalButtons[];
}

export interface modalButtons {
  label: string;
  value: any | null;
  classes?: string;
}
