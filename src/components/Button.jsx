import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ children, size, type, onClick, ...props }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={`form__button form__button--${size} form__button--${
      props.color
    } ${props.hasShadow ? 'form__button--shadow' : ''}
    ${props.className}`}
    disabled={props.disabled || props.isLoading}
    onClick={onClick}
  >
    {children}
    {props.isLoading && (
      <i className="bi-arrow-repeat form__button-icon--loading" />
    )}
  </button>
);

Button.defaultProps = {
  children: '',
  size: 'md',
  type: 'button',
  color: 'primary',
  className: '',
  disabled: false,
  isLoading: false,
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
  isLoading: PropTypes.bool,
  hasShadow: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
