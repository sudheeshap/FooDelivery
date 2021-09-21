import { ChangeEventHandler } from 'react';

export interface FormInputProps {
  size?: string;
  type?: string;
  name?: string;
  value?: string;
  icon?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
