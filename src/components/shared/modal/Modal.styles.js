import styled from 'styled-components';

import breakpoints from '../../../styles/breakpoints';
import Button from '../button/Button';

export const ModalOverlay = styled.div`
  background-color: rgba(100, 100, 100, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  @media screen and ${breakpoints.device.md} {
    border-radius: 8px;
    width: 600px;
    max-height: 80%;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 30px 0;
  text-align: center;
  position: relative;
  font-weight: bold;
  font-size: 17px;
`;

export const ModalButtonIconClose = styled(Button)`
  background-color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 28px;
  color: var(--color-primary);
  position: absolute;
  top: 20px;
  right: 10px;
`;

export const ModalBody = styled.div`
  padding: 20px 10px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
`;
