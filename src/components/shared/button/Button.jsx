import React from 'react';
import { PropTypes } from 'prop-types';

import StyledButton, { ButtonIcon, ButtonIconLoading } from './Button.styles';

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
    {props.icon && <ButtonIcon className={`bi-${props.icon}`} />}
    {props.isLoading && <ButtonIconLoading className="bi-arrow-repeat" />}
  </StyledButton>
);

Button.defaultProps = {
  size: 'md',
  type: 'button',
  color: 'primary',
  icon: '',
  className: '',
  outline: false,
  hasShadow: false,
  disabled: false,
  isLoading: false,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  outline: PropTypes.bool,
  hasShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
