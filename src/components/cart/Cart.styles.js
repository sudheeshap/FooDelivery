import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';
import Button from '../shared/button/Button';

export const CartContainer = styled.section`
  width: 100%;
  display: none;

  @media screen and ${breakpoints.device.md} {
    display: flex;
    justify-content: center;
  }
`;

export const CartInfoWrapperMobile = styled.div`
  background-color: white;
  box-shadow: 1px 1px 8px #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  z-index: 100;

  @media screen and ${breakpoints.device.md} {
    display: none;
  }
`;

export const CartCountButton = styled(Button)`
  margin-top: 1px;
  margin-right: 15px;
  padding: 0;

  & .cart__icon {
    padding: 4px 10px 4px 36px;
  }

  & .cart__icon-count {
    left: 9px;
    right: auto;
    top: 5px;
  }
`;
