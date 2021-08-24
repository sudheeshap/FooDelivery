import React from 'react';
import { PropTypes } from 'prop-types';

import {
  ToggleButton,
  ToggleButtonContainer,
} from './ToggleButtonGroup.styles';

export default function ToggleButtonGroup({ options, selected, onClick }) {
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
}

ToggleButtonGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
