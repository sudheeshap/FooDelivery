import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ children, onClick, ...props }) => (
  <button
    type="button"
    className={`form__button form__button--${props.size} form__button--${
      props.color
    } ${props.hasShadow ? 'form__button--shadow' : ''} ${props.className}`}
    disabled={props.disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  children: '',
  size: 'md',
  type: 'button',
  color: 'primary',
  className: '',
  disabled: false,
  hasShadow: false,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasShadow: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
