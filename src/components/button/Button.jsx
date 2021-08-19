import React from 'react';
import { PropTypes } from 'prop-types';

import StyledButton, { ButtonIconLoading } from './Button.styles';

const Button = ({ children, size, color, type, onClick, ...props }) => (
  <StyledButton
    type={type === 'submit' ? 'submit' : 'button'}
    size={size}
    color={color}
    hasShadow={props.hasShadow}
    outline={props.outline}
    className={props.className}
    disabled={props.disabled || props.isLoading}
    onClick={onClick}
  >
    {children}
    {props.isLoading && <ButtonIconLoading className="bi-arrow-repeat" />}
  </StyledButton>
);

Button.defaultProps = {
  children: '',
  size: 'md',
  type: 'button',
  color: 'primary',
  className: '',
  outline: false,
  hasShadow: false,
  disabled: false,
  isLoading: false,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  outline: PropTypes.bool,
  hasShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
