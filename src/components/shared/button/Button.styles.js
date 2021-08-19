import styled, { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background-color: #6366f1;
    color: white;
  `,
  success: css`
    background-color: #07bf69;
    color: #fff;
  `,
};

const variantStylesOutline = {
  primary: css`
    border: 1px solid #6366f1;
    background-color: #ffffff;
    color: #6366f1;

    &:hover {
      background-color: #e1e2ff;
    }
  `,
  success: css`
    border: 1px solid #07bf69;
    background-color: #ffffff;
    color: #07bf69;

    &:hover {
      background-color: #defff0;
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: 8px 13px;
    font-size: 11px;
  `,
  md: css`
    padding: 10px 16px;
  `,
  lg: css`
    padding: 15px 30px;
  `,
};

const shadowStyle = (props) =>
  props.hasShadow &&
  css`
    box-shadow: rgb(200 200 200 / 15%) 0px 10px 20px 0px;
  `;

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  line-height: 1;
  white-space: nowrap;
  appearance: none;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 200ms ease-out, box-shadow 200ms ease-out;

  ${shadowStyle};

  ${(props) => sizeStyles[props.size]}

  ${(props) =>
    props.outline
      ? variantStylesOutline[props.color]
      : variantStyles[props.color]}

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgb(200 200 200 / 15%) 0px 10px 20px 0px;
  }
`;

export const ButtonIconLoading = styled.i`
  animation: loading 1s infinite linear;
  font-size: 16px;
  padding: 2px;
`;

export default StyledButton;
