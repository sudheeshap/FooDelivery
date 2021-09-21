export interface ToggleButtonGroupProps {
  options: Array<{
    value: string;
    text: string;
  }>;
  selected: string[];
  onClick: (v: string) => void;
}
