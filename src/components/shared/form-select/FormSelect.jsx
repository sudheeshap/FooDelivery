import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledSelect } from './FormSelect.styles';

const FormSelect = ({
  options,
  selected,
  hasMultiSelect,
  onChange,
  ...props
}) => (
  <StyledSelect
    className={props.className}
    disabled={props.disabled}
    placeholder={props.placeholder}
    multiple={hasMultiSelect === true}
    onChange={onChange}
    defaultValue={selected}
  >
    {options.map((option) => (
      <option value={option.value} key={option.value}>
        {option.text}
      </option>
    ))}
  </StyledSelect>
);

FormSelect.defaultProps = {
  name: '',
  className: '',
  placeholder: '',
  disabled: false,
  required: false,
  hasMultiSelect: false,
  selected: '',
};

FormSelect.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  hasMultiSelect: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onChange: PropTypes.func.isRequired,
};

export default FormSelect;
