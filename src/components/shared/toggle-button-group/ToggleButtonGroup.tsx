import React, { FC } from 'react';

import { ToggleButtonGroupProps } from './ToggleButtonGroup.interface';
import {
  ToggleButton,
  ToggleButtonContainer,
} from './ToggleButtonGroup.styles';

const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({
  options,
  selected,
  onClick,
}) => {
  return (
    <ToggleButtonContainer>
      {options.map((option) => (
        <ToggleButton
          type="button"
          size="sm"
          color={selected.includes(option.value) ? 'primary' : 'default'}
          onClick={() => onClick(option.value)}
          key={option.value}
        >
          {option.text}
        </ToggleButton>
      ))}
    </ToggleButtonContainer>
  );
};

export default ToggleButtonGroup;

// ToggleButtonGroup.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.string,
//       text: PropTypes.string,
//     }),
//   ).isRequired,
//   selected: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onClick: PropTypes.func.isRequired,
// };
