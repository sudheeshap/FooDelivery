import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { FormInputProps } from './FormInput.interface';

const FormInput: FC<FormInputProps> = ({
  type,
  name,
  value,
  size,
  onChange,
  ...props
}) => (
  <div className="form__input-container">
    <input
      type={type}
      autoComplete="off"
      autoCorrect="off"
      placeholder={props.placeholder}
      name={name}
      defaultValue={value}
      className={`form__input form__input--${size} ${props.className}`}
      disabled={props.disabled}
      required={props.required}
      onChange={onChange}
    />
    {props.icon && <i className={`form__input-icon bi-${props.icon}`} />}
  </div>
);

FormInput.defaultProps = {
  size: 'md',
  type: 'text',
  name: '',
  icon: '',
  value: undefined,
  className: '',
  placeholder: '',
  disabled: false,
  required: false,
  onChange: undefined,
};

FormInput.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FormInput;
