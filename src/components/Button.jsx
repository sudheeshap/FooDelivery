import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ children, ...props }) => (
  <button
    type="button"
    className={`form__button form__button--${props.size} form__button--${
      props.color
    } ${props.hasShadow ? 'form__button--shadow' : ''}`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  children: '',
  size: 'md',
  color: 'primary',
  disabled: false,
  hasShadow: false,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  hasShadow: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
