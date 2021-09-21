import { ChangeEventHandler } from 'react';

export interface FormSelectProps {
  name?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  hasMultiSelect?: boolean;
  selected?: string | string[];
  options: Array<{
    value: string;
    text: string;
  }>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}
