import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  size?: string;
  color?: string;
  type?: string;
  icon?: string;
  hasShadow?: boolean;
  outline?: boolean;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
